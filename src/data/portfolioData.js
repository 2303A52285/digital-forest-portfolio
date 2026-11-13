export const personalInfo = {
  name: "Gaddam Srinidhi",
  degree: "B.Tech in Computer Science and Engineering",
  university: "SR University",
  graduation: "2027",
  duration: "Aug 2023 – May 2027",
  cgpa: "8.5 / 10",
  location: "Warangal / Telangana, India",
  email: "gaddamsrinidhi.dev@gmail.com", // Editable placeholder
  phone: "+91 98765 43210", // Editable placeholder
  headline: "Building Digital Experiences Through Code, AI & Creativity.",
  roles: [
    "Aspiring Software Developer",
    "AI & Machine Learning Enthusiast",
    "Unity 3D Game Developer",
    "Creative Problem Solver",
  ],
  bio: `I'm a Computer Science and Engineering student at SR University with a passion for technology, software development, artificial intelligence and interactive game development.

I enjoy transforming creative ideas into functional digital experiences. I am continuously improving my technical skills and exploring new technologies to build meaningful projects.`,
  careerObjective: `Aspiring Computer Science student specializing in Artificial Intelligence and Machine Learning, with an interest in Software Development and Game Development. Skilled in programming, game mechanics, and interactive application development. Interested in building creative and user-friendly solutions using modern technologies.`,
  socials: {
    github: "https://github.com/gaddamsrinidhi", // Replace with your GitHub profile URL
    linkedin: "https://linkedin.com/in/gaddamsrinidhi", // Replace with your LinkedIn profile URL
    leetcode: "https://leetcode.com/u/gaddamsrinidhi", // Replace with your LeetCode profile URL
    email: "mailto:gaddamsrinidhi.dev@gmail.com",
  },
  coursework: [
    "Data Structures",
    "OOPs (Object Oriented Programming)",
    "DBMS (Database Management Systems)",
    "Operating Systems",
    "Computer Networks",
    "Machine Learning Fundamentals",
    "Game Physics & Mechanics"
  ]
};

