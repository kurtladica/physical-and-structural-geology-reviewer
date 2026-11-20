import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Lesson from './pages/Lesson'
import Practice from './pages/Practice'
import Progress from './pages/Progress'
import Coverage from './pages/Coverage'
import References from './pages/References'
import Tutor from './pages/Tutor'
import { course } from './content'
import { useTheme } from './lib/useTheme'
import { useProgress } from './state/ProgressContext'
import { overallProgress } from './lib/progress'

const navItems = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/practice', label: 'Practice' },
  { to: '/tutor', label: 'AI tutor' },
  { to: '/progress', label: 'Progress' },
  { to: '/coverage', label: 'Coverage' },
  { to: '/references', label: 'References' },
]

export default function App() {
  const { theme, toggle } = useTheme()
  const { state } = useProgress()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const overall = overallProgress(state)

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand" aria-label={`${course.shortTitle} home`}>
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="10 10 44 44" role="presentation" focusable="false">
                <circle cx="32" cy="32" r="17" fill="#7fb6cc" stroke="#101010" strokeWidth="3" />
                <ellipse cx="32" cy="32" rx="7" ry="17" fill="none" stroke="#101010" strokeWidth="1.4" opacity="0.45" />
                <path d="M15 32h34" stroke="#101010" strokeWidth="1.4" opacity="0.45" />
                <path
                  d="M22 22 L26 20 L29 23 L28 27 L29 30 L25 32 L22 29 L21 25 Z"
                  fill="#4f9e5c"
                  stroke="#101010"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M26 34 L30 33 L30.5 38 L28 43 L25.5 40 L26 36 Z"
                  fill="#4f9e5c"
                  stroke="#101010"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M34 30 L38 29 L40 33 L38.5 39 L35 41 L33.5 36 Z"
                  fill="#4f9e5c"
                  stroke="#101010"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M34 20 L39 18 L43.5 20.5 L45 24 L43 27 L39 26 L37 28 L34 25 Z"
                  fill="#4f9e5c"
                  stroke="#101010"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path d="M42 36 L45.5 35 L46 39 L43 40 Z" fill="#4f9e5c" stroke="#101010" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            </span>
            <span>
              <strong>{course.shortTitle}</strong>
              <small>{course.code} study companion</small>
            </span>
          </Link>

          <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <div className="header-progress" title={`${overall.percent}% of lessons complete`}>
              <span className="header-progress-bar">
                <span style={{ width: `${overall.percent}%` }} />
              </span>
              <span className="tiny muted">{overall.percent}%</span>
            </div>
            <button
              className="icon-btn"
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>
            <button
              className="icon-btn menu-btn"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <main id="main" className="site-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/learn/:chapterId/:topicId" element={<Lesson />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/practice/:tab" element={<Practice />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/coverage" element={<Coverage />} />
          <Route path="/references" element={<References />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route
            path="*"
            element={
              <div className="page narrow">
                <h1>Page not found</h1>
                <p className="muted">That link does not match any page in this study companion.</p>
                <Link className="btn primary" to="/">
                  Back to the dashboard
                </Link>
              </div>
            }
          />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>
            <strong>{course.code} · {course.title}</strong> — independent learning aid built from the course PDFs.
          </p>
          <p className="muted small">
            All original lesson content belongs to its respective authors and owners. See{' '}
            <Link to="/references">References &amp; Credits</Link> and the{' '}
            <Link to="/coverage">coverage checklist</Link>.
          </p>
          <p className="muted small creator-credit">
            Website creator: <strong>{course.creator.name}</strong> — {course.creator.role}.
          </p>
        </div>
      </footer>
    </div>
  )
}
