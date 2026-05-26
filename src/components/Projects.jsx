import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: 'Automated Security Door Lock System',
      description: 'Arduino-based security system with RFID and passcode authentication for smart access control.',
      tags: ['Arduino', 'Embedded Systems', 'Security', 'IoT'],
      featured: true,
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects and skills.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      links: {
        live: 'https://coderagabrielg.netlify.app',
      },
    },
    {
      id: 3,
      title: 'Web Development Project 1',
      description: 'Modern responsive website built with HTML, CSS, and JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      links: {
        live: 'https://coderagabrielact2.netlify.app',
      },
    },
    {
      id: 4,
      title: 'Web Development Project 2',
      description: 'Interactive web application with dynamic features.',
      tags: ['React', 'JavaScript', 'CSS'],
      links: {
        live: 'https://codera-act3.netlify.app',
      },
    },
    {
      id: 5,
      title: 'Web Development Project 3',
      description: 'Feature-rich web application with advanced styling.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      links: {
        live: 'https://coderagabriel-act4.netlify.app',
      },
    },
    {
      id: 6,
      title: 'Web Development Project 4',
      description: 'Responsive design with modern UI components.',
      tags: ['React', 'Tailwind CSS'],
      links: {
        live: 'https://coderaactivity5.netlify.app',
      },
    },
    {
      id: 7,
      title: 'Homepage Project',
      description: 'Clean and professional homepage design.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      links: {
        live: 'https://coderahomepage.netlify.app',
      },
    },
    {
      id: 8,
      title: 'Final Activity Part 1',
      description: 'Comprehensive web project showcasing multiple features.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      links: {
        live: 'https://codera-finalactivity.netlify.app',
      },
    },
    {
      id: 9,
      title: 'Final Activity Part 2',
      description: 'Advanced web application with complex interactions.',
      tags: ['React', 'JavaScript', 'CSS'],
      links: {
        live: 'https://codera-finalactivity-part2.netlify.app',
      },
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
    <section id="projects" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto" />
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <motion.div
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-xl overflow-hidden group"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Image placeholder */}
              <div className="md:w-1/2 h-72 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-lg flex items-center justify-center group-hover:shadow-glow-purple smooth-transition">
                <span className="text-6xl">🔒</span>
              </div>

              {/* Content */}
              <div className="md:w-1/2">
                <div className="inline-block px-3 py-1 bg-neon-blue/20 text-neon-blue text-sm rounded-full mb-4">
                  Featured Project
                </div>
                <h3 className="text-3xl font-bold text-neon-cyan mb-4">Automated Security Door Lock System</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  An Arduino-based security system featuring RFID and passcode authentication for smart access control. This project demonstrates embedded systems integration and IoT principles.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['Arduino', 'Embedded Systems', 'Security', 'IoT'].map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-dark-card border border-neon-cyan/30 text-neon-cyan text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 px-6 py-2 bg-glow-blue text-white rounded-lg font-semibold hover:shadow-glow-blue smooth-transition">
                    <FiExternalLink /> Live Demo
                  </a>
                  <a href="#" className="flex items-center gap-2 px-6 py-2 border-2 border-neon-purple text-neon-purple rounded-lg font-semibold hover:bg-neon-purple/10 smooth-transition">
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass p-6 rounded-xl group overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="w-full h-40 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-lg mb-4 flex items-center justify-center group-hover:shadow-glow-cyan smooth-transition">
                <span className="text-4xl">💻</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-neon-cyan mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 2).map((tag, idx) => (
                  <span key={idx} className="px-2 py-1 bg-dark-card border border-neon-blue/20 text-neon-blue text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-blue smooth-transition text-sm font-semibold"
              >
                View Project <FiExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
