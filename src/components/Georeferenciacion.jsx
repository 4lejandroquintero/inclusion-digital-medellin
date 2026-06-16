import { MapPin, Users, Package, AlertTriangle } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { georeferenciacionContent } from '../data/content'

export default function Georeferenciacion({
  content = georeferenciacionContent,
  badge = 'Actuar · Anexo georeferenciación',
}) {
  return (
    <SectionWrapper id={content.id} altBg>
      <SectionHeading
        title={content.title}
        subtitle={content.subtitle}
        badge={badge}
      />

      {content.versionLabel && (
        <div className="mx-auto mt-6 flex max-w-4xl justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
            {content.versionLabel}
          </span>
        </div>
      )}

      {content.versionNota && (
        <p className="mx-auto mt-4 max-w-4xl text-center text-sm text-slate-500">
          {content.versionNota}
        </p>
      )}

      {content.jacExplicacion && (
        <details className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm open:shadow-md">
          <summary className="cursor-pointer text-sm font-bold text-primary-700">
            Juntas de Acción Comunal (JAC)
          </summary>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            {content.jacExplicacion}
          </p>
        </details>
      )}

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
          <iframe
            title="Mapa Comuna 9 Buenos Aires Medellín"
            src={content.mapEmbed}
            className="h-72 w-full border-0 sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="space-y-4">
          {content.fields.map((field) => (
            <div
              key={field.label}
              className="flex flex-col gap-1 rounded-xl border border-slate-100 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-xs font-bold uppercase tracking-wide text-primary-600">
                {field.label}
              </span>
              <span className="text-sm font-medium text-slate-800">{field.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <Users className="mb-3 h-8 w-8 text-primary-500" aria-hidden="true" />
          <h4 className="font-semibold text-slate-800">
            {content.actoresTitle || 'Actores sociales'}
          </h4>
          <ul className="mt-3 space-y-2">
            {content.actores.map((a) => (
              <li key={a} className="text-sm text-slate-600">
                · {a}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <Package className="mb-3 h-8 w-8 text-primary-500" aria-hidden="true" />
          <h4 className="font-semibold text-slate-800">Recursos del territorio</h4>
          <ul className="mt-3 space-y-2">
            {content.recursos.map((r) => (
              <li key={r} className="text-sm text-slate-600">
                · {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <AlertTriangle className="mb-3 h-8 w-8 text-amber-500" aria-hidden="true" />
          <h4 className="font-semibold text-slate-800">Riesgos / limitantes</h4>
          <ul className="mt-3 space-y-2">
            {content.riesgos.map((r) => (
              <li key={r} className="text-sm text-slate-600">
                · {r}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-6 flex items-center gap-2 text-center text-xs text-slate-500 sm:justify-center">
        <MapPin className="h-4 w-4" aria-hidden="true" />
        Datos alineados al formato de georeferenciación del plan de acción
      </p>
    </SectionWrapper>
  )
}
