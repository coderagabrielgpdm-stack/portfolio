import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Pambayang Dalubhasaan ng Marilao',
      year: '2022 - Present',
      icon: '🎓',
    },
    {
      degree: 'STEM Senior High School',
      school: 'Sta. Maria National High School',
      year: '2020 - 2022',
      icon: '📚',
    },
    {
      degree: 'High School',
      school: 'School of Our Lady Of La Salette',
      year: '2016 - 2020',
      icon: '📖',
    },
    {
      degree: 'Elementary School',
      school: 'FSS Patulo Elementary School',
      year: '2010 - 2016',
      icon: '✏️',
    },
  ]

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="education" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Education Timeline</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-cyan" />

          {/* Timeline items */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="space-y-12"
          >
            {education.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex md:gap-0 gap-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="md:w-1/2 md:pr-8 md:pl-0" style={index % 2 !== 0 ? { paddingLeft: '2rem' } : {}}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass p-6 rounded-xl hover:shadow-glow-purple smooth-transition"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-neon-cyan mb-1">{item.degree}</h3>
                        <p className="text-gray-400 mb-2">{item.school}</p>
                        <span className="inline-block px-3 py-1 bg-neon-purple/20 text-neon-purple text-sm rounded-full">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex md:w-0 items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                    className="w-4 h-4 bg-neon-cyan rounded-full border-4 border-dark-bg"
                  />
                </div>

                {/* Empty space */}
                <div className="md:w-1/2 md:pl-8 md:pr-0" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
