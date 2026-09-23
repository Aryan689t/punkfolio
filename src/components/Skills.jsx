import React, { useState } from 'react';
import { Sparkles, Code2, Server, Database, Wrench, ArrowLeft } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/audio';
import {
  ReactIcon, TypeScriptIcon, JavaScriptIcon, HtmlCssIcon,
  NodeIcon, ExpressIcon, PrismaIcon, PostgresIcon,
  MySqlIcon, SupabaseIcon, GitIcon, VsCodeIcon, AntigravityIcon
} from './TechIcons';

const skillCategories = [
  { id: 'all', label: 'ALL ARSENAL', icon: Sparkles },
  { id: 'frontend', label: 'FRONTEND', icon: Code2 },
  { id: 'backend', label: 'BACKEND', icon: Server },
  { id: 'database', label: 'DATABASES', icon: Database },
  { id: 'tools', label: 'DEV TOOLS & AI', icon: Wrench },
];

const skillsData = [
  // Frontend
  {
    name: 'React.js',
    category: 'frontend',
    icon: ReactIcon,
    accentColor: '#00f0ff',
    badge: 'CORE STACK',
    tags: ['Hooks', 'Context API', 'Component Architecture', 'SPA'],
    borderClass: 'border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]',
    badgeClass: 'bg-cyan-950/70 text-cyan-300 border-cyan-500/40',
    tagClass: 'bg-cyan-950/40 text-cyan-200/80 border-cyan-500/20',
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    icon: TypeScriptIcon,
    accentColor: '#00f0ff',
    badge: 'ADVANCED',
    tags: ['Static Typing', 'Interfaces', 'Generics', 'Type Safety'],
    borderClass: 'border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]',
    badgeClass: 'bg-cyan-950/70 text-cyan-300 border-cyan-500/40',
    tagClass: 'bg-cyan-950/40 text-cyan-200/80 border-cyan-500/20',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    icon: JavaScriptIcon,
    accentColor: '#ffe600',
    badge: 'EXPERT',
    tags: ['Async/Await', 'DOM APIs', 'Event Loop', 'Closures'],
    borderClass: 'border-yellow-500/30 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(255,230,0,0.4)]',
    badgeClass: 'bg-yellow-950/70 text-yellow-300 border-yellow-500/40',
    tagClass: 'bg-yellow-950/40 text-yellow-200/80 border-yellow-500/20',
  },
  {
    name: 'HTML5 & CSS3',
    category: 'frontend',
    icon: HtmlCssIcon,
    accentColor: '#ff007f',
    badge: 'EXPERT',
    tags: ['Semantic HTML', 'Tailwind CSS', 'Flexbox / Grid', 'Animations'],
    borderClass: 'border-pink-500/30 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(255,0,127,0.4)]',
    badgeClass: 'bg-pink-950/70 text-pink-300 border-pink-500/40',
    tagClass: 'bg-pink-950/40 text-pink-200/80 border-pink-500/20',
  },

  // Backend
  {
    name: 'Node.js',
    category: 'backend',
    icon: NodeIcon,
    accentColor: '#00ff66',
    badge: 'RUNTIME',
    tags: ['V8 Engine', 'NPM Modules', 'Event Driven', 'Microservices'],
    borderClass: 'border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]',
    badgeClass: 'bg-emerald-950/70 text-emerald-300 border-emerald-500/40',
    tagClass: 'bg-emerald-950/40 text-emerald-200/80 border-emerald-500/20',
  },
  {
    name: 'Express.js',
    category: 'backend',
    icon: ExpressIcon,
    accentColor: '#00ff66',
    badge: 'FRAMEWORK',
    tags: ['RESTful APIs', 'Middleware', 'JWT Auth', 'Routing'],
    borderClass: 'border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]',
    badgeClass: 'bg-emerald-950/70 text-emerald-300 border-emerald-500/40',
    tagClass: 'bg-emerald-950/40 text-emerald-200/80 border-emerald-500/20',
  },
  {
    name: 'Prisma ORM',
    category: 'backend',
    icon: PrismaIcon,
    accentColor: '#00ff66',
    badge: 'DATABASE ORM',
    tags: ['Type-Safe Queries', 'Migrations', 'Schema Modeling', 'CRUD'],
    borderClass: 'border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]',
    badgeClass: 'bg-emerald-950/70 text-emerald-300 border-emerald-500/40',
    tagClass: 'bg-emerald-950/40 text-emerald-200/80 border-emerald-500/20',
  },

  // Databases
  {
    name: 'PostgreSQL',
    category: 'database',
    icon: PostgresIcon,
    accentColor: '#00f0ff',
    badge: 'RELATIONAL',
    tags: ['ACID Compliance', 'Complex Joins', 'Indexing', 'JSONB'],
    borderClass: 'border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]',
    badgeClass: 'bg-cyan-950/70 text-cyan-300 border-cyan-500/40',
    tagClass: 'bg-cyan-950/40 text-cyan-200/80 border-cyan-500/20',
  },
  {
    name: 'MySQL',
    category: 'database',
    icon: MySqlIcon,
    accentColor: '#ff007f',
    badge: 'SQL ENGINE',
    tags: ['Relational Schema', 'Stored Procedures', 'Transactions', 'Queries'],
    borderClass: 'border-pink-500/30 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(255,0,127,0.4)]',
    badgeClass: 'bg-pink-950/70 text-pink-300 border-pink-500/40',
    tagClass: 'bg-pink-950/40 text-pink-200/80 border-pink-500/20',
  },
  {
    name: 'Supabase',
    category: 'database',
    icon: SupabaseIcon,
    accentColor: '#00ff66',
    badge: 'CLOUD BACKEND',
    tags: ['Managed Postgres', 'Realtime Subscriptions', 'Auth', 'Edge Functions'],
    borderClass: 'border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]',
    badgeClass: 'bg-emerald-950/70 text-emerald-300 border-emerald-500/40',
    tagClass: 'bg-emerald-950/40 text-emerald-200/80 border-emerald-500/20',
  },

  // Tools & AI
  {
    name: 'Git & GitHub',
    category: 'tools',
    icon: GitIcon,
    accentColor: '#8b00ff',
    badge: 'VCS & DEVOPS',
    tags: ['Branching', 'Pull Requests', 'GitHub Actions', 'Code Review'],
    borderClass: 'border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(139,0,255,0.4)]',
    badgeClass: 'bg-purple-950/70 text-purple-300 border-purple-500/40',
    tagClass: 'bg-purple-950/40 text-purple-200/80 border-purple-500/20',
  },
  {
    name: 'VS Code',
    category: 'tools',
    icon: VsCodeIcon,
    accentColor: '#00f0ff',
    badge: 'POWER IDE',
    tags: ['Extensions', 'Integrated Terminal', 'Debugging', 'Workspaces'],
    borderClass: 'border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]',
    badgeClass: 'bg-cyan-950/70 text-cyan-300 border-cyan-500/40',
    tagClass: 'bg-cyan-950/40 text-cyan-200/80 border-cyan-500/20',
  },
  {
    name: 'Google Antigravity',
    category: 'tools',
    icon: AntigravityIcon,
    accentColor: '#ffe600',
    badge: 'AI PAIR ENGINE',
    tags: ['Agentic Coding', 'Subagent Workflows', 'Planning', 'Automation'],
    borderClass: 'border-yellow-500/30 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(255,230,0,0.4)]',
    badgeClass: 'bg-yellow-950/70 text-yellow-300 border-yellow-500/40',
    tagClass: 'bg-yellow-950/40 text-yellow-200/80 border-yellow-500/20',
  },
];

