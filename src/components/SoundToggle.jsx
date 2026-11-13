import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

const SoundToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const windNodeRef = useRef(null);
  const chimeIntervalRef = useRef(null);

  useEffect(() => {
    return () => {
      stopAmbience();
    };
  }, []);

  const startAmbience = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 2.5);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // 1. Procedural Wind / Forest Canopy Rustle (Filtered Pink Noise)
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.997 * b0 + white * 0.05;
        b1 = 0.963 * b1 + white * 0.11;
        b2 = 0.570 * b2 + white * 0.55;
        output[i] = (b0 + b1 + b2) * 0.08;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Lowpass Filter for soft forest breeze
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(420, ctx.currentTime);

      // Low frequency oscillator for wind modulation
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.15, ctx.currentTime);
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(180, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();

      whiteNoise.connect(filter);
      filter.connect(masterGain);
      whiteNoise.start();
      windNodeRef.current = whiteNoise;

      // 2. Bioluminescent Chimes (Pentatonic notes in F# minor: 370Hz, 440Hz, 554Hz, 659Hz, 740Hz)
      const notes = [369.99, 440.0, 493.88, 554.37, 659.25, 739.99];

      const playRandomChime = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        const noteCtx = audioCtxRef.current;
        const osc = noteCtx.createOscillator();
        const noteGain = noteCtx.createGain();

        const freq = notes[Math.floor(Math.random() * notes.length)];
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteCtx.currentTime);

        noteGain.gain.setValueAtTime(0.001, noteCtx.currentTime);
        noteGain.gain.exponentialRampToValueAtTime(0.04, noteCtx.currentTime + 0.1);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, noteCtx.currentTime + 3.0);

        osc.connect(noteGain);
        noteGain.connect(masterGain);

        osc.start();
        osc.stop(noteCtx.currentTime + 3.2);
      };

      // Play soft occasional chimes
      playRandomChime();
      chimeIntervalRef.current = setInterval(() => {
        if (Math.random() > 0.3) {
          playRandomChime();
        }
      }, 3500);

      setIsPlaying(true);
    } catch (err) {
      console.error('Audio could not be initialized:', err);
    }
  };

  const stopAmbience = () => {
    if (chimeIntervalRef.current) {
      clearInterval(chimeIntervalRef.current);
      chimeIntervalRef.current = null;
    }
    if (gainNodeRef.current && audioCtxRef.current) {
      try {
        gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, audioCtxRef.current.currentTime);
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.8);
        setTimeout(() => {
          if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
            audioCtxRef.current.close();
            audioCtxRef.current = null;
          }
          setIsPlaying(false);
        }, 850);
      } catch (e) {
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbience();
    } else {
      startAmbience();
    }
  };

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? 'Mute Forest Atmosphere' : 'Play Ambient Forest Atmosphere'}
      aria-label="Toggle Forest Audio"
      className={`group relative flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300 border ${
        isPlaying
          ? 'bg-[#123524] border-[#00C878] text-[#00C878] shadow-[0_0_15px_rgba(0,200,120,0.3)]'
          : 'bg-[#071B13]/70 border-[#00C878]/25 text-[#a3d9bc] hover:border-[#00C878]/60 hover:text-white'
      }`}
    >
      {isPlaying ? (
        <>
          <Volume2 className="h-4 w-4 animate-pulse text-[#00C878]" />
          <span className="hidden sm:inline">Forest Ambience</span>
          {/* Animated sound bars */}
          <span className="flex items-end gap-0.5 h-3 ml-1">
            <span className="w-0.5 bg-[#00C878] animate-[pulse_0.8s_ease-in-out_infinite] h-full" />
            <span className="w-0.5 bg-[#00C878] animate-[pulse_1.2s_ease-in-out_infinite_0.2s] h-2/3" />
            <span className="w-0.5 bg-[#00C878] animate-[pulse_0.6s_ease-in-out_infinite_0.4s] h-4/5" />
          </span>
        </>
      ) : (
        <>
          <VolumeX className="h-4 w-4 text-[#a3d9bc] group-hover:text-[#00C878] transition-colors" />
          <span className="hidden sm:inline">Ambience</span>
        </>
      )}
    </button>
  );
};

export default SoundToggle;
