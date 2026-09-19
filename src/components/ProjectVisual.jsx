import React from 'react';
import { ArrowUpRight, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/audio';

/**
 * High-fidelity Cyberpunk Holographic Project Visualizer
 * Focuses on high-res project screenshot with responsive cyber HUD overlays,
 * live telemetry metrics, and interactive launch actions.
 */
const ProjectVisual = ({ project }) => {
  if (!project) return null;

  const screenshotSrc = project.screenshotUrl || `/projects/${project.id}.png`;

  return (
    <div className="relative w-full h-full min-h-[280px] sm:min-h-[310px] md:min-h-[330px] rounded-lg overflow-hidden bg-gradient-to-b from-[#0a1826] via-[#05111d] to-[#02070c] border border-cyan-500/40 shadow-[0_0_25px_rgba(0,240,255,0.2)] group flex flex-col justify-between select-none">
      
      {/* Real Screenshot Layer */}
      <div className="absolute inset-0 overflow-hidden bg-[#050b14] flex items-center justify-center">
        {/* Background Cyber Grid in case image is loading / translucent */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0,240,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,240,255,0.2) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <img
          src={screenshotSrc}
          alt={`${project.displayName || project.title} screenshot`}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] filter brightness-[0.93] contrast-[1.05] group-hover:brightness-100"
          onError={(e) => {
            // Graceful fallback to cyberpunk background if image not found
            e.target.style.display = 'none';
          }}
        />
        
        {/* Subtle Cyber Gradient Vignette Over Screenshot */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-cyan-950/10 mix-blend-color pointer-events-none" />
      </div>

      {/* Top Cyber Browser HUD Header */}
      <div className="relative z-20 flex items-center justify-between p-2 sm:p-2.5 bg-black/75 backdrop-blur-md border-b border-cyan-500/30 font-mono text-[9px] sm:text-[10px]">
        {/* URL & SSL Status */}
        <div className="flex items-center gap-2 text-cyan-300 min-w-0 pr-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#00ff66] animate-pulse shrink-0" />
          <span className="text-emerald-400 font-bold hidden sm:inline">SSL SECURE</span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="truncate text-slate-300 hover:text-cyan-200 transition-colors">
            {project.demoUrl ? project.demoUrl.replace(/^https?:\/\//, '') : `${project.id}.cyber`}
          </span>
        </div>

        {/* Telemetry Tags */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-[8px] sm:text-[9px]">
            HTTP 200 OK
          </span>
          <span className="px-1.5 py-0.5 rounded bg-pink-950/80 border border-pink-500/40 text-pink-300 text-[8px] sm:text-[9px] font-bold">
            60 FPS
          </span>
        </div>
      </div>

      {/* Cyber Center Crosshair Reticle HUD Overlay */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10 opacity-25 group-hover:opacity-40 transition-opacity">
        <svg className="w-24 h-24 sm:w-32 sm:h-32 text-cyan-400" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 2" />
          <line x1="50" y1="10" x2="50" y2="25" stroke="currentColor" strokeWidth="1" />
          <line x1="50" y1="75" x2="50" y2="90" stroke="currentColor" strokeWidth="1" />
          <line x1="10" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="1" />
          <line x1="75" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Hover Action Overlay Button */}
      {project.demoUrl && project.demoUrl !== '#' && (
        <div className="relative z-20 self-center my-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-pink-600/90 hover:bg-pink-500 text-white font-orbitron font-bold text-xs tracking-wider border border-pink-300 shadow-[0_0_20px_rgba(255,0,127,0.8)] backdrop-blur-md transition-all cursor-pointer"
          >
            <span>LAUNCH LIVE APP</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Bottom Cyber Status Telemetry Bar */}
      <div className="relative z-20 flex items-center justify-between p-2 sm:p-2.5 bg-black/80 backdrop-blur-md border-t border-cyan-500/30 font-mono text-[9px]">
        <div className="flex items-center gap-2">
          <span className="text-pink-400 font-bold">// REAL-TIME PREVIEW:</span>
          <span className="text-cyan-300 font-semibold">{project.displayName || project.title}</span>
        </div>

        <div className="flex items-center gap-1.5 text-slate-400">
          <span className="text-emerald-400">● LIVE HOSTED</span>
          <span className="text-slate-600">•</span>
          <span className="text-cyan-400">{project.hudData?.metricValue || 'OPTIMAL'}</span>
        </div>
      </div>

      {/* Scanlines on visual */}
      <div className="absolute inset-0 scanlines opacity-15 pointer-events-none z-10" />
    </div>
  );
};

export default ProjectVisual;
