import Section from '../components/Section'
import Card from '../components/Card'
import { ShieldAlert, Percent, RefreshCw, Ban } from 'lucide-react'

const policies = [
  { icon: Percent,     title: 'Similarity Threshold',     desc: 'All submissions screened via iThenticate or Turnitin prior to review. Papers above 15% similarity trigger editorial review. Self-plagiarism is treated with equal seriousness to external plagiarism.' },
  { icon: RefreshCw,   title: 'Revision for Borderline',  desc: 'Papers scoring 15–25% similarity may be returned for revision with a 7-day window to rephrase and re-cite flagged sections before re-screening.' },
  { icon: Ban,         title: 'Rejection & Sanctions',    desc: 'Papers exceeding 25% or showing deliberate misappropriation are permanently rejected. Authors may be barred from future WCBSESD submissions and reported to their institutions.' },
  { icon: ShieldAlert, title: 'Research Misconduct',      desc: 'Data fabrication, simultaneous submission to competing venues, and ghost authorship are violations reportable to home institutions, funding agencies, and industry partners.' },
]

export default function PlagiarismPolicy() {
  return (
    <Section id="plagiarism" label="Integrity Policy" title="RESEARCH INTEGRITY STANDARDS"
      subtitle="WCBSESD 2027 adheres fully to COPE guidelines and treats academic misconduct as incompatible with participation in the summit."
      style={{ background: '#121826' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {policies.map(({ icon: Icon, title, desc }, i) => (
          <Card key={title} delay={i * 0.07}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 flex items-center justify-center" style={{ background: 'rgba(0,194,168,0.1)', borderRadius: 2 }}>
                <Icon size={15} style={{ color: '#00C2A8' }} />
              </div>
              <h3 className="font-display text-base" style={{ color: '#E6EAF0', letterSpacing: '0.03em', fontSize: '1.05rem' }}>{title}</h3>
            </div>
            <p className="text-xs font-body leading-relaxed" style={{ color: 'rgba(230,234,240,0.45)' }}>{desc}</p>
          </Card>
        ))}
      </div>
      <Card>
        <h4 className="font-display text-lg mb-2" style={{ color: '#E6EAF0', letterSpacing: '0.03em' }}>Open Science Commitment</h4>
        <p className="text-xs font-body leading-relaxed" style={{ color: 'rgba(230,234,240,0.45)' }}>
          We encourage pre-registration, open data, and open-source methodology where commercially and ethically permissible.
          Integrity concerns may be reported confidentially to our ethics panel at{' '}
          <span style={{ color: '#00C2A8' }}>ethics@wcbsesd2027.edu</span>.
          All panel members operate under strict conflict-of-interest disclosure protocols consistent with COPE standards.
        </p>
      </Card>
    </Section>
  )
}
