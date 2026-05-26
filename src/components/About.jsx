import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { label: '3+ Years', value: 'Learning Tech' },
    { label: 'Multiple', value: 'Web Projects' },
    { label: 'Arduino', value: 'Experience' },
    { label: 'Frontend', value: 'Development' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-neon-cyan mb-4">Education</h3>
              <p className="text-gray-300 mb-4">
                Currently studying BS Computer Science at <span className="text-neon-blue font-semibold">Pambayang Dalubhasaan ng Marilao (PDM)</span>
              </p>
              <p className="text-gray-400 text-sm">Passionate about frontend development, networking, and application development.</p>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-neon-purple mb-4">Personality</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Fast learner with adaptability in fast-paced environments</li>
                <li>✓ Interested in UI/UX design and web technologies</li>
                <li>✓ Strong problem-solving mindset</li>
                <li>✓ Passionate about continuous learning</li>
              </ul>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass p-6 rounded-xl text-center hover:shadow-glow-cyan smooth-transition"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
