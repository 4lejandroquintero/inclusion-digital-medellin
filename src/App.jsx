import { useState, useEffect, useCallback } from 'react'
import Navbar from './components/Navbar'
import ViewPanel from './components/ViewPanel'
import Footer from './components/Footer'
import { DEFAULT_VIEW, resolveViewId, viewConfig } from './config/views'

function getInitialView() {
  const hash = window.location.hash.replace('#', '')
  return hash && viewConfig[hash] ? hash : DEFAULT_VIEW
}

/**
 * Blog académico — navegación por vistas (una sección visible a la vez).
 */
function App() {
  const [activeView, setActiveView] = useState(getInitialView)

  const navigate = useCallback((viewId) => {
    const resolved = resolveViewId(viewId)
    setActiveView(resolved)
    window.history.replaceState(null, '', `#${resolved}`)
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && viewConfig[hash]) setActiveView(hash)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <>
      <Navbar activeView={activeView} onNavigate={navigate} />
      <main className="min-h-screen bg-slate-50">
        <ViewPanel viewId={activeView} onNavigate={navigate} />
      </main>
      <Footer />
    </>
  )
}

export default App
