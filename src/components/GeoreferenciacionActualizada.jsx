import Georeferenciacion from './Georeferenciacion'
import { georeferenciacionActualizadaContent } from '../data/content'

export default function GeoreferenciacionActualizada() {
  return (
    <Georeferenciacion
      content={georeferenciacionActualizadaContent}
      badge="Actuar · Anexo I actualizado"
    />
  )
}
