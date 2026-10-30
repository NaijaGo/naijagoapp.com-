import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// public/404.html sends unknown paths to /?redirect=<path>. Restore the path
// before the router starts so it renders the right page (or "Page not found").
const redirect = new URLSearchParams(window.location.search).get('redirect')
if (redirect && redirect.startsWith('/') && !redirect.startsWith('//')) {
  window.history.replaceState({}, '', redirect)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
