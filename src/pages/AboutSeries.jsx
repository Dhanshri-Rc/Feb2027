import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import { Globe2, Award, BookMarked, BarChart3 } from 'lucide-react'

const highlights = [
  { icon: Globe2,    title: 'Global Representation', desc: 'Delegates from 60+ economies — from G20 ministers to grassroots entrepreneurs.' },
  { icon: Award,     title: 'Rigorous Review',        desc: 'Double-blind peer review by leading economists, business scholars and policy experts.' },
  { icon: BookMarked,title: 'Indexed Publications',   desc: 'Proceedings and partner journals indexed in Scopus, SSCI, and EconLit.' },
  { icon: BarChart3, title: 'Measurable Impact',      desc: 'Research cited in World Bank, IMF, and OECD economic policy frameworks.' },
]

export default function AboutSeries() {
  const imgRef = useRef(null)
  const inView  = useInView(imgRef, { once: true })

  return (
    <Section id="about" label="About the Series" title="A DECADE OF GLOBAL ECONOMIC DIALOGUE"
      subtitle="The WCBSESD series has established itself as the authoritative forum connecting business scholarship, entrepreneurship research, and sustainable development policy."
      style={{ background: '#121826' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div ref={imgRef}
          initial={{ opacity: 0, x: -32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden h-80 lg:h-[440px]"
          style={{ borderRadius: 4, border: '1px solid rgba(0,194,168,0.1)' }}
        >
          <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=900&q=80" alt="Business leadership"
            className="w-full h-full object-cover" style={{ filter: 'saturate(0.6)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #121826 0%, transparent 55%)' }} />
          <div className="absolute inset-0" style={{ border: '1px solid rgba(0,194,168,0.08)', borderRadius: 4, pointerEvents: 'none' }} />
          <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}
            className="absolute bottom-5 left-5 corp-glass px-5 py-3" style={{ borderRadius: 2 }}>
            <div className="font-display text-3xl teal-text" style={{ letterSpacing: '0.04em' }}>12+</div>
            <div className="text-xs font-body" style={{ color: 'rgba(230,234,240,0.5)' }}>Years of Economic Dialogue</div>
          </motion.div>
        </motion.div>

        <div>
          <p className="text-sm font-body leading-relaxed mb-6" style={{ color: 'rgba(230,234,240,0.5)' }}>
            Founded in 2015, WCBSESD has convened heads of state, Fortune 500 executives, Nobel economists, and
            leading academic researchers to forge the intellectual foundations of tomorrow's global economy.
            Each edition produces policy-grade research with direct institutional impact.
          </p>
          <p className="text-sm font-body leading-relaxed mb-10" style={{ color: 'rgba(230,234,240,0.5)' }}>
            Over 4,200 peer-reviewed papers have been published through our proceedings and partner journals,
            shaping corporate governance frameworks, entrepreneurship policy, and sustainable development strategies
            across more than 60 economies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <Card key={title} delay={i * 0.07} className="p-5">
                <div className="w-8 h-8 flex items-center justify-center mb-3" style={{ background: 'rgba(0,194,168,0.1)', borderRadius: 2 }}>
                  <Icon size={16} style={{ color: '#00C2A8' }} />
                </div>
                <h4 className="text-slate-100 font-semibold text-xs mb-1.5 font-body uppercase tracking-wide" style={{ letterSpacing: '0.06em', color: '#E6EAF0' }}>{title}</h4>
                <p className="text-xs font-body leading-relaxed" style={{ color: 'rgba(230,234,240,0.4)' }}>{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
