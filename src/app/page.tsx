"use client";

import { useEffect } from "react";
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

export default function Home() {
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
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
