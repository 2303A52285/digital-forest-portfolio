import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, Calendar, ExternalLink, Sparkles, X, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#00C878]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123524]/70 border border-[#00C878]/30 text-xs font-mono text-[#00C878] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>05 // CREDENTIALS & BADGES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
          Verified <span className="text-gradient-emerald">Certifications</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#00C878] to-transparent rounded-full mb-6" />
        <p className="text-[#a3d9bc] max-w-xl text-sm sm:text-base font-normal">
          Formal industry credentials verifying competencies in networking architectures, operating system primitives, and analytical methodologies.
        </p>
      </div>

      {/* Certificate Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {certificationsData.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-[#00C878]/25 flex flex-col justify-between group hover:border-[#00C878]/50 relative overflow-hidden"
          >
            {/* Top decorative guilloche ribbon */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#123524] via-[#00C878] to-[#123524]" />

            <div>
              {/* Card Header & Seal */}
              <div className="flex items-start justify-between mb-5">
                <div className="p-3 rounded-2xl bg-[#123524] border border-[#00C878]/30 text-[#00C878] shadow-[0_0_15px_rgba(0,200,120,0.2)] group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#080B09]/80 border border-[#00C878]/30 text-[10px] font-mono text-[#00C878]">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified Credential</span>
                </span>
              </div>

              {/* Title & Issuer */}
              <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-[#00C878] transition-colors mb-1.5">
                {cert.title}
              </h3>
              <p className="text-xs font-mono text-[#a3d9bc] mb-4">
                {cert.issuer}
              </p>

              {/* Date */}
              <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
                <Calendar className="w-3.5 h-3.5 text-[#00C878]" />
                <span>Issued: {cert.date}</span>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-300 leading-relaxed mb-5">
                {cert.description}
              </p>

              {/* Verified Skills */}
              <div className="space-y-1 mb-6">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                  Key Competencies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#080B09]/70 text-[#10f796] border border-[#00C878]/15"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 border-t border-[#00C878]/15">
              <button
                onClick={() => setSelectedCert(cert)}
                className="w-full py-2.5 rounded-xl bg-[#071B13] hover:bg-[#123524] border border-[#00C878]/30 hover:border-[#00C878] text-xs font-mono font-semibold text-white hover:text-[#00C878] transition-all flex items-center justify-center gap-2"
              >
                <span>View Certificate Badge</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Badge Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg glass-panel rounded-3xl border-2 border-[#00C878]/40 p-8 shadow-[0_0_60px_rgba(0,200,120,0.3)] bg-[#080B09]/95 text-center"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#123524] text-gray-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mx-auto w-20 h-20 rounded-full bg-[#123524] border-2 border-[#00C878] flex items-center justify-center shadow-[0_0_30px_#00C878] mb-5">
                <Award className="w-10 h-10 text-[#00C878]" />
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-[#00C878] font-bold">
                Certificate of Competency
              </span>

              <h3 className="text-2xl font-bold font-display text-white mt-2 mb-1">
                {selectedCert.title}
              </h3>
              <p className="text-sm font-semibold text-[#a3d9bc] mb-4">
                Issued by {selectedCert.issuer}
              </p>

              <div className="p-4 rounded-xl bg-[#071B13] border border-[#00C878]/20 text-left text-xs text-gray-300 space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Recipient:</span>
                  <span className="font-semibold text-white">Gaddam Srinidhi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Issue Date:</span>
                  <span className="font-mono text-white">{selectedCert.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Credential ID:</span>
                  <span className="font-mono text-[#00C878]">{selectedCert.credentialId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-[#10f796] font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified & Active
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="w-full py-3 rounded-xl bg-[#00C878] text-[#080B09] font-bold text-xs uppercase tracking-wider hover:bg-[#10f796] transition-all"
              >
                Close Certificate
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
