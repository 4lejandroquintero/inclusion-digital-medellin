import { Calendar, Wrench, Target } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { actividadesContent } from '../data/content'

const odsColors = {
  4: 'bg-red-600',
  9: 'bg-orange-600',
  10: 'bg-pink-700',
  11: 'bg-amber-600',
}

export default function ActividadesPlan() {
  return (
    <SectionWrapper id={actividadesContent.id}>
      <SectionHeading
        title={actividadesContent.title}
        subtitle={actividadesContent.subtitle}
        badge="Actuar · Semanas 3 y 4"
      />

      <div className="mt-14 space-y-16">
        {actividadesContent.activities.map((activity, index) => (
          <article
            key={activity.title}
            className={`grid gap-10 lg:grid-cols-2 lg:items-start ${
              index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
              <img
                src={activity.image}
                alt={activity.title}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="flex items-center justify-between bg-slate-900 px-5 py-3 text-white">
                <span className="flex items-center gap-2 text-sm font-medium">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  {activity.week}
                </span>
                <span className="flex items-center gap-2 text-xs text-slate-300">
                  <Wrench className="h-3.5 w-3.5" aria-hidden="true" />
                  {activity.tool}
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                {activity.title}
              </h3>
              <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-slate-600">
                {activity.description}
              </p>

              <div className="mt-8">
                <h4 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                  Ejecución de la actividad
                </h4>
                <ol className="mt-4 space-y-3">
                  {activity.execution.map((step, i) => (
                    <li
                      key={step}
                      className="flex gap-4 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-10">
                <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase text-slate-700">
                  <Target className="h-4 w-4 text-primary-500" aria-hidden="true" />
                  Reflexión ODS
                </h4>
                <div className="space-y-4">
                  {activity.ods.map((ods) => (
                    <div
                      key={ods.number}
                      className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white ${odsColors[ods.number] || 'bg-primary-600'}`}
                        >
                          {ods.number}
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase text-slate-500">ODS</p>
                          <p className="font-semibold text-slate-800">{ods.name}</p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {ods.reflection}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
