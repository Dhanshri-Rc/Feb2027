import { motion } from 'framer-motion'
import Section from '../components/Section'
import { Upload, Search, MessageSquare, CheckCircle, BookOpen, Mic } from 'lucide-react'

const steps = [
  { icon: Upload,        num: '01', title: 'Prepare & Submit',      desc: 'Register via the portal and upload your anonymised manuscript in PDF or DOCX. Remove all author identifiers prior to upload.' },
  { icon: Search,        num: '02', title: 'Editorial Screening',   desc: 'Editorial board verifies scope, format compliance, and plagiarism within 5 working days of submission receipt.' },
  { icon: MessageSquare, num: '03', title: 'Double-Blind Review',   desc: 'Minimum two independent domain experts evaluate originality, methodology, theoretical contribution, and practical relevance.' },
  { icon: CheckCircle,   num: '04', title: 'Decision Issued',       desc: 'Authors receive Accept, Minor Revision, Major Revision, or Reject with full anonymised reviewer reports.' },
  { icon: BookOpen,      num: '05', title: 'Camera-Ready Upload',   desc: 'Accepted authors submit the final formatted manuscript with signed copyright form within 21 days.' },
  { icon: Mic,           num: '06', title: 'Summit Presentation',   desc: 'Authors present at the summit (in-person or virtual) with structured Q&A facilitated by track chairs.' },
]

export default function SubmissionProcess() {
  return (
    <Section id="submission-process" label="Submission Process" title="FROM DRAFT TO SUMMIT"
      subtitle="A transparent, rigorous six-step pipeline ensuring every submission receives authoritative scholarly evaluation."
      style={{ background: '#0A0F1C' }} center
    >
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute top-0 bottom-0 hidden md:block" style={{ left: '50%', width: 1, transform: 'translateX(-50%)', background: 'linear-gradient(to bottom, rgba(0,194,168,0.5), rgba(0,194,168,0.08), transparent)' }} />
        <div className="space-y-6">
          {steps.map(({ icon: Icon, num, title, desc }, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div key={num}
                initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`flex items-center gap-6 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
              >
                <div className={`flex-1 exec-card p-5 group ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-7 h-7 flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,194,168,0.1)', borderRadius: 2 }}>
                      <Icon size={14} style={{ color: '#00C2A8' }} />
                    </div>
                    <h3 className="font-display text-base" style={{ color: '#E6EAF0', letterSpacing: '0.04em' }}>{title}</h3>
                  </div>
                  <p className="text-xs font-body leading-relaxed" style={{ color: 'rgba(230,234,240,0.42)' }}>{desc}</p>
                </div>
                <div className="hidden md:flex flex-col items-center z-10">
                  <div className="tl-node" />
                  <div className="font-mono text-[10px] mt-1" style={{ color: 'rgba(0,194,168,0.45)' }}>{num}</div>
                </div>
                <div className="hidden md:block flex-1" />
              </motion.div>
            )
          })}
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
        className="mt-12 text-center">
        <a href="#contact" className="btn-teal inline-flex items-center gap-2">
          <span className="flex items-center gap-2"><Upload size={13} /> Submit Paper</span>
        </a>
        <p className="text-xs font-body mt-3" style={{ color: 'rgba(230,234,240,0.28)' }}>Submission portal opens 1 October 2026</p>
      </motion.div>
    </Section>
  )
}
