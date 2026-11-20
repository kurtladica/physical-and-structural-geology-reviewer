import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getTopic, chapters } from '../content'
import type { Block, Topic } from '../types'

type Message = { role: 'user' | 'assistant'; content: string }
type Status = 'checking' | 'ready' | 'unconfigured' | 'offline'

/** Honours the deploy path, so the endpoint resolves under `/repository/` too. */
const TUTOR_ENDPOINT = `${import.meta.env.BASE_URL}api/tutor`

const modes = [
  { id: 'simpler', label: 'Explain it more simply', prompt: 'Explain this topic again in simpler language, with a new analogy.' },
  { id: 'example', label: 'Give another example', prompt: 'Give me another worked example that uses the same ideas.' },
  { id: 'formula', label: 'Walk through the maths', prompt: 'Walk me through the formula or calculation step by step.' },
  { id: 'misconception', label: 'What do students get wrong?', prompt: 'What misconceptions do students usually have about this topic, and how can I avoid them?' },
  { id: 'practice', label: 'Give me a practice question', prompt: 'Give me one practice question on this topic, then wait for my answer before explaining.' },
]

function blocksToText(blocks: Block[]): string {
  return blocks
    .map((block) => {
      switch (block.t) {
        case 'p':
          return block.text
        case 'ul':
        case 'ol':
          return block.items.map((item) => `- ${item}`).join('\n')
        case 'deflist':
          return block.items.map((item) => `${item.term}: ${item.def}`).join('\n')
        case 'table':
          return [block.head.join(' | '), ...block.rows.map((row) => row.join(' | '))].join('\n')
        case 'formula':
          return `Formula: ${block.tex}${block.note ? ` — ${block.note}` : ''}`
        case 'callout':
          return `Note (${block.kind}): ${block.title ?? ''} ${block.text}`
        case 'steps':
          return block.items.map((item) => `${item.label}: ${item.text}`).join('\n')
        default:
          return ''
      }
    })
    .join('\n\n')
}

function topicContext(topic: Topic) {
  const example = topic.example
    ? [
        `Worked example: ${topic.example.problem}`,
        `Given: ${topic.example.given.join('; ')}`,
        `Required: ${topic.example.required}`,
        ...topic.example.steps.map((step, index) => `${index + 1}. ${step.label}: ${step.text}`),
        `Answer: ${topic.example.answer}`,
      ].join('\n')
    : ''

  return [
    `TOPIC: ${topic.title}`,
    `SOURCE: ${topic.source.file}, ${topic.source.pages}`,
    `WHAT IT IS: ${topic.intro.what}`,
    `WHY IT MATTERS: ${topic.intro.why}`,
    `SIMPLE EXPLANATION:\n${blocksToText(topic.simple)}`,
    `FULL DISCUSSION:\n${blocksToText(topic.full)}`,
    example,
    `KEY TERMS:\n${topic.cards.map((card) => `${card.front}: ${card.back}`).join('\n')}`,
    `SELF-CHECK QUESTIONS:\n${topic.selfCheck.map((item) => `Q: ${item.q}\nA: ${item.a}`).join('\n')}`,
  ]
    .filter(Boolean)
    .join('\n\n')
}

