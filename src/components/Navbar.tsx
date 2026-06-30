"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-width flex items-center justify-between px-4 py-3 md:px-6">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#hero");
          }}
          className="text-xl font-bold tracking-tight"
        >
          <span className="text-gradient">{">"}</span>
          <span className="text-white">RD</span>
          <span className="text-primary animate-pulse">_</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                activeSection === link.href.slice(1)
                  ? "text-primary"
                  : "text-text-muted hover:text-white"
              }`}
            >
              {activeSection === link.href.slice(1) && (
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
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
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
