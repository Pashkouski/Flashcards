import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import { StrictMode } from 'react'
import './styles/index.scss'

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)
