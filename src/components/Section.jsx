import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Section({ id, className='', style, children, label, title, subtitle, center=false }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <section id={id} ref={ref} className={`relative py-20 lg:py-28 overflow-hidden ${className}`} style={style}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(label || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`mb-14 ${center ? 'text-center' : ''}`}
          >
            {label && <p className="exec-label mb-3">{label}</p>}
            {title && (
              <h2
                className={`font-display text-cream-100 leading-tight mb-4 ${center ? 'mx-auto max-w-3xl' : ''}`}
                style={{ fontSize: 'clamp(2.4rem, 4vw, 4rem)', color: '#E6EAF0', letterSpacing: '0.02em' }}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-sm sm:text-base font-body leading-relaxed ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
                style={{ color: 'rgba(230,234,240,0.5)' }}>
                {subtitle}
              </p>
            )}
            <div className={`mt-5 h-px w-16 ${center ? 'mx-auto' : ''}`}
              style={{ background: 'linear-gradient(90deg, #00C2A8, #FFD166)' }} />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
