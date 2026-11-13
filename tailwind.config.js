/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          darkest: '#050c08',
          black: '#080B09',
          deep: '#071B13',
          DEFAULT: '#123524',
          moss: '#1c4a33',
          canopy: '#225d41',
          emerald: '#00C878',
          glow: '#10f796',
          mist: '#a3d9bc',
          light: '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'forest-radial': 'radial-gradient(circle at center, rgba(0, 200, 120, 0.15) 0%, rgba(7, 27, 19, 0.6) 60%, rgba(8, 11, 9, 0.95) 100%)',
        'forest-glow': 'radial-gradient(ellipse at 50% 0%, rgba(0, 200, 120, 0.25) 0%, transparent 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(18, 53, 36, 0.35) 0%, rgba(7, 27, 19, 0.65) 100%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite reverse',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fog-drift': 'fogDrift 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0,200,120,0.4))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 30px rgba(0,200,120,0.8))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fogDrift: {
          '0%': { transform: 'translateX(-10%)' },
          '50%': { transform: 'translateX(10%)' },
          '100%': { transform: 'translateX(-10%)' },
        }
      },
      boxShadow: {
        'emerald-glow': '0 0 25px rgba(0, 200, 120, 0.25), 0 0 50px rgba(0, 200, 120, 0.1)',
        'emerald-box': '0 8px 32px 0 rgba(0, 200, 120, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
}
