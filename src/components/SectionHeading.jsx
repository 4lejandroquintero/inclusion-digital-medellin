/**
 * Encabezado reutilizable para secciones del blog.
 */
export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  badge,
}) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700">
          {badge}
        </span>
      )}
      <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-primary-500 ${centered ? 'mx-auto' : ''}`}
      />
      {subtitle && (
        <p
          className={`mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
