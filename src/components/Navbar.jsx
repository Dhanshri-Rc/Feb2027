import { useState, useEffect } from 'react'
import { Menu, X, TrendingUp } from 'lucide-react'

const links = [
  // { label: 'Overview',   href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Conference',      href: '#about-conference' },

  { label: 'Call for Papers',     href: '#tracks' },
  { label: 'Submission', href: '#submission' },
  { label: 'Register',   href: '#registration' },

  { label: 'Dates',      href: '#dates' },
  { label: 'Committee',  href: '#committee' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('#home')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 transition-all duration-400"
      style={scrolled ? {
        background: 'rgba(10,15,28,0.9)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(0,194,168,0.12)',
        boxShadow: '0 2px 30px rgba(0,0,0,0.6)',
      } : {}}
    >
      {/* Top accent line */}
      <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, #00C2A8 0%, #FFD166 50%, #00C2A8 100%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded flex items-center justify-center"
            style={{ background: '#00C2A8', boxShadow: '0 0 14px rgba(0,194,168,0.4)' }}>
            <TrendingUp size={14} style={{ color: '#0A0F1C' }} />
          </div>
          <div>
            <span className="exec-label" style={{ fontSize: '0.58rem' }}>WCBSESD</span>
            <span className="text-slate-400 text-[10px] font-body hidden sm:block" style={{ display: 'block', marginTop: 1 }}>Feb 2017</span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setActive(l.href)}
              className="px-3 py-1.5 text-xs font-body font-semibold uppercase tracking-wider rounded-sm transition-all duration-200"
              style={{
                letterSpacing: '0.08em',
                color: active === l.href ? '#00C2A8' : 'rgba(230,234,240,0.45)',
                background: active === l.href ? 'rgba(0,194,168,0.08)' : 'transparent',
                borderBottom: active === l.href ? '1px solid #00C2A8' : '1px solid transparent',
              }}
              onMouseEnter={e => { if (active !== l.href) { e.currentTarget.style.color = 'rgba(230,234,240,0.88)' } }}
              onMouseLeave={e => { if (active !== l.href) { e.currentTarget.style.color = 'rgba(230,234,240,0.45)' } }}
            >
              {l.label}
            </a>
          ))}
          <a href="#registration" className="btn-teal ml-4 text-xs py-2 px-5">
            <span>Register Now</span>
          </a>
        </div>

        <button className="lg:hidden p-2 transition-colors"
          style={{ color: open ? '#00C2A8' : 'rgba(230,234,240,0.55)' }}
          onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div style={{ background: 'rgba(10,15,28,0.98)', borderTop: '1px solid rgba(0,194,168,0.1)' }} className="lg:hidden py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href}
                onClick={() => { setActive(l.href); setOpen(false) }}
                className="py-2.5 px-3 text-xs font-body font-semibold uppercase tracking-wider transition-colors"
                style={{ color: 'rgba(230,234,240,0.5)', letterSpacing: '0.08em' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#00C2A8'; e.currentTarget.style.background = 'rgba(0,194,168,0.05)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(230,234,240,0.5)'; e.currentTarget.style.background = 'transparent' }}
              >
                {l.label}
              </a>
            ))}
            <a href="#registration" className="btn-teal mt-2 justify-center text-xs py-2.5"><span>Register Now</span></a>
          </div>
        </div>
      )}
    </nav>
  )
}
