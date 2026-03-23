import { motion } from 'framer-motion'
import Section from '../components/Section'
import { User } from 'lucide-react'

const committee = {
  organizing: [
    { name: 'Prof. Richard Chen',      role: 'Summit Chair',         org: 'Harvard Business School, USA' },
    { name: 'Dr. Amara Osei',          role: 'Programme Co-Chair',   org: 'London Business School, UK' },
    { name: 'Prof. Claudia Ferreira',  role: 'Programme Co-Chair',   org: 'IESE Business School, Spain' },
    { name: 'Dr. Kenji Watanabe',      role: 'Publications Chair',   org: 'Hitotsubashi University, Japan' },
    { name: 'Dr. Priya Menon',         role: 'Workshop Director',    org: 'IIM Ahmedabad, India' },
    { name: 'Prof. Lars Andersen',     role: 'Local Arrangements',   org: 'Copenhagen Business School, Denmark' },
  ],
  program: [
    { name: 'Prof. Diana Okonkwo',     role: 'Entrepreneurship Track',  org: 'Lagos Business School, Nigeria' },
    { name: 'Dr. Marco Rossi',         role: 'Sustainable Dev Track',   org: 'Bocconi University, Italy' },
    { name: 'Prof. Sarah Kim',         role: 'Global Finance Track',    org: 'Korea University Business School' },
    { name: 'Dr. Ibrahim Al-Farsi',    role: 'Corporate Gov Track',     org: 'American University of Dubai' },
    { name: 'Prof. Mei Lin',           role: 'Innovation & Tech Track', org: 'Tsinghua SEM, China' },
    { name: 'Dr. Ana Gonzalez',        role: 'Policy & Trade Track',    org: 'CEMLA, Mexico' },
  ],
  advisory: [
    { name: 'Prof. Michael Porter',    org: 'Harvard University, USA' },
    { name: 'Dr. Raghuram Rajan',      org: 'University of Chicago, USA' },
    { name: 'Prof. Esther Duflo',      org: 'MIT, USA' },
    { name: 'Dr. Ngozi Okonjo-Iweala', org: 'World Trade Organization' },
  ],
}

function MemberCard({ name, role, org, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.42, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="exec-card p-4 flex items-start gap-3"
    >
      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(0,194,168,0.1)', borderRadius: 2, border: '1px solid rgba(0,194,168,0.12)' }}>
        <User size={14} style={{ color: 'rgba(0,194,168,0.65)' }} />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold font-body truncate" style={{ color: '#E6EAF0' }}>{name}</p>
        {role && <p className="text-xs font-body" style={{ color: 'rgba(0,194,168,0.62)' }}>{role}</p>}
        <p className="text-xs font-body mt-0.5 leading-snug" style={{ color: 'rgba(230,234,240,0.32)' }}>{org}</p>
      </div>
    </motion.div>
  )
}

function GroupHeading({ label }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, rgba(0,194,168,0.4), transparent)' }} />
      <h3 className="font-display text-lg px-3 whitespace-nowrap" style={{ color: '#E6EAF0', letterSpacing: '0.04em', fontSize: '1.1rem' }}>{label}</h3>
      <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, rgba(0,194,168,0.4), transparent)' }} />
    </div>
  )
}

export default function Committee() {
  return (
    <Section id="committee" label="Leadership" title="SUMMIT COMMITTEE"
      subtitle="WCBSESD 2027 is governed by an internationally distinguished committee of business scholars, economists, and policy leaders."
      style={{ background: '#121826' }}
    >
      <div className="space-y-12">
        <div>
          <GroupHeading label="Organizing Committee" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {committee.organizing.map((m, i) => <MemberCard key={m.name} {...m} delay={i * 0.05} />)}
          </div>
        </div>
        <div>
          <GroupHeading label="Programme Committee" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {committee.program.map((m, i) => <MemberCard key={m.name} {...m} delay={i * 0.05} />)}
          </div>
        </div>
        <div>
          <GroupHeading label="International Advisory Board" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {committee.advisory.map((m, i) => <MemberCard key={m.name} {...m} delay={i * 0.05} />)}
          </div>
        </div>
      </div>
    </Section>
  )
}
