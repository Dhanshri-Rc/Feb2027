import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const contacts = [
  { icon: Mail,   label: 'Email',    value: 'wcbsesd2027@conference.edu',             href: 'mailto:wcbsesd2027@conference.edu' },
  { icon: Phone,  label: 'Phone',    value: '+1 (555) 400-7890',                       href: 'tel:+15554007890' },
  { icon: MapPin, label: 'Location', value: 'Hybrid · Online & In-Person\nFebruary 2027', href: '#' },
]

export default function Contact() {
  const [form,    setForm]    = useState({ name: '', email: '', subject: '', message: '' })
  const [sent,    setSent]    = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1500)
  }

  return (
    <Section id="contact" label="Enquiries" title="GET IN TOUCH"
      subtitle="Questions about submissions, registration, sponsorship, or the programme? Our team responds within 48 hours."
      style={{ background: '#0A0F1C' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Info */}
        <div className="lg:col-span-2 space-y-4">
          {contacts.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a key={label} href={href}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: i * 0.09 }}
              whileHover={{ x: 4 }}
              className="exec-card p-4 flex items-start gap-4 block"
            >
              <div className="w-9 h-9 flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,194,168,0.1)', borderRadius: 2 }}>
                <Icon size={15} style={{ color: '#00C2A8' }} />
              </div>
              <div>
                <p className="text-xs font-body mb-0.5 uppercase tracking-wider" style={{ color: 'rgba(230,234,240,0.28)', letterSpacing: '0.08em' }}>{label}</p>
                <p className="text-sm font-body leading-relaxed" style={{ color: 'rgba(230,234,240,0.7)', whiteSpace: 'pre-line' }}>{value}</p>
              </div>
            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay: 0.32 }}
            className="exec-card p-5"
          >
            <h4 className="font-display text-base mb-2" style={{ color: '#E6EAF0', letterSpacing: '0.04em' }}>Office Hours</h4>
            <p className="text-xs font-body leading-relaxed" style={{ color: 'rgba(230,234,240,0.38)' }}>
              Monday – Friday<br />9:00 AM – 5:00 PM UTC
              <span className="block mt-1" style={{ color: 'rgba(0,194,168,0.55)' }}>Response within 48 business hours</span>
            </p>
          </motion.div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 exec-card p-6 sm:p-8"
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-14 h-14 flex items-center justify-center mb-4"
                style={{ background: 'rgba(0,194,168,0.1)', borderRadius: 2, boxShadow: '0 0 24px rgba(0,194,168,0.2)' }}>
                <CheckCircle size={28} style={{ color: '#00C2A8' }} />
              </div>
              <h3 className="font-display text-2xl mb-2" style={{ color: '#E6EAF0', letterSpacing: '0.04em' }}>MESSAGE RECEIVED</h3>
              <p className="text-xs font-body" style={{ color: 'rgba(230,234,240,0.42)' }}>We'll respond within 48 business hours.</p>
              <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                className="btn-outline-teal mt-6 text-xs py-2 px-5">
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <h3 className="font-display text-2xl mb-6" style={{ color: '#E6EAF0', letterSpacing: '0.04em' }}>SEND ENQUIRY</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'name',  label: 'Full Name',     placeholder: 'Prof. Jane Smith',     type: 'text' },
                  { name: 'email', label: 'Email Address', placeholder: 'jane@institution.edu', type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <label className="block text-xs font-body mb-1.5 uppercase tracking-wider"
                      style={{ color: 'rgba(230,234,240,0.32)', letterSpacing: '0.08em' }}>{f.label}</label>
                    <input type={f.type} name={f.name} value={form[f.name]} onChange={handle}
                      placeholder={f.placeholder} required className="corp-input" />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-body mb-1.5 uppercase tracking-wider"
                  style={{ color: 'rgba(230,234,240,0.32)', letterSpacing: '0.08em' }}>Subject</label>
                <select name="subject" value={form.subject} onChange={handle} required className="corp-input"
                  style={{ background: 'rgba(230,234,240,0.04)', border: '1px solid rgba(230,234,240,0.1)', color: 'rgba(230,234,240,0.75)' }}>
                  <option value="">Select enquiry type…</option>
                  <option>Paper Submission</option>
                  <option>Registration Inquiry</option>
                  <option>Sponsorship & Partnership</option>
                  <option>Speaker / Keynote</option>
                  <option>Technical Support</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-body mb-1.5 uppercase tracking-wider"
                  style={{ color: 'rgba(230,234,240,0.32)', letterSpacing: '0.08em' }}>Message</label>
                <textarea name="message" value={form.message} onChange={handle}
                  placeholder="Write your message here…" required rows={5} className="corp-input resize-none" />
              </div>

              <motion.button type="submit" disabled={loading}
                whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                className="btn-teal w-full justify-center"
                style={{ borderRadius: 2 }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 rounded-full animate-spin"
                      style={{ borderColor: 'rgba(10,15,28,0.3)', borderTopColor: '#0A0F1C' }} />
                    Sending…
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send size={13} /> Send Enquiry
                  </span>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  )
}
