import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi'

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'gabriel@example.com',
      link: 'mailto:gabriel@example.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+63 XXX XXX XXXX',
      link: 'tel:+63',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Marilao, Bulacan, Philippines',
      link: '#',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'Gabriel Codera',
      link: 'https://linkedin.com',
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
    <section id="contact" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-neon-cyan mb-8">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="glass p-6 rounded-xl flex items-center gap-4 group hover:shadow-glow-cyan smooth-transition"
                  >
                    <IconComponent className="text-2xl text-neon-blue group-hover:text-neon-cyan smooth-transition" />
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-neon-purple mb-8">Send a Message</h3>
            <motion.form
              onSubmit={handleSubmit}
              className="glass p-8 rounded-xl space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              <div>
                <label className="block text-sm font-semibold text-neon-cyan mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-dark-card border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan smooth-transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neon-cyan mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 bg-dark-card border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan smooth-transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neon-cyan mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={4}
                  className="w-full px-4 py-2 bg-dark-card border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan smooth-transition resize-none"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-glow-purple text-white font-semibold rounded-lg hover:shadow-glow-purple smooth-transition"
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
