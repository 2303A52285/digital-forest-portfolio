import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Award, ExternalLink } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-[#00C878]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123524]/70 border border-[#00C878]/30 text-xs font-mono text-[#00C878] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>04 // GROWTH RINGS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
          Internship <span className="text-gradient-emerald">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#00C878] to-transparent rounded-full mb-6" />
        <p className="text-[#a3d9bc] max-w-xl text-sm sm:text-base font-normal">
          Industry-accredited internship immersing in applied machine learning, exploratory modeling, and real-world problem solving.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto relative">
        {/* Central glowing vertical timeline vine */}
        <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#00C878] via-[#123524] to-transparent shadow-[0_0_12px_#00C878]" />

        {experienceData.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-12"
          >
            {/* Timeline Node Icon */}
            <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#123524] border-2 border-[#00C878] shadow-[0_0_20px_#00C878] z-10">
              <Briefcase className="w-4 h-4 text-[#00C878]" />
            </div>

            {/* Timeline Card */}
            <div className="ml-12 sm:ml-0 sm:w-1/2 sm:pr-10 sm:text-right sm:even:ml-auto sm:even:pl-10 sm:even:pr-0 sm:even:text-left">
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-[#00C878]/25 relative overflow-hidden group">
                {/* Ambient glow corner */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#00C878]/10 rounded-full blur-2xl pointer-events-none" />

                {/* Top Badge & Date */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#123524] text-[#10f796] border border-[#00C878]/30 font-semibold">
                    {exp.badge}
                  </span>
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#00C878]" />
                    <span>{exp.duration}</span>
                  </span>
                </div>

                {/* Role & Organization */}
                <h3 className="text-xl font-bold font-display text-white group-hover:text-[#00C878] transition-colors mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-sm font-semibold text-[#a3d9bc] mb-4">
                  {exp.company}
                </h4>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 text-xs text-gray-300 mb-6 text-left">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00C878] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Learned Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#00C878]/15">
                  {exp.skillsLearned.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#080B09]/80 text-[#00C878] border border-[#00C878]/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
