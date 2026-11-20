import { Link } from 'react-router-dom'
import { chapters, course, stats, getTopic } from '../content'
import { chapterProgress, formatDate, overallProgress, quizHistory, quizLabel, reviewTopicKeys, topicFromKey } from '../lib/progress'
import { useProgress } from '../state/ProgressContext'

export default function Dashboard() {
  const { state } = useProgress()
  const overall = overallProgress(state)
  const continueEntry = state.lastTopic ? getTopic(state.lastTopic.chapterId, state.lastTopic.topicId) : undefined
  const firstChapter = chapters[0]
  const firstTopic = firstChapter.topics[0]
  const start = continueEntry ?? getTopic(firstChapter.id, firstTopic.id)!
  const flatTopics = chapters.flatMap((chapter) => chapter.topics.map((topic) => ({ chapter, topic })))
  const startIndex = flatTopics.findIndex(
    (item) => item.chapter.id === start.chapter.id && item.topic.id === start.topic.id,
  )
  const started = Object.keys(state.completed).length > 0
  const nextEntry = started ? flatTopics[Math.min(startIndex + 1, flatTopics.length - 1)] : start
  const recent = quizHistory(state).slice(0, 3)
  const review = reviewTopicKeys(state)
    .map(topicFromKey)
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))
    .slice(0, 5)
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{course.code} · interactive study companion</p>
          <h1>Understand the Earth, one process at a time.</h1>
          <p className="lede">
            All {stats.chapters} lessons rebuilt from your course PDFs, with diagrams, worked examples, practice,
            quizzes and flashcards. Every lesson tells you exactly which file and pages it comes from.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" to={`/learn/${start.chapter.id}/${start.topic.id}`}>
              {started ? 'Continue learning' : 'Start with Chapter 1'}
            </Link>
            <Link className="btn ghost" to="/practice">
              Open practice centre
            </Link>
          </div>
          <dl className="hero-stats">
            <div>
              <dt>{stats.chapters}</dt>
              <dd>chapters</dd>
            </div>
            <div>
              <dt>{stats.topics}</dt>
              <dd>topics</dd>
            </div>
            <div>
              <dt>{stats.questions}</dt>
              <dd>quiz questions</dd>
            </div>
            <div>
              <dt>{stats.cards}</dt>
              <dd>flashcards</dd>
            </div>
          </dl>
        </div>
        <aside className="hero-progress card">
          <p className="eyebrow">Your progress</p>
          <div className="big-progress">
            <span className="big-number">{overall.percent}%</span>
            <span className="muted">
              {overall.done} of {overall.total} topics complete
            </span>
          </div>
          <div className="progress-track">
            <span style={{ width: `${overall.percent}%` }} />
          </div>
          <div className="continue-block">
            <p className="tiny muted">Up next</p>
            <strong>{nextEntry.topic.title}</strong>
            <p className="small muted">
              {nextEntry.chapter.number}. {nextEntry.chapter.title} · {nextEntry.topic.tagline}
            </p>
            <Link className="text-link" to={`/learn/${nextEntry.chapter.id}/${nextEntry.topic.id}`}>
              Open lesson →
            </Link>
          </div>
          {review.length > 0 ? (
            <div className="continue-block">
              <p className="tiny muted">Needs review</p>
              <ul className="compact-list">
                {review.map(({ chapter, topic }) => (
                  <li key={`${chapter.id}/${topic.id}`}>
                    <Link to={`/learn/${chapter.id}/${topic.id}`}>{topic.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Learning path</p>
            <h2>Chapters</h2>
          </div>
          <Link className="text-link" to="/progress">
            See detailed progress →
          </Link>
        </div>
        <div className="chapter-grid">
          {chapters.map((chapter) => {
            const progress = chapterProgress(chapter.id, state)
            const first = chapter.topics[0]
            const completed = progress.done === progress.total
            return (
              <article className="chapter-card card" key={chapter.id} style={{ ['--accent' as string]: chapter.accent }}>
                <div className="chapter-card-top">
                  <span className="chapter-number">{String(chapter.number).padStart(2, '0')}</span>
                  <span className={`status-pill ${completed ? 'done' : progress.done ? 'partial' : ''}`}>
                    {completed ? 'Complete' : progress.done ? `${progress.done}/${progress.total}` : 'Not started'}
                  </span>
                </div>
                <h3>{chapter.title}</h3>
                <p className="muted small">{chapter.subtitle}</p>
                <div className="progress-track slim">
                  <span style={{ width: `${progress.percent}%` }} />
                </div>
                <div className="chapter-card-foot">
                  <span className="tiny muted">
                    {chapter.topics.length} topics · {chapter.pdf.replace('.pdf', '')}
                  </span>
                  <Link className="text-link" to={`/learn/${chapter.id}/${first.id}`}>
                    {progress.done ? 'Review' : 'Study'} →
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="dash-columns">
        <div className="card">
          <div className="section-head tight">
            <div>
              <p className="eyebrow">Recent results</p>
              <h2>Quiz history</h2>
            </div>
            <Link className="text-link" to="/practice/quizzes">
              All quizzes →
            </Link>
          </div>
          {recent.length === 0 ? (
            <div className="empty-state">
              <h3>No quiz results yet</h3>
              <p>Quizzes after each lesson record your score, and any missed question becomes a review topic here.</p>
              <Link className="btn" to="/practice/quizzes">
                Browse quizzes
              </Link>
            </div>
          ) : (
            <ul className="result-list">
              {recent.map((record) => (
                <li key={record.id}>
                  <div>
                    <strong>{quizLabel(record.id)}</strong>
                    <p className="tiny muted">{formatDate(record.at)}</p>
                  </div>
                  <span className="score-pill">
                    {record.score}/{record.total}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="card">
          <div className="section-head tight">
            <div>
              <p className="eyebrow">Focus next</p>
              <h2>Topics to revisit</h2>
            </div>
            <Link className="text-link" to="/practice/flashcards">
              Flashcards →
            </Link>
          </div>
          {review.length === 0 ? (
            <div className="empty-state">
              <h3>Nothing flagged</h3>
              <p>
                Mark flashcards as “needs review” or miss a quiz question, and the related topic will appear here.
              </p>
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
                    Review
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  )
}
