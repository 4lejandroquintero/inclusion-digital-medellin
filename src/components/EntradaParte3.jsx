import { FileText, CheckCircle2 } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import { entradaParte3 } from '../data/content'

export default function EntradaParte3() {
  return (
    <SectionWrapper id={entradaParte3.id} className="!pt-8">
      <div className="overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-white via-emerald-50/50 to-white p-8 shadow-lg sm:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              {entradaParte3.partLabel}
            </span>
            <p className="mt-4 text-sm font-medium text-emerald-700">{entradaParte3.week}</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              {entradaParte3.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              {entradaParte3.lead}
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:max-w-md lg:grid-cols-1">
            {entradaParte3.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm ring-1 ring-emerald-100"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500"
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