const Skills = ({ onNavigateBack }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <div className="relative z-20 w-full max-w-6xl mx-auto px-2.5 sm:px-6 py-1 sm:py-2 select-none flex flex-col justify-center">
      
      {/* Holographic Matrix Backdrop Panel for Crisp Readability */}
      <div className="relative w-full bg-[#060913]/90 border border-cyan-500/25 rounded-xl p-2.5 sm:p-5 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.95)]">
        
        {/* Cyber Corner Frame Accents */}
        <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
        <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
        <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
        <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 mb-2.5 sm:mb-3 border-b border-cyan-500/20 pb-2 sm:pb-2.5">
          <div className="w-full sm:w-auto text-left flex items-center justify-between sm:justify-start gap-3">
            {onNavigateBack && (
              <button
                onClick={() => {
                  playClickSound();
                  onNavigateBack();
                }}
                onMouseEnter={playHoverSound}
                className="hidden sm:block p-1.5 rounded bg-slate-900 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all cursor-pointer"
                title="Return to Home"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <div className="w-full sm:w-auto">
              {/* Desktop-only decorative telemetry labels */}
              <div className="hidden sm:flex items-center justify-start gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-pink-500">
                <span className="font-bold">//</span>
                <span>CYBERNETIC ARSENAL</span>
                <span className="text-cyan-400 font-bold">//</span>
                <span>TECH CAPABILITIES</span>
              </div>
              
              {/* Clean Single-Row Cyberpunk Title on Mobile & Desktop */}
              <h2 className="font-orbitron font-black text-sm xs:text-base sm:text-2xl tracking-wide text-white drop-shadow-[0_0_12px_rgba(0,240,255,0.6)] flex items-center gap-1.5 sm:gap-2 justify-start whitespace-nowrap">
                <span className="text-cyan-400">02.</span>
                <span>SKILLS & ARSENAL</span>
                <span className="text-pink-500 animate-pulse">_</span>
              </h2>
            </div>
          </div>

          {/* Category Filter Pills (Protected from global swipe navigation) */}
          <div 
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
            className="flex items-center justify-start sm:justify-center gap-1.5 font-mono text-[9.5px] sm:text-[11px] overflow-x-auto no-scrollbar w-full sm:w-auto py-0.5 whitespace-nowrap no-swipe-zone"
          >
            {skillCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    playClickSound();
                    setActiveCategory(cat.id);
                  }}
                  onMouseEnter={playHoverSound}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-all duration-200 border shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-pink-500/25 text-pink-300 border-pink-500 shadow-[0_0_12px_rgba(255,0,127,0.5)] font-bold'
                      : 'bg-[#090e1a]/90 text-slate-400 border-cyan-500/20 hover:border-cyan-400/60 hover:text-cyan-300'
                  }`}
                >
                  <Icon className={`w-3 h-3 ${isActive ? 'text-pink-400' : 'text-slate-400'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid (2-Column on Mobile, 3 on Tablet, 4 on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 max-h-[58vh] sm:max-h-[50vh] overflow-y-auto pr-1 scrollbar-thin">
          {filteredSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                onMouseEnter={playHoverSound}
                className={`group relative bg-[#0a0f1d]/90 border p-2.5 sm:p-3 rounded-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${skill.borderClass}`}
              >
                {/* Header: Custom Cyber SVG Icon + Title & Badge */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="p-1 sm:p-1.5 rounded-md bg-black/50 border border-white/10 shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4 sm:w-6 sm:h-6" color={skill.accentColor} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-orbitron font-bold text-[11px] xs:text-xs sm:text-sm text-white group-hover:text-cyan-300 transition-colors truncate">
                        {skill.name}
                      </h3>
                      <span className={`inline-block font-mono text-[7.5px] sm:text-[9px] px-1.5 py-0.2 rounded border tracking-wider font-semibold ${skill.badgeClass}`}>
                        {skill.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-tags Pill Chips */}
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {skill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`font-mono text-[7.5px] xs:text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded border tracking-tight font-medium ${skill.tagClass}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};

export default Skills;


