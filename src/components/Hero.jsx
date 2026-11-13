import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Code2, Sparkles, Terminal, Gamepad2, Brain, ChevronRight, FileDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Mouse Following Light Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-30 transition-opacity duration-500 hidden md:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 200, 120, 0.18), transparent 70%)`,
        }}
      />

      {/* Atmospheric Mist / Forest Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00C878]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#123524]/60 border border-[#00C878]/30 shadow-[0_0_20px_rgba(0,200,120,0.2)] backdrop-blur-md mb-6"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10f796] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00C878]" />
          </span>
          <span className="text-xs sm:text-sm font-mono text-[#F5F5F5] font-medium tracking-wide">
            THE DIGITAL FOREST &bull; B.Tech CSE @ SR University
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 font-display"
        >
          Hi, I'm{' '}
          <span className="text-gradient-emerald text-glow inline-block">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Cycling Subtitle Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="h-10 sm:h-12 mb-5 flex items-center justify-center"
        >
          <span className="text-lg sm:text-2xl font-mono font-semibold text-[#00C878] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#10f796] animate-pulse" />
            <span>{personalInfo.roles[roleIndex]}</span>
          </span>
        </motion.div>

        {/* Subtitle Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-xl text-[#F5F5F5]/90 max-w-2xl font-normal leading-relaxed mb-10"
        >
          "{personalInfo.headline}"
        </motion.p>

        {/* Interactive CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
        >
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00C878] to-[#10f796] text-[#080B09] font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(0,200,120,0.5)] hover:shadow-[0_0_35px_rgba(0,200,120,0.8)] hover:scale-105 active:scale-95 group"
          >
            <span>Explore My Work</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <button
            onClick={onOpenResume}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#071B13]/80 border border-[#00C878]/40 text-white font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#123524] hover:border-[#00C878] hover:shadow-[0_0_20px_rgba(0,200,120,0.3)] hover:scale-105 active:scale-95 backdrop-blur-md group"
          >
            <FileDown className="w-4 h-4 text-[#00C878] group-hover:translate-y-0.5 transition-transform" />
            <span>Download Resume</span>
          </button>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-xs font-mono text-[#a3d9bc] uppercase tracking-wider hidden sm:inline">
            Connect &bull;
          </span>

          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#071B13]/70 border border-[#00C878]/25 text-gray-300 hover:text-[#00C878] hover:border-[#00C878] hover:shadow-[0_0_15px_rgba(0,200,120,0.3)] transition-all text-xs font-mono"
          >
            <Github className="w-4 h-4 text-[#00C878]" />
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#071B13]/70 border border-[#00C878]/25 text-gray-300 hover:text-[#00C878] hover:border-[#00C878] hover:shadow-[0_0_15px_rgba(0,200,120,0.3)] transition-all text-xs font-mono"
          >
            <Linkedin className="w-4 h-4 text-[#00C878]" />
            <span>LinkedIn</span>
          </a>

          <a
            href={personalInfo.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode Profile"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#071B13]/70 border border-[#00C878]/25 text-gray-300 hover:text-[#00C878] hover:border-[#00C878] hover:shadow-[0_0_15px_rgba(0,200,120,0.3)] transition-all text-xs font-mono"
          >
            <Code2 className="w-4 h-4 text-[#00C878]" />
            <span>LeetCode</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          onClick={scrollToAbout}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 1 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="flex flex-col items-center gap-2 text-xs font-mono text-[#a3d9bc] hover:text-[#00C878] transition-colors cursor-pointer group"
        >
          <span className="tracking-widest uppercase text-[11px] font-semibold text-gray-300 group-hover:text-[#00C878]">
            Scroll to Explore
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-[#00C878]/40 flex items-start justify-center p-1.5 shadow-[0_0_12px_rgba(0,200,120,0.2)]">
            <div className="w-1.5 h-2.5 rounded-full bg-[#00C878] animate-bounce" />
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
