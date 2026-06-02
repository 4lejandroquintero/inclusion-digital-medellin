import { Play, ExternalLink, ImageIcon } from 'lucide-react'
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
            Recurso audiovisual obligatorio de la semana. La charla de Leonardo Izquierdo invita a
            repensar el desarrollo sostenible más allá del paradigma tradicional, en diálogo con las
            lecturas de Jiménez Herrero (2018).
          </p>
          <a
            href="https://sdgs.un.org/goals"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-800"
          >
            Agenda 2030 y los 17 ODS (ONU)
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {multimediaContent.gallery.map((item) => (
          <figure
            key={item.caption}
            className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 rounded-lg bg-white/90 p-2">
                <ImageIcon className="h-4 w-4 text-primary-600" aria-hidden="true" />
              </div>
            </div>
            <figcaption className="p-4 text-center text-sm font-medium text-slate-700">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionWrapper>
  )
}
