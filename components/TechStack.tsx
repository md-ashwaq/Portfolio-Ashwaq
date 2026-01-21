"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { Skill } from "@/types";

const categoryColors = {
  "Core Java/Spring": "text-java-orange border-java-orange",
  "Python": "text-dracula-yellow border-dracula-yellow",
  "Cloud & DevOps": "text-dracula-cyan border-dracula-cyan",
  "Databases": "text-dracula-green border-dracula-green",
  "System Design": "text-dracula-purple border-dracula-purple",
  "Frontend": "text-dracula-pink border-dracula-pink",
};

const categoryIcons = {
  "Core Java/Spring": "☕",
  "Python": "🐍",
  "Cloud & DevOps": "☁️",
  "Databases": "🗄️",
  "System Design": "🏗️",
  "Frontend": "🎨",
};

export default function TechStack() {
  const coreCategory: Skill["category"] = "Core Java/Spring";
  const pythonCategory: Skill["category"] = "Python";
  const col2: Skill["category"][] = ["Cloud & DevOps", "System Design"];
  const col3: Skill["category"][] = ["Databases", "Frontend"];

  const skillsByCategory = (category: Skill["category"]) =>
    skills.filter((s) => s.category === category);

  const CategoryCard = ({
    category,
    className,
  }: {
    category: Skill["category"];
    className?: string;
  }) => {
    const categorySkills = skillsByCategory(category);
    const colorClass = categoryColors[category];

    return (
      <motion.div
        variants={itemVariants}
        className={`bg-dracula-current/20 border border-dracula-current/50 rounded-lg overflow-hidden hover:border-opacity-100 transition-all duration-300 flex flex-col ${className ?? ""}`}
      >
        <div className="px-6 py-4 bg-dracula-bg/40 border-b border-dracula-current/50 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{categoryIcons[category]}</span>
            <h3 className={`text-xl font-bold ${colorClass.split(" ")[0]}`}>
              {category}
            </h3>
          </div>
          <span className="text-xs text-dracula-comment font-mono">
            {categorySkills.length} items
          </span>
        </div>

        <div className="p-6 space-y-2 overflow-auto pr-4">
          {categorySkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-between p-2 bg-dracula-bg/50 rounded"
            >
              <span className="text-dracula-foreground font-mono text-sm">
                {skill.name}
              </span>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  skill.level === "Expert"
                    ? "bg-dracula-green/20 text-dracula-green"
                    : skill.level === "Advanced"
                    ? "bg-dracula-cyan/20 text-dracula-cyan"
                    : skill.level === "Intermediate"
                    ? "bg-dracula-yellow/20 text-dracula-yellow"
                    : "bg-dracula-comment/20 text-dracula-comment"
                }`}
              >
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech Stack
            <span className="text-dracula-comment font-mono text-2xl ml-4">
              // The Dependency Graph
            </span>
          </h2>
          <p className="text-dracula-comment text-lg">
            Categorized expertise in enterprise software development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch lg:h-[960px]"
        >
          {/* Column 1: Core Java + Python */}
          <div className="flex flex-col gap-6 h-full">
            <CategoryCard
              category={coreCategory}
              className="hover:border-java-orange flex-1 min-h-0"
            />
            <CategoryCard
              category={pythonCategory}
              className="hover:border-dracula-yellow flex-1 min-h-0"
            />
          </div>

          {/* Column 2: Cloud + System */}
          <div className="flex flex-col gap-6 h-full">
            {col2.map((c) => (
              <CategoryCard key={c} category={c} className="flex-1 min-h-0" />
            ))}
          </div>

          {/* Column 3: Database + Frontend */}
          <div className="flex flex-col gap-6 h-full">
            {col3.map((c) => (
              <CategoryCard key={c} category={c} className="flex-1 min-h-0" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
