import { MapPin, GraduationCap, Building2, Calendar } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import { contextoContent } from '../data/content'

const statIcons = [MapPin, GraduationCap, Building2, Calendar]

export default function Contexto() {
  return (
    <SectionWrapper id={contextoContent.id}>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
            {contextoContent.title}
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary-500" />
          <p className="mt-8 whitespace-pre-line text-base leading-relaxed text-slate-600 sm:text-lg">
            {contextoContent.text}
          </p>
        </div>

        {/* Mapa visual simplificado */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 p-8 text-white shadow-xl">
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
              <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="50" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="100" cy="100" r="8" fill="white" />
            </svg>
          </div>
          <div className="relative">
            <MapPin className="mb-4 h-10 w-10" aria-hidden="true" />
            <h3 className="text-2xl font-bold">Medellín, Antioquia</h3>
            <p className="mt-2 text-primary-100">Comuna 9 — Buenos Aires</p>
            <p className="mt-4 text-sm text-primary-200">
              Zona urbana con diversidad social y cultural. Territorio de intervención
              para fortalecer competencias digitales comunitarias.
            </p>
          </div>
        </div>
      </div>

      {/* Tarjetas informativas */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contextoContent.stats.map((stat, index) => {
          const Icon = statIcons[index]
          return (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <Icon className="mx-auto mb-3 h-6 w-6 text-primary-500" aria-hidden="true" />
              <p className="text-xl font-bold text-primary-800">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
