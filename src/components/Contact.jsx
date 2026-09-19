import React, { useState } from 'react';
import { contactLinks } from '../data/contactData';
import { playHoverSound, playClickSound } from '../utils/audio';

// Custom SVG Icons matching exact visual aesthetics
const NodeIcon = ({ type, color = 'currentColor', className = 'w-6 h-6' }) => {
  switch (type) {
    case 'mail':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case 'leetcode':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.78 3.528 6.002 6.002 0 0 0 2.222-.224 5.845 5.845 0 0 0 2.152-1.258l5.215-4.887a1.385 1.385 0 0 0 .062-1.95 1.378 1.378 0 0 0-1.95-.062l-5.215 4.887a3.09 3.09 0 0 1-1.144.668 3.23 3.23 0 0 1-1.202.122 3.197 3.197 0 0 1-2.585-1.906 3.14 3.14 0 0 1-.186-.549 3.045 3.045 0 0 1-.034-1.272 2.923 2.923 0 0 1 .668-1.163l3.854-4.126 5.406-5.788a1.378 1.378 0 0 0 0-1.95A1.37 1.37 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth="2.5" />
        </svg>
      );
    case 'file-text':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" x2="8" y1="13" y2="13" />
          <line x1="16" x2="8" y1="17" y2="17" />
          <line x1="10" x2="8" y1="9" y2="9" />
        </svg>
      );
    default:
      return null;
  }
};

