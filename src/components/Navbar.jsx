import { useState, useEffect } from 'react'
import { Menu, X, Monitor } from 'lucide-react'
import { navLinks } from '../data/navigation'

/**
 * Barra de navegación fija con scroll suave y menú responsive.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-primary-900/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleNavClick('inicio')}
          className={`flex items-center gap-2 transition-colors ${
            scrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white hover:text-primary-100'
          }`}
        >
          <Monitor
            className={`h-7 w-7 ${scrolled ? 'text-primary-600' : 'text-primary-200'}`}
            aria-hidden="true"
          />
          <span className="text-lg font-semibold tracking-tight">Inclusión Digital</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-slate-600 hover:bg-primary-50 hover:text-primary-700'
                    : 'text-primary-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`rounded-lg p-2 transition-colors md:hidden ${
            scrolled
              ? 'text-slate-600 hover:bg-primary-50'
              : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white/98 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-600 transition-colors hover:bg-primary-50 hover:text-primary-700"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
