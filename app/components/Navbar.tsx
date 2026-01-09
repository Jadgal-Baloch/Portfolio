'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { navItems } from '../utils/constants'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted on client
  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full bg-white backdrop-blur-lg z-50 border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              AH
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gray-200 animate-pulse" />
              <button className="md:hidden p-2">
                <Menu className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  // Use resolvedTheme which is the actual theme being shown
  const currentTheme = resolvedTheme || 'light'

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-lg z-50 border-b shadow-lg transition-colors
                     ${currentTheme === 'dark' ? 'bg-black border-black' : 'bg-white border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent"
          >
            AH
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className={`relative font-medium text-sm transition-colors
                            ${currentTheme === 'dark' ? 'text-white hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all
                                  ${currentTheme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'}
                                  group-hover:w-full`} />
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle - Shows correct icon based on actual theme */}
            <button
              onClick={() => {
                // Cycle: system → light → dark → system
                if (theme === 'system') setTheme('light')
                else if (theme === 'light') setTheme('dark')
                else setTheme('system')
              }}
              className={`p-2 rounded-lg border transition-colors
                          ${currentTheme === 'dark' ? 'bg-black border-white hover:bg-gray-900' : 
                            'bg-white border-gray-300 hover:bg-blue-50'}`}
              title={theme === 'system' ? 'Using system theme' : `Using ${currentTheme} theme`}
            >
              {currentTheme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className={`w-5 h-5 ${currentTheme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
              )}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className={`hidden md:block px-5 py-2 rounded-lg shadow transition-colors
                          ${currentTheme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 
                            'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              Get In Touch
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className={`w-6 h-6 ${currentTheme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${currentTheme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden mt-2 rounded-b-lg overflow-hidden transition-colors
                          ${currentTheme === 'dark' ? 'bg-black border-black text-white' : 
                            'bg-white border-gray-200 text-gray-800'}`}
            >
              <div className="px-3 py-3 space-y-1">
                {navItems.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-lg transition-colors
                                hover:bg-blue-50 dark:hover:bg-gray-800
                                ${currentTheme === 'dark' ? 'text-white' : 'text-gray-800'}`}
                  >
                    {item.name}
                  </a>
                ))}

                <div className="border-t border-gray-200 dark:border-gray-800 pt-2 mt-2">
                  <p className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">Theme Options</p>
                  <button
                    onClick={() => { setTheme('system'); setIsOpen(false) }}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
                                ${theme === 'system' ? 'bg-blue-100 dark:bg-blue-900/30' : 'hover:bg-blue-50 dark:hover:bg-gray-800'}`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500"></div>
                      System Default
                    </div>
                  </button>
                  <button
                    onClick={() => { setTheme('light'); setIsOpen(false) }}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
                                ${theme === 'light' ? 'bg-blue-100 dark:bg-blue-900/30' : 'hover:bg-blue-50 dark:hover:bg-gray-800'}`}
                  >
                    <Sun className="w-4 h-4 text-yellow-500" />
                    Light Mode
                  </button>
                  <button
                    onClick={() => { setTheme('dark'); setIsOpen(false) }}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
                                ${theme === 'dark' ? 'bg-blue-100 dark:bg-blue-900/30' : 'hover:bg-blue-50 dark:hover:bg-gray-800'}`}
                  >
                    <Moon className="w-4 h-4 text-blue-400" />
                    Dark Mode
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}