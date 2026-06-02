import Hero from '../components/Hero'
import Introduccion from '../components/Introduccion'
import GuiaDocente from '../components/GuiaDocente'
import EnfoqueTrabajo from '../components/EnfoqueTrabajo'
import EntradaParte2 from '../components/EntradaParte2'
import PreguntaOrientadora from '../components/PreguntaOrientadora'
import SintesisLecturas from '../components/SintesisLecturas'
import Contexto from '../components/Contexto'
import Problematica from '../components/Problematica'
import PlanAccion from '../components/PlanAccion'
import Georeferenciacion from '../components/Georeferenciacion'
import ActividadesPlan from '../components/ActividadesPlan'
import DesarrolloIntegral from '../components/DesarrolloIntegral'
import Objetivos from '../components/Objetivos'
import Justificacion from '../components/Justificacion'
import Multimedia from '../components/Multimedia'
import Metacognicion from '../components/Metacognicion'
import Referencias from '../components/Referencias'

/** Vista por defecto al cargar el sitio */
export const DEFAULT_VIEW = 'inicio'

/**
 * Cada clave corresponde a una opción del menú.
 * Solo se montan los componentes de la vista activa.
 */
export const viewConfig = {
  inicio: {
    label: 'Inicio',
    components: [Hero, Introduccion],
  },
  'guia-docente': {
    label: 'Índice',
    components: [GuiaDocente],
    needsNavigate: true,
  },
  'enfoque-trabajo': {
    label: 'Metodología',
    components: [EnfoqueTrabajo],
  },
  'entrada-2': {
    label: 'Entrada II',
    components: [EntradaParte2, PreguntaOrientadora],
  },
  lecturas: {
    label: 'Lecturas',
    components: [SintesisLecturas],
  },
  contexto: {
    label: 'Contexto',
    components: [Contexto],
  },
  problematica: {
    label: 'Problemática',
    components: [Problematica],
  },
  'plan-accion': {
    label: 'Plan',
    components: [PlanAccion],
  },
  georeferenciacion: {
    label: 'Territorio',
    components: [Georeferenciacion],
  },
  actividades: {
    label: 'Actividades',
    components: [ActividadesPlan],
  },
  'desarrollo-integral': {
    label: 'DIS',
    components: [DesarrolloIntegral],
  },
  objetivos: {
    label: 'Objetivos',
    components: [Objetivos, Justificacion],
  },
  multimedia: {
    label: 'Media',
    components: [Multimedia],
  },
  metacognicion: {
    label: 'Reflexión',
    components: [Metacognicion],
  },
  referencias: {
    label: 'Referencias',
    components: [Referencias],
  },
}

/** Enlaces del menú (orden de navegación) */
export const navLinks = Object.entries(viewConfig).map(([id, { label }]) => ({
  id,
  label,
}))

/** Resuelve un id de sección interna al id de vista del menú */
export function resolveViewId(sectionId) {
  if (viewConfig[sectionId]) return sectionId
  if (sectionId === 'pregunta-orientadora') return 'entrada-2'
  if (sectionId === 'justificacion') return 'objetivos'
  return DEFAULT_VIEW
}
