import { ArrowRight, RefreshCw } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { cambiosActualizacionContent } from '../data/content'

export default function CambiosActualizacion() {
  return (
    <SectionWrapper id={cambiosActualizacionContent.id} altBg>
      <SectionHeading
        title={cambiosActualizacionContent.title}
        subtitle={cambiosActualizacionContent.subtitle}
        badge="Semana 6 · Registro de cambios"
      />

      <p className="mx-auto mt-8 max-w-4xl text-base leading-relaxed text-slate-600">
        {cambiosActualizacionContent.intro}
      </p>

      <div className="mt-12 space-y-6">
        {cambiosActualizacionContent.cambios.map((cambio) => (
          <article
            key={cambio.area}
            className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50 px-6 py-4">
              <RefreshCw className="h-5 w-5 text-emerald-600" aria-hidden="true" />
              <h3 className="font-semibold text-slate-800">{cambio.area}</h3>
            </div>
            <div className="grid gap-0 md:grid-cols-2">
              <div className="border-b border-slate-100 p-6 md:border-b-0 md:border-r">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Semana 5
                </p>
                <p className="text-sm leading-relaxed text-slate-600">{cambio.semana5}</p>
              </div>
              <div className="bg-emerald-50/50 p-6">
                <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-emerald-700">
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  Semana 6
                </p>
                <p className="text-sm leading-relaxed text-slate-700">{cambio.semana6}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
