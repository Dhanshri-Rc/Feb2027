import { TrendingUp, Mail, Phone, MapPin, Twitter, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-16 pb-8"
      style={{ background: '#050810', borderTop: '1px solid rgba(0,194,168,0.12)' }}>
      <div className="absolute pointer-events-none"
        style={{ bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 800, height: 200, background: 'rgba(0,194,168,0.04)', filter: 'blur(80px)', borderRadius: '50%' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded flex items-center justify-center"
                style={{ background: '#00C2A8', boxShadow: '0 0 16px rgba(0,194,168,0.35)' }}>
                <TrendingUp size={16} style={{ color: '#0A0F1C' }} />
              </div>
              <span className="exec-label" style={{ fontSize: '0.6rem' }}>WCBSESD 2027</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-body" style={{ color: 'rgba(230,234,240,0.38)' }}>
              World Conference on Business, Entrepreneurship, and Sustainable Economic Development.
              Setting the global business agenda for 2027.
            </p>
            <div className="flex gap-3 mt-6">
              {[Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-8 h-8 flex items-center justify-center transition-all"
                  style={{ border: '1px solid rgba(230,234,240,0.1)', color: 'rgba(230,234,240,0.3)', borderRadius: 2 }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#00C2A8'; e.currentTarget.style.borderColor = 'rgba(0,194,168,0.35)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(230,234,240,0.3)'; e.currentTarget.style.borderColor = 'rgba(230,234,240,0.1)' }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="exec-label mb-4" style={{ fontSize: '0.6rem' }}>Navigation</h4>
            <ul className="space-y-2.5">
              {['About', 'Research Tracks', 'Submission', 'Important Dates', 'Committee', 'Registration'].map(l => (
                <li key={l}>
                  <a href="#" className="text-sm font-body transition-colors"
                    style={{ color: 'rgba(230,234,240,0.38)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#00C2A8'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(230,234,240,0.38)'}>{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="exec-label mb-4" style={{ fontSize: '0.6rem' }}>Contact</h4>
            <ul className="space-y-3">
              {[
                { Icon: Mail,   text: 'wcbsesd2027@conference.edu' },
                { Icon: Phone,  text: '+1 (555) 400-7890' },
                { Icon: MapPin, text: 'Hybrid · Online & In-Person\nFebruary 2027' },
              ].map(({ Icon, text }, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm font-body" style={{ color: 'rgba(230,234,240,0.38)' }}>
                  <Icon size={13} className="flex-shrink-0 mt-0.5" style={{ color: 'rgba(0,194,168,0.6)' }} />
                  <span style={{ whiteSpace: 'pre-line' }}>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="exec-rule mb-6" />
        <div className="flex flex-col sm:flex-row justify-between gap-3 text-xs font-body" style={{ color: 'rgba(230,234,240,0.22)' }}>
          <p>© 2027 WCBSESD. All rights reserved.</p>
          <p>Powering Global Economic Dialogue · February 2027</p>
        </div>
      </div>
    </footer>
  )
}
