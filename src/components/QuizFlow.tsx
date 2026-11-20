import { useEffect, useMemo, useState } from 'react'
import type { MaterializedQuestion, QuizRecord } from '../types'
import { RichText } from './RichText'

type Props = {
  id: string
  title?: string
  questions: MaterializedQuestion[]
  onFinish: (record: QuizRecord) => void
  compact?: boolean
  /** How many questions to draw at random from the supplied pool. */
  limit?: number
}

const FILLER = /\b(?:the|a|an|is|are|it|its)\b/g

/**
 * Case-insensitive, punctuation-insensitive form of a typed answer:
 * "  GEOLOGY. " and "geology" normalise to the same string.
 */
export function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(FILLER, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function singular(value: string) {
  return value.replace(/\b([a-z]{4,})s\b/g, '$1')
}

/** Compare two already-normalised answers, tolerating case, articles and simple plurals. */
export function sameAnswer(typed: string, accepted: string) {
  if (!typed || !accepted) return false
  if (typed === accepted) return true
  if (singular(typed) === singular(accepted)) return true
  // "it is physical geology" should still match "physical geology"
  return accepted.includes(' ') && ` ${typed} `.includes(` ${accepted} `)
}

function shuffle<T>(items: T[]) {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function isCorrect(question: MaterializedQuestion, answer: string | number | boolean | null) {
  if (answer === null) return false
  if (question.type === 'mcq') return answer === question.answer
  if (question.type === 'tf') return answer === question.answer
  const text = normalize(String(answer))
  return question.accept.some((accepted) => sameAnswer(text, normalize(accepted)))
}

export function QuizFlow({ id, title, questions, onFinish, compact, limit = 10 }: Props) {
  const [round, setRound] = useState(0)
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState<string | number | boolean | null>(null)
  const [checked, setChecked] = useState(false)
  const [score, setScore] = useState(0)
  const [wrong, setWrong] = useState<string[]>([])
  const [finished, setFinished] = useState(false)

  // Draw a fresh random set of up to `limit` questions for each attempt.
  const pool = useMemo(
    () => shuffle(questions).slice(0, Math.min(limit, questions.length)),
    // The question objects are rebuilt on every lesson render, so key the draw on
    // the attempt and the pool size rather than the array identity.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id, round, questions.length, limit],
  )

  useEffect(() => {
    setIndex(0)
    setAnswer(null)
    setChecked(false)
    setScore(0)
    setWrong([])
    setFinished(false)
  }, [id])

  const question = pool[index]
  if (!question) {
    return <p className="muted">No questions are available for this quiz yet.</p>
  }

  const correct = isCorrect(question, answer)

  function check() {
    if (answer === null) return
    setChecked(true)
    if (isCorrect(question, answer)) {
      setScore((s) => s + 1)
    } else {
      setWrong((w) => [...w, question.key])
    }
  }

  function next() {
    if (index + 1 >= pool.length) {
      const finalScore = score
      setFinished(true)
      onFinish({
        score: finalScore,
        total: pool.length,
        at: Date.now(),
        wrong,
      })
      return
    }
    setIndex(index + 1)
    setAnswer(null)
    setChecked(false)
  }

  function restart() {
    setRound((value) => value + 1)
    setIndex(0)
    setAnswer(null)
    setChecked(false)
    setScore(0)
    setWrong([])
    setFinished(false)
  }

  if (finished) {
    const percent = Math.round((score / pool.length) * 100)
    return (
      <div className="quiz-result">
        <p className="eyebrow">Quiz complete</p>
        <h3>
          {score} / {pool.length} correct · {percent}%
        </h3>
        <p>
          {percent >= 80
            ? 'Strong work. Move on when you feel ready, and revisit the cards later to keep it fresh.'
            : percent >= 50
              ? 'You have the outline. Re-read the topics behind the missed questions, then try again.'
              : 'Go back to the lesson sections and worked example before retrying. Understanding comes before score.'}
        </p>
        {wrong.length > 0 ? (
          <details className="review-details">
            <summary>{wrong.length} question(s) to review</summary>
            <ul>
              {wrong.map((key) => {
                const q = pool.find((item) => item.key === key)
                return q ? (
                  <li key={key}>
                    <strong>{q.prompt}</strong>
                    <p>{q.explain}</p>
                  </li>
                ) : null
              })}
            </ul>
          </details>
        ) : null}
        <div className="button-row">
          <button className="btn" onClick={restart}>
            Try again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`quiz ${compact ? 'quiz-compact' : ''}`}>
      <div className="quiz-head">
        <span className="eyebrow">{title ?? 'Check your understanding'}</span>
        <span className="quiz-count">
          {index + 1} / {pool.length}
        </span>
      </div>
      <div className="quiz-track" aria-hidden="true">
        <span style={{ width: `${((index + (checked ? 1 : 0)) / pool.length) * 100}%` }} />
      </div>
      {questions.length > pool.length ? (
        <p className="tiny muted">
          {pool.length} questions drawn at random from a bank of {questions.length}.
        </p>
      ) : null}
      <p className="quiz-prompt">
        <RichText text={question.prompt} />
      </p>

      {question.type === 'mcq' ? (
        <div className="option-list">
          {question.options.map((option, i) => {
            const selected = answer === i
            const stateClass = checked
              ? i === question.answer
                ? 'is-correct'
                : selected
                  ? 'is-wrong'
                  : ''
              : selected
                ? 'is-selected'
                : ''
            return (
              <button
                key={i}
                className={`option ${stateClass}`}
                onClick={() => !checked && setAnswer(i)}
                disabled={checked}
              >
                <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                <span>{option}</span>
              </button>
            )
          })}
        </div>
      ) : null}

      {question.type === 'tf' ? (
        <div className="option-list two">
          {[true, false].map((value) => {
            const selected = answer === value
            const stateClass = checked
              ? value === question.answer
                ? 'is-correct'
                : selected
                  ? 'is-wrong'
                  : ''
              : selected
                ? 'is-selected'
                : ''
            return (
              <button
                key={String(value)}
                className={`option ${stateClass}`}
                onClick={() => !checked && setAnswer(value)}
                disabled={checked}
              >
                {value ? 'True' : 'False'}
              </button>
            )
          })}
        </div>
      ) : null}

      {question.type === 'short' ? (
        <input
          className="text-input"
          value={typeof answer === 'string' ? answer : ''}
          onChange={(event) => setAnswer(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !checked && answer) check()
          }}
          placeholder="Type your answer"
          disabled={checked}
        />
      ) : null}

      {checked ? (
        <div className={`feedback ${correct ? 'correct' : 'incorrect'}`}>
          <strong>{correct ? 'Correct.' : 'Not quite.'}</strong>
          <p>{question.explain}</p>
          {question.type === 'mcq' ? (
            <p className="muted small">Correct option: {question.options[question.answer]}</p>
          ) : null}
          {question.type === 'tf' ? (
            <p className="muted small">Correct answer: {question.answer ? 'True' : 'False'}</p>
          ) : null}
          {question.type === 'short' ? (
            <p className="muted small">Accepted answer: {question.accept[0]}</p>
          ) : null}
        </div>
      ) : null}

      <div className="button-row">
        {!checked ? (
          <button className="btn primary" onClick={check} disabled={answer === null}>
            Check answer
          </button>
        ) : (
          <button className="btn primary" onClick={next}>
            {index + 1 >= pool.length ? 'See results' : 'Next question'}
          </button>
        )}
      </div>
    </div>
  )
}
