import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiTool, FiHeart } from 'react-icons/fi'

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const technicalSkills = [
    'Frontend Web Development',
    'Website Design & Development',
    'Application Development',
    'Network Configuration',
    'Arduino Projects',
    'Microsoft Office',
    'Blender Basics',
    'Canva Basics',
  ]

  const personalSkills = [
    'Problem Solving',
    'Flexibility & Adaptability',
    'Attention to Detail',
    'Strong Work Ethics',
    'Team Collaboration',
  ]

  const techStack = [
    { name: 'HTML', color: '#FF5722' },
    { name: 'CSS', color: '#2196F3' },
    { name: 'JavaScript', color: '#FFC107' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Tailwind', color: '#06B6D4' },
    { name: 'Arduino', color: '#00D9FF' },
    { name: 'Git', color: '#F1502F' },
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
    <section id="skills" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {/* Technical Skills */}
          <motion.div variants={itemVariants} className="glass p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <FiCode className="text-2xl text-neon-blue" />
              <h3 className="text-2xl font-bold text-neon-blue">Technical</h3>
            </div>
            <ul className="space-y-3">
              {technicalSkills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-neon-blue smooth-transition"
                >
                  <span className="w-2 h-2 bg-neon-blue rounded-full" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Personal Skills */}
          <motion.div variants={itemVariants} className="glass p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <FiHeart className="text-2xl text-neon-purple" />
              <h3 className="text-2xl font-bold text-neon-purple">Personal</h3>
            </div>
            <ul className="space-y-3">
              {personalSkills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-neon-purple smooth-transition"
                >
                  <span className="w-2 h-2 bg-neon-purple rounded-full" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="glass p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <FiTool className="text-2xl text-neon-cyan" />
              <h3 className="text-2xl font-bold text-neon-cyan">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 rounded-lg bg-dark-card border border-neon-cyan/30 text-sm font-semibold text-neon-cyan smooth-transition hover:shadow-glow-cyan"
                  style={{ borderColor: tech.color + '40', color: tech.color }}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
