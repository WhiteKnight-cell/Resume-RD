"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import AnimatedSection from "./ui/AnimatedSection";
import {
  SiSharp,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiSqlite,
  SiGit,
  SiBulma,
  SiGroupme,
  SiDiagramsdotnet,
  SiGooglechat,
} from "react-icons/si";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  SiCsharp: SiSharp,
  SiJavascript,
  SiHtml5,
  SiCss3: SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiSqlite,
  SiGit,
  SiVisualstudiocode: SiSharp,
  SiBulma,
  SiGroupme,
  SiDiagramsdotnet,
  SiGooglechat,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="min-h-screen flex items-center section-padding relative">
      <div className="container-width">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />
        </AnimatedSection>

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                activeCategory === i
                  ? "bg-primary/10 border-primary/30 text-primary"
                  : "bg-dark-700/50 border-dark-500/30 text-text-muted hover:border-primary/20 hover:text-white"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, height: 0 }}
              animate={
                activeCategory === catIndex
                  ? { opacity: 1, height: "auto" }
                  : { opacity: 0, height: 0 }
              }
              className="overflow-hidden"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {cat.skills.map((skill, skillIndex) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <AnimatedSection
                      key={skill.name}
                      delay={skillIndex * 0.05}
                      className="h-full"
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="glass-card rounded-xl p-5 h-full"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-lg">
                            {Icon ? <Icon /> : <span className="text-xs font-bold">{skill.name.slice(0, 2)}</span>}
                          </div>
                          <div>
                            <h4 className="text-white font-medium text-sm">{skill.name}</h4>
                            <span className="text-xs text-text-muted">{skill.level}%</span>
                          </div>
                        </div>
                        <div className="relative h-2 rounded-full bg-dark-600 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={
                              activeCategory === catIndex
                                ? { width: `${skill.level}%` }
                                : { width: 0 }
                            }
                            transition={{
                              duration: 1,
                              delay: skillIndex * 0.1,
                              ease: "easeOut",
                            }}
                            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-secondary skill-bar"
                          />
                        </div>
                      </motion.div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
