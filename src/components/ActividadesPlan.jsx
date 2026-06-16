import { Calendar, Wrench, Target, Map, ClipboardList, Monitor, BarChart3 } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { actividadesContent } from '../data/content'

const odsColors = {
  4: 'bg-red-600',
  8: 'bg-rose-700',
  9: 'bg-orange-600',
  10: 'bg-pink-700',
  11: 'bg-amber-600',
  17: 'bg-blue-700',
}

const visualIcons = {
  map: Map,
  clipboard: ClipboardList,
  monitor: Monitor,
  chart: BarChart3,
}

export default function ActividadesPlan({
  content = actividadesContent,
  badge = 'Actuar · Semanas 3 y 4',
}) {
  return (
    <SectionWrapper id={content.id}>
      <SectionHeading
        title={content.title}
        subtitle={content.subtitle}
        badge={badge}
      />

      {content.disclaimer && (
        <p className="mx-auto mt-8 max-w-4xl rounded-xl bg-slate-100 px-6 py-4 text-center text-sm leading-relaxed text-slate-600">
          {content.disclaimer}
        </p>
      )}

      <div className="mt-14 space-y-16">
        {content.activities.map((activity, index) => {
          const VisualIcon = visualIcons[activity.visual] || Map
          return (
            <article
              key={activity.title}
              className={`grid gap-10 lg:grid-cols-2 lg:items-start ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
                <div className="flex aspect-[4/3] flex-col items-center justify-center bg-gradient-to-br from-primary-600 to-primary-900 p-8 text-center text-white">
                  <VisualIcon className="h-20 w-20 text-primary-200" aria-hidden="true" />
                  <p className="mt-4 text-sm font-medium text-primary-100">
                    Representación esquemática de la actividad
                  </p>
                  <span className="mt-4 rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase tracking-wide">
                    {activity.status}
                  </span>
                </div>
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
                    {activity.executionTitle || 'Pasos realizados en esta fase'}
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

                {activity.encuestaEjemplo && (
                  <div className="mt-8 rounded-xl bg-slate-50 p-5 ring-1 ring-slate-200">
                    <h4 className="text-sm font-bold text-slate-800">
                      Ítems del instrumento de diagnóstico (diseño)
                    </h4>
                    <ul className="mt-3 list-inside list-decimal space-y-2 text-sm text-slate-600">
                      {activity.encuestaEjemplo.map((q) => (
                        <li key={q}>{q}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {activity.modulosFormativos && (
                  <div className="mt-8 rounded-xl bg-slate-50 p-5 ring-1 ring-slate-200">
                    <h4 className="text-sm font-bold text-slate-800">Módulos formativos diseñados</h4>
                    <ul className="mt-3 space-y-3">
                      {activity.modulosFormativos.map((mod) => (
                        <li
                          key={mod.nombre}
                          className="rounded-lg bg-white px-4 py-3 text-sm ring-1 ring-slate-100"
                        >
                          <span className="font-semibold text-slate-800">{mod.nombre}</span>
                          <span className="mt-1 block text-slate-500">
                            {mod.duracion} · {mod.publico}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activity.indicadoresEjemplo && (
                  <div className="mt-8 rounded-xl bg-slate-50 p-5 ring-1 ring-slate-200">
                    <h4 className="text-sm font-bold text-slate-800">Indicadores de evaluación</h4>
                    <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-600">
                      {activity.indicadoresEjemplo.map((ind) => (
                        <li key={ind}>{ind}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {activity.proximosPasos && (
                  <div className="mt-8 rounded-xl border border-dashed border-primary-200 bg-primary-50/50 p-5">
                    <h4 className="text-sm font-bold text-primary-800">Próximos pasos (fase de ejecución)</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {activity.proximosPasos}
                    </p>
                  </div>
                )}

                <div className="mt-10">
                  <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase text-slate-700">
                    <Target className="h-4 w-4 text-primary-500" aria-hidden="true" />
                    Reflexión ODS (desde el diseño de la actividad)
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
          )
        })}
      </div>
    </SectionWrapper>
  )
}
