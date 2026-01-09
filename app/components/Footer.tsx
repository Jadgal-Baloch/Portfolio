'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Code, Coffee } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const isDark = resolvedTheme === 'dark'

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
    { icon: Mail, label: 'Email', href: 'mailto:ali.haider@example.com' },
  ]

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  if (!mounted) return null

  return (
    <footer className={`relative ${
      isDark 
        ? 'bg-gradient-to-b from-gray-950 to-black border-t border-gray-900' 
        : 'bg-gradient-to-b from-gray-50 to-white border-t border-gray-200'
    }`}>
      
      {/* Top gradient accent */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 opacity-20" />
      
      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full z-50 
                    bg-gradient-to-br from-emerald-500 to-blue-600 
                    text-white shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20
                    transition-all duration-300 hover:scale-110 
                    border border-emerald-400/20 ${!showScrollTop && 'pointer-events-none'}`}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Ali Haider
                </span>
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Full-Stack Developer passionate about creating exceptional digital experiences.
              </p>
              
              {/* Stats */}
              <div className="flex gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl ${
                      isDark 
                        ? 'bg-gray-900 border border-gray-800 hover:border-emerald-500/50 hover:bg-emerald-900/20' 
                        : 'bg-white border border-gray-200 hover:border-emerald-400 hover:bg-emerald-50'
                    } shadow-sm hover:shadow-md transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className={`flex items-center gap-3 text-gray-600 dark:text-gray-400 
                               hover:text-emerald-600 dark:hover:text-emerald-400 
                               transition-colors group`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-emerald-500 
                                  opacity-0 group-hover:opacity-100 transition-opacity`} />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {['Web Development', 'UI/UX Design', 'Mobile Apps', 'Consulting'].map((service) => (
                <li key={service}>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Code className="w-4 h-4 text-emerald-500" />
                    {service}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Subscribe to my newsletter for the latest updates and tips.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg 
                         bg-white dark:bg-gray-900
                         border border-gray-300 dark:border-gray-700
                         focus:outline-none focus:border-emerald-500
                         text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                         transition-colors text-sm"
              />
              <button className="w-full px-4 py-3 rounded-lg text-sm font-medium
                               bg-emerald-600 hover:bg-emerald-700 
                               text-white transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="my-12 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Ali Haider. All rights reserved.
            </p>
            <div className="flex items-center gap-2 mt-2 text-xs text-gray-500 dark:text-gray-500">
              <Heart className="w-3 h-3 text-red-500" />
              <Coffee className="w-3 h-3 text-yellow-600" />
              <span>Made with passion and caffeine</span>
            </div>
          </motion.div>

          {/* Legal links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-4 text-sm"
          >
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Cookies
            </a>
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              License
            </a>
          </motion.div>
        </div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Built with Next.js • TypeScript • Tailwind CSS • Framer Motion • Vercel
          </p>
        </motion.div>
      </div>
    </footer>
  )
}