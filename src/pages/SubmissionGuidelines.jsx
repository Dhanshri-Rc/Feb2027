import Section from '../components/Section'
import Card from '../components/Card'
import { FileText, AlignLeft, Languages, ShieldCheck, AlertTriangle } from 'lucide-react'

const guidelines = [
  { icon: FileText,    title: 'Paper Length',      items: ['Full Research Papers: 6,000–8,000 words', 'Short / Position Papers: 3,000–5,000 words', 'Executive Abstracts: 500–800 words', 'Policy Briefs: 2,000–3,500 words'] },
  { icon: AlignLeft,   title: 'Formatting',        items: ['APA 7th Edition citation standard', 'Times New Roman 12pt or Calibri 11pt', 'Double-spaced body, 2.5cm margins', 'Structured abstract 150–250 words', 'Up to 6 JEL classification codes'] },
  { icon: Languages,   title: 'Language',          items: ['English is the official conference language', 'Non-English papers with full English translation accepted', 'Bilingual presentations permitted', 'Translation support available on request'] },
  { icon: ShieldCheck, title: 'Research Standards', items: ['Original, unpublished work only', 'IRB approval for human-subject research', 'AI writing tool usage disclosed in methodology', 'All funding sources and conflicts of interest declared'] },
]

export default function SubmissionGuidelines() {
  return (
    <Section id="submission" label="Submission Guidelines" title="AUTHOR STANDARDS"
      subtitle="All manuscripts must satisfy these requirements before entering the double-blind peer review process."
      style={{ background: '#121826' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {guidelines.map(({ icon: Icon, title, items }, i) => (
          <Card key={title} delay={i * 0.07}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center" style={{ background: 'rgba(0,194,168,0.1)', borderRadius: 2 }}>
                <Icon size={15} style={{ color: '#00C2A8' }} />
              </div>
              <h3 className="font-display text-lg" style={{ color: '#E6EAF0', letterSpacing: '0.03em', fontSize: '1.1rem' }}>{title}</h3>
            </div>
            <ul className="space-y-2">
              {items.map(item => (
                <li key={item} className="flex items-start gap-2.5 text-xs font-body" style={{ color: 'rgba(230,234,240,0.48)' }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: '#00C2A8', opacity: 0.6 }} />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <Card style={{ borderColor: 'rgba(255,209,102,0.2)', background: 'rgba(255,209,102,0.04)' }}>
        <div className="flex items-start gap-3">
          <AlertTriangle size={15} style={{ color: '#FFD166', flexShrink: 0, marginTop: 2 }} />
          <div>
            <h4 className="font-body font-semibold text-xs mb-1 uppercase tracking-wide" style={{ color: '#FFD166', letterSpacing: '0.08em' }}>AI Disclosure Policy</h4>
            <p className="text-xs font-body leading-relaxed" style={{ color: 'rgba(230,234,240,0.48)' }}>
              Authors using generative AI tools (ChatGPT, Claude, Gemini, etc.) must disclose this in the Methodology section.
              AI systems cannot be named as co-authors. The submitting author assumes full scholarly and legal responsibility
              for the accuracy, originality and integrity of the work.
            </p>
          </div>
        </div>
      </Card>
    </Section>
  )
}
