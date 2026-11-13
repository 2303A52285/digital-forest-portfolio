import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#00C878]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123524]/70 border border-[#00C878]/30 text-xs font-mono text-[#00C878] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>06 // ACADEMIC FOUNDATIONS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
          Education & <span className="text-gradient-emerald">Academia</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#00C878] to-transparent rounded-full mb-6" />
        <p className="text-[#a3d9bc] max-w-xl text-sm sm:text-base font-normal">
          Rigorous computer science curriculum grounding advanced algorithmic theory, operating systems, and practical software engineering.
        </p>
      </div>

      {/* Education Showcase Card */}
      <div className="max-w-4xl mx-auto">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-10 border border-[#00C878]/25 relative overflow-hidden group hover:border-[#00C878]/50"
          >
            {/* Top ambient corner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00C878]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column (7 Cols) */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-[#123524] border border-[#00C878]/30 text-[#00C878] shadow-[0_0_20px_rgba(0,200,120,0.25)]">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#00C878] font-bold uppercase tracking-wider block">
                      Bachelor of Technology (B.Tech)
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                      {edu.field}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-300 mb-6">
                  <span className="flex items-center gap-1.5 text-white font-semibold">
                    <span>{edu.institution}</span>
                  </span>
                  <span className="text-gray-500">&bull;</span>
                  <span className="flex items-center gap-1 text-[#a3d9bc]">
                    <Calendar className="w-3.5 h-3.5 text-[#00C878]" />
                    <span>{edu.duration}</span>
                  </span>
                  <span className="text-gray-500">&bull;</span>
                  <span className="flex items-center gap-1 text-[#a3d9bc]">
                    <MapPin className="w-3.5 h-3.5 text-[#00C878]" />
                    <span>{edu.location}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Academic Highlights */}
                <div className="space-y-2 mb-6 text-xs text-gray-300">
                  {edu.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00C878] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: CGPA Scoreboard & Coursework (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                {/* Scoreboard Card */}
                <div className="p-5 rounded-2xl bg-[#080B09]/80 border border-[#00C878]/30 text-center relative overflow-hidden shadow-[0_0_25px_rgba(0,200,120,0.15)]">
                  <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                    Academic Performance
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold font-display text-gradient-emerald text-glow">
                    {edu.cgpa}
                  </div>
                  <div className="text-xs font-mono text-[#00C878] mt-1 font-semibold">
                    Cumulative Grade Point Average
                  </div>
                  <div className="mt-3 inline-block px-3 py-1 rounded-full bg-[#123524] text-[10px] font-mono text-[#10f796] border border-[#00C878]/25">
                    Class of {edu.gradYear} &bull; Undergrad Scholar
                  </div>
                </div>

                {/* Key Coursework Modules */}
                <div className="p-5 rounded-2xl bg-[#080B09]/60 border border-[#00C878]/15">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#00C878] font-bold uppercase tracking-wider mb-3">
                    <BookOpen className="w-4 h-4" />
                    <span>Key Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#123524]/60 text-gray-200 border border-[#00C878]/20"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
