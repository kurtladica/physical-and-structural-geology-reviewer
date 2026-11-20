import { loadEnv, type Plugin } from 'vite'

/**
 * Local tutor endpoint.
 *
 * The browser never sees an API key. This Vite middleware reads configuration
 * from the server environment (`.env`) and forwards a constrained chat request
 * to an OpenAI-compatible endpoint. If no key is configured the endpoint says so
 * with an explicit 503, and the UI shows integration instructions.
 *
 * To deploy this feature, expose the same POST /api/tutor contract from a
 * serverless function or Worker and keep the key in that host's secret store.
 */

type ChatMessage = { role: 'user' | 'assistant'; content: string }

const SYSTEM_PROMPT = `You are a patient geology tutor for an introductory physical and structural geology course (GS 21/L).
The lesson text supplied in the user message is the ONLY authoritative source. Rules:
1. Explain using the lesson material. Do not add facts that contradict or go beyond it without clearly saying "this goes beyond your lesson notes".
2. If the learner asks something the supplied lesson does not cover, say so plainly and point to the closest concept that is covered.
3. Prefer short paragraphs, concrete analogies and numbered steps. Define every technical term the first time you use it.
4. For calculations, show given values, the formula, substitution and the final answer with units. Never skip steps.
5. When the learner is confused, offer a different analogy instead of repeating the same wording.
6. Never invent page numbers, authors, or citations.
Keep answers under roughly 350 words unless the learner asks for a full worked solution.`

function readBody(req: import('node:http').IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
      if (data.length > 200_000) {
        reject(new Error('Request body too large'))
        req.destroy()
      }
    })
    req.on('end', () => resolve(data))
    req.on('error', reject)
  })
}

function send(res: import('node:http').ServerResponse, status: number, body: unknown) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.end(JSON.stringify(body))
}

export function tutorPlugin(): Plugin {
  let apiKey = ''
  let baseUrl = 'https://freebuff.com/api/v1/paid'
  let model = 'gpt-4o-mini'

  return {
    name: 'geosphere-tutor',
    config(_config, env) {
      const loaded = loadEnv(env.mode, process.cwd(), '')
      apiKey = loaded.OPENAI_API_KEY ?? ''
      baseUrl = (loaded.OPENAI_BASE_URL || baseUrl).replace(/\/$/, '')
      model = loaded.TUTOR_MODEL || model
    },
    configureServer(server) {
      server.middlewares.use('/api/tutor', async (req, res) => {
        if (!req.url || req.url === '/' || req.url.startsWith('/?')) {
          if (req.method === 'GET') {
            send(res, 200, { configured: Boolean(apiKey), model: apiKey ? model : null })
            return
          }
        }

        if (req.method !== 'POST') {
          send(res, 405, { error: 'method-not-allowed' })
          return
        }

        if (!apiKey) {
          send(res, 503, {
            error: 'not-configured',
            message:
              'The AI tutor is not connected yet. Add OPENAI_API_KEY to a local .env file and restart the dev server. The key stays on the server and is never sent to the browser.',
          })
          return
        }

        try {
          const raw = await readBody(req)
          const parsed = JSON.parse(raw) as {
            messages?: ChatMessage[]
            lessonContext?: string
            mode?: string
          }
          const history = (parsed.messages ?? []).filter(
            (m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string',
          )
          if (!history.length) {
            send(res, 400, { error: 'empty-conversation' })
            return
          }

          const context = (parsed.lessonContext ?? '').slice(0, 12_000)
          const modeHint = parsed.mode ? `\nLearner request focus: ${parsed.mode}.` : ''
          const messages = [
            { role: 'system', content: SYSTEM_PROMPT },
            {
              role: 'system',
              content: `COURSE LESSON MATERIAL (authoritative):\n${context || 'No lesson context supplied.'}${modeHint}`,
            },
            ...history.slice(-12),
          ]

          const controller = new AbortController()
          const timeout = setTimeout(() => controller.abort(), 60_000)
          let upstream: Response
          try {
            upstream = await fetch(`${baseUrl}/chat/completions`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
              },
              body: JSON.stringify({ model, messages, temperature: 0.4, max_tokens: 900 }),
              signal: controller.signal,
            })
          } finally {
            clearTimeout(timeout)
          }

          if (!upstream.ok) {
            const detail = await upstream.text()
            console.error('[tutor] upstream error', upstream.status, detail.slice(0, 500))
            send(res, 502, {
              error: 'upstream-error',
              message: `The AI provider returned status ${upstream.status}. Check the API key, model name and account credit, then try again.`,
            })
            return
          }

          const data = (await upstream.json()) as {
            choices?: { message?: { content?: string } }[]
          }
          const reply = data.choices?.[0]?.message?.content?.trim()
          if (!reply) {
            send(res, 502, { error: 'empty-reply', message: 'The tutor returned an empty answer. Try rewording the question.' })
            return
          }
          send(res, 200, { reply })
        } catch (error) {
          console.error('[tutor] request failed', error)
          send(res, 500, {
            error: 'request-failed',
            message: 'The tutor request could not be completed. Check the dev-server log, then try again.',
          })
        }
      })
    },
  }
}
