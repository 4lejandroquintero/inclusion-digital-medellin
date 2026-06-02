import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EntradaParte2 from './components/EntradaParte2'
import EnfoqueTrabajo from './components/EnfoqueTrabajo'
import PreguntaOrientadora from './components/PreguntaOrientadora'
import Introduccion from './components/Introduccion'
import SintesisLecturas from './components/SintesisLecturas'
import Problematica from './components/Problematica'
import Contexto from './components/Contexto'
import PlanAccion from './components/PlanAccion'
import Georeferenciacion from './components/Georeferenciacion'
import ActividadesPlan from './components/ActividadesPlan'
import DesarrolloIntegral from './components/DesarrolloIntegral'
import Objetivos from './components/Objetivos'
import Justificacion from './components/Justificacion'
import Multimedia from './components/Multimedia'
import Metacognicion from './components/Metacognicion'
import Referencias from './components/Referencias'
import Footer from './components/Footer'

/**
 * Blog académico — Segunda entrada: contexto y definición de la problemática.
 */
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EntradaParte2 />
        <EnfoqueTrabajo />
        <PreguntaOrientadora />
        <Introduccion />
        <SintesisLecturas />
        <Contexto />
        <Problematica />
        <PlanAccion />
        <Georeferenciacion />
        <ActividadesPlan />
        <DesarrolloIntegral />
        <Objetivos />
        <Justificacion />
        <Multimedia />
        <Metacognicion />
        <Referencias />
      </main>
      <Footer />
    </>
  )
}

export default App
