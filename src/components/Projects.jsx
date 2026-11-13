import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Brain, Globe, Sparkles, ArrowUpRight, Play, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ForestRunnerModal from './ProjectModals/ForestRunnerModal';
import LoanPredictorModal from './ProjectModals/LoanPredictorModal';
import EventManagementModal from './ProjectModals/EventManagementModal';

const projectVisuals = {
  'forest-runner': {
    icon: Gamepad2,
    gradient: 'from-[#071B13] via-[#123524] to-[#080B09]',
    accent: '#00C878',
    glow: 'rgba(0, 200, 120, 0.4)',
    illustration: (
      <div className="relative w-full h-48 bg-gradient-to-b from-[#071B13] to-[#080B09] flex items-center justify-center overflow-hidden border-b border-[#00C878]/20 group-hover:border-[#00C878]/40 transition-colors">
        {/* Stylized 3D Forest Backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,200,120,0.25)_0%,transparent_70%)]" />
        
        {/* Silhouette trees */}
        <svg className="absolute bottom-0 w-full h-32 opacity-40 text-[#123524]" viewBox="0 0 400 120" preserveAspectRatio="none">
          <path d="M0,120 L20,70 L40,120 L60,50 L80,120 L120,30 L160,120 L200,60 L240,120 L300,40 L360,120 L400,65 L400,120 Z" fill="currentColor" />
        </svg>

        {/* Cyber Grid Runway */}
        <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-[#00C878]/20 to-transparent border-t border-[#00C878]/40" />

        {/* Glowing Runner Avatar */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#123524] border-2 border-[#00C878] shadow-[0_0_25px_#00C878] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
            <Gamepad2 className="w-7 h-7 text-[#00C878]" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10f796] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00C878]" />
            </span>
          </div>
          <span className="mt-2 text-[10px] font-mono uppercase tracking-widest text-[#10f796] font-bold">
            Interactive Playable Engine
          </span>
        </div>
      </div>
    ),
  },
  'loan-prediction': {
    icon: Brain,
    gradient: 'from-[#051610] via-[#0f2c1e] to-[#080B09]',
    accent: '#10f796',
    glow: 'rgba(16, 247, 150, 0.4)',
    illustration: (
      <div className="relative w-full h-48 bg-gradient-to-b from-[#071B13] to-[#080B09] flex items-center justify-center overflow-hidden border-b border-[#00C878]/20 group-hover:border-[#00C878]/40 transition-colors">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,247,150,0.2)_0%,transparent_70%)]" />

        {/* Neural Network Nodes Graphic */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 300 150">
          <circle cx="50" cy="40" r="4" fill="#00C878" />
          <circle cx="50" cy="80" r="4" fill="#00C878" />
          <circle cx="50" cy="120" r="4" fill="#00C878" />
          <circle cx="150" cy="30" r="5" fill="#10f796" />
          <circle cx="150" cy="75" r="5" fill="#10f796" />
          <circle cx="150" cy="120" r="5" fill="#10f796" />
          <circle cx="250" cy="55" r="6" fill="#00C878" />
          <circle cx="250" cy="100" r="6" fill="#00C878" />
          <line x1="50" y1="40" x2="150" y2="30" stroke="#00C878" strokeWidth="1" />
          <line x1="50" y1="80" x2="150" y2="75" stroke="#00C878" strokeWidth="1" />
          <line x1="50" y1="120" x2="150" y2="120" stroke="#00C878" strokeWidth="1" />
          <line x1="150" y1="30" x2="250" y2="55" stroke="#10f796" strokeWidth="1.5" />
          <line x1="150" y1="75" x2="250" y2="55" stroke="#10f796" strokeWidth="1.5" />
          <line x1="150" y1="120" x2="250" y2="100" stroke="#10f796" strokeWidth="1.5" />
        </svg>

        <div className="relative z-10 flex flex-col items-center">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f2c1e] border-2 border-[#10f796] shadow-[0_0_25px_#10f796] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
            <Brain className="w-7 h-7 text-[#10f796]" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C878] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10f796]" />
            </span>
          </div>
          <span className="mt-2 text-[10px] font-mono uppercase tracking-widest text-[#00C878] font-bold">
            Live Model Simulator
          </span>
        </div>
      </div>
    ),
  },
  'event-management': {
    icon: Globe,
    gradient: 'from-[#061811] via-[#143a28] to-[#080B09]',
    accent: '#34D399',
    glow: 'rgba(52, 211, 153, 0.4)',
    illustration: (
      <div className="relative w-full h-48 bg-gradient-to-b from-[#071B13] to-[#080B09] flex items-center justify-center overflow-hidden border-b border-[#00C878]/20 group-hover:border-[#00C878]/40 transition-colors">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(52,211,153,0.2)_0%,transparent_70%)]" />

        {/* Dashboard Mock Wireframe */}
        <div className="absolute inset-x-8 top-6 bottom-0 rounded-t-xl bg-[#080B09]/90 border-t border-x border-[#00C878]/30 p-3 opacity-60">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <div className="h-2 w-24 bg-[#123524] rounded mb-2" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-10 bg-[#071B13] rounded border border-[#00C878]/20" />
            <div className="h-10 bg-[#071B13] rounded border border-[#00C878]/20" />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#143a28] border-2 border-[#34D399] shadow-[0_0_25px_#34D399] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
            <Globe className="w-7 h-7 text-[#34D399]" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10f796] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#34D399]" />
            </span>
          </div>
          <span className="mt-2 text-[10px] font-mono uppercase tracking-widest text-[#34D399] font-bold">
            Interactive Fullstack Prototype
          </span>
        </div>
      </div>
    ),
  },
};

