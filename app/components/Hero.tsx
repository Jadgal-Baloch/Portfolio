'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, ArrowDown, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto text-center px-4">
          <div className="h-96"></div>
        </div>
      </section>
    )
  }

  const isDark = resolvedTheme === 'dark'

  // Normal size cool animated name
  const AnimatedName = () => {
    const name = "Ali Haider"
    const letters = name.split('')

    return (
      <div className="relative">
        {/* Name with cool animation */}
        <div className="flex justify-center items-center">
          {letters.map((letter, index) => (
            <motion.div
              key={index}
              className="relative mx-0.5 sm:mx-1"
              initial={{ 
                opacity: 0, 
                y: 50,
                scale: 0.5,
                rotateY: 90
              }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: 1,
                rotateY: 0
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                type: "spring",
                stiffness: 150,
                damping: 12
              }}
              whileHover={{
                scale: 1.2,
                y: -8,
                rotateZ: 5,
                transition: {
                  duration: 0.2
                }
              }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute -inset-2 rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ 
                  opacity: 1, 
                  scale: 1.2,
                  background: isDark 
                    ? 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)' 
                    : 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)'
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* The letter */}
              <span className="relative z-10 text-5xl sm:text-6xl md:text-7xl font-bold">
                <span className={`${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-blue-600'
                } bg-clip-text text-transparent`}>
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              </span>
            </motion.div>
          ))}
        </div>

        {/* Cool underline */}
        <motion.div
          className="mt-6"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
        >
          <div className="h-1 w-48 mx-auto overflow-hidden rounded-full bg-gradient-to-r from-gray-800/20 to-gray-800/20 dark:from-gray-300/20 dark:to-gray-300/20">
            <motion.div
              className="h-full w-1/3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
              animate={{
                x: ["-100%", "400%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center pt-16">
      {/* Simple background */}
      <div className="absolute inset-0 opacity-[0.02]"
           style={{
             backgroundImage: `linear-gradient(to right, ${isDark ? '#ffffff' : '#000000'}20 1px, transparent 1px),
                               linear-gradient(to bottom, ${isDark ? '#ffffff' : '#000000'}20 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }}
      />
      
      {/* Subtle gradient */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
          : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
      }`} />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 
                       bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10"
          >
            <Sparkles className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Hello, I&apos;m
            </span>
          </motion.div>

          {/* Animated Name - Normal Size */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <AnimatedName />
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
              <span className="text-gray-600 dark:text-gray-300">Full-Stack </span>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">Web Developer</span>
              <span className="text-gray-600 dark:text-gray-300"> & </span>
              <span className="text-purple-600 dark:text-purple-400 font-bold">UI/UX Enthusiast</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 px-4"
          >
            I build exceptional digital experiences that are fast, accessible, 
            visually appealing, and responsive. Let&apos;s bring your ideas to life!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <a href="#projects" 
               className="px-8 py-3 rounded-xl font-medium 
                         bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 
                         text-white shadow-lg hover:shadow-xl transition-all duration-300
                         border border-cyan-500/20 hover:scale-105">
              View Projects
            </a>
            <button className="px-8 py-3 rounded-xl font-medium 
                               border border-gray-300 dark:border-gray-600 
                               text-gray-700 dark:text-gray-300
                               hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400
                               hover:bg-cyan-50 dark:hover:bg-cyan-900/20
                               transition-all duration-300 hover:scale-105">
              Download CV
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center gap-6"
          >
            {[
              { icon: Github, label: 'GitHub', href: '#' },
              { icon: Linkedin, label: 'LinkedIn', href: '#' },
              { icon: Twitter, label: 'Twitter', href: '#' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + (index * 0.1), type: "spring" }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl 
                           bg-white/10 dark:bg-black/10 backdrop-blur-sm
                           border border-white/20 dark:border-white/10
                           hover:border-cyan-500 hover:bg-cyan-500/10
                           transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-gray-600 dark:text-gray-300 
                                        group-hover:text-cyan-600 dark:group-hover:text-cyan-400 
                                        transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              delay: 1.5,
              y: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <a href="#about" className="block p-2">
              <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500 
                                    hover:text-cyan-500 dark:hover:text-cyan-400 
                                    transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}