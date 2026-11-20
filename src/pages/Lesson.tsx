import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { chapters, getTopic, materializeQuestions, neighbours } from '../content'
import { Diagram } from '../components/Diagram'
import { ContentBlocks } from '../components/ContentBlocks'
import { QuizFlow } from '../components/QuizFlow'
import { MathBlock } from '../components/RichText'
import { InteractiveExample } from '../components/Labs'
import { useProgress } from '../state/ProgressContext'

export default function Lesson() {
  const { chapterId, topicId } = useParams()
  // getTopic returns a fresh object; memoise it so the reset effect below only
  // runs when the topic actually changes (otherwise it loops on every render).
  const entry = useMemo(() => getTopic(chapterId, topicId), [chapterId, topicId])
  const { state, markVisited, setComplete, recordQuiz } = useProgress()
  const [showNav, setShowNav] = useState(false)
  const [revealed, setRevealed] = useState<number[]>([])

  useEffect(() => {
    setRevealed([])
    if (entry) markVisited(entry.chapter.id, entry.topic.id)
  }, [entry, markVisited])

  if (!entry) {
    return (
      <div className="page narrow">
        <h1>Lesson not found</h1>
        <p className="muted">The topic may have been renamed or the link is incomplete.</p>
        <Link className="btn primary" to="/">
          Back to the dashboard
        </Link>
      </div>
    )
  }

  const { chapter, topic } = entry
  const complete = Boolean(state.completed[`${chapter.id}/${topic.id}`])
  const questions = materializeQuestions(chapter, topic)
  const { previous, next } = neighbours(chapter.id, topic.id)
  const quizRecord = state.quiz[`${chapter.id}/${topic.id}`]

  return (
    <div className="lesson-layout">
      <aside className={`lesson-nav ${showNav ? 'open' : ''}`}>
        <button className="btn ghost nav-toggle" onClick={() => setShowNav((open) => !open)} aria-expanded={showNav}>
          {showNav ? 'Hide chapter contents' : 'Show chapter contents'}
        </button>
        <div className="lesson-nav-inner">
          <p className="eyebrow">Course contents</p>
          {chapters.map((item) => (
            <div key={item.id} className={`nav-chapter ${item.id === chapter.id ? 'current' : ''}`}>
              <p className="nav-chapter-title">
                <span>{String(item.number).padStart(2, '0')}</span> {item.title}
              </p>
              <ul>
                {item.topics.map((lessonTopic) => {
                  const isCurrent = item.id === chapter.id && lessonTopic.id === topic.id
                  const done = Boolean(state.completed[`${item.id}/${lessonTopic.id}`])
                  return (
                    <li key={lessonTopic.id}>
                      <Link
                        to={`/learn/${item.id}/${lessonTopic.id}`}
                        className={`${isCurrent ? 'active' : ''} ${done ? 'done' : ''}`}
                      >
                        <span className="nav-dot" aria-hidden="true" />
                        {lessonTopic.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      <article className="lesson">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Dashboard</Link>
          <span>/</span>
          <span>
            Chapter {chapter.number}: {chapter.title}
          </span>
        </nav>

        <header className="lesson-header">
          <p className="eyebrow">Topic {chapter.topics.indexOf(topic) + 1} of {chapter.topics.length}</p>
          <h1>{topic.title}</h1>
          <p className="lede">{topic.tagline}</p>
          <div className="source-chips">
            <span className="chip">Source: {topic.source.file}</span>
            <span className="chip">{topic.source.pages}</span>
          </div>
          <div className="lesson-actions">
            <button
              className={`btn ${complete ? 'primary' : ''}`}
              onClick={() => setComplete(chapter.id, topic.id, !complete)}
            >
              {complete ? '✓ Marked complete' : 'Mark lesson complete'}
            </button>
            <Link className="btn ghost" to={`/tutor?chapter=${chapter.id}&topic=${topic.id}`}>
              Ask the AI tutor
            </Link>
          </div>
        </header>

        <section className="lesson-section">
          <div className="section-marker">A</div>
          <div className="section-body">
            <h2>Introduction</h2>
            <h3>What this topic is</h3>
            <p>{topic.intro.what}</p>
            <h3>Why it matters</h3>
            <p>{topic.intro.why}</p>
            <h3>Before you start</h3>
            <ul className="content-list">
              {topic.intro.before.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="objectives">
              <p className="eyebrow">By the end you should be able to</p>
              <ul>
                {topic.objectives.map((objective) => (
                  <li key={objective}>{objective}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="lesson-section">
          <div className="section-marker">B</div>
          <div className="section-body">
            <h2>Simple explanation</h2>
            <ContentBlocks blocks={topic.simple} />
          </div>
        </section>

        <section className="lesson-section">
          <div className="section-marker">C</div>
          <div className="section-body">
            <h2>Complete discussion</h2>
            <ContentBlocks blocks={topic.full} />
            <p className="source-note">
              Adapted from <em>{topic.source.file}</em>, {topic.source.pages}. See{' '}
              <Link to="/references">References &amp; Credits</Link>.
            </p>
          </div>
        </section>

        {topic.diagram ? (
          <section className="lesson-section">
            <div className="section-marker">D</div>
            <div className="section-body">
              <h2>{topic.diagram.title}</h2>
              <figure className="diagram-figure">
                <Diagram diagramKey={topic.diagram.key} />
                <figcaption>{topic.diagram.caption}</figcaption>
              </figure>
              <InteractiveExample topicKey={`${chapter.id}/${topic.id}`} />
            </div>
          </section>
        ) : null}

        {topic.example ? (
          <section className="lesson-section">
            <div className="section-marker">E</div>
            <div className="section-body">
              <h2>Follow-up worked example</h2>
              <div className="example">
                <p className="example-problem">{topic.example.problem}</p>
                <div className="example-grid">
                  <div>
                    <h3>Given</h3>
                    <ul>
                      {topic.example.given.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Required</h3>
                    <p>{topic.example.required}</p>
                  </div>
                </div>
                <h3>Step by step</h3>
                <ol className="worked-steps">
                  {topic.example.steps.map((step, index) => (
                    <li key={itemKey(step.label, index)}>
                      <span className="step-index">{index + 1}</span>
                      <div>
                        <strong>{step.label}</strong>
                        <p>{step.text}</p>
                        {step.tex ? <MathBlock tex={step.tex} /> : null}
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="answer">
                  <span className="eyebrow">Answer</span>
                  <p>{topic.example.answer}</p>
                  {topic.example.check ? <p className="small muted">Check: {topic.example.check}</p> : null}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="lesson-section">
          <div className="section-marker">F</div>
          <div className="section-body">
            <h2>Check your understanding</h2>
            <p className="muted">
              Answer in your head or on paper first, then reveal the explanation. These are not graded; they are
              here to expose gaps before the quiz.
            </p>
            <ol className="self-check">
              {topic.selfCheck.map((item, index) => {
                const isOpen = revealed.includes(index)
                return (
                  <li key={item.q}>
                    <p>{item.q}</p>
                    {isOpen ? (
                      <div className="self-answer">
                        <p>{item.a}</p>
                        <button className="text-btn" onClick={() => setRevealed((list) => list.filter((i) => i !== index))}>
                          Hide answer
                        </button>
                      </div>
                    ) : (
                      <button className="text-btn" onClick={() => setRevealed((list) => [...list, index])}>
                        Reveal answer
                      </button>
                    )}
                  </li>
                )
              })}
            </ol>

            <div className="topic-quiz">
              <div className="quiz-intro">
                <div>
                  <p className="eyebrow">Topic quiz</p>
                  <h3>{topic.title}</h3>
                </div>
                {quizRecord ? (
                  <span className="score-pill">
                    Best {quizRecord.score}/{quizRecord.total}
                  </span>
                ) : null}
              </div>
              <QuizFlow
                id={`${chapter.id}/${topic.id}`}
                title="Topic quiz"
                questions={questions}
                onFinish={(record) => recordQuiz(`${chapter.id}/${topic.id}`, record)}
                compact
              />
            </div>
          </div>
        </section>

        <footer className="lesson-footer">
          <div className="lesson-complete-row">
            <div>
              <p className="eyebrow">Finished this topic?</p>
              <p className="muted small">
                Marking it complete updates your dashboard and chapter progress. You can always revisit it.
              </p>
            </div>
            <button
              className={`btn ${complete ? 'primary' : ''}`}
              onClick={() => setComplete(chapter.id, topic.id, !complete)}
            >
              {complete ? '✓ Complete' : 'Mark complete'}
            </button>
          </div>

          <div className="lesson-pager">
            {previous ? (
              <Link className="pager-link prev" to={`/learn/${previous.chapter.id}/${previous.topic.id}`}>
                <span className="tiny muted">Previous</span>
                <strong>{previous.topic.title}</strong>
                <span className="tiny muted">
                  Ch {previous.chapter.number} · {previous.chapter.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link className="pager-link next" to={`/learn/${next.chapter.id}/${next.topic.id}`}>
                <span className="tiny muted">Next</span>
                <strong>{next.topic.title}</strong>
                <span className="tiny muted">
                  Ch {next.chapter.number} · {next.chapter.title}
                </span>
              </Link>
            ) : (
              <Link className="pager-link next" to="/practice/quizzes">
                <span className="tiny muted">Course complete</span>
                <strong>Take the whole-course quiz</strong>
              </Link>
            )}
          </div>
        </footer>
      </article>
    </div>
  )
}

function itemKey(label: string, index: number) {
  return `${label}-${index}`
}
