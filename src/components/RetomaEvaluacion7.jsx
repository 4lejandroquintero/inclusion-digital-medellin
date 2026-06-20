import { BookOpen, Target } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { retomaProyectoContent, indicadoresCadenaContent } from '../data/content'

export default function RetomaEvaluacion7() {
  return (
    <SectionWrapper id="retoma-proyecto">
      <SectionHeading
        title={retomaProyectoContent.title}
        subtitle={retomaProyectoContent.subtitle}
        badge="Actuar"
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {retomaProyectoContent.tematicas.map((t) => (
          <article
            key={t.titulo}
            className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-bold text-primary-700">{t.titulo}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.texto}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-primary-100 bg-primary-50/40 p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-2 text-primary-700">
          <BookOpen className="h-5 w-5" aria-hidden="true" />
          <h3 className="font-serif text-lg font-bold text-slate-900">Síntesis de lecturas (Semana 7)</h3>
        </div>
        <ul className="space-y-4">
          {retomaProyectoContent.lecturas.map((l) => (
            <li key={l.fuente} className="text-sm leading-relaxed text-slate-700">
              <strong>{l.fuente}:</strong> {l.idea}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <div className="mb-6 flex items-center gap-2 text-violet-700">
          <Target className="h-5 w-5" aria-hidden="true" />
          <h3 className="font-serif text-xl font-bold text-slate-900">
            {indicadoresCadenaContent.title}
          </h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-4 py-3">Nivel cadena</th>
                <th className="px-4 py-3">Indicador</th>
                <th className="px-4 py-3">Fuente de verificación</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {indicadoresCadenaContent.filas.map((f) => (
                <tr key={f.nivel}>
                  <td className="px-4 py-3 font-medium text-slate-900">{f.nivel}</td>
                  <td className="px-4 py-3 text-slate-600">{f.indicador}</td>
                  <td className="px-4 py-3 text-slate-600">{f.fuente}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionWrapper>
  )
}
