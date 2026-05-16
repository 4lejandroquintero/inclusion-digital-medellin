import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Introduccion from './components/Introduccion'
import Problematica from './components/Problematica'
import Contexto from './components/Contexto'
import Objetivos from './components/Objetivos'
import Justificacion from './components/Justificacion'
import Referencias from './components/Referencias'
import Footer from './components/Footer'

/**
 * Aplicación principal del blog académico.
 * Landing page estática para GitHub Pages.
 */
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Introduccion />
        <Problematica />
        <Contexto />
        <Objetivos />
        <Justificacion />
        <Referencias />
      </main>
      <Footer />
    </>
  )
}

export default App
