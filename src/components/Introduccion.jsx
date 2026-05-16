import { BookOpen } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import { introContent } from '../data/content'

export default function Introduccion() {
  return (
    <SectionWrapper id={introContent.id}>
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary-100 p-3">
          <BookOpen className="h-6 w-6 text-primary-600" aria-hidden="true" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
          Introducción
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary-500" />
        <p className="mt-8 whitespace-pre-line text-left text-base leading-relaxed text-slate-600 sm:text-lg">
          {introContent.text}
        </p>
      </div>
    </SectionWrapper>
  )
}
