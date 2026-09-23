import React, { useState, useEffect, useRef } from 'react';
import { 
  ExternalLink, 
  CheckCircle2, 
  Radio, 
  Sparkles, 
  Layers, 
  Cpu, 
  Code2, 
  Flame,
  Star,
  GitFork,
  ArrowUpRight,
  Terminal,
  Coffee,
  Sprout,
  Maximize2,
  Minimize2,
  X
} from 'lucide-react';
import { GitHubIcon } from './TechIcons';
import { getActiveProjects, GITHUB_USERNAME } from '../data/projectsData';
import ProjectVisual from './ProjectVisual';
import { playHoverSound, playClickSound } from '../utils/audio';

const Projects = () => {
  const projects = getActiveProjects();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [repoStats, setRepoStats] = useState({});
  const [isLoadingRepo, setIsLoadingRepo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedProject = projects[selectedIndex] || projects[0];

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Optional: Fetch live GitHub statistics if repo is provided
  useEffect(() => {
    if (!selectedProject?.githubRepo) return;
    
    const repoPath = selectedProject.githubRepo;
    if (repoStats[repoPath]) return; // Already cached

    let isMounted = true;
    setIsLoadingRepo(true);

    fetch(`https://api.github.com/repos/${repoPath}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (isMounted && data) {
          setRepoStats((prev) => ({
            ...prev,
            [repoPath]: {
              stars: data.stargazers_count,
              forks: data.forks_count,
              language: data.language,
              description: data.description,
              updatedAt: data.updated_at,
            },
          }));
        }
      })
      .catch(() => {
        // Silently fallback to static data on rate limit or network offline
      })
      .finally(() => {
        if (isMounted) setIsLoadingRepo(false);
      });

    return () => {
      isMounted = false;
    };
  }, [selectedProject?.githubRepo]);

  if (!selectedProject) {
    return (
      <div className="text-center text-cyan-400 font-mono py-12">
        No active projects found. Check projectsData.js configuration.
      </div>
    );
  }

  const currentRepoStat = selectedProject.githubRepo ? repoStats[selectedProject.githubRepo] : null;

  const projectTouchStart = useRef(null);

  const handleProjectTouchStart = (e) => {
    projectTouchStart.current = e.touches[0].clientX;
  };

  const handleProjectTouchEnd = (e) => {
    if (projectTouchStart.current === null) return;
    const delta = e.changedTouches[0].clientX - projectTouchStart.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) {
        // Swiped Left -> Next Project
        playClickSound();
        setSelectedIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
      } else {
        // Swiped Right -> Prev Project
        playClickSound();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
      }
    }
    projectTouchStart.current = null;
  };

  return (
    <div className="w-full max-w-[1700px] mx-auto px-2 sm:px-4 lg:px-6 py-1 flex items-center justify-center select-none text-slate-100 h-full max-h-[calc(100vh-105px)] overflow-y-auto lg:overflow-hidden">
      
      {/* ======================================================== */}
      {/* MOBILE & TABLET LAYOUT (< lg): CINEMATIC SHOWCASE        */}
      {/* ======================================================== */}
      <div className="flex lg:hidden flex-col items-center justify-center w-full max-w-md mx-auto py-1">
        
        {/* Mobile Section Title & Carousel Navigation Header */}
        <div className="w-full flex items-center justify-between mb-2 px-1">
          <div>
            <h2 className="font-orbitron font-black text-base xs:text-lg sm:text-xl tracking-wide text-white drop-shadow-[0_0_12px_rgba(0,240,255,0.6)] flex items-center gap-1.5">
              <span className="text-cyan-400">03.</span>
              <span>PROJECTS</span>
              <span className="text-pink-500 animate-pulse">_</span>
            </h2>
            <p className="font-mono text-[8px] xs:text-[9px] text-slate-400 tracking-widest uppercase">
              BUILD. SHIP. REPEAT.
            </p>
          </div>

          {/* Navigation Controls: ← 01 / 06 → */}
          <div className="flex items-center gap-2 font-mono bg-black/60 border border-cyan-500/30 px-2.5 py-1 rounded-lg backdrop-blur-md shadow-[0_0_12px_rgba(0,240,255,0.1)]">
            <button
              onClick={() => {
                playClickSound();
                setSelectedIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
              }}
              onMouseEnter={playHoverSound}
              className="text-cyan-300 hover:text-white hover:scale-125 transition-all active:scale-90 cursor-pointer font-bold text-sm px-1 py-0.5"
              title="Previous Project"
              aria-label="Previous Project"
            >
              ←
            </button>
            <span 
              className="font-orbitron text-xs font-bold px-1 transition-colors duration-300"
              style={{ color: selectedProject.statusColor || '#00f0ff' }}
            >
              {String(selectedIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
            <button
              onClick={() => {
                playClickSound();
                setSelectedIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
              }}
              onMouseEnter={playHoverSound}
              className="text-cyan-300 hover:text-white hover:scale-125 transition-all active:scale-90 cursor-pointer font-bold text-sm px-1 py-0.5"
              title="Next Project"
              aria-label="Next Project"
            >
              →
            </button>
          </div>
        </div>

        {/* Single Cohesive Mobile HUD Showcase Card */}
        <div 
          onTouchStart={(e) => {
            e.stopPropagation();
            handleProjectTouchStart(e);
          }}
          onTouchEnd={(e) => {
            e.stopPropagation();
            handleProjectTouchEnd(e);
          }}
          className="relative w-full bg-[#060913]/90 border border-cyan-500/30 rounded-xl p-2.5 xs:p-3 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.85)] flex flex-col gap-2 overflow-hidden no-swipe-zone"
        >
          {/* Cyber Corner Frame Accents */}
          <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
          <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
          <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
          <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

          {/* Animated Project Content Container on Project Switch */}
          <div 
            key={selectedProject.id || selectedIndex} 
            className="flex flex-col gap-2 animate-[fadeIn_0.25s_ease-out]"
          >
            {/* Top Status & Category HUD Row */}
            <div className="flex items-center justify-between pb-1.5 border-b border-cyan-500/20 text-[8.5px] font-mono">
              <div 
                className="flex items-center gap-1.5 font-bold uppercase tracking-wider"
                style={{ color: selectedProject.statusColor || '#00ff66' }}
              >
                <span 
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ 
                    backgroundColor: selectedProject.statusColor || '#00ff66',
                    boxShadow: `0 0 6px ${selectedProject.statusColor || '#00ff66'}` 
                  }} 
                />
                <span>{selectedProject.status || 'DEPLOYED'}</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 font-bold uppercase tracking-wider text-[8px]">
                {selectedProject.category || 'PROJECT'}
              </span>
            </div>

            {/* Large Cinematic Project Preview (55-60% area) */}
            <div className="w-full relative rounded-lg overflow-hidden min-h-[175px] xs:min-h-[200px] sm:min-h-[230px] flex flex-col justify-center border border-cyan-500/20 bg-black/60">
              <ProjectVisual project={selectedProject} />
              <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />
            </div>

            {/* Project Details Section */}
            <div className="flex flex-col gap-1.5 text-left pt-0.5">
              
              {/* Title + Category */}
              <div>
                <h3 className="font-orbitron font-black text-base xs:text-lg text-white tracking-wider uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.35)] leading-tight">
                  {selectedProject.displayName || selectedProject.title}
                </h3>
                <div 
                  className="font-mono text-[9px] font-bold tracking-widest uppercase transition-colors"
                  style={{ color: selectedProject.statusColor || '#ff007f' }}
                >
                  {selectedProject.tagline || selectedProject.category || 'AI / FULL-STACK'}
                </div>
              </div>

              {/* Short Description (2-3 lines) */}
              <p className="font-mono text-[9.5px] xs:text-[10px] text-slate-300 leading-snug line-clamp-3">
                {selectedProject.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1 py-0.5">
                {selectedProject.techStack?.map((tech, i) => (
                  <span
                    key={i}
                    className="font-mono text-[8px] px-1.5 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons: Primary LIVE DEMO + Secondary GITHUB */}
              <div className="flex flex-col gap-1.5 pt-1.5 border-t border-cyan-500/15">
                {/* Primary LIVE DEMO button (Dominant Neon Glow) */}
                {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    onMouseEnter={playHoverSound}
                    className="w-full py-2 px-3 rounded-lg font-orbitron font-bold text-xs tracking-wider text-white bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 border border-pink-400 hover:brightness-110 shadow-[0_0_15px_rgba(255,0,127,0.5)] flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    <span>↗ LIVE DEMO</span>
                  </a>
                )}

                {/* Secondary VIEW GITHUB button */}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    onMouseEnter={playHoverSound}
                    className="w-full py-1.5 px-3 rounded-lg font-orbitron font-bold text-[10.5px] tracking-wider text-cyan-300 bg-black/60 hover:bg-cyan-950/40 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.15)] flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>VIEW GITHUB</span>
                    {currentRepoStat?.stars > 0 && (
                      <span className="ml-auto text-[8px] font-mono bg-cyan-950 px-1.5 py-0.2 rounded border border-cyan-500/30 flex items-center gap-0.5">
                        <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                        {currentRepoStat.stars}
                      </span>
                    )}
                  </a>
                )}
              </div>

            </div>
          </div>

          {/* Carousel Indicator Dots: ● ○ ○ ○ ○ ○ with Active Project Neon Accent */}
          <div className="flex items-center justify-center gap-2 pt-1">
            {projects.map((proj, idx) => {
              const isActive = idx === selectedIndex;
              const activeColor = selectedProject.statusColor || '#00f0ff';
              return (
                <button
                  key={proj.id || idx}
                  onClick={() => {
                    playClickSound();
                    setSelectedIndex(idx);
                  }}
                  onMouseEnter={playHoverSound}
                  style={{
                    backgroundColor: isActive ? activeColor : 'transparent',
                    borderColor: isActive ? activeColor : 'rgba(0, 240, 255, 0.4)',
                    boxShadow: isActive ? `0 0 10px ${activeColor}` : 'none',
                  }}
                  className={`h-2 rounded-full border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'w-5'
                      : 'w-2 bg-transparent hover:border-cyan-300'
                  }`}
                  title={`Project ${idx + 1}: ${proj.displayName || proj.title}`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* DESKTOP LAYOUT (lg:flex): EXACT 3-COLUMN ARCHIVE PRESERVED */}
      {/* ======================================================== */}
      <div className="hidden lg:flex flex-row items-center justify-between w-full gap-5 xl:gap-6">
        
        {/* ======================================================== */}
        {/* COLUMN 1: LEFT SIDEBAR - ARCHIVE HEADER & SELECTOR       */}
        {/* ======================================================== */}
        <div className="w-[245px] xl:w-[265px] shrink-0 flex flex-col justify-center space-y-2">
          
          {/* Header Section */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-cyan-400 mb-0.5">
              <span className="text-pink-500 font-bold">//</span>
              <span>PROJECT ARCHIVE</span>
            </div>

            <h2 className="font-orbitron font-black text-xl xl:text-2xl tracking-tight leading-none mb-1">
              <span className="text-white block">IDEAS</span>
              <span className="text-cyan-400 block drop-shadow-[0_0_8px_rgba(0,240,255,0.7)]">DEPLOYED</span>
              <span className="text-[#ff007f] block drop-shadow-[0_0_12px_rgba(255,0,127,0.8)]">INTO REALITY.</span>
            </h2>

            <p className="font-mono text-[10px] text-slate-400 leading-snug max-w-sm mb-1">
              A collection of projects that solve problems, explore ideas, and push me forward.
            </p>
          </div>

          {/* Project Cards Vertical Stack */}
          <div className="flex flex-col gap-1.5 max-h-[265px] overflow-y-auto pr-1">
            {projects.map((proj, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={proj.id || idx}
                  onClick={() => {
                    playClickSound();
                    setSelectedIndex(idx);
                  }}
                  onMouseEnter={playHoverSound}
                  className={`group relative flex items-center gap-2 p-1.5 rounded-lg cursor-pointer transition-all duration-200 border ${
                    isSelected
                      ? 'bg-gradient-to-r from-pink-950/50 via-[#0a1120] to-cyan-950/30 border-pink-500 shadow-[0_0_12px_rgba(255,0,127,0.4)]'
                      : 'bg-black/40 hover:bg-cyan-950/20 border-cyan-500/20 hover:border-cyan-400/50'
                  }`}
                >
                  {/* Left Number Tag */}
                  <span className={`font-mono text-[10px] font-bold transition-colors ${
                    isSelected ? 'text-pink-400 drop-shadow-[0_0_6px_#ff007f]' : 'text-slate-500 group-hover:text-cyan-400'
                  }`}>
                    {proj.number || `0${idx + 1}`}
                  </span>

                  {/* Mini Project Thumbnail Frame */}
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded shrink-0 overflow-hidden border relative flex items-center justify-center bg-black/70 ${
                    isSelected ? 'border-pink-400 shadow-[0_0_8px_rgba(255,0,127,0.5)]' : 'border-cyan-500/30'
                  }`}>
                    {proj.id === 'kisansetu' && (
                      <div className="w-full h-full bg-gradient-to-br from-emerald-900/60 to-cyan-950/80 flex items-center justify-center text-emerald-400">
                        <Sprout className="w-4 h-4" />
                      </div>
                    )}
                    {proj.id === 'trackyour' && (
                      <div className="w-full h-full bg-gradient-to-br from-cyan-900/60 to-blue-950/80 flex items-center justify-center text-cyan-400">
                        <Cpu className="w-4 h-4" />
                      </div>
                    )}
                    {proj.id === 'splitzy' && (
                      <div className="w-full h-full bg-gradient-to-br from-yellow-900/60 to-orange-950/80 flex items-center justify-center text-yellow-400">
                        <Layers className="w-4 h-4" />
                      </div>
                    )}
                    {proj.id === 'punkfolio' && (
                      <div className="w-full h-full bg-gradient-to-br from-pink-900/60 to-purple-950/80 flex items-center justify-center text-pink-400">
                        <Code2 className="w-4 h-4" />
                      </div>
                    )}
                    {proj.id === 'cyberguard' && (
                      <div className="w-full h-full bg-gradient-to-br from-purple-900/60 to-black flex items-center justify-center text-purple-400">
                        <Radio className="w-4 h-4" />
                      </div>
                    )}

                    {/* Scanlines overlay on thumbnail */}
                    <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
                  </div>

                  {/* Title & Tagline */}
                  <div className="flex-1 min-w-0">
                    <div className={`font-orbitron text-[11px] font-bold truncate uppercase tracking-wider transition-colors ${
                      isSelected ? 'text-pink-400 drop-shadow-[0_0_6px_rgba(255,0,127,0.7)]' : 'text-slate-200 group-hover:text-cyan-300'
                    }`}>
                      {proj.displayName || proj.title}
                    </div>
                    <div className="font-mono text-[8px] text-slate-400 truncate tracking-tight">
                      {proj.tagline}
                    </div>
                  </div>

                  {/* Active Indicator Chevron / Light */}
                  {isSelected && (
                    <div className="w-1.5 h-4 bg-pink-500 rounded-full shadow-[0_0_8px_#ff007f] animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Left Cyber Terminal Box */}
          <div className="flex items-center gap-2 bg-black/60 border border-cyan-500/20 p-1.5 rounded-lg backdrop-blur-md font-mono text-[8px]">
            <div className="w-6 h-6 rounded bg-cyan-950/50 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
              <Terminal className="w-3 h-3 animate-pulse" />
            </div>
            <div className="leading-tight text-slate-400">
              <span className="text-pink-400 font-bold">BUILD</span> • <span className="text-cyan-300 font-bold">LEARN</span> • <span className="text-emerald-400 font-bold">IMPROVE</span>
              <div className="text-[7px] text-slate-500 mt-0.5">&gt; GOOD IDEAS BETTER CODE</div>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* COLUMN 2: CENTER HOLOGRAPHIC SCREEN & PEDESTAL           */}
        {/* ======================================================== */}
        <div className="flex-1 max-w-[700px] xl:max-w-[820px] flex flex-col items-center justify-center min-w-0">
          
          {/* Main Holographic Terminal Window */}
          <div className="relative w-full rounded-xl bg-black/60 border border-cyan-500/40 backdrop-blur-md p-3 sm:p-4 shadow-[0_0_30px_rgba(0,240,255,0.15)] flex flex-col gap-3 group">
            
            {/* Cyber Corner Brackets */}
            <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400 rounded-tl-sm pointer-events-none" />
            <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400 rounded-tr-sm pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400 rounded-bl-sm pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400 rounded-br-sm pointer-events-none" />

            {/* Top Hologram Window Header */}
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                  {selectedProject.id === 'kisansetu' ? (
                    <Sprout className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  )}
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-base sm:text-lg text-white tracking-wider flex items-center gap-2">
                    {selectedProject.displayName || selectedProject.title}
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 font-normal">
                      {selectedProject.category || 'PROJECT'}
                    </span>
                  </h3>
                  <p className="text-[10px] sm:text-xs font-mono text-slate-400 tracking-tight">
                    {selectedProject.hologramSubtext || selectedProject.tagline}
                  </p>
                </div>
              </div>

              {/* Holographic Controls: ENLARGE Button & Signal */}
              <div className="flex items-center gap-2 font-mono text-[10px] text-cyan-400">
                <button
                  onClick={() => {
                    playClickSound();
                    setIsModalOpen(true);
                  }}
                  onMouseEnter={playHoverSound}
                  className="flex items-center gap-1.5 bg-cyan-950/80 hover:bg-cyan-400 hover:text-black text-cyan-300 px-2 sm:px-2.5 py-1 rounded border border-cyan-400/50 shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all font-bold tracking-wider cursor-pointer"
                  title="Expand Hologram View"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="text-[9px] sm:text-[10px]">ENLARGE HUD</span>
                </button>

                <div className="flex items-center gap-1 bg-cyan-950/40 px-2 py-1 rounded border border-cyan-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[9px]">LIVE</span>
                </div>
              </div>
            </div>

            {/* Screen Content: Full-Width Main Showcase Visual */}
            <div className="w-full relative rounded-lg overflow-hidden min-h-[280px] sm:min-h-[310px] md:min-h-[330px] flex flex-col justify-center">
              <ProjectVisual project={selectedProject} />
            </div>

          </div>

          {/* Hologram Projector Pedestal Base */}
          <div className="relative mt-2 sm:mt-3 flex flex-col items-center justify-center w-full max-w-sm pointer-events-none">
            {/* Glowing Projection Rays */}
            <div className="w-3/4 h-3 bg-gradient-to-t from-cyan-500/20 via-pink-500/10 to-transparent blur-sm -mb-1" />
            
            {/* Circular Hologram Base Ring */}
            <div className="relative w-full py-1.5 px-4 rounded-full bg-[#070e1a]/90 border border-cyan-400/50 shadow-[0_0_20px_rgba(0,240,255,0.4),inset_0_0_10px_rgba(255,0,127,0.3)] flex items-center justify-between text-[11px] font-mono">
              <div className="flex items-center gap-1.5 text-pink-400">
                <span className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_6px_#ff007f] animate-ping" />
                <span className="font-bold text-xs tracking-wider">
                  PROJECT {selectedProject.number || `0${selectedIndex + 1}`} / {projects.length < 10 ? `0${projects.length}` : projects.length}
                </span>
              </div>

              {/* Pedestal Lights */}
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_4px_#00f0ff]" />
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_4px_#ff007f]" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_4px_#00ff66]" />
              </div>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* COLUMN 3: RIGHT SIDEBAR - PROJECT SPECS & QUOTE          */}
        {/* ======================================================== */}
        <div className="w-[310px] xl:w-[340px] shrink-0 flex flex-col justify-center space-y-2">
          
          {/* Project Details HUD Panel */}
          <div className="bg-black/60 border border-cyan-500/30 rounded-xl p-3 xl:p-3.5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] relative">
            
            {/* Top Specs Header */}
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-1.5 mb-1.5">
              <div className="font-mono text-[11px] font-bold text-cyan-400 flex items-center gap-1">
                <span>//</span>
                <span>{selectedProject.number || `0${selectedIndex + 1}`}</span>
              </div>

              {/* Status Badge */}
              <div 
                className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: `${selectedProject.statusColor || '#00ff66'}15`,
                  color: selectedProject.statusColor || '#00ff66',
                  border: `1px solid ${selectedProject.statusColor || '#00ff66'}40`
                }}
              >
                <span 
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: selectedProject.statusColor || '#00ff66' }}
                />
                <span>{selectedProject.status || 'DEPLOYED'}</span>
              </div>
            </div>

            {/* Project Title */}
            <h3 className="font-orbitron font-black text-lg sm:text-xl text-white tracking-wider uppercase mb-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
              {selectedProject.displayName || selectedProject.title}
            </h3>

            {/* Project Description */}
            <p className="font-mono text-[10px] sm:text-[11px] text-slate-300 leading-snug mb-2 line-clamp-3">
              {selectedProject.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="mb-2">
              <div className="text-[9px] font-mono text-cyan-400/80 mb-1 tracking-wider uppercase">
                // ARCHITECTURE & STACK
              </div>
              <div className="flex flex-wrap gap-1">
                {selectedProject.techStack?.map((tech, i) => (
                  <span
                    key={i}
                    onMouseEnter={playHoverSound}
                    className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-cyan-950/50 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Feature Highlights */}
            <div className="space-y-1 mb-2.5">
              <div className="text-[9px] font-mono text-pink-400/80 mb-0.5 tracking-wider uppercase">
                // CORE CAPABILITIES
              </div>
              {selectedProject.highlights?.map((highlight, i) => (
                <div key={i} className="flex items-start gap-1.5 font-mono text-[10px] text-slate-300">
                  <span className="text-cyan-400 font-bold mt-0.5">◈</span>
                  <span className="leading-tight">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons: Live Demo & GitHub */}
            <div className="flex flex-col gap-1.5 mb-2">
              {/* Live Demo Button (Glowing Neon Pink) */}
              {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClickSound}
                  onMouseEnter={playHoverSound}
                  className="w-full py-1.5 px-2.5 rounded-lg font-orbitron font-bold text-[11px] tracking-wider text-white bg-gradient-to-r from-pink-600 to-pink-500 border border-pink-400 hover:from-pink-500 hover:to-pink-400 shadow-[0_0_15px_rgba(255,0,127,0.5)] flex items-center justify-center gap-1.5 transition-all transform hover:scale-[1.01] active:scale-[0.98]"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>LIVE DEMO</span>
                </a>
              )}

              {/* View GitHub Button (Cyan/Dark Bordered) */}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClickSound}
                  onMouseEnter={playHoverSound}
                  className="w-full py-1.5 px-2.5 rounded-lg font-orbitron font-bold text-[11px] tracking-wider text-cyan-300 bg-black/60 hover:bg-cyan-950/40 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.2)] flex items-center justify-center gap-1.5 transition-all transform hover:scale-[1.01] active:scale-[0.98]"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  <span>VIEW GITHUB</span>
                  {currentRepoStat?.stars > 0 && (
                    <span className="ml-auto text-[9px] font-mono bg-cyan-950 px-1 py-0.2 rounded border border-cyan-500/30 flex items-center gap-0.5">
                      <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                      {currentRepoStat.stars}
                    </span>
                  )}
                </a>
              )}
            </div>

            {/* Metadata Grid (Role, Duration, Status) */}
            <div className="grid grid-cols-2 gap-1.5 pt-1.5 border-t border-cyan-500/20 font-mono text-[9px]">
              <div>
                <div className="text-slate-500 uppercase tracking-wider">ROLE</div>
                <div className="text-cyan-300 font-semibold truncate">{selectedProject.role || 'Full Stack'}</div>
              </div>
              <div>
                <div className="text-slate-500 uppercase tracking-wider">DURATION</div>
                <div className="text-slate-300 truncate">{selectedProject.duration || '2026'}</div>
              </div>
            </div>

          </div>

          {/* Bottom Right Tathagat Quote Card */}
          <div className="bg-black/60 border border-cyan-500/20 rounded-xl p-2 sm:p-2.5 backdrop-blur-md font-mono relative">
            <p className="text-[10px] text-slate-300 italic leading-snug mb-0.5">
              "TECHNOLOGY MEANS NOTHING IF IT DOESN'T MAKE A LIFE BETTER."
            </p>
            <div className="text-[9px] text-pink-400 font-bold tracking-widest text-right">
              - TATHAGAT ARYAN
            </div>

            {/* Sub-tags */}
            <div className="flex items-center justify-between text-[7px] text-slate-500 tracking-wider pt-1 mt-1 border-t border-white/5 uppercase">
              <span>PROJECTS</span>
              <span>•</span>
              <span>PEOPLE</span>
              <span>•</span>
              <span>PROGRESS</span>
              <span>•</span>
              <span className="text-cyan-400">TOMORROW</span>
            </div>
          </div>

        </div>

      </div>

      {/* ======================================================== */}
      {/* ENLARGED HOLOGRAPHIC FULLSCREEN POPUP MODAL              */}
      {/* ======================================================== */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-[fadeIn_0.2s_ease-out]"
          onClick={() => {
            playClickSound();
            setIsModalOpen(false);
          }}
        >
          <div 
            className="relative w-full max-w-5xl h-[88vh] max-h-[88vh] bg-[#070e1a]/95 border-2 border-cyan-400 shadow-[0_0_50px_rgba(0,240,255,0.4),inset_0_0_30px_rgba(0,240,255,0.1)] rounded-2xl p-4 sm:p-6 flex flex-col justify-between gap-3 overflow-hidden select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cyber Corner Brackets */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-cyan-400 rounded-tl pointer-events-none" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-cyan-400 rounded-tr pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-cyan-400 rounded-bl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-cyan-400 rounded-br pointer-events-none" />
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-cyan-950 border border-cyan-400 flex items-center justify-center text-cyan-300">
                  {selectedProject.id === 'kisansetu' ? (
                    <Sprout className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                  )}
                </div>
                <div>
                  <h2 className="font-orbitron font-black text-xl sm:text-2xl text-white tracking-wider flex items-center gap-2.5">
                    {selectedProject.displayName || selectedProject.title}
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-400/50">
                      {selectedProject.category || 'PROJECT'}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                      {selectedProject.status || 'DEPLOYED'}
                    </span>
                  </h2>
                  <p className="text-xs sm:text-sm font-mono text-slate-300">
                    {selectedProject.hologramSubtext || selectedProject.tagline}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => {
                  playClickSound();
                  setIsModalOpen(false);
                }}
                onMouseEnter={playHoverSound}
                className="flex items-center gap-2 px-3.5 py-1.5 bg-pink-950/60 hover:bg-pink-500 hover:text-black text-pink-300 border border-pink-500/60 rounded-lg font-mono text-xs font-bold tracking-widest shadow-[0_0_15px_rgba(255,0,127,0.4)] transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">CLOSE (ESC)</span>
              </button>
            </div>

            {/* Modal Expanded Content: High-Res Full-Width Project Visual */}
            <div className="flex-1 min-h-0 relative rounded-xl overflow-hidden h-full flex flex-col justify-center">
              <ProjectVisual project={selectedProject} />
            </div>

            {/* Modal Footer Controls */}
            <div className="border-t border-cyan-500/20 pt-2.5 flex items-center justify-between font-mono text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 font-bold">// TECH:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack?.map((t, idx) => (
                    <span key={idx} className="bg-cyan-950/60 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30 text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    onMouseEnter={playHoverSound}
                    className="px-3.5 py-1.5 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-orbitron font-bold text-xs rounded shadow-[0_0_12px_rgba(255,0,127,0.6)] hover:from-pink-500 hover:to-pink-400 transition-all flex items-center gap-1.5"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    <span>LIVE DEMO</span>
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    onMouseEnter={playHoverSound}
                    className="px-3.5 py-1.5 bg-black/70 text-cyan-300 border border-cyan-400 font-orbitron font-bold text-xs rounded hover:bg-cyan-950 transition-all flex items-center gap-1.5"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>GITHUB</span>
                  </a>
                )}
              </div>
            </div>

            <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />
          </div>
        </div>
      )}

    </div>
  );
};

export default Projects;

