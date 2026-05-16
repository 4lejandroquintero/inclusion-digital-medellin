import { ArrowDown, Sparkles } from 'lucide-react'
import { heroContent } from '../data/content'

/**
 * Sección principal (hero) con título, CTA e ilustración.
 */
export default function Hero() {
  const scrollToIntro = () => {
    document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 pt-20">
      {/* Patrón decorativo de fondo */}
      <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent-500 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:gap-16 lg:py-24 lg:px-8">
        {/* Texto principal */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-primary-100 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <span>UNIMINUTO · Responsabilidad Social</span>
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-100 sm:text-xl">
            {heroContent.subtitle}
          </p>

          <button
            type="button"
            onClick={scrollToIntro}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-primary-800 shadow-lg shadow-primary-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-50 hover:shadow-xl"
          >
            {heroContent.cta}
            <ArrowDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
          </button>
        </div>

        {/* Imagen ilustrativa */}
        <div className="relative flex-1 w-full max-w-lg">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary-900/30 ring-1 ring-white/20">
            <img
              src={heroContent.image}
              alt={heroContent.imageAlt}
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
          </div>
          {/* Badge flotante */}
          <div className="absolute -bottom-4 -left-4 rounded-xl bg-white px-4 py-3 shadow-lg sm:-left-6">
            <p className="text-xs font-medium text-slate-500">Territorio</p>
            <p className="text-sm font-bold text-primary-800">Comuna 9 · Buenos Aires</p>
          </div>
        </div>
      </div>
    </section>
  )
}
