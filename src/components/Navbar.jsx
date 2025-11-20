import React, { useState, useEffect } from 'react'
import { Menu, X, FlaskConical, ShieldCheck, Rocket, ChevronRight } from 'lucide-react'

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </a>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'bg-white/70 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-pink-500 via-rose-500 to-blue-500 shadow-md">
              <FlaskConical className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-slate-800">BioAI Platform</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#technology">Technology</NavLink>
            <NavLink href="#use-cases">Use Cases</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">
              <ShieldCheck className="w-4 h-4" />
              Request Access
            </a>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-slate-200">
          <div className="px-4 py-3 flex flex-col">
            <NavLink href="#about" onClick={close}>About</NavLink>
            <NavLink href="#features" onClick={close}>Features</NavLink>
            <NavLink href="#technology" onClick={close}>Technology</NavLink>
            <NavLink href="#use-cases" onClick={close}>Use Cases</NavLink>
            <a href="#contact" onClick={close} className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">
              <Rocket className="w-4 h-4" />
              Request Access
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
