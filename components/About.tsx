"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Terminal, User, Code, GraduationCap, Award } from "lucide-react";

export default function About() {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsTyping(true);
  }, []);

  const terminalLines = [
    { prefix: "$", text: "cat about_me.md", delay: 0 },
    { prefix: "", text: "", delay: 500 },
    { prefix: "#", text: "About Ashwaq Masumbaigari", delay: 1000 },
    { prefix: "", text: "", delay: 1500 },
    { prefix: "", text: "Recent Computer Science graduate specializing in", delay: 2000 },
    { prefix: "", text: "Artificial Intelligence and Machine Learning,", delay: 2500 },
    { prefix: "", text: "aspiring to grow as a Full Stack Developer.", delay: 3000 },
    { prefix: "", text: "", delay: 3500 },
    { prefix: "", text: "Experienced in building secure cloud systems", delay: 4000 },
    { prefix: "", text: "with Python and Django, and proficient in Java", delay: 4500 },
    { prefix: "", text: "through academic projects and internships.", delay: 5000 },
    { prefix: "", text: "", delay: 5500 },
    { prefix: "", text: "Certified in MongoDB backend development,", delay: 6000 },
    { prefix: "", text: "Prompt Engineering, and Python.", delay: 6500 },
  ];

  const stats = [
    { icon: GraduationCap, label: "Education", value: "B.E. CSE (AI & ML)", subValue: "8.54 CGPA" },
    { icon: Code, label: "Experience", value: "Fresher", subValue: "Internship Experience" },
    { icon: Award, label: "Certifications", value: "5+", subValue: "Verified Credentials" },
    { icon: User, label: "Status", value: "Open to Work", subValue: "Backend / Java Roles" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-dracula-bg/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
            <span className="text-dracula-comment font-mono text-2xl ml-4">
              // quick intro
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-dracula-bg border border-dracula-current/50 rounded-lg overflow-hidden shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="bg-dracula-current/50 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-dracula-red" />
                <div className="w-3 h-3 rounded-full bg-dracula-yellow" />
                <div className="w-3 h-3 rounded-full bg-dracula-green" />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-dracula-comment mr-2" />
                <span className="text-xs text-dracula-comment font-mono">
                  ashwaq@portfolio:~$
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm min-h-[400px]">
              {terminalLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isTyping ? { opacity: 1 } : {}}
                  transition={{ delay: line.delay / 1000 }}
                  className="mb-1"
                >
                  {line.prefix && (
                    <span className="text-dracula-green mr-2">{line.prefix}</span>
                  )}
                  <span className="text-dracula-foreground">{line.text}</span>
                  {index === terminalLines.length - 1 && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="ml-1"
                    >
                      _
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-dracula-current/20 border border-dracula-current/50 rounded-lg p-6 hover:border-java-orange transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-java-orange mb-3" />
                <p className="text-xs text-dracula-comment mb-1">{stat.label}</p>
                <p className="text-xl font-bold text-dracula-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-dracula-cyan">{stat.subValue}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-dracula-current/20 border border-dracula-current/50 rounded-lg p-6"
        >
          <h3 className="text-xl font-bold text-dracula-foreground mb-4">
            Soft Skills & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-dracula-comment mb-2">Core Strengths:</p>
              <div className="flex flex-wrap gap-2">
                {["Problem-Solving", "Analytical Thinking", "Team Collaboration", "Communication", "Adaptability"].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 bg-dracula-green/20 text-dracula-green rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-dracula-comment mb-2">Extracurriculars:</p>
              <ul className="text-sm text-dracula-foreground/80 space-y-1">
                <li>• Member of college student club "ARTIGENZ"</li>
                <li>• Member of "AMIEE ASSOCIATION"</li>
                <li>• Earned multiple Microsoft badges in AI fundamentals</li>
                <li>• 100+ hours of training in Azure AI</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
