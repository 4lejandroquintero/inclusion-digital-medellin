import { Github, Heart } from 'lucide-react'
import { footerContent } from '../data/content'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-xl text-sm leading-relaxed">{footerContent.text}</p>

          <p className="flex items-center gap-1 text-xs text-slate-500">
            Hecho con
            <Heart className="h-3.5 w-3.5 text-red-400" aria-hidden="true" />
            para la comunidad
          </p>

          <div className="flex items-center gap-4">
            <a
              href={footerContent.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm transition-colors hover:bg-primary-600 hover:text-white"
              aria-label="Ver repositorio en GitHub"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
              GitHub
            </a>
          </div>

          <div className="mt-4 w-full border-t border-slate-800 pt-6">
            <p className="text-xs text-slate-500">
              © {currentYear} Inclusión Digital Medellín · UNIMINUTO
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
