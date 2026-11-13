import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Leaf, Sparkles } from 'lucide-react';
import SoundToggle from './SoundToggle';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CERTIFICATIONS', href: '#certifications' },
  { label: 'CONTACT', href: '#contact' },
];

const Navbar = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071B13]/85 backdrop-blur-xl border-b border-[#00C878]/15 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#123524] border border-[#00C878]/40 shadow-[0_0_15px_rgba(0,200,120,0.3)] group-hover:border-[#00C878]">
              <Leaf className="h-5 w-5 text-[#00C878] transition-transform duration-300 group-hover:rotate-12" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10f796] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00C878]" />
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-wide text-white group-hover:text-[#00C878] transition-colors">
                Gaddam Srinidhi
              </span>
              <span className="text-[10px] font-mono text-[#a3d9bc] tracking-wider uppercase">
                Digital Forest &bull; Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-[#071B13]/60 border border-[#00C878]/15 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'text-[#080B09] bg-[#00C878] shadow-[0_0_15px_rgba(0,200,120,0.6)] font-bold'
                      : 'text-[#F5F5F5]/80 hover:text-[#00C878] hover:bg-[#123524]/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Actions: Sound Ambience + Download Resume */}
          <div className="hidden sm:flex items-center gap-3">
            <SoundToggle />

            <button
              onClick={onOpenResume}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-[#123524] to-[#1c4a33] border border-[#00C878]/40 hover:border-[#00C878] hover:shadow-[0_0_20px_rgba(0,200,120,0.4)] group overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
              <FileDown className="w-3.5 h-3.5 text-[#00C878] group-hover:translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <SoundToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#123524]/70 border border-[#00C878]/30 text-[#F5F5F5] hover:text-[#00C878] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071B13]/95 border-b border-[#00C878]/20 backdrop-blur-2xl px-6 pt-4 pb-6 mt-3 space-y-2 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-3 py-2.5 rounded-lg text-xs font-medium tracking-wider text-center transition-colors ${
                    isActive
                      ? 'bg-[#00C878] text-[#080B09] font-bold shadow-[0_0_12px_rgba(0,200,120,0.5)]'
                      : 'bg-[#123524]/40 text-gray-200 hover:bg-[#123524] hover:text-[#00C878]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-[#080B09] bg-[#00C878] shadow-[0_0_20px_rgba(0,200,120,0.4)]"
          >
            <FileDown className="h-4 w-4" />
            <span>Download Resume (PDF)</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
