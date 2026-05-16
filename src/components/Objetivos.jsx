import { Target, CheckCircle2 } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import { objetivosContent } from '../data/content'

export default function Objetivos() {
  return (
    <SectionWrapper id={objetivosContent.id} altBg>
      <div className="text-center">
        <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
          {objetivosContent.title}
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary-500" />
      </div>

      {/* Objetivo general */}
      <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-gradient-to-r from-primary-700 to-primary-600 p-8 text-center text-white shadow-xl sm:p-10">
        <div className="mb-4 inline-flex rounded-full bg-white/20 p-3">
          <Target className="h-8 w-8" aria-hidden="true" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-200">
          {objetivosContent.general.label}
        </p>
        <p className="mt-4 font-serif text-xl leading-relaxed sm:text-2xl">
          {objetivosContent.general.text}
        </p>
      </div>

      {/* Objetivos específicos */}
      <div className="mt-12">
        <h3 className="mb-8 text-center text-lg font-semibold text-slate-700">
          Objetivos Específicos
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          {objetivosContent.specific.map((objetivo, index) => (
            <div
              key={objetivo}
              className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                <span className="text-lg font-bold">{index + 1}</span>
              </div>
              <CheckCircle2
                className="mb-3 h-5 w-5 text-primary-500 opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-slate-600">{objetivo}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
