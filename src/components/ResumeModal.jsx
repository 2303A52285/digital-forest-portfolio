import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Printer, Download, Copy, Check, FileText, ExternalLink } from 'lucide-react';
import { personalInfo, skillsData, projectsData, experienceData, certificationsData, educationData } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const printRef = useRef(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
==================================================
${personalInfo.name.toUpperCase()}
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
LinkedIn: ${personalInfo.socials.linkedin} | GitHub: ${personalInfo.socials.github} | LeetCode: ${personalInfo.socials.leetcode}
==================================================

CAREER OBJECTIVE
${personalInfo.careerObjective}

EDUCATION
SR University (${educationData[0].duration})
${educationData[0].degree} in ${educationData[0].field}
CGPA: ${educationData[0].cgpa}
Relevant Coursework: ${personalInfo.coursework.join(', ')}

INTERNSHIP
${experienceData[0].company} (${experienceData[0].period})
Role: ${experienceData[0].role}
${experienceData[0].highlights.map((h) => `• ${h}`).join('\n')}

TECHNICAL SKILLS
• Programming: Python, C, C#, Java
• Web Technologies: HTML, CSS, JavaScript, React.js
• Game Development: Unity 3D, C#, 3D Game Development
• Game Design: Game Mechanics, Level Design, Player Movement, Collision Detection, Game Physics, UI Design
• AI & Machine Learning: Machine Learning, Logistic Regression, Random Forest, XGBoost
• Tools: Git, GitHub, VS Code, Tableau, Unity Editor
• Databases: MySQL, MongoDB
• Core Concepts: OOPs, Data Structures, Algorithms, Problem Solving

PROJECTS
1. Forest Theme Endless Runner Game — Unity 3D, C#
${projectsData[0].features.map((f) => `   • ${f}`).join('\n')}

2. Loan Approval Prediction — Machine Learning, Python
${projectsData[1].features.map((f) => `   • ${f}`).join('\n')}

3. Smart Event Management Website — MERN Stack
${projectsData[2].features.map((f) => `   • ${f}`).join('\n')}

CERTIFICATIONS
• CCNA: Introduction to Networks — Cisco Networking Academy (Nov 2024)
• Introduction to Operating Systems — Infosys Springboard (Sep 2024)
• Data Analytics Essentials — Cisco Networking Academy
    `;
    navigator.clipboard.writeText(text.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in">
      <div className="relative w-full max-w-4xl max-h-[94vh] flex flex-col glass-panel rounded-3xl border border-[#00C878]/30 shadow-[0_0_60px_rgba(0,200,120,0.25)] overflow-hidden bg-[#080B09]/95">
        {/* Modal Toolbar (No Print) */}
        <div className="no-print p-4 sm:p-5 border-b border-[#00C878]/20 flex flex-wrap items-center justify-between gap-3 bg-[#071B13]/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#123524] text-[#00C878] border border-[#00C878]/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Gaddam Srinidhi — Resume
              </h3>
              <p className="text-[10px] font-mono text-[#a3d9bc]">
                Standard ATS-Friendly Academic & Technical CV
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#123524] hover:bg-[#1c4a33] border border-[#00C878]/30 text-white transition-all"
              title="Copy Full Resume as Text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#00C878]" />
                  <span className="text-[#00C878]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#00C878] text-[#080B09] hover:bg-[#10f796] shadow-[0_0_15px_rgba(0,200,120,0.4)] transition-all font-mono"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#123524] hover:bg-red-950/60 text-gray-300 hover:text-white transition-all border border-[#00C878]/20"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Preview Paper (Formatted clean ATS Resume) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#060e0a] text-gray-100 font-sans print:bg-white print:text-black">
          <div ref={printRef} className="max-w-3xl mx-auto space-y-6 text-sm">
            {/* Header */}
            <div className="text-center border-b border-[#00C878]/25 pb-5">
              <h1 className="text-3xl font-extrabold tracking-wider font-display text-white uppercase mb-1">
                {personalInfo.name}
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-xs text-[#a3d9bc] font-mono">
                <span>{personalInfo.email}</span>
                <span>•</span>
                <span>{personalInfo.phone}</span>
                <span>•</span>
                <span className="text-white">LinkedIn</span>
                <span>•</span>
                <span className="text-white">GitHub</span>
                <span>•</span>
                <span className="text-white">LeetCode</span>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#00C878] border-b border-[#00C878]/20 pb-1 mb-2">
                Career Objective
              </h2>
              <p className="text-xs text-gray-300 leading-relaxed">
                {personalInfo.careerObjective}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#00C878] border-b border-[#00C878]/20 pb-1 mb-2">
                Education
              </h2>
              <div className="flex justify-between items-start text-xs mb-1">
                <div>
                  <strong className="text-white font-semibold">SR University</strong>
                  <div className="text-gray-300">Bachelor of Technology in Computer Science and Engineering</div>
                  <div className="text-[#10f796] font-mono font-semibold">CGPA: {personalInfo.cgpa}</div>
                </div>
                <div className="font-mono text-gray-400 text-right">
                  Aug 2023 – May 2027
                </div>
              </div>
              <p className="text-[11px] text-gray-400 mt-1">
                <strong className="text-gray-300">Relevant Coursework:</strong> {personalInfo.coursework.join(', ')}.
              </p>
            </div>

            {/* Internship */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#00C878] border-b border-[#00C878]/20 pb-1 mb-2">
                Internship
              </h2>
              <div className="flex justify-between items-start text-xs mb-1">
                <strong className="text-white font-semibold">
                  Google AI-ML Virtual Internship, AICTE
                </strong>
                <span className="font-mono text-gray-400">Jul 2024 – Sep 2024</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-gray-300 mt-1">
                {experienceData[0].highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#00C878] border-b border-[#00C878]/20 pb-1 mb-2">
                Technical Skills
              </h2>
              <div className="space-y-1.5 text-xs text-gray-300">
                <p>
                  <strong className="text-white">Programming Languages:</strong> Python, C, C#, Java
                </p>
                <p>
                  <strong className="text-white">Web Technologies:</strong> HTML, CSS, JavaScript, React.js
                </p>
                <p>
                  <strong className="text-white">Game Development:</strong> Unity 3D, C#, 3D Game Development
                </p>
                <p>
                  <strong className="text-white">Game Design:</strong> Game Mechanics, Level Design, Game Physics, Player Movement, Collision Detection, UI Design
                </p>
                <p>
                  <strong className="text-white">AI & Machine Learning:</strong> Machine Learning, Logistic Regression, Random Forest, XGBoost
                </p>
                <p>
                  <strong className="text-white">Tools:</strong> Unity Editor, Git, GitHub, VS Code, Tableau
                </p>
                <p>
                  <strong className="text-white">Databases:</strong> MySQL, MongoDB
                </p>
                <p>
                  <strong className="text-white">Core Concepts:</strong> OOPs, Data Structures, Machine Learning, Problem Solving
                </p>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#00C878] border-b border-[#00C878]/20 pb-1 mb-2">
                Projects
              </h2>

              {/* Project 1 */}
              <div className="mb-3">
                <div className="flex justify-between items-start text-xs">
                  <strong className="text-white font-semibold">
                    Forest Theme Endless Runner Game — Unity 3D, C#
                  </strong>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-xs text-gray-300 mt-1">
                  <li>Developed a 3D endless runner game with an immersive forest environment using Unity.</li>
                  <li>Implemented core game mechanics including player movement, jumping, obstacle avoidance, and collision detection.</li>
                  <li>Designed forest-themed levels with trees, natural surroundings, and environmental elements.</li>
                  <li>Developed gameplay features such as score tracking, increasing difficulty, and game-over functionality.</li>
                  <li>Focused on interactive gameplay, level design, and user experience.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="mb-3">
                <div className="flex justify-between items-start text-xs">
                  <strong className="text-white font-semibold">
                    Loan Approval Prediction — Machine Learning, Python
                  </strong>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-xs text-gray-300 mt-1">
                  <li>Built a machine learning model to predict loan approvals based on applicant credit and financial factors.</li>
                  <li>Explored Logistic Regression, Random Forest, and XGBoost models.</li>
                  <li>Applied predictive analytics to support loan decision-making.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex justify-between items-start text-xs">
                  <strong className="text-white font-semibold">
                    Smart Event Management Website — MERN Stack
                  </strong>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-xs text-gray-300 mt-1">
                  <li>Developed a full-stack web application for event management and registration.</li>
                  <li>Implemented event booking and registration features with seat tracking.</li>
                  <li>Designed a responsive and user-friendly interface.</li>
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#00C878] border-b border-[#00C878]/20 pb-1 mb-2">
                Certifications
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs text-gray-300">
                <li>CCNA: Introduction to Networks – Cisco Networking Academy (Nov 2024)</li>
                <li>Introduction to Operating Systems – Infosys Springboard (Sep 2024)</li>
                <li>Data Analytics Essentials – Cisco Networking Academy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
