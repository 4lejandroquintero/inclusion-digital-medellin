import { Users, Briefcase, Heart, WifiOff } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import { problematicaContent } from '../data/content'

const iconMap = {
  users: Users,
  briefcase: Briefcase,
  heart: Heart,
  'wifi-off': WifiOff,
}

export default function Problematica() {
  return (
    <SectionWrapper id={problematicaContent.id} altBg>
      <div className="text-center">
        <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
          {problematicaContent.title}
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary-500" />
        <p className="mx-auto mt-8 max-w-3xl whitespace-pre-line text-left text-base leading-relaxed text-slate-600 sm:text-lg">
          {problematicaContent.text}
        </p>
        {problematicaContent.definitionBox && (
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border-2 border-primary-200 bg-primary-50/50 p-6 text-left shadow-sm">
            <h3 className="font-serif text-lg font-bold text-primary-900">
              {problematicaContent.definitionBox.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              {problematicaContent.definitionBox.text}
            </p>
          </div>
        )}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {problematicaContent.cards.map((card) => {
          const Icon = iconMap[card.icon]
          return (
            <article
              key={card.title}
              className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:bg-white hover:shadow-lg hover:shadow-primary-900/5"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary-100 p-3 transition-colors group-hover:bg-primary-600">
                <Icon
                  className="h-6 w-6 text-primary-600 transition-colors group-hover:text-white"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.description}</p>
            </article>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
