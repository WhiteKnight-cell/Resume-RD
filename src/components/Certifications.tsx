"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import AnimatedSection from "./ui/AnimatedSection";
import { FiAward, FiExternalLink, FiCalendar } from "react-icons/fi";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="container-width">
        <AnimatedSection>
          <div className="inline-block mb-2">
            <span className="glass px-4 py-1.5 rounded-full text-xs font-mono text-primary tracking-wider border border-primary/20">
              $ cat /home/ryan/certifications.md
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card rounded-xl p-6 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <FiAward className="text-primary text-xl" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm leading-relaxed">
                    {cert.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted mb-3">
                    <FiCalendar size={12} />
                    {cert.date}
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary-dark transition-colors"
                    >
                      View Credential <FiExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
