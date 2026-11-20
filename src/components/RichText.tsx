import katex from 'katex'
import { useMemo, type ReactNode } from 'react'

export function InlineMath({ tex }: { tex: string }) {
  const html = useMemo(
    () => katex.renderToString(tex, { throwOnError: false, displayMode: false, output: 'html' }),
    [tex],
  )
  return <span className="math-inline" dangerouslySetInnerHTML={{ __html: html }} />
}

export function MathBlock({ tex, note }: { tex: string; note?: string }) {
  const html = useMemo(
    () => katex.renderToString(tex, { throwOnError: false, displayMode: true, output: 'html' }),
    [tex],
  )
  return (
    <div className="math-block">
      <div className="math-display" dangerouslySetInnerHTML={{ __html: html }} />
      {note ? <p className="math-note">{note}</p> : null}
    </div>
  )
}

/**
 * Minimal rich text: **bold**, *italic* and $inline math$.
 * Anything not matched is rendered as plain text, so source wording is preserved.
 */
export function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = []
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|\$[^$]+\$)/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let index = 0
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index))
    const token = match[0]
    if (token.startsWith('**')) {
      nodes.push(<strong key={`b${index++}`}>{token.slice(2, -2)}</strong>)
    } else if (token.startsWith('$')) {
      nodes.push(<InlineMath key={`m${index++}`} tex={token.slice(1, -1)} />)
    } else {
      nodes.push(<em key={`i${index++}`}>{token.slice(1, -1)}</em>)
    }
    lastIndex = match.index + token.length
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex))
  return <>{nodes}</>
}
