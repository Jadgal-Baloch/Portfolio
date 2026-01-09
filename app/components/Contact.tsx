'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Sparkles, MessageSquare, User } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from 'next-themes'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      alert('Message sent successfully!')
    }, 1000)
  }

  const contactInfo = [
    { icon: Mail, text: 'ali.haider@example.com', label: 'Email' },
    { icon: Phone, text: '+92 300 1234567', label: 'Phone' },
    { icon: MapPin, text: 'Karachi, Pakistan', label: 'Location' },
  ]

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gray-950' : 'bg-gradient-to-b from-gray-50 to-white'}`} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: isDark 
                ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)'
                : 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
              border: `1px solid ${isDark ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.15)'}`
            }}
          >
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
              Get in Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Let&apos;s Talk
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind? Let&apos;s discuss how we can work together to bring your ideas to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info - Compact Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className={`sticky top-24 p-6 rounded-2xl ${
              isDark 
                ? 'bg-gradient-to-br from-gray-900/80 to-gray-900/60 border border-gray-800' 
                : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-gray-200'
            } backdrop-blur-sm shadow-xl`}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Quick Contact
              </h3>
              
              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className={`p-2.5 rounded-lg ${
                      isDark 
                        ? 'bg-emerald-900/30 border border-emerald-800/30 group-hover:bg-emerald-900/50' 
                        : 'bg-emerald-100 border border-emerald-200 group-hover:bg-emerald-200/80'
                    } transition-colors`}>
                      <item.icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        {item.label}
                      </p>
                      <p className="text-gray-800 dark:text-gray-200 font-medium">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Quick Links */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                  Usually reply within 24 hours
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Available for freelance</span>
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Online
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Compact Main */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className={`p-8 rounded-2xl ${
              isDark 
                ? 'bg-gradient-to-br from-gray-900/80 to-gray-900/60 border border-gray-800' 
                : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-gray-200'
            } backdrop-blur-sm shadow-xl`}>
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2.5 rounded-lg ${
                  isDark ? 'bg-blue-900/30 border border-blue-800/30' : 'bg-blue-100 border border-blue-200'
                }`}>
                  <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Send a Message
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Fill out the form and I&apos;ll get back to you soon
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <User className="w-4 h-4 text-emerald-500" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm
                               bg-white dark:bg-gray-800
                               border border-gray-300 dark:border-gray-700
                               focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20
                               text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                               transition-all duration-200"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Mail className="w-4 h-4 text-emerald-500" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm
                               bg-white dark:bg-gray-800
                               border border-gray-300 dark:border-gray-700
                               focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20
                               text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                               transition-all duration-200"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <MessageSquare className="w-4 h-4 text-emerald-500" />
                    Your Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg text-sm
                             bg-white dark:bg-gray-800
                             border border-gray-300 dark:border-gray-700
                             focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20
                             text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                             transition-all duration-200 resize-none"
                    placeholder="Tell me about your project, timeline, and budget..."
                    required
                  />
                </div>

                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3.5 rounded-lg font-medium text-sm
                             bg-gradient-to-r from-emerald-600 to-blue-600 
                             hover:from-emerald-700 hover:to-blue-700 
                             text-white shadow-lg hover:shadow-xl 
                             transition-all duration-300 flex items-center justify-center gap-2
                             disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                  
                  <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                    By submitting, you agree to our privacy policy
                  </p>
                </div>
              </form>

              {/* Quick Tips */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                  💡 Quick tips for better responses:
                </p>
                <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-emerald-500" />
                    Mention your project timeline
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-emerald-500" />
                    Include your budget range
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-emerald-500" />
                    Describe your target audience
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Prefer email? Just write to{' '}
            <a href="mailto:ali.haider@example.com" className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline">
              ali.haider@example.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}