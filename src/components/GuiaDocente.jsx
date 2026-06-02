import { GraduationCap, ExternalLink, ChevronRight } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import { guiaDocenteContent } from '../data/guiaDocente'

export default function GuiaDocente() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <SectionWrapper id={guiaDocenteContent.id} altBg className="!py-10">
      <div className="rounded-2xl border-2 border-primary-300 bg-white shadow-lg ring-4 ring-primary-50">
        <div className="border-b border-primary-100 bg-primary-700 px-6 py-4 text-white sm:px-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-8 w-8 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-200">
                {guiaDocenteContent.actividad}
              </p>
              <h2 className="font-serif text-xl font-bold sm:text-2xl">
                {guiaDocenteContent.title}
              </h2>
              <p className="mt-1 text-sm text-primary-100">{guiaDocenteContent.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-6 sm:p-8">
          <div className="rounded-xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">
            <p className="text-xs font-bold uppercase text-slate-500">Enlace de la entrega</p>
            <a
              href={guiaDocenteContent.url}
              className="mt-1 break-all text-sm font-semibold text-primary-700 hover:underline"
            >
              {guiaDocenteContent.url}
              <ExternalLink className="ml-1 inline h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold text-slate-800">
              {guiaDocenteContent.rutaLabel}
            </p>
            <ol className="space-y-2">
              {guiaDocenteContent.ruta.map((paso) => (
                <li key={paso.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(paso.id)}
                    className="group flex w-full items-start gap-3 rounded-lg border border-slate-100 bg-slate-50/80 px-4 py-3 text-left transition hover:border-primary-200 hover:bg-primary-50"
                  >
                    <ChevronRight
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary-500 transition group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block text-sm font-semibold text-slate-800">
                        {paso.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-slate-500">{paso.requisito}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <p className="rounded-lg bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-900 ring-1 ring-amber-200">
            <strong>Alcance metodológico:</strong> {guiaDocenteContent.notaEntrega}
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
