"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import AnimatedSection from "./ui/AnimatedSection";
import { FiCalendar } from "react-icons/fi";

const typeLabels: Record<string, string> = {
  academic: "Academic Project",
  freelance: "Freelance",
  volunteer: "Volunteer",
  training: "Training",
  internship: "Internship",
};

export default function Experience() {
  if (experiences.length === 0) return null;

  return (
    <section id="experience" className="min-h-screen flex items-center section-padding relative bg-dark-800/50">
      <div className="container-width">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 4 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-white font-semibold">{exp.title}</h3>
                    <p className="text-primary text-sm">{exp.organization}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-primary/10 border border-primary/20 text-primary">
                      {typeLabels[exp.type] || exp.type}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <FiCalendar size={11} />
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-3">
                  {exp.description}
                </p>
                {exp.highlights && (
                  <ul className="space-y-1">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-text-muted text-xs flex items-start gap-2"
                      >
                        <span className="text-primary mt-1 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
