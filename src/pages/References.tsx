import { Link } from 'react-router-dom'
import { course } from '../content'
import { citedSources, creditNotice, sourcePdfs } from '../content/references'

export default function References() {
  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Attribution</p>
        <h1>References &amp; Credits</h1>
        <p className="lede">
          The lesson content on this site is adapted from the course PDFs below. Ownership and authorship remain with
          their respective authors and institutions; this is an independent study aid.
        </p>
      </header>

      <section className="card credit-card">
        <h2>Website creator</h2>
        <p>
          <strong>{course.creator.name}</strong> — {course.creator.role}.
        </p>
        <p className="small muted">
          This independent study companion was designed and built for GS 21/L. It is not an official publication of
          the course, and the source lessons remain the property of their authors.
        </p>
      </section>

      <section className="card credit-card">
        <h2>Credit notice</h2>
        <p>{creditNotice}</p>
        <p className="small muted">
          No copyright notice was visible in the extracted text of the supplied files. Where bibliographic details
          (author, institution, year, original link) are missing, they are marked “needs confirmation” rather than
          guessed. If you are the author or rights-holder and want a credit changed or removed, that should be
          confirmed with the owner of these course materials.
        </p>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Source files</p>
            <h2>The sixteen lesson PDFs</h2>
          </div>
          <span className="muted small">Page references appear on every lesson</span>
        </div>
        <div className="reference-list">
          {sourcePdfs.map((pdf) => (
            <article className="card reference-card" key={pdf.file}>
              <div className="reference-head">
                <span className="chapter-number">{String(sourcePdfs.indexOf(pdf) + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{pdf.title}</h3>
                  <p className="tiny muted">{pdf.file}</p>
                </div>
              </div>
              <dl className="reference-meta">
                <div>
                  <dt>Author / owner</dt>
                  <dd>{pdf.author ?? 'Not stated — needs confirmation'}</dd>
                </div>
                <div>
                  <dt>Institution / publisher</dt>
                  <dd>{pdf.institution ?? 'Not stated — needs confirmation'}</dd>
                </div>
                <div>
                  <dt>Year</dt>
                  <dd>{pdf.year ?? 'Not stated — needs confirmation'}</dd>
                </div>
                <div>
                  <dt>Source pages used</dt>
                  <dd>{pdf.pages}</dd>
                </div>
                <div>
                  <dt>Used for</dt>
                  <dd>{pdf.usedFor}</dd>
                </div>
              </dl>
              <div className="reference-notes">
                <p className="eyebrow">Notes on the file</p>
                <ul>
                  {pdf.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Take GeoStud offline</h2>
          <p className="small">
            Every lesson, quiz, flashcard and your saved progress works with no connection once the app has been
            opened online a single time. Only the AI tutor needs the internet.
          </p>
          <ol className="citation-list">
            <li>Open GeoStud in Chrome on the phone, on the deployed or local address you normally use.</li>
            <li>
              Tap the browser menu (<span aria-hidden="true">⋮</span>) and choose <strong>Add to Home screen</strong> /{' '}
              <strong>Install app</strong>.
            </li>
            <li>Launch it from the home-screen icon — it opens full screen and keeps working in airplane mode.</li>
          </ol>
          <p className="small muted">
            On a computer, Chrome and Edge show an install icon in the address bar. Offline lessons use the system
            font when the web fonts are not cached, so layout stays intact.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Works cited inside the course PDFs</h2>
          <p className="small muted">
            These references were printed on the source slides. They are reproduced as given; they were not
            independently verified.
          </p>
          <ol className="citation-list">
            {citedSources.map((source) => (
              <li key={source}>{source}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="dash-columns">
        <div className="card">
          <h2>About this website</h2>
          <p className="small">
            Built as an independent, non-commercial study companion. Lessons preserve the source material’s technical
            content, with added beginner explanations, worked examples, diagrams, practice and assessment.
          </p>
          <p className="small muted">
            Diagrams are original SVG schematics drawn for instruction. Photographs from the PDFs are not copied.
            Content was extracted from the files and checked against the{' '}
            <Link to="/coverage">coverage checklist</Link>.
          </p>
        </div>
        <div className="card">
          <h2>If a credit is wrong</h2>
          <p className="small">
            Where the source files do not state an author, institution, year or licence, this page says so. Those
            fields should be confirmed by the owner of the materials before this site is published or redistributed.
          </p>
          <p className="small muted">
            Course codes, titles and instructor names are used descriptively to identify the source materials, not to
            imply endorsement.
          </p>
        </div>
      </section>
    </div>
  )
}
