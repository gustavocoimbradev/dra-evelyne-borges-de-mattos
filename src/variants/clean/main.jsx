import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CleanApp from './CleanApp'
import '../../styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CleanApp />
  </StrictMode>,
)
