import { motion } from 'framer-motion'
import Section from '../components/Section'

const tracks = [
  { id: 'T-01', title: 'Entrepreneurship & Venture Creation', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80', topics: ['Startup Ecosystems', 'VC Finance', 'Founder Leadership', 'Innovation Hubs', 'Scale-up Strategy'] },
  { id: 'T-02', title: 'Sustainable Economic Development',    img: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&q=80', topics: ['SDG Alignment', 'Impact Investing', 'Inclusive Growth', 'ESG Frameworks', 'Circular Economy'] },
  { id: 'T-03', title: 'Global Finance & Capital Markets',   img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80', topics: ['Digital Finance', 'Risk Management', 'FinTech Policy', 'Trade Finance', 'Crypto Economics'] },
  { id: 'T-04', title: 'Corporate Governance & Strategy',    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80', topics: ['Board Dynamics', 'ESG Reporting', 'M&A Strategy', 'Stakeholder Value', 'DEI Leadership'] },
  { id: 'T-05', title: 'Innovation, Technology & Business', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80', topics: ['AI in Business', 'Digital Transformation', 'Platform Economics', 'Industry 4.0', 'Data Strategy'] },
  { id: 'T-06', title: 'Policy, Regulation & Trade',        img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80', topics: ['Trade Policy', 'Regulatory Reform', 'Economic Diplomacy', 'Competition Law', 'WTO Dynamics'] },
]

export default function Tracks() {
  return (
    <Section id="tracks" label="Research Tracks" title="SIX EXECUTIVE TRACKS"
      subtitle="From venture creation to macroeconomic policy — six high-impact tracks covering the full spectrum of business and development research."
      style={{ background: '#0A0F1C' }} center
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tracks.map(({ id, title, img, topics }, i) => (
          <motion.div key={id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="track-card group"
          >
            <div className="relative h-44 overflow-hidden">
              <img src={img} alt={title} className="track-inner-img" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,15,28,0.45), rgba(10,15,28,0.97))' }} />
              <div className="absolute top-3 left-3 px-2 py-1 font-mono text-xs" style={{ background: 'rgba(10,15,28,0.7)', color: '#00C2A8', border: '1px solid rgba(0,194,168,0.2)', backdropFilter: 'blur(6px)' }}>
                {id}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display text-base mb-3 leading-tight" style={{ color: '#E6EAF0', letterSpacing: '0.03em', fontSize: '1.1rem' }}>{title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {topics.map(t => (
                  <span key={t} className="text-[11px] px-2 py-0.5 font-body"
                    style={{ background: 'rgba(0,194,168,0.07)', color: 'rgba(0,194,168,0.78)', border: '1px solid rgba(0,194,168,0.12)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
        className="text-center text-xs font-body mt-8" style={{ color: 'rgba(230,234,240,0.3)' }}>
        An Open Research Track is available for cross-disciplinary submissions with editorial board approval.
      </motion.p>
    </Section>
  )
}
