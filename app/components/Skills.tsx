'use client'

import { motion } from 'framer-motion'
import { projects } from '../utils/constants'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-white/80 max-w-2xl mx-auto text-sm lg:text-base">
            Some of my recent work that I&apos;m proud of
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card card-hover group bg-white dark:bg-black border border-gray-200 dark:border-gray-800"
            >
              <div className="p-4 lg:p-6">
                <div className="flex items-start justify-between mb-3 lg:mb-4">
                  <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex space-x-2 lg:space-x-3">
                    <a
                      href={project.github}
                      className="p-2 bg-gray-100 dark:bg-black border border-gray-300 dark:border-white rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4 text-gray-900 dark:text-white" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 bg-gray-100 dark:bg-black border border-gray-300 dark:border-white rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-900 dark:text-white" />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg lg:text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-white/80 mb-3 lg:mb-4 text-sm lg:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-white text-xs lg:text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
