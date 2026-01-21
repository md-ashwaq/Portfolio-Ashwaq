"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Zap } from "lucide-react";

export default function Hero() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const icons = [
    { Icon: Code2, label: "Java" },
    { Icon: Database, label: "MongoDB" },
    { Icon: Cloud, label: "Cloud" },
    { Icon: Zap, label: "Spring Boot" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16 pb-24 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #50FA7B 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-dracula-current/50 rounded-full text-dracula-cyan text-sm font-mono">
              &gt; Building Scalable Enterprise Systems
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-java-orange via-dracula-cyan to-dracula-green bg-clip-text text-transparent"
          >
            Building Scalable
            <br />
            Enterprise Systems
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-dracula-foreground/90 mb-4 font-semibold"
          >
            Mohammed Ashwaq
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-dracula-foreground/80 mb-8 max-w-3xl mx-auto"
          >
            Full Stack Java Developer specializing in <span className="text-java-orange font-semibold">Spring Boot</span>,{" "}
            <span className="text-dracula-cyan font-semibold">Cloud Systems</span>, and{" "}
            <span className="text-dracula-green font-semibold">Backend Architecture</span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-dracula-comment mb-12 max-w-2xl mx-auto font-mono"
          >
            {`// Fresher (B.E. CSE - AI & ML) | Internship experience in Java Full Stack`}
            <br />
            {`// Expert in Java, Spring Boot, MongoDB, and Cloud Security`}
            <br />
            {`// Building reliable, scalable, and secure backend systems`}
          </motion.p>

          {/* Tech Icons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {icons.map(({ Icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="p-4 bg-dracula-current/30 rounded-lg border border-dracula-current/50">
                  <Icon className="w-8 h-8 text-java-orange" />
                </div>
                <span className="text-sm text-dracula-comment">{label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-dracula-current rounded-full mx-auto flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1 h-3 bg-java-orange rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
