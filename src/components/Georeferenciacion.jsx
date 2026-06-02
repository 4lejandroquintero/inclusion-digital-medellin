import { MapPin, Users, Package, AlertTriangle } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { georeferenciacionContent } from '../data/content'

export default function Georeferenciacion() {
  return (
    <SectionWrapper id={georeferenciacionContent.id} altBg>
      <SectionHeading
        title={georeferenciacionContent.title}
        subtitle={georeferenciacionContent.subtitle}
        badge="Actuar · Anexo georeferenciación"
      />

      {georeferenciacionContent.jacExplicacion && (
        <details className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm open:shadow-md">
          <summary className="cursor-pointer text-sm font-bold text-primary-700">
            Juntas de Acción Comunal (JAC)
          </summary>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            {georeferenciacionContent.jacExplicacion}
          </p>
        </details>
      )}

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
          <iframe
            title="Mapa Comuna 9 Buenos Aires Medellín"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.248!2d-75.552!3d6.252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428d4ed8e8f0d%3A0x8e4428d4ed8e8f0d!2sBuenos%20Aires%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1"
            className="h-72 w-full border-0 sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="space-y-4">
          {georeferenciacionContent.fields.map((field) => (
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
            {georeferenciacionContent.actoresTitle || 'Actores sociales'}
          </h4>
          <ul className="mt-3 space-y-2">
            {georeferenciacionContent.actores.map((a) => (
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
            {georeferenciacionContent.recursos.map((r) => (
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
            {georeferenciacionContent.riesgos.map((r) => (
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
