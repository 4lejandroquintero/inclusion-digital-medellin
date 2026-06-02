import { ListChecks } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { planAccionContent } from '../data/content'

export default function PlanAccion() {
  return (
    <SectionWrapper id={planAccionContent.id} altBg>
      <SectionHeading
        title={planAccionContent.title}
        subtitle={planAccionContent.subtitle}
        badge="Actuar · Plan de acción"
      />
      <p className="mx-auto mt-8 max-w-4xl text-base leading-relaxed text-slate-600">
        {planAccionContent.intro}
      </p>
      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-slate-200">
          <thead>
            <tr className="bg-primary-700 text-left text-sm text-white">
              <th className="px-4 py-3 font-semibold">Fase</th>
              <th className="px-4 py-3 font-semibold">Actividades previstas</th>
              <th className="px-4 py-3 font-semibold">Avance en esta entrada</th>
            </tr>
          </thead>
          <tbody>
            {planAccionContent.phases.map((row, i) => (
              <tr
                key={row.fase}
                className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}
              >
                <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                  {row.fase}
                </td>
                <td className="px-4 py-4 text-sm text-slate-600">{row.actividades}</td>
                <td className="px-4 py-4 text-sm text-primary-800">{row.avance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mx-auto mt-6 flex max-w-4xl items-start gap-2 text-sm text-slate-500">
        <ListChecks className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        {planAccionContent.nota}
      </p>
    </SectionWrapper>
  )
}
