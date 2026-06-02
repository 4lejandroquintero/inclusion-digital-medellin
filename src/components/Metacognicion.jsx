import { Brain, Sparkles } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { metacognicionContent } from '../data/content'

export default function Metacognicion() {
  return (
    <SectionWrapper id={metacognicionContent.id} altBg>
      <SectionHeading
        title={metacognicionContent.title}
        badge="Devolución creativa · Metacognición"
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-3">
        <div className="relative lg:col-span-1">
          <div className="sticky top-28 flex flex-col items-center rounded-3xl bg-gradient-to-br from-primary-700 to-primary-900 p-10 text-center text-white shadow-xl">
            <Brain className="h-16 w-16 text-primary-200" aria-hidden="true" />
            <p className="mt-6 font-serif text-lg font-bold">Lo que aprendí</p>
            <Sparkles className="mt-4 h-6 w-6 text-accent-500" aria-hidden="true" />
          </div>
        </div>
        <div className="lg:col-span-2">
          <p className="whitespace-pre-line text-base leading-relaxed text-slate-600 sm:text-lg">
            {metacognicionContent.text}
          </p>
          <ul className="mt-8 space-y-4">
            {metacognicionContent.learnings.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 rounded-xl border border-primary-100 bg-white px-5 py-4 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                  ✓
                </span>
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
