import { useEffect } from 'react'
import { viewConfig } from '../config/views'

/**
 * Renderiza únicamente los componentes de la vista activa.
 */
export default function ViewPanel({ viewId, onNavigate }) {
  const config = viewConfig[viewId]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [viewId])

  if (!config) return null

  const navigateProps = config.needsNavigate ? { onNavigate } : {}

  return (
    <div key={viewId} className="animate-in fade-in duration-300">
      {config.components.map((Component) => (
        <Component key={Component.name} {...navigateProps} />
      ))}
    </div>
  )
}
