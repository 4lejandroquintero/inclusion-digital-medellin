import { FileText, CheckCircle2 } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import { entradaEvaluacion7 } from '../data/content'

export default function EntradaEvaluacion7() {
  return (
    <SectionWrapper id={entradaEvaluacion7.id} className="!pt-8">
      <div className="overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-br from-white via-violet-50/50 to-white p-8 shadow-lg sm:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              {entradaEvaluacion7.partLabel}
            </span>
            <p className="mt-4 text-sm font-medium text-violet-700">{entradaEvaluacion7.week}</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              {entradaEvaluacion7.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              {entradaEvaluacion7.lead}
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:max-w-md lg:grid-cols-1">
            {entradaEvaluacion7.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm ring-1 ring-violet-100"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-violet-500"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
