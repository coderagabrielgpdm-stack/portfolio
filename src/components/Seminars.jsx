import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi'

export default function Seminars() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const seminars = [
    {
      id: 1,
      title: 'Intelligent Design: Converging Architecture, Security, & AI',
      type: 'Seminar',
      icon: FiTrendingUp,
    },
    {
      id: 2,
      title: 'Understanding Agile Development: From Sprints and Roles to Code Reviews and CI/CD',
      type: 'Seminar',
      icon: FiUsers,
    },
    {
      id: 3,
      title: 'Beyond Coding: Exploring Business and Product Roles in the Tech Industry',
      type: 'Seminar',
      icon: FiAward,
    },
  ]

  const participation = [
    {
      id: 1,
      title: 'Arduino Exhibit',
      date: 'November 22, 2023',
      icon: '🤖',
    },
    {
      id: 2,
      title: 'Cocktail Mixing and Flair Tending Workshop',
      date: 'TBD',
      icon: '🍹',
    },
    {
      id: 3,
      title: 'Parish Renewal Experience Seminar',
      date: 'TBD',
      icon: '🙏',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="seminars" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Seminars & Participation</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto" />
        </motion.div>

        {/* Seminars Attended */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 20 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-neon-cyan mb-8">Seminars Attended</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {seminars.map((seminar, index) => {
              const IconComponent = seminar.icon
              return (
                <motion.div
                  key={seminar.id}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="glass p-6 rounded-xl flex items-start gap-4 group hover:shadow-glow-blue smooth-transition"
                >
                  <div className="flex-shrink-0 mt-1">
                    <IconComponent className="text-2xl text-neon-blue group-hover:text-neon-cyan smooth-transition" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-white mb-2">{seminar.title}</h4>
                    <span className="inline-block px-3 py-1 bg-neon-blue/20 text-neon-blue text-xs rounded-full">
                      {seminar.type}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Participation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 20 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-neon-purple mb-8">Participation & Events</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-6"
          >
            {participation.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass p-6 rounded-xl text-center group hover:shadow-glow-purple smooth-transition"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 smooth-transition">{item.icon}</div>
                <h4 className="text-lg font-bold text-neon-purple mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.date}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
