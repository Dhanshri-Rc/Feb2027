import { motion } from 'framer-motion'
import { ArrowRight, BarChart2, Globe, Users, Calendar } from 'lucide-react'

const stats = [
  { icon: Calendar,  value: 'FEB 2027', label: 'Summit Date' },
  { icon: Globe,     value: 'HYBRID',   label: 'Format' },
  { icon: Users,     value: '800+',     label: 'Delegates' },
  { icon: BarChart2, value: '60+',      label: 'Economies' },
]

const ticker = [
  { label: 'DELEGATES',    value: '800+',   change: '+12%' },
  { label: 'COUNTRIES',    value: '60+',    change: '+8%' },
  { label: 'PAPERS',       value: '450+',   change: '+22%' },
  { label: 'SPONSORS',     value: '35',     change: '+5%' },
  { label: 'TRACKS',       value: '6',      change: '' },
  { label: 'KEYNOTES',     value: '18',     change: '+3%' },
  { label: 'DELEGATES',    value: '800+',   change: '+12%' },
  { label: 'COUNTRIES',    value: '60+',    change: '+8%' },
  { label: 'PAPERS',       value: '450+',   change: '+22%' },
  { label: 'SPONSORS',     value: '35',     change: '+5%' },
  { label: 'TRACKS',       value: '6',      change: '' },
  { label: 'KEYNOTES',     value: '18',     change: '+3%' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden ml-16">
      {/* BG */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=85"
          alt="World Summit"
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(0.4) brightness(0.6)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(115deg, #0A0F1C 42%, rgba(10,15,28,0.88) 65%, rgba(10,15,28,0.5) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0A0F1C 0%, transparent 50%)' }} />
        {/* Teal accent shard */}
        <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
          style={{ background: 'linear-gradient(to left, rgba(0,194,168,0.05) 0%, transparent 100%)' }} />
      </div>

      {/* Ambient teal orb */}
      <motion.div
        animate={{ opacity: [0.07, 0.14, 0.07] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute pointer-events-none"
        style={{ top: '30%', right: '18%', width: 500, height: 500, borderRadius: '50%', background: '#00C2A8', filter: 'blur(120px)', opacity: 0.08 }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
          <div className="max-w-4xl">

            {/* Status bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="flex items-center gap-2 px-4 py-1.5"
                style={{ border: '1px solid rgba(0,194,168,0.25)', background: 'rgba(0,194,168,0.06)' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#00C2A8' }} />
                <span className="exec-label" style={{ fontSize: '0.58rem' }}>Siare Conference Feb 2017</span>
              </div>
              {/* <span className="exec-label" style={{ fontSize: '0.55rem', color: 'rgba(230,234,240,0.3)' }}>
                FEBRUARY 2027 · HYBRID FORMAT
              </span> */}
            </motion.div>
            {/* World Conference on Business, Entrepreneurship, and Sustainable Economic Development */}

            {/* Headline — Bebas Neue commanding display */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-display leading-none mb-2" style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', letterSpacing: '0.03em', color: '#E6EAF0' }}>
                  World Conference on Business,
              </h1>
              <h1 className="font-display leading-none mb-2" style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', letterSpacing: '0.03em', color: '#00C2A8' }}>
              Entrepreneurship,
              </h1>
              <h1 className="font-display leading-none mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '0.03em', color:'#FFD166' }}>
              and Sustainable Economic Development 
              {/* <span style={{ color: '#FFD166' }}>2027</span> */}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-sm sm:text-base font-body leading-relaxed mb-10 max-w-xl"
              style={{ color: 'rgba(230,234,240,0.5)' }}
            >
              The world's foremost gathering for business leaders, entrepreneurs, economists and policymakers.
              Defining the strategic framework for sustainable global economic development through 2030.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38 }}
              className="flex flex-wrap gap-3 mb-16"
            >
              <motion.a href="#submission" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="btn-teal">
                <span className="flex items-center gap-2">Submit Paper <ArrowRight size={14} /></span>
              </motion.a>
              <motion.a href="#about" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="btn-outline-teal">
                View Programme
              </motion.a>
            </motion.div>

            {/* KPI stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.48 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-0 max-w-2xl"
              style={{ border: '1px solid rgba(230,234,240,0.07)' }}
            >
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  whileHover={{ background: 'rgba(0,194,168,0.05)' }}
                  className="flex items-center gap-2.5 px-4 py-3"
                  style={{
                    borderRight: i < 3 ? '1px solid rgba(230,234,240,0.07)' : 'none',
                    borderBottom: i < 2 ? '1px solid rgba(230,234,240,0.07)' : 'none',
                  }}
                >
                  <Icon size={13} style={{ color: '#00C2A8', flexShrink: 0 }} />
                  <div>
                    <div className="font-display text-lg leading-none" style={{ color: '#E6EAF0', letterSpacing: '0.04em' }}>{value}</div>
                    <div className="exec-label mt-0.5" style={{ fontSize: '0.52rem', color: 'rgba(230,234,240,0.35)' }}>{label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Data ticker bar */}
      <div className="relative z-10 overflow-hidden"
        style={{ background: '#050810', borderTop: '1px solid rgba(0,194,168,0.15)', borderBottom: '1px solid rgba(0,194,168,0.08)' }}>
        <div className="py-2.5 flex items-center">
          <div className="flex-shrink-0 px-4 exec-label border-r" style={{ fontSize: '0.58rem', borderColor: 'rgba(0,194,168,0.2)', color: '#00C2A8' }}>
            LIVE DATA
          </div>
          <div className="overflow-hidden flex-1">
            <div className="data-ticker">
              {ticker.map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-6 border-r"
                  style={{ borderColor: 'rgba(230,234,240,0.06)', flexShrink: 0 }}>
                  <span className="exec-label" style={{ fontSize: '0.56rem', color: 'rgba(230,234,240,0.35)' }}>{item.label}</span>
                  <span className="font-mono text-xs font-medium" style={{ color: '#E6EAF0' }}>{item.value}</span>
                  {item.change && (
                    <span className="font-mono text-xs" style={{ color: '#00C2A8' }}>{item.change}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
