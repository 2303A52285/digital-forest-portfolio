import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, RotateCcw, Trophy, Sparkles, Gamepad2, CheckCircle2 } from 'lucide-react';

const ForestRunnerModal = ({ isOpen, onClose, project }) => {
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('idle'); // 'idle' | 'playing' | 'gameover'
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('forestRunnerHighScore') || '0', 10);
  });

  const gameStateRef = useRef('idle');
  const scoreRef = useRef(0);
  const animFrameRef = useRef(null);

  useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);

  useEffect(() => {
    if (!isOpen) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      setGameState('idle');
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Canvas size
    canvas.width = 700;
    canvas.height = 360;

    let player = {
      x: 80,
      y: 260,
      width: 32,
      height: 42,
      vy: 0,
      jumpForce: -11.5,
      gravity: 0.58,
      isGrounded: true,
      color: '#00C878',
    };

    let obstacles = [];
    let particles = [];
    let backgroundTrees = [];
    let frame = 0;
    let currentScore = 0;
    let baseSpeed = 4.5;

    // Seed background trees
    for (let i = 0; i < 15; i++) {
      backgroundTrees.push({
        x: i * 60 + Math.random() * 20,
        height: 60 + Math.random() * 80,
        width: 25 + Math.random() * 20,
        speed: 1.2,
      });
    }

    const jump = () => {
      if (player.isGrounded && gameStateRef.current === 'playing') {
        player.vy = player.jumpForce;
        player.isGrounded = false;
        // Spawn jump particles
        for (let i = 0; i < 8; i++) {
          particles.push({
            x: player.x + player.width / 2,
            y: player.y + player.height,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 2 - 1,
            size: Math.random() * 4 + 2,
            alpha: 1,
            color: '#10f796',
          });
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        if (gameStateRef.current === 'idle' || gameStateRef.current === 'gameover') {
          startGame();
        } else {
          jump();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    const spawnObstacle = () => {
      const type = Math.random() > 0.5 ? 'tall' : 'wide';
      obstacles.push({
        x: canvas.width + 30,
        y: type === 'tall' ? 240 : 265,
        width: type === 'tall' ? 24 : 36,
        height: type === 'tall' ? 60 : 35,
        color: '#10f796',
      });
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Forest Sky & Fog
      const skyGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      skyGrad.addColorStop(0, '#071B13');
      skyGrad.addColorStop(0.7, '#123524');
      skyGrad.addColorStop(1, '#080B09');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Distant Forest Trees
      backgroundTrees.forEach((tree) => {
        if (gameStateRef.current === 'playing') {
          tree.x -= tree.speed;
          if (tree.x + tree.width < 0) {
            tree.x = canvas.width + Math.random() * 40;
          }
        }
        ctx.fillStyle = 'rgba(18, 53, 36, 0.45)';
        ctx.beginPath();
        ctx.moveTo(tree.x, 300);
        ctx.lineTo(tree.x + tree.width / 2, 300 - tree.height);
        ctx.lineTo(tree.x + tree.width, 300);
        ctx.closePath();
        ctx.fill();
      });

      // 3. Ground Line
      ctx.strokeStyle = '#00C878';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#00C878';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(0, 300);
      ctx.lineTo(canvas.width, 300);
      ctx.stroke();
      ctx.shadowBlur = 0; // reset

      // Ground pattern
      ctx.fillStyle = '#080B09';
      ctx.fillRect(0, 301, canvas.width, canvas.height - 301);

      if (gameStateRef.current === 'playing') {
        frame++;
        currentScore++;
        setScore(Math.floor(currentScore / 6));

        // Physics
        player.vy += player.gravity;
        player.y += player.vy;

        if (player.y >= 300 - player.height) {
          player.y = 300 - player.height;
          player.vy = 0;
          player.isGrounded = true;
        }

        // Spawn obstacles with increasing rate
        const spawnInterval = Math.max(70, 130 - Math.floor(currentScore / 250));
        if (frame % spawnInterval === 0) {
          spawnObstacle();
        }

        // Move and draw obstacles
        const currentSpeed = baseSpeed + Math.min(4, currentScore / 800);
        for (let i = obstacles.length - 1; i >= 0; i--) {
          const obs = obstacles[i];
          obs.x -= currentSpeed;

          // Draw obstacle
          ctx.fillStyle = '#071B13';
          ctx.strokeStyle = '#00C878';
          ctx.lineWidth = 2;
          ctx.shadowColor = '#00C878';
          ctx.shadowBlur = 12;
          ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
          ctx.strokeRect(obs.x, obs.y, obs.width, obs.height);
          ctx.shadowBlur = 0;

          // Collision check
          if (
            player.x < obs.x + obs.width &&
            player.x + player.width > obs.x &&
            player.y < obs.y + obs.height &&
            player.y + player.height > obs.y
          ) {
            // Trigger Game Over
            setGameState('gameover');
            gameStateRef.current = 'gameover';
            const finalScore = Math.floor(currentScore / 6);
            if (finalScore > highScore) {
              setHighScore(finalScore);
              localStorage.setItem('forestRunnerHighScore', finalScore.toString());
            }
          }

          if (obs.x + obs.width < -20) {
            obstacles.splice(i, 1);
          }
        }
      }

      // Draw Player Runner
      ctx.fillStyle = '#123524';
      ctx.strokeStyle = '#00C878';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#00C878';
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.roundRect(player.x, player.y, player.width, player.height, 6);
      ctx.fill();
      ctx.stroke();

      // Eye / Visor
      ctx.fillStyle = '#10f796';
      ctx.fillRect(player.x + player.width - 10, player.y + 10, 6, 6);
      ctx.shadowBlur = 0;

      // Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.03;
        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.fillStyle = `rgba(0, 200, 120, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    const startGame = () => {
      obstacles = [];
      particles = [];
      frame = 0;
      currentScore = 0;
      setScore(0);
      player.y = 300 - player.height;
      player.vy = 0;
      player.isGrounded = true;
      setGameState('playing');
      gameStateRef.current = 'playing';
    };

    window.forestRunnerStart = startGame;
    window.forestRunnerJump = jump;

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-panel rounded-3xl border border-[#00C878]/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,200,120,0.2)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#123524] border border-[#00C878]/30 text-gray-300 hover:text-white hover:border-[#00C878] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-[#123524] border border-[#00C878]/40 text-[#00C878]">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#00C878]/20 text-[#00C878] border border-[#00C878]/30 font-semibold">
                Unity 3D & C# Showcase
              </span>
              <span className="text-xs font-mono text-gray-400">Playable Web Simulation</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white mt-1">
              Forest Theme Endless Runner Game
            </h3>
          </div>
        </div>

        {/* Playable Game Canvas Container */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-[#00C878]/30 bg-[#080B09] shadow-inner mb-6">
          <canvas
            ref={canvasRef}
            onClick={() => {
              if (gameState === 'playing' && window.forestRunnerJump) window.forestRunnerJump();
              if ((gameState === 'idle' || gameState === 'gameover') && window.forestRunnerStart)
                window.forestRunnerStart();
            }}
            className="w-full h-auto cursor-pointer block"
            style={{ maxHeight: '340px' }}
          />

          {/* Overlay UI: Top Bar */}
          <div className="absolute top-3 left-4 right-4 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#080B09]/80 border border-[#00C878]/30 backdrop-blur-md">
              <span className="text-xs font-mono text-gray-300">Score:</span>
              <span className="text-sm font-mono font-bold text-[#00C878]">{score}</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#080B09]/80 border border-[#00C878]/30 backdrop-blur-md">
              <Trophy className="w-3.5 h-3.5 text-[#10f796]" />
              <span className="text-xs font-mono text-gray-300">High:</span>
              <span className="text-sm font-mono font-bold text-[#10f796]">{highScore}</span>
            </div>
          </div>

          {/* Idle Start Overlay */}
          {gameState === 'idle' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#080B09]/75 backdrop-blur-sm p-4 text-center">
              <div className="p-4 rounded-full bg-[#123524] border border-[#00C878] text-[#00C878] shadow-[0_0_20px_#00C878] mb-4">
                <Play className="w-8 h-8 translate-x-0.5" />
              </div>
              <h4 className="text-xl font-bold font-display text-white mb-2">
                Digital Forest Runner Simulation
              </h4>
              <p className="text-xs font-mono text-gray-300 mb-6 max-w-sm">
                Press <span className="text-[#00C878] font-bold">SPACEBAR</span> or tap anywhere on the canvas to jump over digital obstacles!
              </p>
              <button
                onClick={() => window.forestRunnerStart && window.forestRunnerStart()}
                className="px-6 py-2.5 rounded-xl bg-[#00C878] text-[#080B09] font-bold text-xs uppercase tracking-wider hover:bg-[#10f796] transition-all shadow-[0_0_20px_rgba(0,200,120,0.5)]"
              >
                Launch Run
              </button>
            </div>
          )}

          {/* Game Over Overlay */}
          {gameState === 'gameover' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#080B09]/85 backdrop-blur-sm p-4 text-center animate-in zoom-in-95 duration-200">
              <h4 className="text-2xl font-bold font-display text-red-400 mb-1">
                Collision Detected!
              </h4>
              <p className="text-xs font-mono text-gray-400 mb-4">The digital forest claimed another run.</p>

              <div className="flex items-center gap-6 mb-6">
                <div>
                  <span className="text-xs font-mono text-gray-400 block">Final Score</span>
                  <span className="text-2xl font-mono font-bold text-white">{score}</span>
                </div>
                <div className="h-8 w-px bg-gray-700" />
                <div>
                  <span className="text-xs font-mono text-gray-400 block">Best Record</span>
                  <span className="text-2xl font-mono font-bold text-[#00C878]">{highScore}</span>
                </div>
              </div>

              <button
                onClick={() => window.forestRunnerStart && window.forestRunnerStart()}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#00C878] text-[#080B09] font-bold text-xs uppercase tracking-wider hover:bg-[#10f796] transition-all shadow-[0_0_20px_rgba(0,200,120,0.5)]"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Play Again (Spacebar)</span>
              </button>
            </div>
          )}
        </div>

        {/* Project Details & Features Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-[#080B09]/60 border border-[#00C878]/15">
            <h4 className="font-display font-semibold text-white text-sm mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00C878]" />
              <span>Full Unity 3D Project Features</span>
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00C878] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#080B09]/60 border border-[#00C878]/15">
              <h4 className="font-display font-semibold text-white text-sm mb-3">
                Architectural Specifications
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-[#071B13]/80 border border-[#00C878]/10">
                    <span className="text-[10px] font-mono text-gray-400 block">{m.label}</span>
                    <span className="font-semibold text-white">{m.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#123524]/40 border border-[#00C878]/20 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-white block">Tech Stack</span>
                <span className="text-[11px] font-mono text-[#a3d9bc]">Unity 3D Engine &bull; C# &bull; Rigidbody Physics</span>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-[#00C878] text-[#080B09] font-bold">
                C# Scripting
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForestRunnerModal;
