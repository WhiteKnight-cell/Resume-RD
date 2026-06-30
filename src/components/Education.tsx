"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import AnimatedSection from "./ui/AnimatedSection";
import { FiBookOpen, FiCalendar } from "react-icons/fi";

export default function Education() {
  return (
    <section id="education" className="min-h-screen flex items-center section-padding relative bg-dark-800/50">
      <div className="container-width">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Education <span className="text-gradient">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />
        </AnimatedSection>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-8">
            {education.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="relative pl-12 md:pl-16"
                >
                  <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-dark-900 z-10" />

                  <div className="glass-card rounded-xl p-5 md:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {item.school}
                      </h3>
                      <span className="flex items-center gap-1.5 text-xs text-text-muted">
                        <FiCalendar size={12} />
                        {item.period}
                      </span>
                    </div>
                    <p className="text-primary text-sm font-medium mb-2 flex items-center gap-1.5">
                      <FiBookOpen size={14} />
                      {item.degree}
                    </p>
                    {item.highlights && (
                      <ul className="space-y-1">
                        {item.highlights.map((h, j) => (
                          <li
                            key={j}
                            className="text-text-muted text-sm flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
