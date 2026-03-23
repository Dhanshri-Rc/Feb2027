import { motion } from 'framer-motion'
import Section from '../components/Section'
import { Check, Zap } from 'lucide-react'

const plans = [
  {
    tier: 'Academic',
    code: 'TIER-1',
    price: '$269',
    early: '$169',
    badge: null,
    features: [
      'Full virtual summit access',
      'Digital proceedings copy',
      'Certificate of participation',
      'All keynote live-streams',
      'Virtual networking sessions',
    ],
    missing: ['In-person venue access', 'Executive workshops', 'Policy brief archive'],
  },
  {
    tier: 'Professional',
    code: 'TIER-2',
    price: '$449',
    early: '$299',
    badge: 'Most Popular',
    features: [
      'Full hybrid summit access',
      'Printed & digital proceedings',
      'Certificate of presentation',
      'All keynote & plenary sessions',
      'In-person networking dinner',
      'Executive workshops',
      'Policy brief archive',
    ],
    missing: [],
  },
  {
    tier: 'Corporate & Government',
    code: 'TIER-3',
    price: '$699',
    early: '$499',
    badge: 'Executive',
    features: [
      'Full hybrid summit access',
      'Printed & digital proceedings',
      'Priority session seating',
      'All workshops included',
      'Executive gala dinner',
      'Full policy brief archive',
      'Speaker introduction slot',
      'Full recording access',
    ],
    missing: [],
  },
]

export default function Registration() {
  return (
    <Section id="registration" label="Registration" title="DELEGATE REGISTRATION"
      subtitle="Early bird rates available until 10 December 2026. All tiers include full digital proceedings and certificate."
      style={{ background: '#121826' }} center
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {plans.map(({ tier, code, price, early, badge, features, missing }, i) => (
          <motion.div key={tier}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className={badge === 'Most Popular' ? 'price-featured' : 'price-plain'}
          >
            {badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-body font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"
                style={badge === 'Most Popular'
                  ? { background: '#00C2A8', color: '#0A0F1C', letterSpacing: '0.08em' }
                  : { background: 'rgba(255,209,102,0.12)', color: '#FFD166', border: '1px solid rgba(255,209,102,0.3)', letterSpacing: '0.08em' }
                }>
                {badge === 'Most Popular' && <Zap size={10} />}
                {badge}
              </div>
            )}

            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <p className="exec-label" style={{ fontSize: '0.6rem' }}>{tier}</p>
                <span className="font-mono text-[10px]" style={{ color: 'rgba(230,234,240,0.25)' }}>{code}</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="font-display text-5xl" style={{ color: '#E6EAF0', letterSpacing: '0.02em' }}>{early}</span>
                <span className="text-sm line-through mb-1.5 font-body" style={{ color: 'rgba(230,234,240,0.28)' }}>{price}</span>
              </div>
              <p className="text-xs font-body mt-1" style={{ color: 'rgba(0,194,168,0.65)' }}>
                Early bird · Ends Dec 10
              </p>
            </div>

            <div className="exec-rule mb-5" />

            <ul className="space-y-2.5 flex-1 mb-6">
              {features.map(f => (
                <li key={f} className="flex items-start gap-2.5 text-xs font-body" style={{ color: 'rgba(230,234,240,0.62)' }}>
                  <Check size={12} style={{ color: '#00C2A8', flexShrink: 0, marginTop: 2 }} />
                  {f}
                </li>
              ))}
              {missing.map(f => (
                <li key={f} className="flex items-start gap-2.5 text-xs font-body line-through" style={{ color: 'rgba(230,234,240,0.2)' }}>
                  <span className="w-3 flex-shrink-0 text-center text-xs" style={{ marginTop: 1 }}>—</span>
                  {f}
                </li>
              ))}
            </ul>

            <motion.a href="#contact"
              whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
              className={`text-center py-2.5 text-xs font-body font-bold uppercase tracking-wider transition-all block ${
                badge === 'Most Popular' ? 'btn-teal' : 'btn-outline-teal'
              }`}
              style={{ justifyContent: 'center', letterSpacing: '0.08em', borderRadius: 2 }}
            >
              {`Register — ${tier.split(' ')[0]}`}
            </motion.a>
          </motion.div>
        ))}
      </div>

      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
        className="text-center text-xs font-body mt-8" style={{ color: 'rgba(230,234,240,0.28)' }}>
        Institutional group rates available for 3+ delegates. Contact the registrations desk for a bespoke proposal.
      </motion.p>
    </Section>
  )
}
