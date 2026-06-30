"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import { personalInfo } from "@/data/portfolio";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiSend,
  FiMapPin,
} from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const contactLinks = [
    { icon: FiMail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FiPhone, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: FiGithub, label: "GitHub", href: `https://github.com/${personalInfo.github}` },
    { icon: FiLinkedin, label: "LinkedIn", href: `https://linkedin.com/in/${personalInfo.linkedin}` },
    { icon: FiFacebook, label: personalInfo.facebook, href: "#" },
    { icon: FiMapPin, label: personalInfo.location, href: "#" },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center section-padding relative">
      <div className="container-width">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection delay={0.1}>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                      <link.icon size={16} />
                    </span>
                    <span className="text-sm">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card rounded-xl p-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                    <FiSend className="text-primary text-xl" />
                  </div>
                  <h4 className="text-white font-semibold mb-1">Message Sent!</h4>
                  <p className="text-text-muted text-sm">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg bg-dark-700/50 border text-sm text-white placeholder-text-muted/50 outline-none transition-all ${
                        errors.name ? "border-red-500" : "border-primary/10 focus:border-primary/40"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg bg-dark-700/50 border text-sm text-white placeholder-text-muted/50 outline-none transition-all ${
                        errors.email ? "border-red-500" : "border-primary/10 focus:border-primary/40"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      value={form.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg bg-dark-700/50 border text-sm text-white placeholder-text-muted/50 outline-none transition-all ${
                        errors.subject ? "border-red-500" : "border-primary/10 focus:border-primary/40"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                    )}
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg bg-dark-700/50 border text-sm text-white placeholder-text-muted/50 outline-none transition-all resize-none ${
                        errors.message ? "border-red-500" : "border-primary/10 focus:border-primary/40"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all"
                  >
                    <FiSend size={16} />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
