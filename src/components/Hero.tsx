"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMail, FiExternalLink } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio";

type Section =
  | "hero"
  | "about"
  | "education"
  | "skills"
  | "projects"
  | "certifications"
  | "experience"
  | "contact";

const typingPhrases = [
  "Building the future, one line of code at a time",
  "Passionate about technology and innovation",
  "Aspiring IT professional",
  "Turning ideas into digital solutions",
];

interface HeroProps {
  onSectionChange: (section: Section) => void;
}

export default function Hero({ onSectionChange }: HeroProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentPhrase.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex + 1 === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(currentPhrase.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);

          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
          }
        }
      },
      isDeleting ? 30 : 60
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 container-width text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full glass border-2 border-primary/30 overflow-hidden flex items-center justify-center">
            <span className="text-5xl md:text-6xl font-bold text-gradient">
              RD
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3"
        >
          <span className="text-white">{personalInfo.fullName}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <span className="text-xl md:text-2xl text-text-muted">
            {personalInfo.title}{" "}
            <span className="text-primary">| {personalInfo.yearLevel}</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 h-8"
        >
          <span className="text-lg md:text-xl text-text-muted">
            {displayText}
            <span className="text-primary animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => onSectionChange("projects")}
            className="group relative px-6 py-3 rounded-lg bg-primary/10 border border-primary/30 text-primary font-medium overflow-hidden transition-all hover:border-primary hover:glow"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button
            onClick={() => onSectionChange("contact")}
            className="group relative px-6 py-3 rounded-lg bg-secondary/10 border border-secondary/30 text-secondary font-medium overflow-hidden transition-all hover:border-secondary hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Contact Me <FiMail className="group-hover:scale-110 transition-transform" />
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-text-muted/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
