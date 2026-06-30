"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import AnimatedSection from "./ui/AnimatedSection";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

const categories = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "academic", label: "Academic" },
  { key: "database", label: "Database" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="min-h-screen flex items-center section-padding relative bg-dark-800/50">
      <div className="container-width">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />
        </AnimatedSection>

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                activeCategory === cat.key
                  ? "bg-primary/10 border-primary/30 text-primary"
                  : "bg-dark-700/50 border-dark-500/30 text-text-muted hover:border-primary/20 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-xl overflow-hidden h-full flex flex-col group"
                >
                  <div className="relative h-44 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center overflow-hidden">
                    <FiFolder className="text-5xl text-primary/30 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] rounded bg-dark-700/80 border border-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-0.5 text-[10px] rounded bg-dark-700/80 border border-primary/10 text-text-muted">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-white font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="space-y-1 mb-4">
                      {project.features.slice(0, 3).map((f) => (
                        <li
                          key={f}
                          className="text-xs text-text-muted list-none flex items-start gap-1.5"
                        >
                          <span className="text-primary mt-0.5">▹</span>
                          {f}
                        </li>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-primary/5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors"
                      >
                        <FiGithub size={14} /> Source
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors"
                        >
                          <FiExternalLink size={14} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-text-muted py-12">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
