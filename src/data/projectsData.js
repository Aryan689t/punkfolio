/**
 * PROJECTS CONFIGURATION & DATA SOURCE
 * 
 * Connected to your GitHub account: Aryan689t
 * 
 * You have full control over what projects appear on your portfolio:
 * - Set `show: true` to display a project, or `show: false` to hide it.
 * - Set `featured: true` to prioritize it.
 * - `githubRepo`: Connects to your live GitHub repo (fetches live stars & metadata).
 * - `demoUrl`: Live deployment link (e.g. Vercel, GitHub Pages).
 */

export const GITHUB_USERNAME = "Aryan689t";

export const projectsData = [
  {
    id: "kisansetu",
    number: "01",
    show: true,
    featured: true,
    title: "KISANSETU V3",
    displayName: "KisaanSetu V3",
    tagline: "AI Agricultural Logistics & Mandi Management",
    hologramSubtext: "Bridging Farmers to a Better Tomorrow",
    description: "AI-assisted agricultural queue and congestion management system to help farmers save time, eliminate market bottlenecks, and gain direct, transparent access to Mandi hubs.",
    status: "DEPLOYED",
    statusColor: "#00ff66", // Neon Green
    role: "Full Stack Developer",
    duration: "Hackathon (2026)",
    completionStatus: "Completed",
    category: "AI / AgriTech",
    githubRepo: "Aryan689t/KisaanSetu_V3",
    githubUrl: "https://github.com/Aryan689t/KisaanSetu_V3",
    demoUrl: "https://kisaan-setu-v3.vercel.app", // Live Vercel App
    screenshotUrl: "/projects/kisansetu.png",
    techStack: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "AI/ML"],
    highlights: [
      "Real-time Mandi queue estimation and smart slot allocation",
      "AI congestion prediction algorithms for grain & produce transport",
      "Farmer-friendly multilingual mobile interface with voice flow",
      "Production deployment with live Vercel cloud hosting"
    ],
    metrics: [
      { label: "Smart Queues", sublabel: "Automated entry tokens" },
      { label: "Less Waiting", sublabel: "40% congestion drop" },
      { label: "Better Markets", sublabel: "Direct price discovery" },
    ],
    hudData: {
      metricName: "Estimated Wait Time",
      metricValue: "12 min",
      accuracy: "98.4%",
      activeVehicles: "48 Tractors",
      throughput: "High",
    },
    images: [
      {
        id: "screen",
        title: "SCREEN",
        tag: "LIVE UI",
        caption: "Production Live Screenshot"
      },
      {
        id: "telemetry",
        title: "TELEM",
        tag: "DATA",
        caption: "Real-time Mandi Telemetry"
      },
      {
        id: "stack",
        title: "STACK",
        tag: "ARCH",
        caption: "AI / Full-Stack Topology"
      },
      {
        id: "metrics",
        title: "METRIC",
        tag: "PERF",
        caption: "Efficiency Benchmarks"
      }
    ]
  },
  {
    id: "trackyour",
    number: "02",
    show: true,
    featured: true,
    title: "TRACKYOUR",
    displayName: "TrackYour",
    tagline: "Academic GPA & Attendance Tracker",
    hologramSubtext: "Precision Academic Intelligence & Benchmark Modeling",
    description: "An interactive academic progression dashboard engineered for university students to track credit benchmarks, simulate future grades, and prevent attendance shortages.",
    status: "DEPLOYED",
    statusColor: "#00f0ff", // Neon Cyan
    role: "Frontend Architect & Creator",
    duration: "2025 - Present",
    completionStatus: "Completed",
    category: "EdTech / Utility",
    githubRepo: "Aryan689t/TrackYour",
    githubUrl: "https://github.com/Aryan689t/TrackYour",
    demoUrl: "https://aryan689t.github.io/TrackYour/", // Live GitHub Pages App
    screenshotUrl: "/projects/trackyour.png",
    techStack: ["JavaScript", "HTML5", "CSS3", "DOM APIs", "LocalStorage"],
    highlights: [
      "Attendance safety-zone calculator & dynamic bunk simulator",
      "Target GPA forecasting with what-if milestone computation",
      "Persistent state management with encrypted local caching",
      "Fast, responsive layout optimized for mobile & desktop"
    ],
    metrics: [
      { label: "Target GPA", sublabel: "Calculated trajectory" },
      { label: "Attendance Buffer", sublabel: "Zero margin error" },
      { label: "Analytics", sublabel: "Subject trends" },
    ],
    hudData: {
      metricName: "Target Grade Buffer",
      metricValue: "+8.4%",
      accuracy: "99.1%",
      activeVehicles: "Active Sem",
      throughput: "Optimal",
    },
    images: [
      {
        id: "screen",
        title: "SCREEN",
        tag: "LIVE UI",
        caption: "Production Live Screenshot"
      },
      {
        id: "telemetry",
        title: "TELEM",
        tag: "DATA",
        caption: "Academic Grade Radar"
      },
      {
        id: "stack",
        title: "STACK",
        tag: "ARCH",
        caption: "Frontend Architecture"
      },
      {
        id: "metrics",
        title: "METRIC",
        tag: "PERF",
        caption: "Student Target Analytics"
      }
    ]
  },
  {
    id: "punkfolio",
    number: "03",
    show: true,
    featured: true,
    title: "PUNKFOLIO",
    displayName: "PunkFolio",
    tagline: "Cyberpunk Developer Portfolio",
    hologramSubtext: "Interactive 60FPS Cyber Mainframe & Audio Synthesizer",
    description: "Immersive Cyberpunk 2077 inspired developer terminal portfolio featuring procedural HTML5 Canvas rain & hovercrafts, Web Audio synthesizers, and live GitHub telemetry integration.",
    status: "ACTIVE",
    statusColor: "#ff007f", // Neon Pink
    role: "Creator & Architect",
    duration: "2026",
    completionStatus: "Active",
    category: "Creative Dev / UI/UX",
    githubRepo: "Aryan689t/Portfolio",
    githubUrl: "https://github.com/Aryan689t/Portfolio",
    demoUrl: "https://portfolio-ary230.vercel.app", // Live Vercel App
    screenshotUrl: "/projects/punkfolio.png",
    techStack: ["React 19", "Tailwind CSS", "Web Audio API", "HTML5 Canvas", "Vite"],
    highlights: [
      "Procedural 60fps canvas particle & hovercraft physics engine",
      "Built-in Web Audio cyberpunk ambient synthesizer & OST player",
      "Dynamic GitHub repository sync with live star counters",
      "Enlargeable holographic HUD terminal with custom telemetry"
    ],
    metrics: [
      { label: "60 FPS", sublabel: "Canvas physics" },
      { label: "Web Audio", sublabel: "Dual synths" },
      { label: "Zero Lag", sublabel: "Vite 8.0" },
    ],
    hudData: {
      metricName: "Core System Load",
      metricValue: "1.2 ms",
      accuracy: "99.9%",
      activeVehicles: "Online",
      throughput: "Maximum",
    },
    images: [
      {
        id: "screen",
        title: "SCREEN",
        tag: "LIVE UI",
        caption: "Mainframe Terminal Screenshot"
      },
      {
        id: "telemetry",
        title: "TELEM",
        tag: "DATA",
        caption: "Audio Waveform & HUD"
      },
      {
        id: "stack",
        title: "STACK",
        tag: "ARCH",
        caption: "React 19 & Canvas Engine"
      },
      {
        id: "metrics",
        title: "METRIC",
        tag: "PERF",
        caption: "60 FPS Engine Benchmarks"
      }
    ]
  },
  {
    id: "attendance-simulator",
    number: "04",
    show: true,
    featured: false,
    title: "ATTENDANCE SIMULATOR",
    displayName: "Attendance Simulator",
    tagline: "Real-Time Subject & Margin Calculator",
    hologramSubtext: "Subject-Wise Attendance Forecaster & Safety Buffer",
    description: "A dynamic attendance management web application that calculates subject-wise and overall attendance in real time with persistent client-side storage.",
    status: "DEPLOYED",
    statusColor: "#ffe600", // Neon Yellow
    role: "Frontend Developer",
    duration: "2026",
    completionStatus: "Completed",
    category: "Web App / Tool",
    githubRepo: "Aryan689t/Attendence-Simulator",
    githubUrl: "https://github.com/Aryan689t/Attendence-Simulator",
    demoUrl: "https://aryan689t.github.io/Attendence-Simulator/", // Live GitHub Pages App
    screenshotUrl: "/projects/attendance-simulator.png",
    techStack: ["JavaScript", "HTML5", "CSS3", "GitHub Pages"],
    highlights: [
      "Instant subject-wise percentage and safe bunk counter",
      "Real-time visual threshold warnings for critical attendance",
      "Persistent state management with browser localStorage",
      "Deployed on GitHub Pages for instant student access"
    ],
    metrics: [
      { label: "Live Calc", sublabel: "Instant margin" },
      { label: "Local Store", sublabel: "Zero backend lag" },
      { label: "PWA Ready", sublabel: "Fast load" },
    ],
    hudData: {
      metricName: "Threshold Buffer",
      metricValue: "75.0%",
      accuracy: "100%",
      activeVehicles: "6 Subjects",
      throughput: "Instant",
    },
    images: [
      {
        id: "screen",
        title: "SCREEN",
        tag: "LIVE UI",
        caption: "Production Live Screenshot"
      },
      {
        id: "telemetry",
        title: "TELEM",
        tag: "DATA",
        caption: "Threshold Telemetry Grid"
      },
      {
        id: "stack",
        title: "STACK",
        tag: "ARCH",
        caption: "Vanilla JS Engine"
      },
      {
        id: "metrics",
        title: "METRIC",
        tag: "PERF",
        caption: "Real-Time Margin Compute"
      }
    ]
  },
  {
    id: "quiz-site",
    number: "05",
    show: true,
    featured: false,
    title: "QUIZ PLATFORM",
    displayName: "Interactive Quiz Engine",
    tagline: "Dynamic Question & State Evaluation App",
    hologramSubtext: "Event-Driven Real-Time Answer Validation & Score Matrix",
    description: "Interactive quiz platform developed in vanilla JavaScript featuring dynamic question rendering, event-driven user interactions, real-time answer validation, and score tracking.",
    status: "DEPLOYED",
    statusColor: "#9d00ff", // Neon Purple
    role: "JavaScript Engineer",
    duration: "2026",
    completionStatus: "Completed",
    category: "Interactive Web",
    githubRepo: "Aryan689t/Quiz-Site",
    githubUrl: "https://github.com/Aryan689t/Quiz-Site",
    demoUrl: "https://aryan689t.github.io/Quiz-Site/", // Live GitHub Pages App
    screenshotUrl: "/projects/quiz-site.png",
    techStack: ["JavaScript (ES6+)", "HTML5", "CSS3", "DOM API"],
    highlights: [
      "Dynamic question & options rendering from structured data models",
      "Event-driven instant answer validation and live feedback",
      "State-driven score calculation and completion report matrix",
      "Custom countdown timer and progress tracking bar"
    ],
    metrics: [
      { label: "Real-Time", sublabel: "Answer scoring" },
      { label: "Dynamic", sublabel: "State machine" },
      { label: "Event Driven", sublabel: "Zero latency" },
    ],
    hudData: {
      metricName: "Validation Speed",
      metricValue: "0.1 ms",
      accuracy: "100%",
      activeVehicles: "Quiz Active",
      throughput: "Instant",
    },
    images: [
      {
        id: "screen",
        title: "SCREEN",
        tag: "LIVE UI",
        caption: "Interactive Quiz Screenshot"
      },
      {
        id: "telemetry",
        title: "TELEM",
        tag: "DATA",
        caption: "Question State Matrix"
      },
      {
        id: "stack",
        title: "STACK",
        tag: "ARCH",
        caption: "DOM & Event Lifecycle"
      },
      {
        id: "metrics",
        title: "METRIC",
        tag: "PERF",
        caption: "Instant Evaluation Speed"
      }
    ]
  },
  {
    id: "task-manager",
    number: "06",
    show: true,
    featured: false,
    title: "TASK MANAGER",
    displayName: "Task Manager",
    tagline: "Persistent Task & Workflow Suite",
    hologramSubtext: "Interactive Workflow Organizer & State Engine",
    description: "A simple and interactive Task Manager built using HTML, CSS, and JavaScript allowing users to create, edit, filter, and track tasks with persistent localStorage.",
    status: "DEPLOYED",
    statusColor: "#00f0ff", // Neon Cyan
    role: "Frontend Developer",
    duration: "2026",
    completionStatus: "Completed",
    category: "Productivity",
    githubRepo: "Aryan689t/Task-Manager",
    githubUrl: "https://github.com/Aryan689t/Task-Manager",
    demoUrl: "https://aryan689t.github.io/Task-Manager/", // Live GitHub Pages App
    screenshotUrl: "/projects/task-manager.png",
    techStack: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    highlights: [
      "Complete CRUD operation flow for task management",
      "Category tags, priorities, and completion filters",
      "LocalStorage persistence across user sessions",
      "Clean, modern responsive user interface"
    ],
    metrics: [
      { label: "CRUD", sublabel: "Full lifecycle" },
      { label: "Persist", sublabel: "LocalStorage" },
      { label: "Filters", sublabel: "Category tags" },
    ],
    hudData: {
      metricName: "Task Sync Level",
      metricValue: "100%",
      accuracy: "99.9%",
      activeVehicles: "Active",
      throughput: "High",
    },
    images: [
      {
        id: "screen",
        title: "SCREEN",
        tag: "LIVE UI",
        caption: "Task Suite Screenshot"
      },
      {
        id: "telemetry",
        title: "TELEM",
        tag: "DATA",
        caption: "Task Queue Matrix"
      },
      {
        id: "stack",
        title: "STACK",
        tag: "ARCH",
        caption: "LocalStorage Architecture"
      },
      {
        id: "metrics",
        title: "METRIC",
        tag: "PERF",
        caption: "State Persistence Level"
      }
    ]
  }
];

// Helper to retrieve visible projects
export const getActiveProjects = () => {
  return projectsData.filter((project) => project.show !== false);
};