const Contact = () => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [copiedToast, setCopiedToast] = useState('');

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedToast(`${label} copied to clipboard!`);
    setTimeout(() => {
      setCopiedToast('');
    }, 2400);
  };

  const handleNodeClick = (node) => {
    playClickSound();
    if (node.isCopyable) {
      handleCopy(node.copyText, node.title);
    } else if (node.url) {
      window.open(node.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col items-center justify-center min-h-[calc(100vh-140px)] select-none">
      
      {/* Toast Notification */}
      {copiedToast && (
        <div className="fixed top-20 z-50 animate-bounce px-4 py-2 bg-pink-950/90 border border-pink-500 text-pink-300 font-mono text-xs rounded-md shadow-[0_0_20px_rgba(255,0,127,0.7)] backdrop-blur-md flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
          <span>{copiedToast}</span>
        </div>
      )}


      {/* Ambient Cyber Crosshairs */}
      <div className="absolute top-1/4 left-12 text-cyan-500/20 font-mono text-sm pointer-events-none hidden xl:block">+</div>
      <div className="absolute bottom-1/4 right-16 text-pink-500/20 font-mono text-sm pointer-events-none hidden xl:block">+</div>
      <div className="absolute top-1/3 right-1/4 text-cyan-500/20 font-mono text-xs pointer-events-none hidden xl:block">+</div>

      {/* ========================================================================= */}
      {/* DESKTOP VIEW CONTAINER (Left Message Box + Mind Map + Right Opportunities) */}
      {/* ========================================================================= */}
      <div className="hidden md:flex items-center justify-center gap-2 xl:gap-5 w-full max-w-[1440px] relative z-20">
        
        {/* Left Cyber Message Box (Desktop xl+) */}
        <div 
          className="hidden xl:flex flex-col justify-between w-[215px] min-h-[260px] flex-shrink-0 p-3.5 bg-[#0a0f1d]/90 backdrop-blur-md rounded-2xl border border-pink-500/40 shadow-[0_0_20px_rgba(255,0,127,0.2),inset_0_0_12px_rgba(255,0,127,0.08)] transition-all duration-300 hover:border-pink-400 hover:shadow-[0_0_25px_rgba(255,0,127,0.4)] group relative"
          style={{
            clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)'
          }}
          onMouseEnter={playHoverSound}
        >
          {/* Inner chamfer border */}
          <div 
            className="absolute inset-[2px] border border-pink-500/20 pointer-events-none rounded-xl"
            style={{
              clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)'
            }}
          />

          <div>
            {/* Header Protocol */}
            <div className="flex items-center justify-between border-b border-pink-500/20 pb-2 mb-2.5">
              <span className="font-mono text-[9px] text-pink-400 font-bold tracking-widest uppercase">
                // TRANSMISSION //
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping" />
            </div>

            {/* Greeting */}
            <h3 className="font-orbitron font-bold text-sm text-white tracking-wider mb-2 drop-shadow-[0_0_6px_rgba(255,0,127,0.7)]">
              HELLO THERE
            </h3>

            {/* Message Body */}
            <p className="font-mono text-[10.5px] text-slate-300 leading-relaxed tracking-tight">
              I'm always interested in building, learning, and meeting people working on interesting things.
            </p>
          </div>

          {/* CTA Action Button */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tathagataryan2006@gmail.com&su=Hello%20Tathagat!%20(From%20Punkfolio)"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="mt-3.5 w-full py-2 px-3 bg-pink-950/40 hover:bg-pink-500 border border-pink-500/50 hover:border-pink-400 text-pink-300 hover:text-black font-orbitron font-bold text-[10px] tracking-wider rounded-lg transition-all duration-300 shadow-[0_0_12px_rgba(255,0,127,0.3)] hover:shadow-[0_0_20px_rgba(255,0,127,0.8)] flex items-center justify-center gap-1.5 text-center cursor-pointer group/btn"
          >
            <span>SEND A MESSAGE</span>
            <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
          </a>
        </div>

        {/* Mind Map Area */}
        <div className="relative w-[1000px] h-[540px] flex items-center justify-center scale-[0.72] lg:scale-[0.80] xl:scale-[0.86] 2xl:scale-[0.95] origin-center flex-shrink-0">
          
          {/* Dynamic SVG Mind Map Connection Lines */}
          <svg className="absolute inset-0 w-[1000px] h-[540px] pointer-events-none z-10" viewBox="0 0 1000 540">
            <defs>
              {/* Neon Glow Filters */}
              <filter id="glow-pink" filterUnits="userSpaceOnUse" x="0" y="0" width="1000" height="540">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-cyan" filterUnits="userSpaceOnUse" x="0" y="0" width="1000" height="540">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-purple" filterUnits="userSpaceOnUse" x="0" y="0" width="1000" height="540">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-amber" filterUnits="userSpaceOnUse" x="0" y="0" width="1000" height="540">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* 1. TOP CONNECTOR (Email) */}
            <g className="transition-opacity duration-300" opacity={hoveredNode === 'email' || !hoveredNode ? 1 : 0.4}>
              <path
                d="M 500 103 L 500 205"
                stroke="#ff007f"
                strokeWidth={hoveredNode === 'email' ? '3' : '2'}
                strokeLinecap="round"
                fill="none"
                filter="url(#glow-pink)"
              />
              <circle cx="500" cy="154" r="3.5" fill="#ff007f" filter="url(#glow-pink)" />
            </g>

            {/* 2. TOP-LEFT CONNECTOR (GitHub) */}
            <g className="transition-opacity duration-300" opacity={hoveredNode === 'github' || !hoveredNode ? 1 : 0.4}>
              <path
                d="M 330 170 L 341 170 L 388 217"
                stroke="#a855f7"
                strokeWidth={hoveredNode === 'github' ? '3' : '2'}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="url(#glow-purple)"
              />
              <circle cx="341" cy="170" r="3.5" fill="#a855f7" filter="url(#glow-purple)" />
            </g>

            {/* 3. TOP-RIGHT CONNECTOR (LinkedIn) */}
            <g className="transition-opacity duration-300" opacity={hoveredNode === 'linkedin' || !hoveredNode ? 1 : 0.4}>
              <path
                d="M 670 170 L 659 170 L 612 217"
                stroke="#00f0ff"
                strokeWidth={hoveredNode === 'linkedin' ? '3' : '2'}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="url(#glow-cyan)"
              />
              <circle cx="659" cy="170" r="3.5" fill="#00f0ff" filter="url(#glow-cyan)" />
            </g>

            {/* 4. BOTTOM-LEFT CONNECTOR (LeetCode) */}
            <g className="transition-opacity duration-300" opacity={hoveredNode === 'leetcode' || !hoveredNode ? 1 : 0.4}>
              <path
                d="M 330 370 L 341 370 L 388 323"
                stroke="#f59e0b"
                strokeWidth={hoveredNode === 'leetcode' ? '3' : '2'}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="url(#glow-amber)"
              />
              <circle cx="341" cy="370" r="3.5" fill="#f59e0b" filter="url(#glow-amber)" />
            </g>

            {/* 5. BOTTOM-RIGHT CONNECTOR (Instagram) */}
            <g className="transition-opacity duration-300" opacity={hoveredNode === 'instagram' || !hoveredNode ? 1 : 0.4}>
              <path
                d="M 670 370 L 659 370 L 612 323"
                stroke="#ff007f"
                strokeWidth={hoveredNode === 'instagram' ? '3' : '2'}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="url(#glow-pink)"
              />
              <circle cx="659" cy="370" r="3.5" fill="#ff007f" filter="url(#glow-pink)" />
            </g>

            {/* 6. BOTTOM CONNECTOR (Resume) */}
            <g className="transition-opacity duration-300" opacity={hoveredNode === 'resume' || !hoveredNode ? 1 : 0.4}>
              <path
                d="M 500 335 L 500 437"
                stroke="#06b6d4"
                strokeWidth={hoveredNode === 'resume' ? '3' : '2'}
                strokeLinecap="round"
                fill="none"
                filter="url(#glow-cyan)"
              />
              <circle cx="500" cy="386" r="3.5" fill="#06b6d4" filter="url(#glow-cyan)" />
            </g>
          </svg>

          {/* ------------------------------------------------------------------------- */}
          {/* CENTER NODE: DIGITAL PRESENCE                                              */}
          {/* ------------------------------------------------------------------------- */}
          <div 
            className="absolute left-[380px] top-[205px] z-20 w-[240px] h-[130px] flex flex-col items-center justify-center px-4 py-3 bg-[#0a0f1d]/90 backdrop-blur-md rounded-2xl border border-pink-500/80 transition-all duration-300 shadow-[0_0_25px_rgba(255,0,127,0.5),inset_0_0_15px_rgba(255,0,127,0.2)] hover:shadow-[0_0_35px_rgba(255,0,127,0.8),inset_0_0_20px_rgba(255,0,127,0.3)] group cursor-default"
            style={{
              clipPath: 'polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)'
            }}
            onMouseEnter={playHoverSound}
          >
            {/* Inner Accent Chamfer Border */}
            <div 
              className="absolute inset-[3px] border border-pink-500/30 pointer-events-none"
              style={{
                clipPath: 'polygon(14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px), 0 14px)'
              }}
            />

            {/* Main Glowing Header */}
            <h2 className="font-orbitron font-black text-xl lg:text-2xl text-pink-500 tracking-wider leading-tight drop-shadow-[0_0_10px_rgba(255,0,127,0.8)] text-center mb-2 group-hover:scale-105 transition-transform duration-300">
              DIGITAL<br />PRESENCE
            </h2>

            {/* Tagline Footnote */}
            <div className="font-mono text-[7px] text-slate-400 tracking-wider uppercase text-center">
              IDEAS • OPPORTUNITIES • COLLABORATION
            </div>
          </div>

          {/* ------------------------------------------------------------------------- */}
          {/* SURROUNDING NODES (Desktop Absolute Positions)                            */}
          {/* ------------------------------------------------------------------------- */}

          {/* 1. TOP NODE: EMAIL */}
          <div 
            className="absolute top-[35px] left-[355px] z-20 w-[290px] h-[68px]"
            onMouseEnter={() => {
              playHoverSound();
              setHoveredNode('email');
            }}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <DesktopNodeCard node={contactLinks.find(n => n.id === 'email')} onClick={handleNodeClick} isHovered={hoveredNode === 'email'} />
          </div>

          {/* 2. TOP-LEFT NODE: GITHUB */}
          <div 
            className="absolute top-[136px] left-[40px] z-20 w-[290px] h-[68px]"
            onMouseEnter={() => {
              playHoverSound();
              setHoveredNode('github');
            }}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <DesktopNodeCard node={contactLinks.find(n => n.id === 'github')} onClick={handleNodeClick} isHovered={hoveredNode === 'github'} />
          </div>

          {/* 3. TOP-RIGHT NODE: LINKEDIN */}
          <div 
            className="absolute top-[136px] right-[40px] z-20 w-[290px] h-[68px]"
            onMouseEnter={() => {
              playHoverSound();
              setHoveredNode('linkedin');
            }}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <DesktopNodeCard node={contactLinks.find(n => n.id === 'linkedin')} onClick={handleNodeClick} isHovered={hoveredNode === 'linkedin'} />
          </div>

          {/* 4. BOTTOM-LEFT NODE: LEETCODE */}
          <div 
            className="absolute top-[336px] left-[40px] z-20 w-[290px] h-[68px]"
            onMouseEnter={() => {
              playHoverSound();
              setHoveredNode('leetcode');
            }}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <DesktopNodeCard node={contactLinks.find(n => n.id === 'leetcode')} onClick={handleNodeClick} isHovered={hoveredNode === 'leetcode'} />
          </div>

          {/* 5. BOTTOM-RIGHT NODE: INSTAGRAM */}
          <div 
            className="absolute top-[336px] right-[40px] z-20 w-[290px] h-[68px]"
            onMouseEnter={() => {
              playHoverSound();
              setHoveredNode('instagram');
            }}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <DesktopNodeCard node={contactLinks.find(n => n.id === 'instagram')} onClick={handleNodeClick} isHovered={hoveredNode === 'instagram'} />
          </div>

          {/* 6. BOTTOM NODE: RESUME */}
          <div 
            className="absolute top-[437px] left-[355px] z-20 w-[290px] h-[68px]"
            onMouseEnter={() => {
              playHoverSound();
              setHoveredNode('resume');
            }}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <DesktopNodeCard node={contactLinks.find(n => n.id === 'resume')} onClick={handleNodeClick} isHovered={hoveredNode === 'resume'} />
          </div>

        </div>

        {/* Right Cyber Opportunities Widget (Desktop xl+) */}
        <div 
          className="hidden xl:flex flex-col gap-2.5 w-[215px] flex-shrink-0 p-3.5 bg-[#0a0f1d]/90 backdrop-blur-md rounded-2xl border border-cyan-500/40 shadow-[0_0_20px_rgba(0,240,255,0.2),inset_0_0_12px_rgba(0,240,255,0.08)] transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] group relative"
          style={{
            clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)'
          }}
          onMouseEnter={playHoverSound}
        >
          {/* Inner chamfer border */}
          <div 
            className="absolute inset-[2px] border border-cyan-500/20 pointer-events-none rounded-xl"
            style={{
              clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)'
            }}
          />

          {/* Live Status Beacon */}
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#10b981]" />
              </span>
              <span className="font-mono text-[9px] font-bold text-emerald-400 tracking-widest uppercase">
                STATUS: AVAILABLE
              </span>
            </div>
            <span className="font-mono text-[8px] text-cyan-400/60">[2026]</span>
          </div>

          {/* Section Heading */}
          <div className="font-orbitron font-bold text-[11px] text-white tracking-wider drop-shadow-[0_0_6px_rgba(0,240,255,0.7)]">
            OPEN TO
          </div>

          {/* Opportunity Badges */}
          <div className="flex flex-col gap-1.5 font-mono text-[10px]">
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 group-hover:border-cyan-400/60 transition-colors">
              <span className="text-pink-400 font-bold text-xs">◆</span>
              <span className="tracking-wider font-semibold">INTERNSHIPS</span>
            </div>

            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-pink-950/40 border border-pink-500/30 text-pink-300 group-hover:border-pink-400/60 transition-colors">
              <span className="text-cyan-400 font-bold text-xs">◆</span>
              <span className="tracking-wider font-semibold">HACKATHONS</span>
            </div>

            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-300 group-hover:border-purple-400/60 transition-colors">
              <span className="text-amber-400 font-bold text-xs">◆</span>
              <span className="tracking-wider font-semibold">COLLABORATIONS</span>
            </div>
          </div>

          {/* Subtext */}
          <p className="font-mono text-[9px] text-slate-400 tracking-tight leading-relaxed pt-1 border-t border-white/5">
            Ready to build high-impact products & innovate together.
          </p>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE RESPONSIVE LAYOUT (Stacked Mind Map for Screens < 768px)          */}
      {/* ========================================================================= */}
      <div className="md:hidden w-full flex flex-col items-center gap-4 py-2 z-20">
        
        {/* Central Hub Mobile */}
        <div 
          className="w-full max-w-sm px-6 py-4 bg-[#0a0f1d]/90 backdrop-blur-md rounded-2xl border border-pink-500/80 shadow-[0_0_20px_rgba(255,0,127,0.5),inset_0_0_12px_rgba(255,0,127,0.2)] text-center relative"
          style={{
            clipPath: 'polygon(14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px), 0 14px)'
          }}
        >
          <h2 className="font-orbitron font-black text-2xl text-pink-500 tracking-wider drop-shadow-[0_0_10px_rgba(255,0,127,0.8)] mb-2">
            DIGITAL PRESENCE
          </h2>
          <div className="font-mono text-[8px] text-slate-400 tracking-widest uppercase">
            IDEAS • OPPORTUNITIES • COLLABORATION
          </div>
        </div>

        {/* Connector Stem */}
        <div className="w-[2px] h-4 bg-gradient-to-b from-pink-500 to-cyan-400 shadow-[0_0_8px_#ff007f]" />

        {/* Mobile Nodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-sm sm:max-w-xl">
          {contactLinks.map((node) => (
            <DesktopNodeCard 
              key={node.id} 
              node={node} 
              onClick={handleNodeClick} 
              isHovered={hoveredNode === node.id}
            />
          ))}
        </div>

        {/* Mobile Opportunities Banner */}
        <div 
          className="w-full max-w-sm sm:max-w-xl p-3 bg-[#0a0f1d]/90 backdrop-blur-md rounded-xl border border-cyan-500/40 flex flex-col gap-2 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
          style={{
            clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)'
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-mono text-[9px] font-bold text-emerald-400 tracking-wider">
                OPEN TO OPPORTUNITIES
              </span>
            </div>
            <span className="font-mono text-[8px] text-slate-400">[2026]</span>
          </div>

          <div className="flex flex-wrap gap-1.5 font-mono text-[9px]">
            <span className="px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-300">
              INTERNSHIPS
            </span>
            <span className="px-2 py-0.5 rounded bg-pink-950/40 border border-pink-500/30 text-pink-300">
              HACKATHONS
            </span>
            <span className="px-2 py-0.5 rounded bg-purple-950/40 border border-purple-500/30 text-purple-300">
              COLLABORATIONS
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

// Reusable Node Card matching streamlined cyber design
const DesktopNodeCard = ({ node, onClick, isHovered }) => {
  return (
    <div
      onClick={() => onClick(node)}
      className={`relative w-full px-4 py-3 bg-[#0a0f1d]/85 backdrop-blur-md rounded-2xl border transition-all duration-300 cursor-pointer group flex items-center gap-3.5 ${
        node.theme.border
      } ${isHovered ? node.theme.hoverGlow + ' scale-[1.03]' : node.theme.glow}`}
      style={{
        clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)'
      }}
    >
      {/* Inner chamfer highlight border */}
      <div 
        className="absolute inset-[2px] border border-white/5 pointer-events-none rounded-xl"
        style={{
          clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)'
        }}
      />

      {/* Node Icon Box with neon container */}
      <div 
        className={`w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl transition-all duration-300 ${node.theme.text}`}
      >
        <NodeIcon type={node.icon} color="currentColor" className="w-7 h-7 drop-shadow-[0_0_6px_currentColor] group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Node Details (Title & Handle) */}
      <div className="flex flex-col min-w-0 flex-1">
        <div className={`font-orbitron font-bold text-xs tracking-wider uppercase ${node.theme.text} ${node.theme.textGlow}`}>
          {node.title}
        </div>
        <div className="font-mono text-[10.5px] leading-tight text-slate-300 group-hover:text-white truncate tracking-tight mt-0.5 transition-colors">
          {node.handle}
        </div>
      </div>
    </div>
  );
};

export default Contact;
