import { Link } from 'react-router-dom'
import { chapters, stats } from '../content'
import {
  chapterProgress,
  formatDate,
  overallProgress,
  quizHistory,
  quizLabel,
  reviewTopicKeys,
  topicFromKey,
} from '../lib/progress'
import { useProgress } from '../state/ProgressContext'

export default function Progress() {
  const { state, reset } = useProgress()
  const overall = overallProgress(state)
  const history = quizHistory(state)
  const review = reviewTopicKeys(state)
    .map(topicFromKey)
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))
  const knownCards = Object.values(state.cards).filter((rating) => rating === 'known').length
  const reviewCards = Object.values(state.cards).filter((rating) => rating === 'review').length
  const completedTopics = Object.keys(state.completed).length
  const quizAverage =
    history.length > 0
      ? Math.round(
          (history.reduce((sum, record) => sum + record.score / record.total, 0) / history.length) * 100,
        )
      : 0

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Progress</p>
        <h1>Your learning record</h1>
        <p className="lede">
          Progress is stored in this browser only — no account, no server. Clearing site data or using another device
          starts a fresh record.
        </p>
      </header>

      <section className="stat-grid">
        <div className="card stat-card">
          <span className="big-number">{overall.percent}%</span>
          <span className="muted small">Overall completion</span>
          <span className="tiny muted">
            {overall.done} of {overall.total} topics
          </span>
        </div>
        <div className="card stat-card">
          <span className="big-number">{quizAverage}%</span>
          <span className="muted small">Average quiz score</span>
          <span className="tiny muted">{history.length} quizzes recorded</span>
        </div>
        <div className="card stat-card">
          <span className="big-number">{knownCards}</span>
          <span className="muted small">Cards understood</span>
          <span className="tiny muted">{reviewCards} marked for review</span>
        </div>
        <div className="card stat-card">
          <span className="big-number">{review.length}</span>
          <span className="muted small">Topics to revisit</span>
          <span className="tiny muted">From missed questions and cards</span>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Chapter by chapter</p>
            <h2>Completion</h2>
          </div>
          <span className="muted small">
            {completedTopics} completed · {stats.topics - completedTopics} remaining
          </span>
        </div>
        <div className="card chapter-progress-list">
          {chapters.map((chapter) => {
            const progress = chapterProgress(chapter.id, state)
            const first = chapter.topics[0]
            return (
              <div className="chapter-progress-row" key={chapter.id}>
                <div className="chapter-progress-name">
                  <span className="chapter-number">{String(chapter.number).padStart(2, '0')}</span>
                  <div>
                    <strong>{chapter.title}</strong>
                    <p className="tiny muted">
                      {progress.done}/{progress.total} topics
                    </p>
                  </div>
                </div>
                <div className="progress-track">
                  <span style={{ width: `${progress.percent}%` }} />
                </div>
                <span className="tiny muted percent-label">{progress.percent}%</span>
                <Link className="text-link" to={`/learn/${chapter.id}/${first.id}`}>
                  {progress.done ? 'Review' : 'Study'}
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      <section className="dash-columns">
        <div className="card">
          <h2>Quiz performance</h2>
          {history.length === 0 ? (
            <div className="empty-state">
              <p>No quiz attempts yet. Topic quizzes appear at the end of each lesson.</p>
              <Link className="btn" to="/practice/quizzes">
                Go to quizzes
              </Link>
            </div>
          ) : (
            <table className="history-table">
              <thead>
                <tr>
                  <th>Quiz</th>
                  <th>Score</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {history.map((record) => (
                  <tr key={record.id}>
                    <td>{quizLabel(record.id)}</td>
                    <td>
                      {record.score}/{record.total} ·{' '}
                      {Math.round((record.score / record.total) * 100)}%
                    </td>
                    <td className="muted small">{formatDate(record.at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="card">
          <h2>Topics needing review</h2>
          {review.length === 0 ? (
            <div className="empty-state">
              <p>No topics are flagged. Missed quiz questions and “needs review” cards will appear here.</p>
            </div>
          ) : (
            <ul className="result-list">
              {review.map(({ chapter, topic }) => (
                <li key={`${chapter.id}/${topic.id}`}>
                  <div>
                    <strong>{topic.title}</strong>
                    <p className="tiny muted">
                      Chapter {chapter.number} · {chapter.title}
                    </p>
                  </div>
                  <Link className="text-link" to={`/learn/${chapter.id}/${topic.id}`}>
                    Revisit
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="section">
        <div className="card reset-card">
          <div>
            <h2>Reset learning record</h2>
            <p className="small muted">
              This removes completion ticks, quiz scores and flashcard ratings stored in this browser. It cannot be
              undone.
            </p>
          </div>
          <button
            className="btn danger"
            onClick={() => {
              if (window.confirm('Reset all progress, quiz scores and flashcard ratings in this browser?')) reset()
            }}
          >
            Reset all progress
          </button>
        </div>
      </section>
    </div>
  )
}
