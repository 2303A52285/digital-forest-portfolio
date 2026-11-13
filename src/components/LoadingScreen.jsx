import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => onComplete(), 600);
          }, 300);
          return 100;
        }
        const diff = Math.floor(Math.random() * 14) + 6;
        return Math.min(prev + diff, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080B09] text-white"
        >
          {/* Subtle radial forest glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,120,0.18)_0%,transparent_70%)] pointer-events-none" />

          {/* Bioluminescent Logo Emblem */}
          <div className="relative mb-8">
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-[#00C878]/40 bg-[#071B13]/80 p-5 shadow-[0_0_35px_rgba(0,200,120,0.35)] backdrop-blur-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00C878"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-12 w-12 drop-shadow-[0_0_12px_#00C878]"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </motion.div>

            {/* Glowing Spore Rings */}
            <motion.div
              animate={{ scale: [1, 1.6, 2], opacity: [0.8, 0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              className="absolute inset-0 rounded-2xl border border-[#00C878]/30"
            />
          </div>

          {/* Title & Concept */}
          <h1 className="font-display text-2xl md:text-3xl font-bold tracking-widest text-[#F5F5F5] uppercase mb-2">
            The Digital Forest
          </h1>
          <p className="text-xs md:text-sm font-mono text-[#00C878] tracking-wider mb-6">
            GADDAM SRINIDHI &bull; DEVELOPER PORTFOLIO
          </p>

          {/* Progress Bar */}
          <div className="w-64 md:w-80 h-1.5 bg-[#123524]/60 rounded-full overflow-hidden border border-[#00C878]/20 relative">
            <motion.div
              className="h-full bg-gradient-to-r from-[#123524] via-[#00C878] to-[#10f796] shadow-[0_0_15px_#00C878]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Status Subtext */}
          <div className="mt-4 flex items-center justify-between w-64 md:w-80 text-xs font-mono text-[#a3d9bc]">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00C878] animate-ping" />
              Synthesizing glade...
            </span>
            <span className="text-[#00C878] font-semibold">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
