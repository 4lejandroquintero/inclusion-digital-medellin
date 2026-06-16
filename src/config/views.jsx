import Hero from '../components/Hero'
import Introduccion from '../components/Introduccion'
import GuiaDocente from '../components/GuiaDocente'
import EnfoqueTrabajo from '../components/EnfoqueTrabajo'
import EntradaParte2 from '../components/EntradaParte2'
import EntradaParte3 from '../components/EntradaParte3'
import CambiosActualizacion from '../components/CambiosActualizacion'
import PreguntaOrientadora from '../components/PreguntaOrientadora'
import SintesisLecturas from '../components/SintesisLecturas'
import Contexto from '../components/Contexto'
import Problematica from '../components/Problematica'
import PlanAccion from '../components/PlanAccion'
import Georeferenciacion from '../components/Georeferenciacion'
import GeoreferenciacionActualizada from '../components/GeoreferenciacionActualizada'
import AnexoDiagnostico from '../components/AnexoDiagnostico'
import ActividadesPlan from '../components/ActividadesPlan'
import ActividadesSemana6 from '../components/ActividadesSemana6'
import DesarrolloIntegral from '../components/DesarrolloIntegral'
import Objetivos from '../components/Objetivos'
import Justificacion from '../components/Justificacion'
import Multimedia from '../components/Multimedia'
import Metacognicion from '../components/Metacognicion'
import MetacognicionFinal from '../components/MetacognicionFinal'
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
  'entrada-3': {
    label: 'Entrada III',
    components: [EntradaParte3],
  },
  cambios: {
    label: 'Cambios',
    components: [CambiosActualizacion],
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
  'georeferenciacion-actualizada': {
    label: 'Anexo I',
    components: [GeoreferenciacionActualizada],
  },
  'anexo-diagnostico': {
    label: 'Anexo II',
    components: [AnexoDiagnostico],
  },
  actividades: {
    label: 'Act. S3–4',
    components: [ActividadesPlan],
  },
  'actividades-semana-6': {
    label: 'Act. S5–6',
    components: [ActividadesSemana6],
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
    label: 'Reflexión S5',
    components: [Metacognicion],
  },
  'metacognicion-semana-6': {
    label: 'Cierre',
    components: [MetacognicionFinal],
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
  if (sectionId === 'cambios-actualizacion') return 'cambios'
  return DEFAULT_VIEW
}
