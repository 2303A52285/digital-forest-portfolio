import React from 'react';
import { ArrowUp, Leaf, Heart, Github, Linkedin, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050C08] border-t border-[#00C878]/15 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Brand & Emblem */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#123524] border border-[#00C878]/40 shadow-[0_0_15px_rgba(0,200,120,0.3)]">
            <Leaf className="h-5 w-5 text-[#00C878]" />
          </div>
          <span className="font-display font-bold text-xl text-white">
            The Digital Forest
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-400 text-center max-w-md mb-8">
          Crafted with code, artificial intelligence & passion by <span className="text-[#00C878] font-semibold">{personalInfo.name}</span>.
        </p>

        {/* Quick Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-mono mb-8 text-gray-300">
          <a href="#home" className="hover:text-[#00C878] transition-colors">HOME</a>
          <a href="#about" className="hover:text-[#00C878] transition-colors">ABOUT</a>
          <a href="#skills" className="hover:text-[#00C878] transition-colors">SKILLS</a>
          <a href="#projects" className="hover:text-[#00C878] transition-colors">PROJECTS</a>
          <a href="#experience" className="hover:text-[#00C878] transition-colors">EXPERIENCE</a>
          <a href="#certifications" className="hover:text-[#00C878] transition-colors">CERTIFICATIONS</a>
          <a href="#contact" className="hover:text-[#00C878] transition-colors">CONTACT</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-8">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#080B09] border border-[#00C878]/20 hover:border-[#00C878] hover:text-[#00C878] transition-all"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#080B09] border border-[#00C878]/20 hover:border-[#00C878] hover:text-[#00C878] transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#080B09] border border-[#00C878]/20 hover:border-[#00C878] hover:text-[#00C878] transition-all"
            title="LeetCode"
          >
            <Code2 className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom Bar & Back-to-Top */}
        <div className="w-full pt-8 border-t border-[#00C878]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div>
            &copy; {new Date().getFullYear()} Gaddam Srinidhi &bull; All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#123524]/60 border border-[#00C878]/30 hover:border-[#00C878] text-[#a3d9bc] hover:text-[#00C878] transition-all group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
