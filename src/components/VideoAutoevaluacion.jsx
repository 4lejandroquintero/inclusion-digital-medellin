import { ExternalLink } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { videoAutoevaluacionContent } from '../data/content'

export default function VideoAutoevaluacion() {
  const { title, subtitle, videos } = videoAutoevaluacionContent

  return (
    <SectionWrapper id="video-autoevaluacion" altBg>
      <SectionHeading title={title} subtitle={subtitle} badge="Video · Evaluación 7" />

      <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-10">
        {videos.map((video) => (
          <div key={video.youtubeId}>
            <p className="mb-3 text-sm font-semibold text-violet-700">{video.label}</p>
            <div className="overflow-hidden rounded-2xl bg-slate-900 shadow-xl">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={`${title} — ${video.label}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-800"
            >
              Ver en YouTube
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
