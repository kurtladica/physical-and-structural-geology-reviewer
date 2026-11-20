import { useEffect, useState } from 'react'

/** How long the screen stays up at minimum, so the globe is not a flash. */
const MIN_VISIBLE = 1200
/** Matches the CSS fade-out. */
const FADE_OUT = 450

export function Preloader() {
  const [leaving, setLeaving] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const start = performance.now()
    let hideTimer: number | undefined
    let removeTimer: number | undefined

    const finish = () => {
      const wait = Math.max(0, MIN_VISIBLE - (performance.now() - start))
      hideTimer = window.setTimeout(() => {
        setLeaving(true)
        removeTimer = window.setTimeout(() => setDone(true), FADE_OUT)
      }, wait)
    }

    if (document.readyState === 'complete') finish()
    else window.addEventListener('load', finish, { once: true })

    return () => {
      window.removeEventListener('load', finish)
      if (hideTimer) window.clearTimeout(hideTimer)
      if (removeTimer) window.clearTimeout(removeTimer)
    }
  }, [])

  useEffect(() => {
    if (done) return
    const root = document.documentElement
    root.classList.add('is-preloading')
    return () => root.classList.remove('is-preloading')
  }, [done])

  if (done) return null

  return (
    <div
      className={`preloader ${leaving ? 'leaving' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="GeoStud 1.0 is loading"
    >
      <div className="preloader-card">
        <div className="preloader-globe" aria-hidden="true">
          <svg viewBox="10 10 44 44" role="presentation" focusable="false">
            <defs>
              <clipPath id="preloader-globe-clip">
                <circle cx="32" cy="32" r="20" />
              </clipPath>
            </defs>
            <circle cx="32" cy="32" r="20" fill="#7fb6cc" />
            <g clipPath="url(#preloader-globe-clip)">
              <ellipse cx="32" cy="32" rx="8" ry="20" fill="none" stroke="#101010" strokeWidth="1.2" opacity="0.35" />
              <ellipse cx="32" cy="32" rx="15" ry="20" fill="none" stroke="#101010" strokeWidth="1" opacity="0.22" />
              <path d="M12 32h40M20 20h24M20 44h24" stroke="#101010" strokeWidth="1.2" opacity="0.35" />
              <g className="preloader-lands">
                <g>
                  <path d="M22 22 L26 20 L29 23 L28 27 L29 30 L25 32 L22 29 L21 25 Z" fill="#4f9e5c" stroke="#101010" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="M26 34 L30 33 L30.5 38 L28 43 L25.5 40 L26 36 Z" fill="#4f9e5c" stroke="#101010" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="M34 30 L38 29 L40 33 L38.5 39 L35 41 L33.5 36 Z" fill="#4f9e5c" stroke="#101010" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="M34 20 L39 18 L43.5 20.5 L45 24 L43 27 L39 26 L37 28 L34 25 Z" fill="#4f9e5c" stroke="#101010" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="M42 36 L45.5 35 L46 39 L43 40 Z" fill="#4f9e5c" stroke="#101010" strokeWidth="1.4" strokeLinejoin="round" />
                </g>
                <g transform="translate(40 0)">
                  <path d="M22 22 L26 20 L29 23 L28 27 L29 30 L25 32 L22 29 L21 25 Z" fill="#4f9e5c" stroke="#101010" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="M26 34 L30 33 L30.5 38 L28 43 L25.5 40 L26 36 Z" fill="#4f9e5c" stroke="#101010" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="M34 30 L38 29 L40 33 L38.5 39 L35 41 L33.5 36 Z" fill="#4f9e5c" stroke="#101010" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="M34 20 L39 18 L43.5 20.5 L45 24 L43 27 L39 26 L37 28 L34 25 Z" fill="#4f9e5c" stroke="#101010" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="M42 36 L45.5 35 L46 39 L43 40 Z" fill="#4f9e5c" stroke="#101010" strokeWidth="1.4" strokeLinejoin="round" />
                </g>
              </g>
            </g>
            <circle cx="32" cy="32" r="20" fill="none" stroke="#101010" strokeWidth="3" />
          </svg>
        </div>
        <p className="preloader-title">Taking You to Your Journey!</p>
      </div>
    </div>
  )
}
