import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "Computer Science Student | Frontend Developer | Tech Enthusiast"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl opacity-50" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 gradient-text"
        >
          Gabriel G. Codera
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div variants={itemVariants} className="h-20 mb-8">
          <p className="text-lg sm:text-2xl text-neon-cyan min-h-12 flex items-center justify-center">
            {displayedText}
            <span className="animate-pulse ml-1">|</span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Passionate Computer Science student focused on web development, UI/UX, and technology-driven solutions.
          Eager to build modern digital experiences and continuously improve technical skills.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button className="px-8 py-3 rounded-lg bg-glow-blue text-white font-semibold hover:shadow-glow-blue smooth-transition hover:scale-105">
            View Projects
          </button>
          <button className="px-8 py-3 rounded-lg border-2 border-neon-cyan text-neon-cyan font-semibold hover:bg-neon-cyan/10 smooth-transition hover:scale-105">
            Download Resume
          </button>
          <button className="px-8 py-3 rounded-lg border-2 border-neon-purple text-neon-purple font-semibold hover:bg-neon-purple/10 smooth-transition hover:scale-105">
            Contact Me
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center text-2xl"
        >
          <a href="#" className="text-gray-400 hover:text-neon-blue smooth-transition hover:scale-125">
            <FiGithub />
          </a>
          <a href="#" className="text-gray-400 hover:text-neon-cyan smooth-transition hover:scale-125">
            <FiLinkedin />
          </a>
          <a href="#" className="text-gray-400 hover:text-neon-purple smooth-transition hover:scale-125">
            <FiMail />
          </a>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <HiChevronDown className="text-neon-cyan text-3xl" />
        </motion.div>
      </motion.div>
    </section>
  )
}
