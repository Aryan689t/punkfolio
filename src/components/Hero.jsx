import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, GraduationCap, Code2 } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/audio';

const Hero = ({ onNavigate }) => {
  const [lcStats, setLcStats] = useState({
    totalSolved: 88,
    easySolved: 45,
    mediumSolved: 40,
    hardSolved: 3,
    ranking: 1844130,
    loading: true,
    live: false
  });

  useEffect(() => {
    let isMounted = true;
    const fetchLeetCode = async () => {
      try {
        const res = await fetch('https://alfa-leetcode-api.onrender.com/userProfile/Ary230');
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data && typeof data.totalSolved === 'number') {
            setLcStats({
              totalSolved: data.totalSolved,
              easySolved: data.easySolved ?? 45,
              mediumSolved: data.mediumSolved ?? 40,
              hardSolved: data.hardSolved ?? 3,
              ranking: data.ranking ?? 1844130,
              loading: false,
              live: true
            });
          }
        } else {
          if (isMounted) setLcStats(prev => ({ ...prev, loading: false }));
        }
      } catch (err) {
        console.warn('LeetCode API sync fallback:', err);
        if (isMounted) setLcStats(prev => ({ ...prev, loading: false }));
      }
    };

    fetchLeetCode();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="relative z-20 w-full max-w-7xl mx-auto px-4 py-2 flex flex-col items-center justify-center select-none">
      
      {/* Desktop Flanking Layout: [ Left CGPA Card ] --- [ Center Hero Name ] --- [ Right LeetCode Card ] */}
      <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-10 2xl:gap-14">
        
        {/* ========================================================================= */}
        {/* LEFT CARD: CGPA GLASSMORPHIC CARD */}
        {/* ========================================================================= */}
        <div 
          className="w-full max-w-[280px] xl:w-[240px] 2xl:w-[260px] p-4 bg-[#0a0f1d]/50 hover:bg-[#0a0f1d]/65 backdrop-blur-md rounded-2xl border border-cyan-500/35 hover:border-cyan-400/80 shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_0_15px_rgba(0,240,255,0.08)] hover:shadow-[0_8px_32px_0_rgba(0,240,255,0.3),inset_0_0_20px_rgba(0,240,255,0.18)] transition-all duration-300 group relative flex flex-col justify-between overflow-hidden"
          onMouseEnter={playHoverSound}
        >
          {/* Top Glass Specular Highlight */}
          <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none" />
          
          <div>
            {/* Header Protocol */}
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 mb-3">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400 drop-shadow-[0_0_6px_#00f0ff]" />
                <span className="font-mono text-[9px] text-cyan-400 font-bold tracking-widest uppercase">
                  // ACADEMICS //
                </span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            </div>

            {/* Score Display */}
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="font-orbitron font-black text-4xl 2xl:text-5xl text-white tracking-tight drop-shadow-[0_0_12px_rgba(0,240,255,0.85)]">
                9.07
              </span>
              <span className="font-mono text-xs text-cyan-400/80 font-bold">
                / 10.0
              </span>
            </div>

            <div className="font-mono text-[10px] text-slate-300 font-semibold uppercase tracking-wider mb-2">
              CURRENT CGPA
            </div>
          </div>

          {/* Academic Highlights Badges */}
          <div className="pt-3 mt-2 border-t border-cyan-500/20 flex items-center justify-between font-mono text-[8.5px]">
            <span className="px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-300">
              DISTINCTION
            </span>
            <span className="text-slate-400">
              COMPUTER SCIENCE
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CENTER COLUMN: MAIN HERO NAME, TAGLINE & CTA BUTTONS */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl flex-shrink-0">
          
          {/* Main Dual-Tone Glowing Name */}
          <h1 className="font-orbitron font-black text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] 2xl:text-[5.25rem] tracking-tight leading-none mb-2 sm:mb-3 flex flex-col items-center">
            {/* TATHAGAT */}
            <span 
              className="text-white tracking-wider transition-all duration-300 hover:scale-[1.01] cursor-default"
              style={{
                textShadow: '0 0 5px #00f0ff, 0 0 15px #00f0ff, 0 0 35px #00f0ff, 0 0 50px rgba(0, 240, 255, 0.5)'
              }}
              onMouseEnter={playHoverSound}
            >
              TATHAGAT
            </span>

            {/* ARYAN */}
            <span 
              className="text-[#ff007f] tracking-wider -mt-1 sm:-mt-2 transition-all duration-300 hover:scale-[1.01] cursor-default"
              style={{
                textShadow: '0 0 5px #ff007f, 0 0 15px #ff007f, 0 0 35px #ff007f, 0 0 50px rgba(255, 0, 127, 0.5)'
              }}
              onMouseEnter={playHoverSound}
            >
              ARYAN
            </span>
          </h1>

          {/* Tagline Quote */}
          <p 
            className="font-mono text-[10px] sm:text-xs text-slate-300 tracking-widest max-w-lg mb-4 sm:mb-5 leading-relaxed uppercase bg-black/50 px-4 py-1.5 rounded border border-white/10 backdrop-blur-md"
            onMouseEnter={playHoverSound}
          >
            <span className="text-pink-400 font-bold">"</span>
            BUILDING A BETTER TOMORROW, ONE COMMIT AT A TIME.
            <span className="text-pink-400 font-bold">"</span>
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            
            {/* VIEW PROJECTS */}
            <button
              onClick={() => {
                playClickSound();
                if (onNavigate) onNavigate('projects');
              }}
              onMouseEnter={playHoverSound}
              className="relative group px-5 sm:px-6 py-2.5 bg-pink-950/25 text-pink-400 font-orbitron font-bold text-[11px] sm:text-xs tracking-widest border border-pink-500 rounded transition-all duration-300 hover:bg-pink-500 hover:text-black hover:shadow-[0_0_25px_rgba(255,0,127,0.8)] overflow-hidden cursor-pointer"
              style={{
                boxShadow: '0 0 12px rgba(255, 0, 127, 0.3), inset 0 0 8px rgba(255, 0, 127, 0.15)'
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-1.5">
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>

            {/* EXPLORE SKILLS */}
            <button
              onClick={() => {
                playClickSound();
                if (onNavigate) onNavigate('skills');
              }}
              onMouseEnter={playHoverSound}
              className="relative group px-5 sm:px-6 py-2.5 bg-cyan-950/25 text-cyan-300 font-orbitron font-bold text-[11px] sm:text-xs tracking-widest border border-cyan-500/40 rounded transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-1.5">
                <span>EXPLORE ARSENAL</span>
              </span>
            </button>

            {/* GET IN TOUCH */}
            <button
              onClick={() => {
                playClickSound();
                if (onNavigate) onNavigate('contact');
              }}
              onMouseEnter={playHoverSound}
              className="relative group px-5 sm:px-6 py-2.5 bg-slate-900/70 text-slate-300 font-orbitron font-bold text-[11px] sm:text-xs tracking-widest border border-white/20 rounded backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:bg-cyan-950/40 cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-1.5">
                <span>GET IN TOUCH</span>
              </span>
            </button>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* RIGHT CARD: LEETCODE REAL STATS GLASSMORPHIC CARD */}
        {/* ========================================================================= */}
        <a 
          href="https://leetcode.com/u/Ary230" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full max-w-[280px] xl:w-[240px] 2xl:w-[260px] p-4 bg-[#0a0f1d]/50 hover:bg-[#0a0f1d]/65 backdrop-blur-md rounded-2xl border border-amber-500/35 hover:border-amber-400/80 shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_0_15px_rgba(245,158,11,0.08)] hover:shadow-[0_8px_32px_0_rgba(245,158,11,0.3),inset_0_0_20px_rgba(245,158,11,0.18)] hover:scale-[1.02] transition-all duration-300 group relative flex flex-col justify-between overflow-hidden cursor-pointer"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
        >
          {/* Top Glass Specular Highlight */}
          <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent pointer-events-none" />

          <div>
            {/* Header Protocol */}
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-2 mb-3">
              <div className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-amber-400 drop-shadow-[0_0_6px_#f59e0b]" />
                <span className="font-mono text-[9px] text-amber-400 font-bold tracking-widest uppercase">
                  // LEETCODE //
                </span>
              </div>
              <div className="flex items-center gap-1 font-mono text-[8px] text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{lcStats.live ? 'LIVE' : 'SYNCED'}</span>
              </div>
            </div>

            {/* Solved Metric */}
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="font-orbitron font-black text-4xl 2xl:text-5xl text-amber-400 tracking-tight drop-shadow-[0_0_12px_rgba(245,158,11,0.85)]">
                {lcStats.totalSolved}
              </span>
              <span className="font-mono text-xs text-amber-300/80 font-bold">
                SOLVED
              </span>
            </div>

            <div className="font-mono text-[10px] text-slate-300 font-semibold tracking-wider mb-3">
              @Ary230
            </div>

            {/* Difficulty Breakdown Grid */}
            <div className="grid grid-cols-3 gap-1.5 mb-2">
              <div className="flex flex-col items-center py-1 px-1 bg-emerald-950/40 border border-emerald-500/30 rounded">
                <span className="font-mono text-[8px] text-emerald-400">EASY</span>
                <span className="font-orbitron font-bold text-xs text-emerald-300">{lcStats.easySolved}</span>
              </div>
              <div className="flex flex-col items-center py-1 px-1 bg-amber-950/40 border border-amber-500/30 rounded">
                <span className="font-mono text-[8px] text-amber-400">MED</span>
                <span className="font-orbitron font-bold text-xs text-amber-300">{lcStats.mediumSolved}</span>
              </div>
              <div className="flex flex-col items-center py-1 px-1 bg-rose-950/40 border border-rose-500/30 rounded">
                <span className="font-mono text-[8px] text-rose-400">HARD</span>
                <span className="font-orbitron font-bold text-xs text-rose-300">{lcStats.hardSolved}</span>
              </div>
            </div>
          </div>

          {/* Profile CTA Bottom Strip */}
          <div className="pt-2 border-t border-amber-500/20 flex items-center justify-between font-mono text-[8.5px] text-amber-300 group-hover:text-white transition-colors">
            <span>VIEW PROFILE</span>
            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </a>

      </div>

    </div>
  );
};

export default Hero;

