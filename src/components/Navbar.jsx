import React, { useState, useEffect } from 'react';
import { playHoverSound, playClickSound } from '../utils/audio';

const navItems = [
  { id: 'home', number: '01', label: 'HOME', active: true },
  { id: 'skills', number: '02', label: 'SKILLS' },
  { id: 'projects', number: '03', label: 'PROJECTS' },
  { id: 'contact', number: '04', label: 'CONTACT' },
];

const Navbar = ({ activeTab = 'home', onSelectTab }) => {
  const [internalTab, setInternalTab] = useState(activeTab);
  const [timeStr, setTimeStr] = useState('');
  const [dateStr, setDateStr] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentTab = onSelectTab ? activeTab : internalTab;

  const handleTabChange = (tabId) => {
    if (onSelectTab) {
      onSelectTab(tabId);
    } else {
      setInternalTab(tabId);
    }
  };

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTimeStr(`${hours}:${minutes}:${seconds}`);

      const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      const day = days[now.getDay()];
      const month = months[now.getMonth()];
      const date = String(now.getDate()).padStart(2, '0');
      const year = now.getFullYear();
      setDateStr(`${day}, ${month} ${date} ${year}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative z-30 w-full px-4 sm:px-8 py-2.5 sm:py-3 border-b border-cyan-500/20 backdrop-blur-md bg-[#05070d]/60 select-none">
      {/* Desktop View: Extreme Left (Logo), Extreme Right (Clock), and Centralized Nav Tabs */}
      <div className="hidden md:flex items-center justify-between w-full max-w-7xl mx-auto min-h-[40px] relative">
        
        {/* Extreme Left: Brand Logo */}
        <div 
          className="flex items-center gap-1 font-orbitron font-bold text-xl sm:text-2xl tracking-wider text-pink-500 cursor-pointer group flex-shrink-0 z-10"
          onMouseEnter={playHoverSound}
          onClick={() => {
            playClickSound();
            handleTabChange('home');
          }}
        >
          <span className="text-pink-500 drop-shadow-[0_0_8px_rgba(255,0,127,0.8)] transition-all duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]">
            PUNKFOLIO
          </span>
          <span className="inline-block w-2.5 h-5 bg-pink-500 animate-pulse drop-shadow-[0_0_8px_rgba(255,0,127,0.8)]" />
        </div>

        {/* Centralized & Equally Spaced Nav Links */}
        <nav className="flex items-center gap-6 lg:gap-8 xl:gap-10 font-mono text-xs lg:text-sm tracking-widest absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  playClickSound();
                  handleTabChange(item.id);
                }}
                onMouseEnter={playHoverSound}
                className={`relative py-1.5 px-3 transition-all duration-200 group flex items-center gap-1.5 ${
                  isActive
                    ? 'text-pink-400 font-semibold'
                    : 'text-slate-400 hover:text-cyan-300'
                }`}
              >
                <span className={isActive ? 'text-pink-500' : 'text-slate-500 group-hover:text-cyan-400'}>
                  {item.number}.
                </span>
                <span>{item.label}</span>

                {/* Active Neon Box Indicator */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-pink-500 shadow-[0_0_8px_#ff007f] rounded-full" />
                )}
                {isActive && (
                  <span className="absolute inset-0 border border-pink-500/40 rounded bg-pink-500/5 -z-10" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Extreme Right: Live Digital Clock & Date */}
        <div className="font-mono text-right text-xs leading-tight flex-shrink-0 z-10">
          <div className="text-cyan-300 font-bold tracking-widest drop-shadow-[0_0_5px_rgba(0,240,255,0.7)] text-sm">
            {timeStr || '00:00:00'}
          </div>
          <div className="text-[9.5px] text-slate-400 tracking-wider">
            {dateStr || 'SYNCING...'}
          </div>
        </div>

      </div>

      {/* Mobile View: Logo + Clock + Hamburger Menu */}
      <div className="md:hidden flex items-center justify-between w-full px-1">
        <div 
          className="flex items-center gap-1 font-orbitron font-bold text-lg xs:text-xl tracking-wider text-pink-500 cursor-pointer"
          onClick={() => {
            playClickSound();
            handleTabChange('home');
          }}
        >
          <span className="text-pink-500 drop-shadow-[0_0_10px_rgba(255,0,127,0.85)]">
            PUNKFOLIO
          </span>
          <span className="inline-block w-2.5 h-4 bg-pink-500 animate-pulse drop-shadow-[0_0_8px_rgba(255,0,127,0.8)]" />
        </div>

        <div className="flex items-center gap-3">
          <div className="font-mono text-right leading-tight">
            <div className="text-cyan-300 font-bold text-xs xs:text-sm tracking-widest drop-shadow-[0_0_6px_rgba(0,240,255,0.7)]">
              {timeStr || '00:00:00'}
            </div>
          </div>

          <button
            onClick={() => {
              playClickSound();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="text-cyan-400 p-1.5 border border-cyan-500/40 rounded-lg bg-cyan-950/30 hover:border-cyan-400 transition-colors focus:outline-none cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-cyan-500/20 flex flex-col gap-2 font-mono text-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                playClickSound();
                handleTabChange(item.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left py-2 px-3 rounded flex items-center justify-between ${
                currentTab === item.id
                  ? 'bg-pink-500/20 text-pink-400 border-l-2 border-pink-500'
                  : 'text-slate-300 hover:bg-cyan-950/30 hover:text-cyan-400'
              }`}
            >
              <span>{item.number}. {item.label}</span>
              {currentTab === item.id && <span className="text-xs text-pink-400">ACTIVE</span>}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
