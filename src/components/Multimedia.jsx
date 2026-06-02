import { Play, ExternalLink, Layout, Globe } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { multimediaContent } from '../data/content'

const TED_URL =
  'https://www.ted.com/talks/leonardo_izquierdo_desarrollo_sostenible_mas_alla_del_paradigma'

export default function Multimedia() {
  return (
    <SectionWrapper id={multimediaContent.id}>
      <SectionHeading
        title={multimediaContent.title}
        subtitle={multimediaContent.subtitle}
        badge="Multimedia"
      />

      <div className="mt-10 rounded-2xl border border-primary-200 bg-primary-50/60 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <Layout className="h-10 w-10 shrink-0 text-primary-600" aria-hidden="true" />
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-900">
              {multimediaContent.blogPresentation.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {multimediaContent.blogPresentation.text}
            </p>
          </div>
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {multimediaContent.blogPresentation.sections.map((s) => (
            <li
              key={s}
              className="rounded-lg bg-white px-4 py-3 text-sm text-slate-700 shadow-sm ring-1 ring-primary-100"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-2xl bg-slate-900 shadow-xl">
            <div className="flex aspect-video flex-col items-center justify-center gap-4 p-8 text-center text-white">
              <div className="rounded-full bg-primary-500/30 p-5">
                <Play className="h-12 w-12 text-primary-200" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm text-primary-200">{multimediaContent.video.author}</p>
                <h3 className="mt-2 font-serif text-xl font-bold sm:text-2xl">
                  {multimediaContent.video.title}
                </h3>
                <p className="mt-3 max-w-md text-sm text-slate-300">
                  {multimediaContent.video.note}
                </p>
              </div>
              <a
                href={TED_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-primary-50"
              >
                Ver charla en TED.com
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 lg:col-span-2">
          <p className="text-sm leading-relaxed text-slate-600">
            {multimediaContent.videoContext}
          </p>
          <a
            href="https://sdgs.un.org/goals"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-primary-700 shadow-sm transition hover:border-primary-300"
          >
            <Globe className="h-5 w-5" aria-hidden="true" />
            Agenda 2030 y los 17 ODS (ONU)
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
