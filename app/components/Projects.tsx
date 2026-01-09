'use client'

import { motion, useInView } from 'framer-motion'
import { projects } from '../utils/constants'
import { ExternalLink, Github, ArrowUpRight, Zap, Sparkles, Layers } from 'lucide-react'
import { useRef, useState } from 'react'

export default function Projects() {
  const ref = useRef(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" ref={ref} className="section relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: `linear-gradient(90deg, transparent 49%, #00ffff 50%, transparent 51%)`,
             backgroundSize: '40px 40px'
           }}
      ></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-32 h-32 border ${
              i % 2 === 0 
                ? 'border-cyan-500/20 rounded-full' 
                : 'border-purple-500/20 rotate-45'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        {/* Section header with animated numbering */}
        <div className="flex items-center gap-6 mb-20">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
              <Layers className="w-6 h-6 text-cyan-500" />
            </div>
            <div>
              <span className="text-sm font-medium text-cyan-500 dark:text-cyan-400 tracking-widest uppercase">
                02 · Portfolio
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-2">
                Featured{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Projects
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </span>
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Section description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Some of my recent work that I'm proud of. Each project represents 
            a unique challenge and solution, showcasing my skills in modern web development.
          </p>
        </motion.div>

        {/* Projects grid with enhanced hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60, rotateX: 45 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              whileHover={{ 
                y: -12,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative group"
            >
              {/* Glow effect overlay */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500 group-hover:duration-200 -z-10"></div>
              
              {/* Main project card */}
              <div className="relative h-full p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden">
                {/* Background gradient that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
                
                {/* Project number indicator */}
                <div className="absolute top-6 right-6">
                  <motion.div
                    animate={hoveredProject === index ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center"
                  >
                    <span className="text-sm font-bold text-white">0{index + 1}</span>
                  </motion.div>
                </div>

                {/* Project header with animated arrow */}
                <div className="flex items-start justify-between mb-8">
                  <div className="relative">
                    <motion.div
                      animate={hoveredProject === index ? { 
                        rotate: 45,
                        scale: 1.2 
                      } : {}}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <ArrowUpRight className="w-10 h-10 text-gray-400 group-hover:text-cyan-500 transition-colors" />
                    </motion.div>
                    <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 group/btn"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 group/btn"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    </motion.a>
                  </div>
                </div>

                {/* Project content with staggered animations */}
                <motion.div
                  initial={false}
                  animate={hoveredProject === index ? { 
                    paddingLeft: "1.5rem",
                    borderLeftColor: "#06b6d4"
                  } : {
                    paddingLeft: "0",
                    borderLeftColor: "transparent"
                  }}
                  transition={{ duration: 0.3 }}
                  className="border-l-2 border-transparent pl-0"
                >
                  {/* Project title */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                    <motion.span
                      className="block h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 mt-2"
                      initial={{ width: 0 }}
                      animate={hoveredProject === index ? { width: "100%" } : { width: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </h3>
                  
                  {/* Project description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack with animated entrance */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={isInView ? { 
                          opacity: 1, 
                          scale: 1, 
                          y: 0 
                        } : {}}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.15 + techIndex * 0.05 
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: hoveredProject === index 
                            ? "rgba(6, 182, 212, 0.1)" 
                            : undefined,
                          borderColor: hoveredProject === index 
                            ? "#06b6d4" 
                            : undefined,
                          color: hoveredProject === index 
                            ? "#06b6d4" 
                            : undefined
                        }}
                        className="px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Sparkle effect on hover */}
                {hoveredProject === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute top-4 left-4"
                  >
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black border border-gray-300 dark:border-gray-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100%", label: "Client Satisfaction", icon: "✓", color: "text-green-500" },
              { value: "24/7", label: "Support Available", icon: "⚡", color: "text-yellow-500" },
              { value: "50+", label: "Projects Completed", icon: "🚀", color: "text-cyan-500" },
              { value: "3+", label: "Years Experience", icon: "⭐", color: "text-purple-500" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-4 p-1 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 mb-8">
            <Zap className="w-5 h-5 text-cyan-500" />
            <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
              Ready for your next project?
            </span>
          </div>
          
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-medium text-lg
                     bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 
                     text-white shadow-xl hover:shadow-2xl transition-all duration-300
                     border border-cyan-500/30 hover:scale-105 group/cta"
          >
            Start a Project
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowUpRight className="w-6 h-6 group-hover/cta:rotate-45 transition-transform" />
            </motion.div>
          </a>
          
          <p className="text-gray-600 dark:text-gray-400 mt-6 text-sm">
            Let's discuss how we can bring your ideas to life
          </p>
        </motion.div>

        {/* Decorative connector line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          className="h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-20"
        />
      </div>
    </section>
  )
}