const Projects = () => {
  const [activeModal, setActiveModal] = useState(null); // 'forest-runner' | 'loan-prediction' | 'event-management' | null

  const handleOpenModal = (projectId) => {
    setActiveModal(projectId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#00C878]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123524]/70 border border-[#00C878]/30 text-xs font-mono text-[#00C878] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>03 // ENGINEERED REALMS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
          Featured <span className="text-gradient-emerald">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#00C878] to-transparent rounded-full mb-6" />
        <p className="text-[#a3d9bc] max-w-xl text-sm sm:text-base font-normal">
          Real-world applications spanning 3D game engines, machine learning classification pipelines, and full-stack web platforms.
        </p>
      </div>

      {/* Projects Showcase Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projectsData.map((project, idx) => {
          const visual = projectVisuals[project.id];
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-[#00C878]/20 flex flex-col justify-between group hover:border-[#00C878]/50 hover:shadow-[0_15px_45px_rgba(0,200,120,0.18)]"
            >
              <div>
                {/* Visual Header / Illustration */}
                {visual?.illustration}

                {/* Content Body */}
                <div className="p-6 sm:p-7">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#00C878] font-semibold tracking-wider uppercase">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#123524] text-[#10f796] border border-[#00C878]/30">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3 group-hover:text-[#00C878] transition-colors">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                    {project.shortDesc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#080B09]/80 text-[#a3d9bc] border border-[#00C878]/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Key Feature Bullets */}
                  <div className="space-y-1.5 text-xs text-gray-300 mb-6">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00C878] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleOpenModal(project.id)}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#123524] to-[#071B13] border border-[#00C878]/40 hover:border-[#00C878] text-white hover:text-[#00C878] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-[0_0_15px_rgba(0,200,120,0.15)] hover:shadow-[0_0_25px_rgba(0,200,120,0.35)]"
                >
                  <span>{project.actionText}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Modals */}
      <ForestRunnerModal
        isOpen={activeModal === 'forest-runner'}
        onClose={handleCloseModal}
        project={projectsData[0]}
      />

      <LoanPredictorModal
        isOpen={activeModal === 'loan-prediction'}
        onClose={handleCloseModal}
        project={projectsData[1]}
      />

      <EventManagementModal
        isOpen={activeModal === 'event-management'}
        onClose={handleCloseModal}
        project={projectsData[2]}
      />
    </section>
  );
};

export default Projects;
