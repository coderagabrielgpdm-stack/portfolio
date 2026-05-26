import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Seminars from './components/Seminars'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = window.scrollY
      const scrollPercent = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0
      setScrollProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-dark-bg overflow-hidden">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Seminars />
      <Contact />
      <BackToTop />
    </div>
  )
}

export default App
