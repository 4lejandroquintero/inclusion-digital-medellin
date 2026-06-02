import { BookOpen, Lightbulb, Link2 } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { sintesisLecturas } from '../data/content'

export default function SintesisLecturas() {
  return (
    <SectionWrapper id={sintesisLecturas.id}>
      <SectionHeading
        title={sintesisLecturas.title}
        subtitle={sintesisLecturas.subtitle}
        badge="Juzgar · Lectura minuciosa"
      />

      <div className="mt-12 space-y-10">
        {sintesisLecturas.readings.map((reading) => (
          <article
            key={reading.title}
            className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition-shadow hover:shadow-lg"
          >
            <div className="bg-gradient-to-r from-primary-700 to-primary-600 px-6 py-5 text-white sm:px-8">
              <div className="flex items-start gap-3">
                <BookOpen className="mt-1 h-6 w-6 shrink-0 opacity-90" aria-hidden="true" />
                <div>
                  <p className="text-sm text-primary-100">{reading.authors} ({reading.year})</p>
                  <h3 className="mt-1 font-serif text-lg font-bold sm:text-xl">{reading.title}</h3>
                  <p className="mt-1 text-xs text-primary-200">{reading.source}</p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-2">
              <div>
                <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase text-slate-700">
                  <Lightbulb className="h-4 w-4 text-amber-500" aria-hidden="true" />
                  Ideas principales
                </h4>
                <ul className="space-y-3">
                  {reading.ideas.map((idea) => (
                    <li
                      key={idea}
                      className="flex gap-3 text-sm leading-relaxed text-slate-600 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-primary-500 before:content-['']"
                    >
                      {idea}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-slate-50 p-5 ring-1 ring-slate-100">
                <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase text-primary-700">
                  <Link2 className="h-4 w-4" aria-hidden="true" />
                  Vínculo con el proyecto
                </h4>
                <p className="text-sm leading-relaxed text-slate-600">{reading.projectLink}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {sintesisLecturas.investigacionAdicional && (
        <div className="mt-10 space-y-4">
          <h4 className="text-center font-serif text-xl font-bold text-slate-900">
            {sintesisLecturas.investigacionAdicional.title}
          </h4>
          {sintesisLecturas.investigacionAdicional.items.map((item) => (
            <div
              key={item.authors}
              className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-semibold text-primary-700">{item.authors}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.idea}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 rounded-xl border border-dashed border-primary-200 bg-primary-50/50 p-6">
        <h4 className="text-sm font-bold text-slate-800">Otros recursos multimedia y bibliográficos</h4>
        <ul className="mt-3 space-y-2">
          {sintesisLecturas.complementarias.map((item) => (
            <li key={item} className="text-sm text-slate-600">
              · {item}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
