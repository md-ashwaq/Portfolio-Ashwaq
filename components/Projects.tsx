"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ExternalLink, Github, Code2 } from "lucide-react";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-dracula-bg/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Project Micro-Services
            <span className="text-dracula-comment font-mono text-2xl ml-4">
              // Enterprise Solutions
            </span>
          </h2>
          <p className="text-dracula-comment text-lg">
            Each project solves real-world problems with scalable architecture
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-dracula-current/20 border border-dracula-current/50 rounded-lg p-6 hover:border-java-orange transition-all duration-300 group"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-java-orange/20 rounded">
                    <Code2 className="w-5 h-5 text-java-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dracula-foreground group-hover:text-java-orange transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-dracula-comment font-mono">
                      {project.period.start} - {project.period.end}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-dracula-foreground/80 mb-4">
                {project.description}
              </p>

              {/* Problem Solved */}
              <div className="mb-4 p-3 bg-dracula-bg/50 rounded border-l-4 border-dracula-green">
                <p className="text-sm font-semibold text-dracula-green mb-1">
                  Problem Solved:
                </p>
                <p className="text-sm text-dracula-foreground/70">
                  {project.problemSolved}
                </p>
              </div>

              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-dracula-cyan/20 text-dracula-cyan rounded-full font-mono"
                    >
                      <strong>{metric.label}:</strong> {metric.value}
                    </span>
                  ))}
                </div>
              )}

              {/* Technologies */}
              <div className="mb-4">
                <p className="text-xs text-dracula-comment mb-2 font-mono">
                  Technology Stack:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-dracula-purple/20 text-dracula-purple rounded border border-dracula-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-dracula-current/30">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-dracula-cyan hover:text-dracula-cyan/80 transition-colors text-sm"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-dracula-green hover:text-dracula-green/80 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
