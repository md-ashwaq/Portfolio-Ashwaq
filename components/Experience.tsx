"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience Timeline
            <span className="text-dracula-comment font-mono text-2xl ml-4">
              // Career Journey
            </span>
          </h2>
          <p className="text-dracula-comment text-lg">
            Backend contributions and performance optimizations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dracula-current/50" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-java-orange rounded-full border-4 border-dracula-bg" />

                <div className="bg-dracula-current/20 border border-dracula-current/50 rounded-lg p-6 hover:border-java-orange transition-all duration-300">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-dracula-foreground mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-dracula-cyan mb-2">
                          <Briefcase size={16} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-dracula-comment">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span className="font-mono">
                          {exp.period.start} - {exp.period.end}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-dracula-green mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-dracula-foreground/80 flex items-start gap-2"
                        >
                          <span className="text-dracula-green mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-dracula-purple mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-dracula-purple/20 text-dracula-purple rounded border border-dracula-purple/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
