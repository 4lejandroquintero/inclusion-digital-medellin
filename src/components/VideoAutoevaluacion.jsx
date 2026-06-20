import { Video } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { videoAutoevaluacionContent } from '../data/content'

export default function VideoAutoevaluacion() {
  const { title, subtitle, youtubeId, pendiente } = videoAutoevaluacionContent
  const hasVideo = Boolean(youtubeId?.trim())

  return (
    <SectionWrapper id="video-autoevaluacion" altBg>
      <SectionHeading title={title} subtitle={subtitle} badge="Video · Evaluación 7" />

      <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl bg-slate-900 shadow-xl">
        {hasVideo ? (
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="flex aspect-video flex-col items-center justify-center gap-4 p-8 text-center text-white">
            <div className="rounded-full bg-violet-500/30 p-5">
              <Video className="h-12 w-12 text-violet-200" aria-hidden="true" />
            </div>
            <p className="font-serif text-xl font-bold">{pendiente}</p>
            <p className="max-w-md text-sm text-slate-300">
              El enlace de YouTube se publicará aquí después de grabar y subir el video de
              autoevaluación.
            </p>
          </div>
        )}
      </div>
    </SectionWrapper>
  )
}