export default function Tutor() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialTopic = `${searchParams.get('chapter') ?? 'ch1'}/${searchParams.get('topic') ?? chapters[0].topics[0].id}`
  const [topicId, setTopicId] = useState(initialTopic)
  const [status, setStatus] = useState<Status>('checking')
  const [statusMessage, setStatusMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [mode, setMode] = useState('simpler')
  const [loading, setLoading] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  const entry = useMemo(() => {
    const [chapterId, topic] = topicId.split('/')
    return getTopic(chapterId, topic)
  }, [topicId])

  async function checkStatus() {
    setStatus('checking')
    try {
      const response = await fetch(TUTOR_ENDPOINT)
      if (!response.ok) throw new Error(String(response.status))
      const data = (await response.json()) as { configured: boolean }
      setStatus(data.configured ? 'ready' : 'unconfigured')
      setStatusMessage('')
    } catch {
      setStatus('offline')
      setStatusMessage(
        'The tutor endpoint is not reachable. It needs a running server: use `npm run dev` locally, or host the /api/tutor route separately. Static hosting such as GitHub Pages serves the site without it.',
      )
    }
  }

  useEffect(() => {
    void checkStatus()
  }, [])

  useEffect(() => {
    if (!entry) return
    setSearchParams({ chapter: entry.chapter.id, topic: entry.topic.id }, { replace: true })
    setMessages([])
  }, [entry, setSearchParams])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [messages, loading])

  async function send(text: string) {
    if (!entry || !text.trim() || loading) return
    if (status !== 'ready') return
    const nextMessages: Message[] = [...messages, { role: 'user', content: text.trim() }]
    setMessages(nextMessages)
    setInput('')
    setLoading(true)

    try {
      const response = await fetch(TUTOR_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages,
          lessonContext: topicContext(entry.topic),
          mode,
        }),
      })
      const data = (await response.json()) as { reply?: string; message?: string }
      if (!response.ok) {
        throw new Error(data.message ?? `Tutor request failed (${response.status}).`)
      }
      setMessages([...nextMessages, { role: 'assistant', content: data.reply ?? '' }])
    } catch (error) {
      setMessages([
        ...nextMessages,
        {
          role: 'assistant',
          content:
            (error instanceof Error ? error.message : 'The tutor request failed.') +
            '\n\nYou can keep studying the lesson; nothing here affects your progress.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">AI tutor</p>
        <h1>Explain it again, another way</h1>
        <p className="lede">
          The tutor is constrained to the selected lesson: it is told to use the source material as its only
          authority, to show calculation steps, and to say when a question is outside the lesson. It is a study aid,
          not a replacement for the PDFs.
        </p>
      </header>

      {status === 'unconfigured' ? (
        <section className="card tutor-setup">
          <h2>AI tutor integration point</h2>
          <p>
            The interface is built and ready, but no AI key is configured in this environment. The endpoint{' '}
            <code>/api/tutor</code> is implemented in <code>server/tutor.ts</code>; it reads{' '}
            <code>OPENAI_API_KEY</code> from the <em>server</em> environment only, so the key is never exposed to the
            browser.
          </p>
          <ol className="content-list ordered">
            <li>
              Copy <code>.env.example</code> to <code>.env</code> and set <code>OPENAI_API_KEY</code>. Optionally set{' '}
              <code>OPENAI_BASE_URL</code> and <code>TUTOR_MODEL</code>.
            </li>
            <li>Restart the dev server so the middleware reads the new environment.</li>
            <li>Press “Check connection” below. Until then, every other feature of the site works normally.</li>
          </ol>
          <p className="small muted">
            To deploy, expose the same POST <code>/api/tutor</code> contract from a serverless function or Worker and
            keep the key in that host’s secret store. Never put a key in client code or commit it.
          </p>
          <button className="btn" onClick={() => void checkStatus()}>
            Check connection
          </button>
        </section>
      ) : null}

      {status === 'offline' ? (
        <section className="card tutor-setup">
          <h2>Tutor endpoint unavailable</h2>
          <p>{statusMessage}</p>
          <p className="small muted">
            The rest of the study site is fully functional. The tutor requires the local server middleware or a
            deployed API route.
          </p>
          <button className="btn" onClick={() => void checkStatus()}>
            Retry
          </button>
        </section>
      ) : null}

      <div className="tutor-layout">
        <aside className="card tutor-side">
          <label className="filter-label">
            Lesson context
            <select value={topicId} onChange={(event) => setTopicId(event.target.value)}>
              {chapters.map((chapter) => (
                <optgroup key={chapter.id} label={`${chapter.number}. ${chapter.title}`}>
                  {chapter.topics.map((topic) => (
                    <option key={topic.id} value={`${chapter.id}/${topic.id}`}>
                      {topic.title}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </label>
          {entry ? (
            <div className="context-card">
              <p className="eyebrow">Loaded source</p>
              <strong>{entry.topic.title}</strong>
              <p className="tiny muted">
                {entry.topic.source.file} · {entry.topic.source.pages}
              </p>
              <p className="small muted">{entry.topic.tagline}</p>
            </div>
          ) : null}
          <p className="eyebrow">Ask about</p>
          <div className="mode-list">
            {modes.map((item) => (
              <button
                key={item.id}
                className={`mode-btn ${mode === item.id ? 'active' : ''}`}
                onClick={() => {
                  setMode(item.id)
                  setInput(item.prompt)
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="status-line">
            <span className={`status-dot ${status}`} aria-hidden="true" />
            {status === 'ready'
              ? 'Tutor connected'
              : status === 'checking'
                ? 'Checking connection…'
                : status === 'unconfigured'
                  ? 'Not configured'
                  : 'Endpoint unreachable'}
          </div>
        </aside>

        <section className="card tutor-chat">
          <div className="chat-head">
            <div>
              <p className="eyebrow">Conversation</p>
              <h2>{entry ? entry.topic.title : 'Choose a topic'}</h2>
            </div>
            {messages.length > 0 ? (
              <button className="btn ghost" onClick={() => setMessages([])}>
                Clear chat
              </button>
            ) : null}
          </div>

          <div className="chat-body">
            {messages.length === 0 ? (
              <div className="empty-state">
                <h3>Start with a question</h3>
                <p>
                  Ask for a simpler explanation, another example, a step-by-step calculation, common misconceptions or
                  a practice question. The tutor can only see the selected lesson.
                </p>
                <div className="suggestions">
                  {['Explain the main idea as if I am completely new to geology.', 'Why does this process happen?', 'What is the most common mistake with this topic?'].map(
                    (suggestion) => (
                      <button
                        key={suggestion}
                        className="chip-btn"
                        disabled={status !== 'ready'}
                        onClick={() => void send(suggestion)}
                      >
                        {suggestion}
                      </button>
                    ),
                  )}
                </div>
              </div>
            ) : (
              messages.map((message, index) => (
                <div key={index} className={`chat-message ${message.role}`}>
                  <span className="chat-role">{message.role === 'user' ? 'You' : 'Tutor'}</span>
                  <p>{message.content}</p>
                </div>
              ))
            )}
            {loading ? (
              <div className="chat-message assistant">
                <span className="chat-role">Tutor</span>
                <p className="typing">Thinking through the lesson…</p>
              </div>
            ) : null}
            <div ref={endRef} />
          </div>

          <form
            className="chat-input"
            onSubmit={(event) => {
              event.preventDefault()
              void send(input)
            }}
          >
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={
                status === 'ready'
                  ? 'Ask about this lesson…'
                  : 'Connect the tutor to start asking questions'
              }
              rows={2}
              disabled={status !== 'ready' || loading}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  event.preventDefault()
                  void send(input)
                }
              }}
            />
            <button className="btn primary" type="submit" disabled={status !== 'ready' || loading || !input.trim()}>
              {loading ? 'Working…' : 'Send'}
            </button>
          </form>
          <p className="tiny muted chat-disclaimer">
            AI answers can be wrong. The lesson PDF is the primary source; check any answer against it. Your
            conversations are sent to the configured AI provider only when you press Send, and are not stored by this
            app.
          </p>
        </section>
      </div>
    </div>
  )
}
