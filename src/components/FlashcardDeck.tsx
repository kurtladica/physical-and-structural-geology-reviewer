import { useMemo, useState } from 'react'
import { useProgress } from '../state/ProgressContext'
import { RichText } from './RichText'

export type Flashcard = { key: string; front: string; back: string; chapterId: string; topicId: string }

type Props = { cards: Flashcard[]; title?: string }

export function FlashcardDeck({ cards, title }: Props) {
  const { state, rateCard } = useProgress()
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [reviewOnly, setReviewOnly] = useState(false)

  const deck = useMemo(
    () => (reviewOnly ? cards.filter((card) => state.cards[card.key] === 'review') : cards),
    [cards, reviewOnly, state.cards],
  )

  const card = deck[Math.min(index, Math.max(deck.length - 1, 0))]
  const known = cards.filter((c) => state.cards[c.key] === 'known').length
  const toReview = cards.filter((c) => state.cards[c.key] === 'review').length

  if (cards.length === 0) {
    return <p className="muted">No cards in this deck yet.</p>
  }

  return (
    <div className="flashcard-shell">
      <div className="flashcard-meta">
        <span>{title ?? 'Flashcards'}</span>
        <span className="muted">
          {known} known · {toReview} to review · {cards.length} total
        </span>
      </div>

      <label className="toggle">
        <input
          type="checkbox"
          checked={reviewOnly}
          onChange={(event) => {
            setReviewOnly(event.target.checked)
            setIndex(0)
            setFlipped(false)
          }}
        />
        <span>Study only cards marked “needs review”</span>
      </label>

      {deck.length === 0 || !card ? (
        <div className="empty-state">
          <h3>Nothing marked for review</h3>
          <p>Cards you mark “needs review” will collect here. Uncheck the filter to see the whole deck.</p>
        </div>
      ) : (
        <>
          <button
            type="button"
            className={`flashcard ${flipped ? 'flipped' : ''}`}
            onClick={() => setFlipped((f) => !f)}
            aria-pressed={flipped}
            aria-label={flipped ? 'Card back. Tap to show the question again.' : 'Card front. Tap to reveal the answer.'}
          >
            <span className="flashcard-inner">
              <span className="flashcard-face flashcard-front" aria-hidden={flipped}>
                <span className="flashcard-label">Front · tap to flip</span>
                <span className="flashcard-text">
                  <RichText text={card.front} />
                </span>
              </span>
              <span className="flashcard-face flashcard-back" aria-hidden={!flipped}>
                <span className="flashcard-label">Back · tap to flip</span>
                <span className="flashcard-text">
                  <RichText text={card.back} />
                </span>
              </span>
            </span>
          </button>

          <div className="button-row spread">
            <button
              className="btn ghost"
              onClick={() => {
                setFlipped(false)
                setIndex((i) => Math.max(0, i - 1))
              }}
              disabled={index === 0}
            >
              ← Previous
            </button>
            <span className="muted small">
              {index + 1} / {deck.length}
            </span>
            <button
              className="btn ghost"
              onClick={() => {
                setFlipped(false)
                setIndex((i) => Math.min(deck.length - 1, i + 1))
              }}
              disabled={index >= deck.length - 1}
            >
              Next →
            </button>
          </div>

          <div className="button-row">
            <button
              className="btn"
              onClick={() => {
                rateCard(card.key, 'review')
                setFlipped(false)
                setIndex((i) => Math.min(deck.length - 1, i + 1))
              }}
            >
              Needs review
            </button>
            <button
              className="btn primary"
              onClick={() => {
                rateCard(card.key, 'known')
                setFlipped(false)
                setIndex((i) => Math.min(deck.length - 1, i + 1))
              }}
            >
              I understand this
            </button>
          </div>

          <div className="deck-dots" aria-hidden="true">
            {deck.slice(0, 40).map((c, i) => (
              <span
                key={c.key}
                className={`dot ${i === index ? 'active' : ''} ${state.cards[c.key] ?? ''}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
