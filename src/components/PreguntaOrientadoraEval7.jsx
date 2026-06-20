import { HelpCircle } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { preguntaOrientadoraEval7 } from '../data/content'

export default function PreguntaOrientadoraEval7() {
  return (
    <SectionWrapper id={preguntaOrientadoraEval7.id} altBg>
      <SectionHeading badge="Pregunta orientadora" title="Ver · Reflexionar" centered />
      <blockquote className="mx-auto mt-10 max-w-4xl rounded-2xl border-l-4 border-violet-500 bg-violet-50/80 p-8 shadow-sm">
        <div className="mb-4 flex items-center gap-2 text-violet-700">
          <HelpCircle className="h-6 w-6" aria-hidden="true" />
          <span className="text-sm font-semibold uppercase tracking-wide">Pregunta del curso</span>
        </div>
        <p className="font-serif text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
          {preguntaOrientadoraEval7.question}
        </p>
      </blockquote>
      <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-100">
        <h3 className="text-sm font-bold uppercase tracking-wider text-violet-600">Respuesta</h3>
        <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-slate-600 sm:text-lg">
          {preguntaOrientadoraEval7.answer}
        </p>
      </div>
    </SectionWrapper>
  )
}
