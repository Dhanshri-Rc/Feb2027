import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import { Lightbulb, LineChart, BookOpen, Handshake } from 'lucide-react'

const features = [
  { icon: Lightbulb, title: 'Keynote Addresses',    desc: 'World-class speakers from global institutions, Fortune 500, and government.' },
  { icon: LineChart,  title: 'Economic Roundtables', desc: 'Data-driven policy discussions bridging academic research and implementation.' },
  { icon: BookOpen,   title: 'Paper Presentations',  desc: 'Competitive tracks across entrepreneurship, finance, and development.' },
  { icon: Handshake,  title: 'Deal & Partner Forum', desc: 'Curated sessions connecting researchers, investors, and policymakers.' },
]

export default function AboutConference() {
  const imgRef = useRef(null)
  const inView  = useInView(imgRef, { once: true })

  return (
    <Section id="about-conference" label="2027 Edition" title="WCBSESD 2027"
      subtitle="Theme: 'Engineering Resilient Economies' — examining how entrepreneurship, innovation, and strategic policy can build shock-resistant, inclusive economic systems."
      style={{ background: '#0A0F1C' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <Card key={title} delay={i * 0.07} className="p-5">
                <div className="w-8 h-8 flex items-center justify-center mb-3" style={{ background: 'rgba(0,194,168,0.1)', borderRadius: 2 }}>
                  <Icon size={16} style={{ color: '#00C2A8' }} />
                </div>
                <h4 className="font-body font-semibold text-xs mb-1.5 uppercase tracking-wide" style={{ letterSpacing: '0.06em', color: '#E6EAF0' }}>{title}</h4>
                <p className="text-xs font-body leading-relaxed" style={{ color: 'rgba(230,234,240,0.4)' }}>{desc}</p>
              </Card>
            ))}
          </div>
          <p className="text-xs font-body leading-relaxed" style={{ color: 'rgba(230,234,240,0.45)' }}>
            Three intensive days of plenary sessions, breakout workshops, masterclasses, structured networking dinners
            and a live policy clinic — in full hybrid format with premium virtual access for international delegates.
          </p>
        </div>

        <motion.div ref={imgRef}
          initial={{ opacity: 0, x: 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 relative overflow-hidden h-80 lg:h-[440px]"
          style={{ borderRadius: 4, border: '1px solid rgba(230,234,240,0.06)' }}
        >
          <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&q=80" alt="Business summit"
            className="w-full h-full object-cover" style={{ filter: 'saturate(0.6)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0A0F1C 0%, transparent 50%)' }} />
          <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}
            className="absolute bottom-5 right-5 corp-glass px-5 py-3 text-right" style={{ borderRadius: 2 }}>
            <div className="font-display text-3xl gold-text" style={{ letterSpacing: '0.04em' }}>FEB 2027</div>
            <div className="text-xs font-body" style={{ color: 'rgba(230,234,240,0.5)' }}>Hybrid Summit</div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
