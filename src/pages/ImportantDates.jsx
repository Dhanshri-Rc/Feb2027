import { motion } from 'framer-motion'
import Section from '../components/Section'
import { AlertCircle } from 'lucide-react'

const dates = [
  { date: 'Oct 1, 2026',      label: 'Submission Portal Opens',         kind: 'normal' },
  { date: 'Nov 15, 2026',     label: 'Abstract Submission Deadline',    kind: 'highlight' },
  { date: 'Nov 30, 2026',     label: 'Full Paper Submission Deadline',  kind: 'highlight' },
  { date: 'Dec 10, 2026',     label: 'Early Bird Registration Closes',  kind: 'highlight' },
  { date: 'Jan 5, 2027',      label: 'Review Decisions Issued',         kind: 'normal' },
  { date: 'Jan 18, 2027',     label: 'Camera-Ready Manuscript Due',     kind: 'normal' },
  { date: 'Jan 25, 2027',     label: 'Regular Registration Deadline',   kind: 'normal' },
  { date: 'Feb 1, 2027',      label: 'Summit Programme Published',      kind: 'normal' },
  { date: 'Feb 17–19, 2027',  label: '📊 Summit Days',                  kind: 'main' },
  { date: 'Apr 30, 2027',     label: 'Extended Journal Versions Due',   kind: 'normal' },
]

export default function ImportantDates() {
  return (
    <Section id="dates" label="Important Dates" title="SUMMIT TIMELINE"
      subtitle="All deadlines at 23:59 UTC. We recommend submitting 48 hours prior to reduce risk of portal congestion."
      style={{ background: '#0A0F1C' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header row */}
        <div className="flex items-center gap-4 mb-4 px-5 pb-3"
          style={{ borderBottom: '1px solid rgba(0,194,168,0.15)' }}>
          <div className="w-3 flex-shrink-0" />
          <div className="flex-1 exec-label" style={{ fontSize: '0.56rem', color: 'rgba(230,234,240,0.3)' }}>MILESTONE</div>
          <div className="exec-label text-right" style={{ fontSize: '0.56rem', color: 'rgba(230,234,240,0.3)', minWidth: 140 }}>DATE</div>
        </div>

        <div className="space-y-1 relative">
          {/* Spine */}
          <div className="absolute left-[9px] top-3 bottom-3 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, rgba(0,194,168,0.5), rgba(0,194,168,0.08), transparent)' }} />

          {dates.map(({ date, label, kind }, i) => (
            <motion.div key={date}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 group"
            >
              {/* Node */}
              <div className="flex-shrink-0 relative z-10">
                {kind === 'main'
                  ? <div className="tl-node-main" />
                  : kind === 'highlight'
                  ? <div className="tl-node" style={{ width: 11, height: 11 }} />
                  : <div style={{ width: 9, height: 9, borderRadius: '50%', border: '1px solid rgba(0,194,168,0.25)', background: '#0A0F1C', flexShrink: 0 }} />
                }
              </div>

              {/* Row */}
              <div className="flex-1 flex items-center justify-between px-4 py-3 transition-colors duration-150"
                style={{
                  borderBottom: '1px solid rgba(230,234,240,0.04)',
                  background: kind === 'main'
                    ? 'rgba(255,209,102,0.06)'
                    : kind === 'highlight'
                    ? 'rgba(0,194,168,0.04)'
                    : 'transparent',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,194,168,0.04)'}
                onMouseLeave={e => e.currentTarget.style.background = kind === 'main' ? 'rgba(255,209,102,0.06)' : kind === 'highlight' ? 'rgba(0,194,168,0.04)' : 'transparent'}
              >
                <span className="font-body text-sm font-medium"
                  style={{ color: kind === 'main' ? '#FFD166' : kind === 'highlight' ? '#00C2A8' : 'rgba(230,234,240,0.52)' }}>
                  {label}
                  {kind === 'main' && (
                    <span className="ml-2 font-mono text-[10px] px-2 py-0.5"
                      style={{ background: 'rgba(255,209,102,0.12)', color: '#FFD166', border: '1px solid rgba(255,209,102,0.22)' }}>
                      SUMMIT
                    </span>
                  )}
                </span>
                <span className="font-mono text-xs flex-shrink-0 ml-4"
                  style={{ color: kind === 'main' ? 'rgba(255,209,102,0.65)' : 'rgba(230,234,240,0.28)' }}>
                  {date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-8 flex items-start gap-3 px-4 py-4"
          style={{ background: 'rgba(18,24,38,0.6)', border: '1px solid rgba(230,234,240,0.06)' }}
        >
          <AlertCircle size={14} style={{ color: 'rgba(0,194,168,0.6)', flexShrink: 0, marginTop: 2 }} />
          <p className="text-xs font-body leading-relaxed" style={{ color: 'rgba(230,234,240,0.38)' }}>
            Deadlines subject to extension at the discretion of the programme committee. Subscribe to official
            communications or follow on LinkedIn for real-time updates and deadline notices.
          </p>
        </motion.div>
      </div>
    </Section>
  )
}
