"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Section =
  | "hero"
  | "about"
  | "education"
  | "skills"
  | "projects"
  | "certifications"
  | "experience"
  | "contact";

const navLinks: { label: string; key: Section }[] = [
  { label: "Home", key: "hero" },
  { label: "About", key: "about" },
  { label: "Education", key: "education" },
  { label: "Skills", key: "skills" },
  { label: "Projects", key: "projects" },
  { label: "Certifications", key: "certifications" },
  { label: "Experience", key: "experience" },
  { label: "Contact", key: "contact" },
];

interface NavbarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (key: Section) => {
    setIsOpen(false);
    onSectionChange(key);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-lg">
      <div className="container-width flex items-center justify-between px-4 py-3 md:px-6">
        <button
          onClick={() => handleClick("hero")}
          className="text-xl font-bold tracking-tight text-white"
        >
          <span className="text-gradient">RD</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => handleClick(link.key)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                activeSection === link.key
                  ? "text-primary"
                  : "text-text-muted hover:text-white"
              }`}
            >
              {activeSection === link.key && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-primary rounded"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-primary rounded"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-primary rounded"
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-primary/10 overflow-hidden"
          >
            <div className="container-width px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => handleClick(link.key)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.key
                      ? "text-primary bg-primary/10"
                      : "text-text-muted hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
