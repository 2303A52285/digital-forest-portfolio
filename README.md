# The Digital Forest — Personal Developer Portfolio

> **"THE DIGITAL FOREST — Explore My World of Technology"**  
> Personal developer portfolio for **Gaddam Srinidhi** — Computer Science student, Aspiring Software Developer, AI/ML Enthusiast, and Unity 3D Game Developer.

---

## 🌲 Design & Theme Concept
- **Atmosphere**: Cyber-Botanical Digital Forest with bioluminescent particle fireflies, procedural 3D canopy trees, depth fog, and soft ambient light.
- **Palette**:
  - Forest Green: `#123524`
  - Deep Green: `#071B13`
  - Emerald Accent: `#00C878`
  - Dark Void / Black: `#080B09`
  - Clean Soft White: `#F5F5F5`
- **Interactive Features**:
  - **Three.js WebGL Forest Background**: Procedural rolling terrain, wireframe grid, low-poly glowing pines, and floating fireflies with mouse parallax.
  - **Web Audio Ambience Generator**: Procedural synthesized forest canopy wind and crystalline pentatonic bells (zero external audio files needed).
  - **Custom Glowing Bioluminescent Cursor**: Magnetic scaling and smooth lerping across interactive cards and buttons.
  - **Playable Endless Runner Demo**: HTML5 Canvas endless runner simulation inspired by Unity 3D with jump physics and high scores.
  - **Machine Learning Loan Predictor Simulator**: Real-time interactive model inference with feature weight calculations and risk evaluation.
  - **Smart Event Management Prototype**: Fullstack MERN interactive event booking and seat ticket reservation flow.
  - **Interactive Resume Modal**: One-click ATS resume preview, copy-to-clipboard, and print/save to PDF.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or newer)
- npm

### Running Locally
```bash
# Navigate to the portfolio folder
cd "C:\Users\srini\.gemini\antigravity\scratch\digital-forest-portfolio"

# Start the Vite development server
npm run dev
```

Open your browser at: **`http://localhost:3000`**

### Production Build
```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Architecture
```
digital-forest-portfolio/
├── index.html                   # HTML entry point with Google Fonts
├── vite.config.js               # Vite config with optimized manual chunking
├── tailwind.config.js           # Theme colors, fonts, and animation keyframes
├── postcss.config.js            # PostCSS plugins
├── package.json                 # Project dependencies & scripts
├── public/
│   └── leaf.svg                 # Custom favicon
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main application structure & modal state
    ├── index.css                # Global styles, glassmorphism & scrollbar
    ├── data/
    │   └── portfolioData.js     # Centralized resume & portfolio content
    └── components/
        ├── LoadingScreen.jsx    # Forest awakening animation
        ├── Navbar.jsx           # Fixed glassmorphism nav with active indicators
        ├── CustomCursor.jsx     # Glowing emerald cursor & trailing dot
        ├── ThreeForestBackground.jsx # Three.js WebGL canvas
        ├── SoundToggle.jsx      # Web Audio API ambient sound generator
        ├── Hero.jsx             # Hero landing, cycling titles & CTA
        ├── About.jsx            # Holographic profile & 4 pillars
        ├── Skills.jsx           # Categorized badges & live filter
        ├── Projects.jsx         # Project showcase & modal triggers
        ├── Experience.jsx       # Google AI-ML Virtual Internship timeline
        ├── Certifications.jsx   # Cisco & Infosys certificate credentials
        ├── Education.jsx        # SR University B.Tech CSE details
        ├── Contact.jsx          # Interactive form with mailto fallback
        ├── Footer.jsx           # Forest footer & back-to-top
        ├── ResumeModal.jsx      # Print/save PDF resume modal
        └── ProjectModals/
            ├── ForestRunnerModal.jsx     # Playable runner game
            ├── LoanPredictorModal.jsx    # Interactive ML simulator
            └── EventManagementModal.jsx  # MERN event booking preview
```

---

## ✏️ Customization
All personal details, coursework, skills, projects, and contact links are centralized in:
`src/data/portfolioData.js`

To update your contact email, phone, or social links, simply edit this file and Vite will hot-reload instantly.
