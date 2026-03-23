import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

import Navbar               from './components/Navbar'
import Footer               from './components/Footer'
import Hero                 from './pages/Hero'
import AboutSeries          from './pages/AboutSeries'
import AboutConference      from './pages/AboutConference'
import Objectives           from './pages/Objectives'
import Tracks               from './pages/Tracks'
import SubmissionGuidelines from './pages/SubmissionGuidelines'
import SubmissionProcess    from './pages/SubmissionProcess'
import PlagiarismPolicy     from './pages/PlagiarismPolicy'
import ImportantDates       from './pages/ImportantDates'
import Registration         from './pages/Registration'
import Publications         from './pages/Publications'
import Committee            from './pages/Committee'
import Contact              from './pages/Contact'

export default function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 700)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#0A0F1C', color: '#E6EAF0' }}>
      <Navbar />
      <main>
        <Hero />
        <AboutSeries />
        <AboutConference />
        <Objectives />
        <Tracks />
        <SubmissionGuidelines />
        <SubmissionProcess />
        <PlagiarismPolicy />
        <ImportantDates />
        <Registration />
        <Publications />
        <Committee />
        <Contact />
      </main>
      <Footer />

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 12 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 flex items-center justify-center animate-pulse-teal"
            style={{
              background: '#00C2A8',
              color: '#0A0F1C',
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0,194,168,0.45)',
            }}
            aria-label="Back to top"
          >
            <ArrowUp size={17} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
