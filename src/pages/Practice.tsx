import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { allCards, allPractice, allQuestions, chapterQuestions, chapters, stats } from '../content'
import { formulas } from '../content/formulas'
import { FlashcardDeck } from '../components/FlashcardDeck'
import { QuizFlow } from '../components/QuizFlow'
import { MathBlock } from '../components/RichText'
import { quizHistory, quizLabel } from '../lib/progress'
import { useProgress } from '../state/ProgressContext'

const tabs = [
  { id: 'problems', label: 'Practice problems' },
  { id: 'quizzes', label: 'Quizzes' },
  { id: 'flashcards', label: 'Flashcards' },
  { id: 'formulas', label: 'Formula reference' },
]

export default function Practice() {
  const { tab } = useParams()
  const active = tabs.some((item) => item.id === tab) ? (tab as string) : 'problems'
  const { state, recordQuiz } = useProgress()
  const [chapterFilter, setChapterFilter] = useState('all')
  const [levelFilter, setLevelFilter] = useState('all')
  const [openSolution, setOpenSolution] = useState<string | null>(null)
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null)
  const [deck, setDeck] = useState('all')

  const problems = allPractice.filter(
    (problem) =>
      (chapterFilter === 'all' || problem.chapterId === chapterFilter) &&
      (levelFilter === 'all' || problem.level === levelFilter),
  )

  const history = quizHistory(state)
  const finalQuestions = allQuestions

  const deckCards =
    deck === 'all'
      ? allCards
      : deck === 'review'
        ? allCards.filter((card) => state.cards[card.key] === 'review')
        : allCards.filter((card) => card.chapterId === deck)

  const quizQuestions =
    selectedQuiz === 'final'
      ? finalQuestions
      : selectedQuiz
        ? chapterQuestions(chapters.find((chapter) => chapter.id === selectedQuiz)!)
        : []

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Practice centre</p>
        <h1>Practice, quiz, recall, reference</h1>
        <p className="lede">
          Every quiz question comes from the lesson content. Missed questions are recorded against the topic so you
          can revisit it from your progress page.
        </p>
      </header>

      <nav className="tabs" aria-label="Practice sections">
        {tabs.map((item) => (
          <Link key={item.id} to={`/practice/${item.id}`} className={active === item.id ? 'active' : ''}>
            {item.label}
          </Link>
        ))}
      </nav>

      {active === 'problems' ? (
        <section className="section">
          <div className="filter-bar">
            <label>
              Chapter
              <select value={chapterFilter} onChange={(event) => setChapterFilter(event.target.value)}>
                <option value="all">All chapters</option>
                {chapters.map((chapter) => (
                  <option key={chapter.id} value={chapter.id}>
                    {chapter.number}. {chapter.title}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Level
              <select value={levelFilter} onChange={(event) => setLevelFilter(event.target.value)}>
                <option value="all">All levels</option>
                <option value="easy">Easy</option>
                <option value="medium">Intermediate</option>
                <option value="hard">Challenging</option>
              </select>
            </label>
            <span className="muted small">
              {problems.length} of {stats.practice} problems
            </span>
          </div>

          {problems.length === 0 ? (
            <div className="empty-state card">
              <h3>No problems match these filters</h3>
              <p>Try a different chapter or level.</p>
            </div>
          ) : (
            <div className="problem-list">
              {problems.map((problem) => {
                const open = openSolution === problem.id
                return (
                  <article className="problem card" key={problem.id}>
                    <div className="problem-head">
                      <span className={`level level-${problem.level}`}>{problem.level}</span>
                      <span className="tiny muted">{problem.chapterTitle}</span>
                    </div>
                    <p className="problem-question">{problem.question}</p>
                    <details className="hint">
                      <summary>Hint</summary>
                      <p>{problem.hint}</p>
                    </details>
                    {open ? (
                      <div className="solution">
                        <p className="eyebrow">Solution</p>
                        <ol>
                          {problem.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>
                        <div className="answer">
                          <span className="eyebrow">Answer</span>
                          <p>{problem.answer}</p>
                        </div>
                        <button className="text-btn" onClick={() => setOpenSolution(null)}>
                          Hide solution
                        </button>
                      </div>
                    ) : (
                      <button className="btn ghost" onClick={() => setOpenSolution(problem.id)}>
                        Show solution
                      </button>
                    )}
                  </article>
                )
              })}
            </div>
          )}
        </section>
      ) : null}

      {active === 'quizzes' ? (
        <section className="section">
          {selectedQuiz ? (
            <div className="quiz-panel card">
              <div className="section-head tight">
                <div>
                  <p className="eyebrow">{selectedQuiz === 'final' ? 'Whole-course assessment' : 'Chapter assessment'}</p>
                  <h2>
                    {selectedQuiz === 'final'
                      ? `Final quiz · 10 random questions from ${finalQuestions.length}`
                      : quizLabel(`chapter:${selectedQuiz}`)}
                  </h2>
                </div>
                <button className="btn ghost" onClick={() => setSelectedQuiz(null)}>
                  ← All quizzes
                </button>
              </div>
              <QuizFlow
                id={selectedQuiz === 'final' ? 'final' : `chapter:${selectedQuiz}`}
                title={selectedQuiz === 'final' ? 'Final quiz' : 'Chapter quiz'}
                questions={quizQuestions}
                onFinish={(record) =>
                  recordQuiz(selectedQuiz === 'final' ? 'final' : `chapter:${selectedQuiz}`, record)
                }
              />
            </div>
          ) : (
            <>
              <div className="section-head">
                <div>
                  <p className="eyebrow">Chapter quizzes</p>
                  <h2>Test a whole chapter</h2>
                </div>
                <span className="muted small">{stats.questions} questions across the course</span>
              </div>
              <div className="quiz-grid">
                {chapters.map((chapter) => {
                  const record = state.quiz[`chapter:${chapter.id}`]
                  const count = chapterQuestions(chapter).length
                  return (
                    <button className="quiz-card card" key={chapter.id} onClick={() => setSelectedQuiz(chapter.id)}>
                      <span className="chapter-number">{String(chapter.number).padStart(2, '0')}</span>
                      <strong>{chapter.title}</strong>
                      <span className="tiny muted">{count} questions</span>
                      {record ? (
                        <span className="score-pill">
                          Best {record.score}/{record.total}
                        </span>
                      ) : (
                        <span className="tiny muted">Not attempted</span>
                      )}
                    </button>
                  )
                })}
                <button className="quiz-card card final" onClick={() => setSelectedQuiz('final')}>
                  <span className="chapter-number">★</span>
                  <strong>Whole-course final quiz</strong>
                  <span className="tiny muted">
                    10 drawn at random from {finalQuestions.length} questions across all chapters
                  </span>
                  {state.quiz.final ? (
                    <span className="score-pill">
                      Best {state.quiz.final.score}/{state.quiz.final.total}
                    </span>
                  ) : (
                    <span className="tiny muted">Not attempted</span>
                  )}
                </button>
              </div>
              <p className="muted small">
                Topic quizzes are at the end of every lesson. Chapter quizzes draw 10 random questions from that
                chapter&rsquo;s bank; your best score is kept.
              </p>
            </>
          )}

          {history.length > 0 && !selectedQuiz ? (
            <div className="card history-card">
              <h3>Your quiz history</h3>
              <ul className="result-list">
                {history.slice(0, 8).map((record) => (
                  <li key={record.id}>
                    <span>{quizLabel(record.id)}</span>
                    <span className="score-pill">
                      {record.score}/{record.total}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      ) : null}

      {active === 'flashcards' ? (
        <section className="section">
          <div className="filter-bar">
            <label>
              Deck
              <select value={deck} onChange={(event) => setDeck(event.target.value)}>
                <option value="all">All chapters ({allCards.length})</option>
                <option value="review">Needs review</option>
                {chapters.map((chapter) => (
                  <option key={chapter.id} value={chapter.id}>
                    {chapter.number}. {chapter.title}
                  </option>
                ))}
              </select>
            </label>
            <span className="muted small">
              Flip a card, then mark it “I understand this” or “needs review”. Ratings are saved on this device.
            </span>
          </div>
          <FlashcardDeck
            key={deck}
            cards={deckCards}
            title={
              deck === 'all'
                ? 'Whole course'
                : deck === 'review'
                  ? 'Cards marked for review'
                  : chapters.find((chapter) => chapter.id === deck)?.title
            }
          />
          <div className="card reset-row">
            <p className="small muted">
              Need to clear all card ratings? Re-rate individual cards, or reset all progress from the progress page.
            </p>
            <Link className="text-link" to="/progress">
              Open progress →
            </Link>
          </div>
          <p className="tiny muted">
            Tip: the deck also respects the “needs review” filter inside the card view. Ratings are stored only in your
            browser.
          </p>
        </section>
      ) : null}

      {active === 'formulas' ? (
        <section className="section">
          <p className="lede">
            Every expression used in the course, with variable meanings, units, when to use it and a worked example.
          </p>
          <div className="formula-list">
            {formulas.map((formula) => (
              <article className="card formula-card" key={formula.id}>
                <div className="formula-head">
                  <h2>{formula.name}</h2>
                  <Link className="tiny muted" to={`/learn/${formula.topicId.split('/')[0]}/${formula.topicId.split('/')[1]}`}>
                    Related lesson →
                  </Link>
                </div>
                <MathBlock tex={formula.tex} />
                <table className="formula-vars">
                  <thead>
                    <tr>
                      <th>Symbol</th>
                      <th>Meaning</th>
                      <th>Unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formula.variables.map((variable) => (
                      <tr key={variable.symbol}>
                        <td>{variable.symbol}</td>
                        <td>{variable.meaning}</td>
                        <td>{variable.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="small">
                  <strong>When to use:</strong> {formula.when}
                </p>
                <div className="formula-example">
                  <p className="eyebrow">Worked example</p>
                  <p className="small">{formula.example.problem}</p>
                  <ol className="small">
                    {formula.example.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                  <p>
                    <strong>{formula.example.answer}</strong>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}
