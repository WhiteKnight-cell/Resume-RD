"use client";

import { FiGithub, FiLinkedin, FiFacebook, FiMail, FiHeart } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/5 bg-dark-800/50">
      <div className="container-width px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href={`https://github.com/${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-dark-600 border border-primary/10 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-all"
              aria-label="GitHub"
            >
              <FiGithub size={16} />
            </a>
            <a
              href={`https://linkedin.com/in/${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-dark-600 border border-primary/10 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-dark-600 border border-primary/10 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-all"
              aria-label="Facebook"
            >
              <FiFacebook size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 rounded-lg bg-dark-600 border border-primary/10 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-all"
              aria-label="Email"
            >
              <FiMail size={16} />
            </a>
          </div>

          <p className="text-text-muted text-xs flex items-center gap-1.5">
            &copy; {year} {personalInfo.fullName}. Built with
            <FiHeart size={11} className="text-primary" />
            using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
