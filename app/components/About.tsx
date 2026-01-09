'use client'

import { motion, useInView } from 'framer-motion'
import { Code2, Rocket, Users, Target, Cpu, Zap, Cog, Terminal } from 'lucide-react'
import { useRef } from 'react'

export default function About() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Great team player and communication skills",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Finding innovative solutions to complex challenges",
      color: "from-orange-500 to-red-500"
    }
  ]

  const skills = [
    { name: "React & Next.js Expert", level: 95, icon: Cpu },
    { name: "TypeScript Enthusiast", level: 90, icon: Zap },
    { name: "UI/UX Focused", level: 88, icon: Cog },
    { name: "API Design", level: 85, icon: Terminal }
  ]

  return (
    <section id="about" ref={containerRef} className="section relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
             backgroundSize: '24px 24px'
           }}
      ></div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full border border-cyan-500/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        {/* Section header with connector line */}
        <div className="flex items-center gap-6 mb-16">
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
          >
            <span className="text-sm font-medium text-cyan-500 dark:text-cyan-400 tracking-widest uppercase">
              01 · About
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Title with gradient */}
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                About{" "}
                <span className="relative">
                  <span className="gradient-text">Me</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </span>
              </h2>
              
              {/* Animated intro line */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8"
              >
                Hello! I'm{" "}
                <span className="text-cyan-600 dark:text-cyan-400 font-bold relative group">
                  Ali Haider
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </span>
                , a passionate Full-Stack Developer.
              </motion.p>
            </div>

            {/* Bio paragraphs with staggered animation */}
            <div className="space-y-6">
              {[
                "With over 3 years of experience in building web applications, I specialize in creating responsive, performant, and user-friendly digital experiences. I love turning complex problems into simple, beautiful designs.",
                "My journey started with front-end development, but I quickly expanded to back-end technologies, making me a versatile developer who can handle projects from conception to deployment.",
                "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while reading tech blogs."
              ].map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Skills indicators with animated bars */}
            <div className="pt-8">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
              >
                Core Expertise
              </motion.h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                          <skill.icon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 1 + index * 0.1, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                className="group relative"
              >
                {/* Card glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 group-hover:duration-200"></div>
                
                {/* Main card */}
                <div className="relative p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden">
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${feature.color} transition-opacity duration-500`}></div>
                  
                  {/* Icon with animated ring */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-300 dark:border-gray-700 group-hover:border-cyan-500/50 transition-colors">
                      <feature.icon className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                    </div>
                    
                    {/* Animated ring */}
                    <motion.div
                      className="absolute -inset-2 border-2 border-cyan-500/30 rounded-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                  </div>

                  {/* Title with underline animation */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white relative inline-block">
                    {feature.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover indicator line */}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}

            {/* Stats card spanning both columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="sm:col-span-2 mt-6"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5"
                     style={{
                       backgroundImage: `linear-gradient(45deg, transparent 45%, #00ffff 50%, transparent 55%)`,
                       backgroundSize: '20px 20px'
                     }}
                ></div>
                
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-6">
                    Building <span className="text-cyan-400">Digital Excellence</span>
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[
                      { value: "3+", label: "Years Experience" },
                      { value: "50+", label: "Projects Delivered" },
                      { value: "100%", label: "Client Satisfaction" },
                      { value: "∞", label: "Passion for Code" }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

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