import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Globe, Gamepad2, Layers, Brain, Database, Wrench, Cpu, Sparkles, Search, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Code,
  Globe,
  Gamepad2,
  Layers,
  Brain,
  Database,
  Wrench,
  Cpu,
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...skillsData.map((c) => c.category)];

  const filteredCategories = skillsData
    .map((cat) => {
      if (selectedCategory !== 'All' && cat.category !== selectedCategory) {
        return null;
      }
      const filteredSkills = cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filteredSkills.length === 0) return null;
      return { ...cat, skills: filteredSkills };
    })
    .filter(Boolean);

  const totalSkillsCount = skillsData.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00C878]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123524]/70 border border-[#00C878]/30 text-xs font-mono text-[#00C878] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>02 // ECOSYSTEM OF COMPETENCIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
          Technical <span className="text-gradient-emerald">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#00C878] to-transparent rounded-full mb-6" />
        <p className="text-[#a3d9bc] max-w-xl text-sm sm:text-base font-normal">
          An organic stack encompassing systems programming, 3D game engines, machine learning algorithms, and modern web architectures.
        </p>
      </div>

      {/* Interactive Controls Bar: Category Filter & Search */}
      <div className="glass-panel rounded-2xl p-4 sm:p-5 mb-10 border border-[#00C878]/20 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#00C878] text-[#080B09] shadow-[0_0_15px_rgba(0,200,120,0.5)] font-bold'
                  : 'bg-[#071B13]/60 text-gray-300 hover:text-white hover:bg-[#123524]/60 border border-[#00C878]/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search skill (e.g. Python, Unity)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#080B09]/80 border border-[#00C878]/20 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00C878] focus:ring-1 focus:ring-[#00C878] transition-all"
          />
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredCategories.map((group, idx) => {
            const IconComponent = iconMap[group.icon] || Code;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-[#00C878]/20 flex flex-col justify-between group hover:border-[#00C878]/40"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#123524] border border-[#00C878]/30 text-[#00C878] group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-base text-white">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#071B13] border border-[#00C878]/20 text-[#00C878]">
                      {group.skills.length}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Badges with Micro-Descriptions */}
                  <div className="space-y-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/badge flex items-start justify-between p-2.5 rounded-xl bg-[#080B09]/60 border border-[#00C878]/10 hover:border-[#00C878]/35 hover:bg-[#123524]/40 transition-all duration-200"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00C878] group-hover/badge:scale-150 transition-transform" />
                          <div>
                            <span className="text-xs font-semibold text-gray-100 group-hover/badge:text-[#00C878] transition-colors">
                              {skill.name}
                            </span>
                            <p className="text-[10px] text-gray-400">
                              {skill.desc}
                            </p>
                          </div>
                        </div>

                        <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-[#071B13] text-[#10f796] border border-[#00C878]/20 shrink-0">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-16 text-gray-400 font-mono text-sm">
          No skills found matching "{searchQuery}". Try searching for Python, Unity, C#, ML, or MySQL.
        </div>
      )}
    </section>
  );
};

export default Skills;
