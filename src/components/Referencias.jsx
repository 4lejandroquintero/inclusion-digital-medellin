import { BookMarked } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import { referencias } from '../data/content'

/**
 * Formatea una referencia en estilo APA simplificado.
 */
function formatAPA(ref) {
  return `${ref.authors} (${ref.year}). ${ref.title}`
}

export default function Referencias() {
  return (
    <SectionWrapper id="referencias" altBg>
      <div className="text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary-100 p-3">
          <BookMarked className="h-6 w-6 text-primary-600" aria-hidden="true" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
          Referencias
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary-500" />
        <p className="mt-4 text-sm text-slate-500">Formato APA</p>
      </div>

      {/* Timeline de referencias */}
      <div className="relative mx-auto mt-12 max-w-3xl">
        <div
          className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200 sm:left-1/2 sm:-translate-x-px"
          aria-hidden="true"
        />
        {referencias.map((ref, index) => (
          <article
            key={ref.title}
            className={`relative mb-8 flex ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}
          >
            <div
              className={`w-full pl-12 sm:w-[calc(50%-2rem)] sm:pl-0 ${
                index % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'
              }`}
            >
              <div className="group rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md">
                <span className="inline-block rounded-full bg-primary-100 px-3 py-0.5 text-xs font-semibold text-primary-700">
                  {ref.year}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 italic">
                  {formatAPA(ref)}
                </p>
              </div>
            </div>
            <div
              className="absolute left-4 top-5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary-500 bg-white sm:left-1/2"
              aria-hidden="true"
            />
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
