import { useEffect, useState } from 'react'
import { Button } from './ui/Button'

const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="section-container flex h-14 items-center justify-between sm:h-16"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="flex items-center gap-2 text-base font-bold tracking-tight text-foreground"
          aria-label="ApplyFlow home"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-xs font-bold text-white">
            AF
          </span>
          <span>ApplyFlow</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="px-3 py-2">
              Sign in
            </Button>
            <Button href="#cta" className="px-4 py-2">
              Start organizing
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-14 z-40 bg-background md:hidden"
        >
          <div className="section-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-stone-100"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className="my-3 border-border" />
            <Button variant="ghost" className="w-full justify-start px-3">
              Sign in
            </Button>
            <Button href="#cta" className="mt-2 w-full" onClick={() => setMenuOpen(false)}>
              Start organizing
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
