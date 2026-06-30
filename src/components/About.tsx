"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import AnimatedSection from "./ui/AnimatedSection";
import { FiCode, FiDatabase, FiShield, FiCloud, FiLayout, FiMonitor } from "react-icons/fi";

const passionIcons: Record<string, React.ReactNode> = {
  "Web Development": <FiCode />,
  "System Analysis & Design": <FiMonitor />,
  "Database Management": <FiDatabase />,
  "UI/UX Design": <FiLayout />,
  Cybersecurity: <FiShield />,
  "Cloud Computing": <FiCloud />,
};

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center section-padding relative">
      <div className="container-width">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <AnimatedSection delay={0.1}>
            <div className="space-y-4">
              {personalInfo.bio.map((paragraph, i) => (
                <p key={i} className="text-text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Areas of Interest
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {personalInfo.passions.map((passion, i) => (
                  <motion.div
                    key={passion}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-dark-700/50 border border-primary/5 hover:border-primary/20 transition-all"
                  >
                    <span className="text-primary text-lg">
                      {passionIcons[passion] || <FiCode />}
                    </span>
                    <span className="text-sm text-text-muted">{passion}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
