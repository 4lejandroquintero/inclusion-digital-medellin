import { GitBranch, BarChart3 } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { evaluacionPracticaContent } from '../data/content'

export default function EvaluacionPractica() {
  const c = evaluacionPracticaContent

  return (
    <SectionWrapper id={c.id}>
      <SectionHeading title={c.title} subtitle={c.subtitle} badge="Actuar · Evaluar" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Situación actual</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.situacionActual}</p>
        </div>
        <div className="rounded-2xl border border-violet-200 bg-violet-50/50 p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-violet-600">Situación deseada</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">{c.situacionDeseada}</p>
        </div>
      </div>

      <div className="mt-12">
        <div className="mb-6 flex items-center gap-2 text-primary-700">
          <GitBranch className="h-5 w-5" aria-hidden="true" />
          <h3 className="font-serif text-xl font-bold text-slate-900">Cadena de resultados</h3>
        </div>
        <div className="space-y-4">
          {c.cadena.map((item, i) => (
            <div
              key={item.nivel}
              className="flex gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-slate-900">{item.nivel}</p>
                <p className="mt-1 text-sm text-slate-600">{item.ejemplos}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <div className="mb-6 flex items-center gap-2 text-violet-700">
          <BarChart3 className="h-5 w-5" aria-hidden="true" />
          <h3 className="font-serif text-xl font-bold text-slate-900">Autoevaluación (5 criterios)</h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {c.criterios.map((item) => (
            <article
              key={item.nombre}
              className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-bold text-violet-700">{item.nombre}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
