import { motion } from 'framer-motion'
import Section from '../components/Section'

const objectives = [
  { num: '01', title: 'Advance Business Scholarship',       desc: 'Generate rigorous, peer-reviewed research informing corporate strategy, governance and leadership in a volatile global economy.' },
  { num: '02', title: 'Scale Entrepreneurship Ecosystems',  desc: 'Share evidence-based frameworks for building high-growth venture ecosystems across both developed and emerging markets.' },
  { num: '03', title: 'Drive Sustainable Development',      desc: 'Connect business innovation with the UN SDG framework through applied research, policy recommendations and case studies.' },
  { num: '04', title: 'Bridge Academia and Industry',       desc: 'Create direct conduits between scholarly research and corporate implementation through structured industry partnerships.' },
  { num: '05', title: 'Elevate Emerging Market Voices',     desc: 'Centre insights, models and solutions from high-growth emerging economies driving the next wave of global development.' },
  { num: '06', title: 'Build Research Leadership',          desc: 'Provide early-career scholars with mentorship, publishing pathways, and connections to institutional research funding.' },
]

export default function Objectives() {
  return (
    <Section id="objectives" label="Strategic Objectives" title="WHAT WE DRIVE"
      subtitle="Six strategic pillars underpin every programming decision, speaker invitation, and partnership initiative at WCBSESD 2027."
      style={{ background: '#121826' }} center
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0"
        style={{ border: '1px solid rgba(230,234,240,0.06)' }}>
        {objectives.map(({ num, title, desc }, i) => (
          <motion.div key={num}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ background: 'rgba(0,194,168,0.04)' }}
            className="p-6 relative group transition-colors duration-200"
            style={{
              borderRight: [0,1,3,4].includes(i) ? '1px solid rgba(230,234,240,0.06)' : 'none',
              borderBottom: i < 3 ? '1px solid rgba(230,234,240,0.06)' : 'none',
            }}
          >
            {/* Teal top accent on hover */}
            <div className="absolute top-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style={{ background: 'linear-gradient(90deg, #00C2A8, #FFD166)' }} />
            <div className="font-mono text-xs mb-3" style={{ color: '#FFD166', opacity: 0.7 }}>{num}</div>
            <h3 className="font-display text-lg mb-2 text-left" style={{ color: '#E6EAF0', letterSpacing: '0.03em', fontSize: '1.25rem' }}>{title}</h3>
            <p className="text-xs font-body leading-relaxed text-left" style={{ color: 'rgba(230,234,240,0.42)' }}>{desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
