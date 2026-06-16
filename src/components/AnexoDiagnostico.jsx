import { ClipboardList, Table } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { anexoDiagnosticoContent } from '../data/content'

export default function AnexoDiagnostico() {
  return (
    <SectionWrapper id={anexoDiagnosticoContent.id}>
      <SectionHeading
        title={anexoDiagnosticoContent.title}
        subtitle={anexoDiagnosticoContent.subtitle}
        badge="Actuar · Anexo diagnóstico"
      />

      <div className="mx-auto mt-6 flex max-w-4xl justify-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
          {anexoDiagnosticoContent.versionLabel}
        </span>
      </div>

      <p className="mx-auto mt-8 max-w-4xl text-base leading-relaxed text-slate-600">
        {anexoDiagnosticoContent.intro}
      </p>

      <div className="mt-12 rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <ClipboardList className="h-6 w-6 text-primary-600" aria-hidden="true" />
          <h3 className="font-serif text-xl font-bold text-slate-900">
            {anexoDiagnosticoContent.instrumentoTitle}
          </h3>
        </div>
        <ol className="space-y-3">
          {anexoDiagnosticoContent.items.map((item, i) => (
            <li
              key={item}
              className="flex gap-4 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-10 overflow-x-auto rounded-2xl bg-white shadow-md ring-1 ring-slate-200">
        <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-4">
          <Table className="h-5 w-5 text-primary-600" aria-hidden="true" />
          <h3 className="font-semibold text-slate-800">{anexoDiagnosticoContent.matrizTitle}</h3>
        </div>
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr className="bg-primary-700 text-left text-sm text-white">
              {anexoDiagnosticoContent.matrizHeaders.map((header) => (
                <th key={header} className="px-4 py-3 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {anexoDiagnosticoContent.matrizFilas.map((fila, i) => (
              <tr key={fila.necesidad} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                <td className="px-4 py-4 text-sm text-slate-700">{fila.necesidad}</td>
                <td className="px-4 py-4 text-sm text-slate-600">{fila.poblacion}</td>
                <td className="px-4 py-4 text-sm font-medium text-emerald-700">{fila.prioridad}</td>
                <td className="px-4 py-4 text-sm text-primary-800">{fila.actividad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mx-auto mt-6 max-w-4xl rounded-xl bg-amber-50 px-6 py-4 text-sm leading-relaxed text-amber-900 ring-1 ring-amber-200">
        {anexoDiagnosticoContent.notaAplicacion}
      </p>
    </SectionWrapper>
  )
}
