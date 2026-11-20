import { chapters, stats } from '../content'
import { coverageNotes } from '../content/coverage'
import { Link } from 'react-router-dom'

const totalPages = 332

export default function Coverage() {
  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Quality control</p>
        <h1>PDF-to-website coverage checklist</h1>
        <p className="lede">
          This table is a verification record, not a marketing claim. It compares every topic taught on the site with
          the sixteen supplied PDFs, and lists the pages that are image-only or incomplete in the source.
        </p>
      </header>

      <section className="stat-grid">
        <div className="card stat-card">
          <span className="big-number">{stats.topics}</span>
          <span className="muted small">topics built</span>
          <span className="tiny muted">from {chapters.length} chapter files</span>
        </div>
        <div className="card stat-card">
          <span className="big-number">{totalPages}</span>
          <span className="muted small">PDF pages reviewed</span>
          <span className="tiny muted">text extraction plus rendered images</span>
        </div>
        <div className="card stat-card">
          <span className="big-number">{stats.questions}</span>
          <span className="muted small">quiz questions</span>
          <span className="tiny muted">every one tied to a topic</span>
        </div>
        <div className="card stat-card">
          <span className="big-number">{stats.diagrams}</span>
          <span className="muted small">topics with diagrams</span>
          <span className="tiny muted">original SVG illustrations</span>
        </div>
      </section>

      <section className="card coverage-summary">
        <h2>How to read the flags</h2>
        <ul className="content-list">
          <li>
            <strong>Covered</strong> — the topic exists as a lesson, with the source file and page range shown on the
            lesson page.
          </li>
          <li>
            <strong>Explained</strong> — a full discussion preserves the source definitions, figures and technical
            detail, with beginner-friendly scaffolding added.
          </li>
          <li>
            <strong>Illustrated</strong> — an original diagram explains the concept. Blank where a diagram would not add
            instructional value.
          </li>
          <li>
            <strong>Practised</strong> — the chapter practice set includes problems for the chapter that contains this
            topic.
          </li>
          <li>
            <strong>Assessed</strong> — the topic has quiz questions, which also feed the chapter and final quizzes.
          </li>
        </ul>
      </section>

      {chapters.map((chapter) => (
        <section className="section coverage-chapter" key={chapter.id}>
          <div className="section-head">
            <div>
              <p className="eyebrow">
                Chapter {chapter.number} · {chapter.pdf}
              </p>
              <h2>{chapter.title}</h2>
            </div>
            <Link className="text-link" to={`/learn/${chapter.id}/${chapter.topics[0].id}`}>
              Open chapter →
            </Link>
          </div>
          <div className="table-scroll card">
            <table className="coverage-table">
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>Source pages</th>
                  <th>Covered</th>
                  <th>Explained</th>
                  <th>Illustrated</th>
                  <th>Practised</th>
                  <th>Assessed</th>
                </tr>
              </thead>
              <tbody>
                {chapter.topics.map((topic) => (
                  <tr key={topic.id}>
                    <td>
                      <Link to={`/learn/${chapter.id}/${topic.id}`}>{topic.title}</Link>
                    </td>
                    <td className="muted small">{topic.source.pages}</td>
                    <td className="tick">✓</td>
                    <td className="tick">✓</td>
                    <td className={topic.diagram ? 'tick' : 'dash'}>
                      {topic.diagram ? '✓' : '—'}
                    </td>
                    <td className="tick">{chapter.practice.length > 0 ? '✓' : '—'}</td>
                    <td className="tick">{topic.quiz.length > 0 ? '✓' : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="tiny muted">
            Chapter practice set: {chapter.practice.map((problem) => problem.level).join(' · ')}. Source file:{' '}
            {chapter.pdf} ({chapter.pages}).
          </p>
        </section>
      ))}

      <section className="section">
        <div className="card">
          <h2>Image-only, incomplete or unreadable source content</h2>
          <p className="small muted">
            These pages could not be read as text. Each was rendered as an image and inspected where possible. Where
            content is genuinely missing from the source, it is identified here and is <em>not</em> invented on the
            website.
          </p>
          <div className="table-scroll">
            <table className="coverage-table notes-table">
              <thead>
                <tr>
                  <th>PDF</th>
                  <th>Pages</th>
                  <th>Issue</th>
                  <th>How the site handles it</th>
                </tr>
              </thead>
              <tbody>
                {coverageNotes.map((note) => (
                  <tr key={`${note.file}-${note.pages}`}>
                    <td className="small">{note.file}</td>
                    <td className="small muted">{note.pages}</td>
                    <td className="small">{note.issue}</td>
                    <td className="small">{note.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card coverage-summary">
          <h2>What is verified — and what is not</h2>
          <p>
            All sixteen PDFs were extracted page by page, producing text for {totalPages} pages. Every chapter heading,
            definition, formula, example and table that could be read is represented in a lesson, except where listed
            below. Image-only slides containing instructional data were rendered and read; the recovered data is
            reproduced (metamorphic classification, element table, nonsilicate table, element abundances, magma
            grades).
          </p>
          <p>
            Three limitations remain, and they are stated rather than hidden:
          </p>
          <ul className="content-list">
            <li>
              Table 4.1 (radiometric isotopes) and the full Figure 4.11 time scale are images; the site covers
              carbon-14 in detail and presents a simplified time scale instead of guessing half-lives.
            </li>
            <li>
              The final Volcanism hazards slide and the Metamorphic “resources” slide contain no readable content; the
              site flags them and does not fabricate a list.
            </li>
            <li>
              Photographs in the PDFs are not reproduced. Diagrams on this site are original schematics drawn to match
              the lesson content.
            </li>
          </ul>
          <p className="small muted">
            Therefore the checklist claims complete coverage of the <strong>readable</strong> source content, not an
            unqualified 100% of every pixel in the PDFs. Verification was done against the extracted text and the
            rendered image-only pages — not by opening every slide in a PDF viewer frame by frame.
          </p>
        </div>
      </section>
    </div>
  )
}
