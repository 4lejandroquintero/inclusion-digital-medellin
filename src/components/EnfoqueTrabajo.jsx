import { Info, Monitor, MapPin, ClipboardList } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import { enfoqueTrabajoContent } from '../data/content'

const icons = [MapPin, ClipboardList, Monitor]

export default function EnfoqueTrabajo() {
  return (
    <SectionWrapper id={enfoqueTrabajoContent.id}>
      <div className="rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-amber-100 p-3">
            <Info className="h-7 w-7 text-amber-700" aria-hidden="true" />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
              {enfoqueTrabajoContent.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              {enfoqueTrabajoContent.lead}
            </p>
          </div>
        </div>

        <ul className="mt-8 space-y-4">
          {enfoqueTrabajoContent.points.map((point, i) => {
            const Icon = icons[i] || Info
            return (
              <li
                key={point}
                className="flex gap-4 rounded-xl bg-white/80 px-5 py-4 text-sm leading-relaxed text-slate-600 shadow-sm ring-1 ring-amber-100"
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
                {point}
              </li>
            )
          })}
        </ul>
      </div>
    </SectionWrapper>
  )
}
