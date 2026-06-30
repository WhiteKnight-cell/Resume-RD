"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import LoadingScreen from "@/components/ui/LoadingScreen";

type Section =
  | "hero"
  | "about"
  | "education"
  | "skills"
  | "projects"
  | "certifications"
  | "experience"
  | "contact";

const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("hero");

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <ParticlesBackground />
      <Navbar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {activeSection === "hero" && (
            <motion.div
              key="hero"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Hero onSectionChange={setActiveSection} />
            </motion.div>
          )}
          {activeSection === "about" && (
            <motion.div
              key="about"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <About />
            </motion.div>
          )}
          {activeSection === "education" && (
            <motion.div
              key="education"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Education />
            </motion.div>
          )}
          {activeSection === "skills" && (
            <motion.div
              key="skills"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Skills />
            </motion.div>
          )}
          {activeSection === "projects" && (
            <motion.div
              key="projects"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Projects />
            </motion.div>
          )}
          {activeSection === "certifications" && (
            <motion.div
              key="certifications"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Certifications />
            </motion.div>
          )}
          {activeSection === "experience" && (
            <motion.div
              key="experience"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Experience />
            </motion.div>
          )}
          {activeSection === "contact" && (
            <motion.div
              key="contact"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      {activeSection !== "hero" && <Footer />}
      <BackToTop />
    </>
  );
}
