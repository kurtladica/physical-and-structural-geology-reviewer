import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import 'katex/dist/katex.min.css'
import './styles.css'
import App from './App'
import { Preloader } from './components/Preloader'
import { ProgressProvider } from './state/ProgressContext'

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch((error) => {
      console.warn('Offline cache could not be installed.', error)
    })
  })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Preloader />
    {/* Hash routing keeps every deep link working on static hosts such as GitHub Pages,
        which answer unknown paths with a 404 instead of index.html. */}
    <HashRouter>
      <ProgressProvider>
        <App />
      </ProgressProvider>
    </HashRouter>
  </StrictMode>,
)
