import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import { StrictMode } from 'react'
import './styles/index.scss'

import { createRoot } from 'react-dom/client'

import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
