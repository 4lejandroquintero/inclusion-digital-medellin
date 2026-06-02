import { Leaf, Users, HeartHandshake } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { desarrolloIntegralContent } from '../data/content'

const pillarIcons = [Users, HeartHandshake, Leaf]

export default function DesarrolloIntegral() {
  return (
    <SectionWrapper id={desarrolloIntegralContent.id} altBg>
      <SectionHeading
        title={desarrolloIntegralContent.title}
        badge="Articulación · DIS"
      />
      <p className="mx-auto mt-10 max-w-4xl whitespace-pre-line text-center text-base leading-relaxed text-slate-600 sm:text-lg">
        {desarrolloIntegralContent.text}
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {desarrolloIntegralContent.pillars.map((pillar, i) => {
          const Icon = pillarIcons[i]
          return (
            <div
              key={pillar.title}
              className="rounded-2xl bg-gradient-to-b from-white to-primary-50/30 p-8 text-center shadow-md ring-1 ring-primary-100"
            >
              <div className="mx-auto mb-4 inline-flex rounded-2xl bg-primary-600 p-4">
                <Icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.text}</p>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
