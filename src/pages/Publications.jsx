import Section from '../components/Section'
import Card from '../components/Card'
import { BookOpen, Star, ExternalLink } from 'lucide-react'

const pubs = [
  {
    name: 'Summit Proceedings',
    publisher: 'Springer Nature / Elsevier',
    scope: 'All accepted full papers',
    indexed: ['Scopus', 'Web of Science', 'EconLit'],
    note: 'DOI-linked, ISBN-assigned digital and print proceedings published within 30 days of the summit.',
  },
  {
    name: 'Journal of Business & Economic Development',
    publisher: 'Partner Journal · Open Access',
    scope: 'Best papers (by invitation)',
    indexed: ['SSCI Q1', 'DOAJ', 'ABI/Inform'],
    note: 'Top 12% of accepted papers invited for extended journal submission with 5-week expedited editorial review.',
  },
  {
    name: 'International Review of Entrepreneurship',
    publisher: 'Partner Journal · Hybrid OA',
    scope: 'Entrepreneurship track papers',
    indexed: ['Scopus Q2', 'EBSCO', 'ProQuest'],
    note: 'Dedicated outlet for entrepreneurship and venture research with fast-track processing post-summit.',
  },
]

export default function Publications() {
  return (
    <Section id="publications" label="Publications" title="DISSEMINATION PATHWAYS"
      subtitle="Three authoritative publication pathways ensuring your research reaches the widest possible scholarly and policy audience."
      style={{ background: '#0A0F1C' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {pubs.map(({ name, publisher, scope, indexed, note }, i) => (
          <Card key={name} delay={i * 0.09} className="flex flex-col">
            <div className="w-8 h-8 flex items-center justify-center mb-4" style={{ background: 'rgba(0,194,168,0.1)', borderRadius: 2 }}>
              <BookOpen size={16} style={{ color: '#00C2A8' }} />
            </div>
            <h3 className="font-display text-lg mb-1" style={{ color: '#E6EAF0', letterSpacing: '0.03em', fontSize: '1.1rem' }}>{name}</h3>
            <p className="text-xs font-body mb-3" style={{ color: 'rgba(0,194,168,0.62)' }}>{publisher}</p>
            <p className="text-xs font-body flex-1 mb-4 leading-relaxed" style={{ color: 'rgba(230,234,240,0.42)' }}>{note}</p>
            <p className="text-xs font-body mb-3" style={{ color: 'rgba(230,234,240,0.25)' }}>
              Scope: <span style={{ color: 'rgba(230,234,240,0.48)' }}>{scope}</span>
            </p>
            <div className="flex flex-wrap gap-1.5">
              {indexed.map(idx => (
                <span key={idx} className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 font-body"
                  style={{ background: 'rgba(0,194,168,0.07)', color: 'rgba(0,194,168,0.75)', border: '1px solid rgba(0,194,168,0.12)' }}>
                  <Star size={8} /> {idx}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
      <Card>
        <div className="flex items-start gap-4">
          <ExternalLink size={15} style={{ color: '#00C2A8', flexShrink: 0, marginTop: 2 }} />
          <div>
            <h4 className="font-display text-base mb-2" style={{ color: '#E6EAF0', letterSpacing: '0.03em' }}>Publication Schedule</h4>
            <p className="text-xs font-body leading-relaxed" style={{ color: 'rgba(230,234,240,0.42)' }}>
              Camera-ready manuscripts are due 21 days post-acceptance notification. Digital proceedings are published online before
              the summit opens. Extended journal versions follow a separate 3–4 month editorial cycle post-summit.
              All authors retain copyright under a Creative Commons Attribution (CC BY 4.0) licence.
            </p>
          </div>
        </div>
      </Card>
    </Section>
  )
}
