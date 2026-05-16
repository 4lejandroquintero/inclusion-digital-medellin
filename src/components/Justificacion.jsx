import { Scale } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import { justificacionContent } from '../data/content'

export default function Justificacion() {
  return (
    <SectionWrapper id={justificacionContent.id}>
      <div className="grid items-center gap-10 lg:grid-cols-5">
        <div className="flex justify-center lg:col-span-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary-100/50" />
            <div className="relative flex h-48 w-48 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 shadow-xl sm:h-56 sm:w-56">
              <Scale className="h-20 w-20 text-white/90" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
            {justificacionContent.title}
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary-500" />
          <p className="mt-8 whitespace-pre-line text-base leading-relaxed text-slate-600 sm:text-lg">
            {justificacionContent.text}
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
