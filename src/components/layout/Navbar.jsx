import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

const navLinks = [
  { to: '/', label: 'Acasă' },
  { to: '/about', label: 'Despre' },
  { to: '/projects', label: 'Proiecte' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

function SunIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}

function MenuIcon({ open }) {
  return open ? (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ) : (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Sticky Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50'
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-brand-500 rounded-lg flex items-center justify-center font-display font-bold text-white text-lg group-hover:bg-brand-600 transition-colors">
                E15
              </div>
              <span className="font-display font-bold text-lg text-slate-800 dark:text-white hidden sm:block">
                Echipa 15
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `nav-link pb-1 ${isActive ? 'text-brand-500 dark:text-brand-400 after:w-full' : ''}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(s => !s)}
                className="p-2 rounded-lg text-slate-500 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors"
                aria-label="Caută"
              >
                <SearchIcon />
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggle}
                className="p-2 rounded-lg text-slate-500 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors"
                aria-label={dark ? 'Mod luminos' : 'Mod întunecat'}
              >
                {dark ? <SunIcon /> : <MoonIcon />}
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(o => !o)}
                className="md:hidden p-2 rounded-lg text-slate-500 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors"
                aria-label="Meniu"
              >
                <MenuIcon open={menuOpen} />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="pb-4 animate-fade-in">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Caută în site..."
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-body focus:outline-none focus:ring-2 focus:ring-brand-500"
                autoFocus
              />
            </div>
          )}
        </div>
      </header>

      {/* Mobile Offcanvas Overlay */}
      {menuOpen && (
        <div
          className="offcanvas-overlay md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Offcanvas Menu */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-slate-900 z-50 shadow-2xl transform transition-transform duration-300 md:hidden ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-brand-500 rounded-lg flex items-center justify-center font-display font-bold text-white">AI</div>
              <span className="font-display font-bold text-slate-800 dark:text-white">Raicici Radovan</span>
            </div>
            <button onClick={() => setMenuOpen(false)} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
              <MenuIcon open={true} />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg font-body font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={toggle}
              className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-body font-medium transition-colors"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
              {dark ? 'Mod luminos' : 'Mod întunecat'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
