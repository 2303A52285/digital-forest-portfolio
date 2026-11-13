import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, Brain, Gamepad2, Code2, Sparkles, BookOpen, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const pillars = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Predictive modeling, data analytics, and intelligent algorithms with Python, Random Forest & XGBoost.",
    glow: "rgba(0, 200, 120, 0.35)",
  },
  {
    icon: Gamepad2,
    title: "Unity 3D Game Development",
    desc: "Interactive 3D gameplay mechanics, real-time physics simulation, and immersive level environments.",
    glow: "rgba(16, 247, 150, 0.35)",
  },
  {
    icon: Code2,
    title: "Software & Web Engineering",
    desc: "Modern responsive web applications, modular architecture, and clean object-oriented design.",
    glow: "rgba(52, 211, 153, 0.35)",
  },
  {
    icon: BookOpen,
    title: "Core Computer Science",
    desc: "Strong theoretical foundations in Data Structures, OOPs, DBMS, Operating Systems, and Networks.",
    glow: "rgba(0, 200, 120, 0.35)",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Subtle section header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123524]/70 border border-[#00C878]/30 text-xs font-mono text-[#00C878] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>01 // THE ARBORETUM OF KNOWLEDGE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
          About <span className="text-gradient-emerald">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#00C878] to-transparent rounded-full mb-6" />
        <p className="text-[#a3d9bc] max-w-xl text-sm sm:text-base font-normal">
          Rooted in computer science foundations, branching out into artificial intelligence, interactive 3D worlds, and modern software craft.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Holographic Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex flex-col"
        >
          <div className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden h-full border border-[#00C878]/25 group hover:border-[#00C878]/50 transition-all duration-300">
            {/* Background ambient corner leaf glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#00C878]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Profile Header & Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  {/* Cyber Forest Hologram Avatar Frame */}
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl bg-gradient-to-br from-[#123524] to-[#071B13] border-2 border-[#00C878] p-1 flex items-center justify-center shadow-[0_0_25px_rgba(0,200,120,0.3)]">
                    <div className="h-full w-full rounded-xl bg-[#080B09] flex flex-col items-center justify-center relative overflow-hidden">
                      <span className="font-display font-extrabold text-2xl sm:text-3xl text-gradient-emerald">
                        GS
                      </span>
                      <span className="text-[9px] font-mono text-[#00C878] tracking-widest mt-0.5">
                        DEV
                      </span>
                    </div>
                  </div>
                  {/* Active node indicator */}
                  <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10f796] opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#00C878] border-2 border-[#080B09]" />
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#00C878] mt-0.5">
                    CSE Undergrad &bull; Class of {personalInfo.graduation}
                  </p>
                  <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#00C878]" />
                    <span>SR University, Telangana</span>
                  </p>
                </div>
              </div>

              {/* Academic Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-[#080B09]/70 border border-[#00C878]/15 hover:border-[#00C878]/40 transition-colors">
                  <div className="flex items-center gap-2 text-[#00C878] mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-[11px] font-mono text-gray-400 uppercase">Degree</span>
                  </div>
                  <div className="font-display font-bold text-sm text-white">B.Tech CSE</div>
                  <div className="text-[10px] text-[#a3d9bc]">Comp. Science & Eng.</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#080B09]/70 border border-[#00C878]/15 hover:border-[#00C878]/40 transition-colors">
                  <div className="flex items-center gap-2 text-[#00C878] mb-1">
                    <Award className="w-4 h-4" />
                    <span className="text-[11px] font-mono text-gray-400 uppercase">Academics</span>
                  </div>
                  <div className="font-display font-bold text-sm text-[#10f796]">{personalInfo.cgpa}</div>
                  <div className="text-[10px] text-[#a3d9bc]">Cumulative CGPA</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#080B09]/70 border border-[#00C878]/15 hover:border-[#00C878]/40 transition-colors">
                  <div className="flex items-center gap-2 text-[#00C878] mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-[11px] font-mono text-gray-400 uppercase">Timeline</span>
                  </div>
                  <div className="font-display font-bold text-sm text-white">2023 – 2027</div>
                  <div className="text-[10px] text-[#a3d9bc]">4-Year Undergrad</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#080B09]/70 border border-[#00C878]/15 hover:border-[#00C878]/40 transition-colors">
                  <div className="flex items-center gap-2 text-[#00C878] mb-1">
                    <Compass className="w-4 h-4" />
                    <span className="text-[11px] font-mono text-gray-400 uppercase">Campus</span>
                  </div>
                  <div className="font-display font-bold text-sm text-white">{personalInfo.university}</div>
                  <div className="text-[10px] text-[#a3d9bc]">Warangal, India</div>
                </div>
              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="pt-4 border-t border-[#00C878]/15 flex items-center justify-between text-xs font-mono text-[#a3d9bc]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00C878] animate-pulse" />
                Open to Internships
              </span>
              <span className="text-[#00C878] font-bold">2024 &bull; 2025</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio Narrative & Pillars */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col justify-between space-y-6"
        >
          {/* Bio text cards */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#00C878]/20">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-4 flex items-center gap-2.5">
              <span>Exploring the intersection of Logic & Imagination</span>
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              <p>
                I'm a <strong className="text-white font-semibold">Computer Science and Engineering student at SR University</strong> with an intense curiosity for technology, software development, artificial intelligence and interactive game development.
              </p>
              <p>
                I enjoy transforming creative ideas into functional digital experiences. I am continuously improving my technical skills and exploring new technologies to build meaningful projects that solve real problems.
              </p>
            </div>

            {/* Relevant Coursework Badges */}
            <div className="mt-6 pt-5 border-t border-[#00C878]/15">
              <span className="text-xs font-mono text-[#00C878] uppercase tracking-wider block mb-3">
                Core Coursework Foundation:
              </span>
              <div className="flex flex-wrap gap-2">
                {personalInfo.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#123524]/50 border border-[#00C878]/20 text-[#F5F5F5] hover:border-[#00C878]/50 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel glass-panel-hover rounded-xl p-4.5 border border-[#00C878]/15"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-[#123524] border border-[#00C878]/30 text-[#00C878] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-sm text-white mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