export const skillsData = [
  {
    category: "Programming",
    icon: "Code",
    description: "Core algorithmic and object-oriented programming foundations",
    skills: [
      { name: "Python", level: "Advanced", desc: "ML pipelines, scripts, data processing" },
      { name: "C", level: "Intermediate", desc: "Low-level system logic, memory concepts" },
      { name: "C#", level: "Advanced", desc: "Unity engine scripting, OOP architectures" },
      { name: "Java", level: "Proficient", desc: "Data structures, OOP paradigms" },
    ],
  },
  {
    category: "Web Development",
    icon: "Globe",
    description: "Modern responsive web applications and full-stack architecture",
    skills: [
      { name: "HTML5", level: "Advanced", desc: "Semantic structure & accessibility" },
      { name: "CSS3", level: "Advanced", desc: "Animations, Flexbox, Grid, Responsive" },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/await, DOM, modern features" },
      { name: "React.js", level: "Proficient", desc: "Components, Hooks, State management" },
      { name: "Node.js", level: "Intermediate", desc: "REST APIs, backend routing" },
    ],
  },
  {
    category: "Game Development",
    icon: "Gamepad2",
    description: "Interactive real-time 3D simulation and gameplay programming",
    skills: [
      { name: "Unity 3D", level: "Advanced", desc: "3D scene composition, prefabs, physics" },
      { name: "C# Scripting", level: "Advanced", desc: "Game logic, event dispatchers, state machines" },
      { name: "3D Game Development", level: "Advanced", desc: "Camera controllers, environment integration" },
    ],
  },
  {
    category: "Game Design",
    icon: "Layers",
    description: "Crafting engaging mechanics, physical feedback, and intuitive level design",
    skills: [
      { name: "Game Mechanics", level: "Core", desc: "Core loops, pacing, reward systems" },
      { name: "Level Design", level: "Core", desc: "Obstacle placement, terrain flow" },
      { name: "Player Movement", level: "Core", desc: "Kinematics, jump physics, responsiveness" },
      { name: "Collision Detection", level: "Core", desc: "Hitboxes, raycasting, triggers" },
      { name: "Game Physics", level: "Core", desc: "Rigidbodies, gravity, friction" },
      { name: "UI Design", level: "Core", desc: "Heads-up displays, menus, scoreboards" },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: "Brain",
    description: "Predictive modeling, data transformation, and supervised learning",
    skills: [
      { name: "Machine Learning", level: "Proficient", desc: "Model evaluation, train/test pipelines" },
      { name: "Logistic Regression", level: "Proficient", desc: "Binary & multiclass classification" },
      { name: "Random Forest", level: "Proficient", desc: "Ensemble learning, decision trees" },
      { name: "XGBoost", level: "Proficient", desc: "Gradient boosted decision trees" },
      { name: "Predictive Analytics", level: "Proficient", desc: "Pattern discovery & forecasting" },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    description: "Relational and document storage systems",
    skills: [
      { name: "MySQL", level: "Proficient", desc: "Relational schemas, queries, joins, indexing" },
      { name: "MongoDB", level: "Intermediate", desc: "NoSQL document collections, Mongoose" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    description: "Developer tooling, version control, and data visualization",
    skills: [
      { name: "Git", level: "Proficient", desc: "Branching, merging, commit workflows" },
      { name: "GitHub", level: "Proficient", desc: "Collaboration, repos, versioning" },
      { name: "VS Code", level: "Proficient", desc: "IDE workflows, debugging, extensions" },
      { name: "Unity Editor", level: "Advanced", desc: "Profiler, inspector, scene hierarchy" },
      { name: "Tableau", level: "Intermediate", desc: "Data visualization dashboards" },
    ],
  },
  {
    category: "Core Concepts",
    icon: "Cpu",
    description: "Fundamental computer science theory and problem solving",
    skills: [
      { name: "OOPs", level: "Advanced", desc: "Polymorphism, Encapsulation, Inheritance" },
      { name: "Data Structures", level: "Advanced", desc: "Arrays, Trees, Graphs, Hash Maps" },
      { name: "Algorithms", level: "Proficient", desc: "Sorting, Searching, Dynamic Programming" },
      { name: "Problem Solving", level: "Advanced", desc: "Analytical mindset & debugging" },
    ],
  },
];

export const projectsData = [
  {
    id: "forest-runner",
    title: "Forest Theme Endless Runner Game",
    category: "Game Development",
    badge: "Unity 3D Engine",
    tech: ["Unity 3D", "C#", "3D Physics", "Game Design", "Level Generation"],
    shortDesc: "A fast-paced 3D endless runner game featuring an immersive bioluminescent forest environment with procedural obstacle mechanics.",
    longDesc: "Developed an immersive 3D endless runner set within a mystic, atmospheric digital forest. The game features responsive player kinematics, dynamic obstacle placement, real-time score tracking, progressive difficulty scaling, and polished game-over flows designed with player engagement at the forefront.",
    features: [
      "Smooth player movement, lane switching, and fluid jumping physics",
      "Dynamic obstacle avoidance and precision collision detection",
      "Real-time score tracking and persistent high-score record",
      "Dynamic difficulty curve that ramps obstacle speed over distance",
      "Immersive forest level with stylized trees, glowing flora, and atmospheric lighting",
      "Polished HUD and game-over state with instant replay loop",
    ],
    interactiveType: "playable-game",
    actionText: "Play Mini Demo",
    metrics: [
      { label: "Engine", val: "Unity 2022 LTS" },
      { label: "Language", val: "C#" },
      { label: "Target FPS", val: "60 FPS Smooth" },
      { label: "Physics", val: "Rigidbody 3D" },
    ],
    color: "#00C878",
  },
  {
    id: "loan-prediction",
    title: "Loan Approval Prediction",
    category: "Machine Learning & AI",
    badge: "Predictive Analytics",
    tech: ["Python", "Machine Learning", "Logistic Regression", "Random Forest", "XGBoost", "Scikit-Learn"],
    shortDesc: "A machine learning pipeline that predicts loan approval outcomes with high precision using ensemble models and feature evaluation.",
    longDesc: "Engineered an intelligent loan approval classification system trained on historical applicant datasets. The pipeline applies data cleaning, categorical encoding, and feature scaling, benchmarked across Logistic Regression, Random Forest, and XGBoost classifiers to aid financial institutions in assessing credit risk accurately.",
    features: [
      "Exploratory Data Analysis (EDA) on applicant demographics, credit history, and income",
      "Handling class imbalance and missing variable imputation",
      "Trained Logistic Regression, Random Forest, and XGBoost models",
      "Performance benchmarking using Precision, Recall, F1-Score, and ROC-AUC curves",
      "Feature importance ranking revealing credit score as the top approval driver",
      "Interactive prediction interface for instant eligibility testing",
    ],
    interactiveType: "ml-simulator",
    actionText: "Test Prediction Model",
    metrics: [
      { label: "Top Model", val: "XGBoost / Random Forest" },
      { label: "Metrics", val: "Precision & ROC-AUC" },
      { label: "Input Params", val: "Credit, Income, Loan" },
      { label: "Core Tech", val: "Python ML" },
    ],
    color: "#10f796",
  },
  {
    id: "event-management",
    title: "Smart Event Management Website",
    category: "Full Stack Web",
    badge: "MERN Stack",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "REST API"],
    shortDesc: "A modern full-stack web application for seamless event discovery, seat booking, ticket registration, and real-time dashboard analytics.",
    longDesc: "Designed and built an end-to-end event management platform catering to university hackathons, workshops, and tech seminars. Features include responsive event listings, attendee registration flows, automated ticket confirmation badges, and an admin view for managing event capacities.",
    features: [
      "Responsive, mobile-first user interface built with React and Tailwind CSS",
      "Event creation, editing, and categorisation with date/venue filters",
      "Attendee registration workflow with instant booking confirmation",
      "Express & Node.js backend powering secure RESTful API endpoints",
      "MongoDB database schemas for events, attendees, and ticketing data",
      "Search and filtering by category, date, and availability status",
    ],
    interactiveType: "web-preview",
    actionText: "View Interactive Preview",
    metrics: [
      { label: "Architecture", val: "MERN Stack" },
      { label: "Design", val: "Tailwind & Glass UI" },
      { label: "API", val: "RESTful JSON" },
      { label: "Database", val: "MongoDB / Mongoose" },
    ],
    color: "#34D399",
  },
];

export const experienceData = [
  {
    id: "google-aicte",
    role: "Google AI-ML Virtual Intern",
    company: "Google AI-ML Virtual Internship — AICTE",
    duration: "July 2024 – September 2024",
    period: "Jul 2024 – Sep 2024",
    status: "Completed",
    location: "Virtual / Remote",
    description: "Selected for the prestigious Google & AICTE Virtual Internship in Artificial Intelligence and Machine Learning, focusing on foundational theory, practical predictive analytics, and Python model development.",
    highlights: [
      "Mastered fundamental Machine Learning algorithms, mathematical foundations, and predictive analytics workflows.",
      "Built and evaluated Python-based machine learning pipelines using Scikit-Learn and Pandas.",
      "Explored real-world AI applications, ethical AI principles, and problem-solving techniques for complex datasets.",
      "Collaborated in hands-on labs covering supervised learning, classification matrices, and model fine-tuning.",
    ],
    skillsLearned: ["Machine Learning", "Python", "Predictive Analytics", "Data Preprocessing", "Model Evaluation", "Scikit-Learn"],
    badge: "AICTE & Google Certified",
  },
];

export const certificationsData = [
  {
    id: "ccna-intro",
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "November 2024",
    badgeColor: "#00C878",
    credentialId: "CISCO-CCNA-NET-2024",
    skills: ["Network Architectures", "IP Addressing & Subnetting", "Ethernet Protocols", "Routing & Switching", "Cisco Packet Tracer"],
    description: "Comprehensive certification covering network architectures, IP addressing schemes, subnetting, media access control, network protocols, and packet routing essentials.",
  },
  {
    id: "infosys-os",
    title: "Introduction to Operating Systems",
    issuer: "Infosys Springboard",
    date: "September 2024",
    badgeColor: "#34D399",
    credentialId: "INFOSYS-SB-OS-2024",
    skills: ["Process Management", "CPU Scheduling", "Virtual Memory", "Concurrency & Deadlocks", "File Systems"],
    description: "Deep dive into core OS principles including process synchronization, CPU scheduling algorithms, virtual memory paging, deadlock prevention, and storage management.",
  },
  {
    id: "cisco-data-analytics",
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024",
    badgeColor: "#10B981",
    credentialId: "CISCO-DAE-2024",
    skills: ["Data Exploration", "Data Cleaning", "Statistical Analysis", "Data Visualization", "Decision Making"],
    description: "Foundational training in data collection, cleaning, exploratory data analysis, statistical indicators, and data-informed business decision making.",
  },
];

export const educationData = [
  {
    institution: "SR University",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    duration: "Aug 2023 – May 2027",
    gradYear: "2027",
    cgpa: "8.5 / 10",
    location: "Warangal, Telangana",
    description: "Pursuing B.Tech CSE with rigorous focus on Data Structures, Algorithms, Software Engineering, Artificial Intelligence, and Computer Systems.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java / C++)",
      "Database Management Systems (MySQL)",
      "Operating Systems & Shell Scripting",
      "Computer Networks",
      "Discrete Mathematics",
    ],
    achievements: [
      "Maintained a strong 8.5/10 CGPA through academic semesters",
      "Active participant in technical coding challenges and hackathons",
      "Special interest in game mechanics and applied machine learning models",
    ],
  },
];
