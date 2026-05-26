import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['Hero', 'About', 'Skills', 'Education', 'Projects', 'Seminars', 'Contact']

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase())
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full glass z-40 border-b border-neon-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <div className="text-2xl font-bold gradient-text">GC</div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => scrollToSection(item)}
                className="px-4 py-2 rounded-lg text-sm font-medium smooth-transition hover:bg-neon-blue/20 hover:text-neon-blue text-gray-300"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neon-cyan hover:text-neon-blue smooth-transition"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 flex flex-col gap-2"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium smooth-transition hover:bg-neon-blue/20 hover:text-neon-blue text-gray-300"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
