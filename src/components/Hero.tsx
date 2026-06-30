"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiExternalLink } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio";

const typingPhrases = [
  "Building the future, one line of code at a time",
  "Passionate about technology and innovation",
  "Aspiring IT professional",
  "Turning ideas into digital solutions",
];

const techIcons = [
  { icon: "</>", label: "HTML", x: 10, y: 20, size: 24 },
  { icon: "{}", label: "JS", x: 85, y: 15, size: 20 },
  { icon: "#", label: "C#", x: 90, y: 70, size: 22 },
  { icon: "SQL", label: "SQL", x: 5, y: 75, size: 18 },
  { icon: "⚛", label: "React", x: 50, y: 5, size: 28 },
  { icon: "🔷", label: "TS", x: 50, y: 90, size: 26 },
];

export default function Hero() {
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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />

      {techIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:flex items-center justify-center font-mono font-bold text-xs rounded-lg glass px-3 py-1.5 border-primary/10 text-primary/40 hover:text-primary/70 hover:border-primary/30 transition-all cursor-default ${
            i % 2 === 0 ? "animate-float" : "animate-float-delayed"
          }`}
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          whileHover={{ scale: 1.2 }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="relative z-10 container-width text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="glass px-4 py-1.5 rounded-full text-xs font-mono text-primary tracking-wider border border-primary/20">
              $ cat /home/ryan/intro
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
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
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3"
        >
          <span className="text-white">{personalInfo.fullName}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 h-8"
        >
          <span className="text-lg md:text-xl text-text-muted font-mono">
            <span className="text-primary">$</span> echo{" "}
            <span className="text-secondary">"</span>
            {displayText}
            <span className="text-primary animate-pulse">|</span>
            <span className="text-secondary">"</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group relative px-6 py-3 rounded-lg bg-primary/10 border border-primary/30 text-primary font-medium overflow-hidden transition-all hover:border-primary hover:glow"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button
            onClick={() => scrollTo("contact")}
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
