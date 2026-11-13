import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive element
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .interactive-hover');
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Outer Glowing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#00C878]/60 bg-[#00C878]/5 backdrop-blur-[1px]"
        animate={{
          x: pos.x - (isHovering ? 28 : 16),
          y: pos.y - (isHovering ? 28 : 16),
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
          scale: isClicking ? 0.8 : 1,
          borderColor: isHovering ? 'rgba(16, 247, 150, 0.9)' : 'rgba(0, 200, 120, 0.45)',
          boxShadow: isHovering
            ? '0 0 25px rgba(0, 200, 120, 0.45), inset 0 0 10px rgba(0, 200, 120, 0.2)'
            : '0 0 12px rgba(0, 200, 120, 0.2)',
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 300,
          mass: 0.5,
        }}
      />

      {/* Inner Glowing Core Dot */}
      <motion.div
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-[#00C878] shadow-[0_0_10px_#00C878]"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: isClicking ? 1.6 : isHovering ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 500,
        }}
      />
    </div>
  );
};

export default CustomCursor;
