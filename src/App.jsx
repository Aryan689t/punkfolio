import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import HudStatus from './components/HudStatus';
import CyberCanvas from './components/CyberCanvas';
import { playClickSound } from './utils/audio';

const TABS = ['home', 'skills', 'projects', 'contact'];

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Horizontal swipe detection with sensitivity threshold
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      const currentIndex = TABS.indexOf(activeTab);
      if (deltaX < 0) {
        // Swiped Left -> Move to Next Page
        if (currentIndex < TABS.length - 1) {
          playClickSound();
          setActiveTab(TABS[currentIndex + 1]);
        }
      } else {
        // Swiped Right -> Move to Previous Page
        if (currentIndex > 0) {
          playClickSound();
          setActiveTab(TABS[currentIndex - 1]);
        }
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div 
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative h-screen max-h-screen w-full text-slate-100 flex flex-col justify-between overflow-hidden select-none font-rajdhani bg-[#05070d]"
    >
      
      {/* Background Cyberpunk Pixel Artwork */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-[1.01] filter brightness-95 contrast-105 saturate-110"
        style={{
          backgroundImage: `url('/cyberpunk-bg.jpg')`,
          imageRendering: 'auto',
        }}
      />

      {/* Subtle Atmospheric Gradient Overlay for UI Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070d]/65 via-transparent to-[#05070d]/75 z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/25 via-transparent to-[#05070d]/40 z-[1] pointer-events-none" />
      {/* Mobile Subtle Background Contrast Softener */}
      <div className="absolute inset-0 bg-black/20 md:bg-transparent z-[1] pointer-events-none" />

      {/* Futuristic Scanlines */}
      <div className="absolute inset-0 scanlines opacity-20 pointer-events-none z-[2]" />

      {/* Interactive 60fps Cyber Canvas (Rain & Flying Hovercrafts) */}
      <CyberCanvas />

      {/* Top Navbar */}
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Main Center Content (Dynamic SPA Switch) */}
      <main className="flex-1 flex items-center justify-center relative z-20 my-auto py-1 sm:py-2 md:py-0 w-full overflow-y-auto md:overflow-hidden touch-pan-y">
        {activeTab === 'home' && (
          <div className="w-full flex items-center justify-center animate-[fadeIn_0.3s_ease-out]">
            <Hero onNavigate={setActiveTab} />
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="w-full flex items-center justify-center animate-[fadeIn_0.3s_ease-out]">
            <Skills onNavigateBack={() => setActiveTab('home')} />
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="w-full flex items-center justify-center animate-[fadeIn_0.3s_ease-out]">
            <Projects />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="w-full flex items-center justify-center animate-[fadeIn_0.3s_ease-out]">
            <Contact />
          </div>
        )}

        {/* Fallback for other tabs while under construction */}
        {activeTab !== 'home' && activeTab !== 'skills' && activeTab !== 'projects' && activeTab !== 'contact' && (
          <div className="text-center font-mono text-cyan-400 bg-black/60 p-6 rounded-lg border border-cyan-500/30 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]">
            <div className="text-pink-500 text-xs tracking-widest mb-1">// SYSTEM PROTOCOL //</div>
            <h3 className="font-orbitron text-xl sm:text-2xl font-bold mb-2 uppercase">
              {activeTab} UNDER CONSTRUCTION
            </h3>
            <p className="text-slate-400 text-xs mb-4">Neural link syncing data packets...</p>
            <button
              onClick={() => setActiveTab('home')}
              className="px-4 py-1.5 bg-cyan-950/40 border border-cyan-400 text-cyan-300 text-xs rounded hover:bg-cyan-500 hover:text-black font-bold tracking-wider transition-all"
            >
              ← RETURN TO MAINFRAME
            </button>
          </div>
        )}
      </main>

      {/* Bottom HUD Telemetry & Motto */}
      <HudStatus />

    </div>
  );
}

export default App;


