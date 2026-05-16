import { useScrollAnimation } from '../hooks/useScrollAnimation'

/**
 * Contenedor reutilizable para secciones con animación al scroll.
 */
export default function SectionWrapper({
  id,
  children,
  className = '',
  altBg = false,
}) {
  const ref = useScrollAnimation()

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${altBg ? 'bg-white' : 'bg-slate-50'} ${className}`}
    >
      <div ref={ref} className="fade-in-up mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
