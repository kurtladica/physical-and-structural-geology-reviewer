import type { Block } from '../types'
import { MathBlock, RichText } from './RichText'

export function ContentBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.t) {
          case 'p':
            return (
              <p key={index}>
                <RichText text={block.text} />
              </p>
            )
          case 'ul':
            return (
              <ul key={index} className="content-list">
                {block.items.map((item, i) => (
                  <li key={i}>
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={index} className="content-list ordered">
                {block.items.map((item, i) => (
                  <li key={i}>
                    <RichText text={item} />
                  </li>
                ))}
              </ol>
            )
          case 'deflist':
            return (
              <dl key={index} className="deflist">
                {block.items.map((item, i) => (
                  <div className="deflist-row" key={i}>
                    <dt>{item.term}</dt>
                    <dd>
                      <RichText text={item.def} />
                    </dd>
                  </div>
                ))}
              </dl>
            )
          case 'table':
            return (
              <figure key={index} className="table-figure">
                <div className="table-scroll">
                  <table>
                    <thead>
                      <tr>
                        {block.head.map((h, i) => (
                          <th key={i}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, r) => (
                        <tr key={r}>
                          {row.map((cell, c) => (
                            <td key={c}>
                              <RichText text={cell} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {block.caption ? <figcaption>{block.caption}</figcaption> : null}
              </figure>
            )
          case 'formula':
            return <MathBlock key={index} tex={block.tex} note={block.note} />
          case 'callout':
            return (
              <aside key={index} className={`callout callout-${block.kind}`}>
                {block.title ? <strong>{block.title}</strong> : null}
                <p>
                  <RichText text={block.text} />
                </p>
              </aside>
            )
          case 'steps':
            return (
              <ol key={index} className="step-list">
                {block.items.map((item, i) => (
                  <li key={i}>
                    <span className="step-index">{i + 1}</span>
                    <div>
                      <strong>{item.label}</strong>
                      <p>
                        <RichText text={item.text} />
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            )
          default:
            return null
        }
      })}
    </>
  )
}
