import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import ProcedurePage from './pages/ProcedurePage'
import AuthorPage from './pages/AuthorPage'
import CouplePage from './pages/CouplePage'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = hash.replace('#', '')
    const scrollToTarget = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return true
      }
      return false
    }

    if (scrollToTarget()) return

    const frame = requestAnimationFrame(() => {
      if (!scrollToTarget()) {
        window.scrollTo(0, 0)
      }
    })
    const timer = setTimeout(scrollToTarget, 100)

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(timer)
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/casal-da-plastica" element={<CouplePage />} />
        <Route path="/casal-da-plastica/" element={<CouplePage />} />
        <Route path="/autora/:authorSlug" element={<AuthorPage />} />
        <Route path="/autora/:authorSlug/" element={<AuthorPage />} />
        <Route path="/procedimentos/:categorySlug" element={<CategoryPage />} />
        <Route path="/procedimentos/:categorySlug/" element={<CategoryPage />} />
        <Route path="/procedimentos/:categorySlug/:procedureSlug" element={<ProcedurePage />} />
        <Route path="/procedimentos/:categorySlug/:procedureSlug/" element={<ProcedurePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
