import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'katex/dist/katex.min.css'
import './styles.css'
import App from './App'
import { Preloader } from './components/Preloader'
import { ProgressProvider } from './state/ProgressContext'

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((error) => {
      console.warn('Offline cache could not be installed.', error)
    })
  })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Preloader />
    <BrowserRouter>
      <ProgressProvider>
        <App />
      </ProgressProvider>
    </BrowserRouter>
  </StrictMode>,
)
