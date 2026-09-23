import React, { useState } from 'react';
import { VolumeX, MapPin, Code2, Zap, Radio, Disc3 } from 'lucide-react';
import { setCyberAudioMode, getNextAudioMode, playClickSound, playHoverSound } from '../utils/audio';

const HudStatus = () => {
  const [audioMode, setAudioMode] = useState('off'); // 'off' | 'grimes' | 'synth'

  const handleAudioToggle = () => {
    const nextMode = getNextAudioMode(audioMode);
    setCyberAudioMode(nextMode);
    setAudioMode(nextMode);
  };

  return (
    <footer className="relative z-30 w-full px-4 md:px-8 py-2 md:py-3 select-none hidden md:flex items-center justify-center">
      
      {/* ========================================================================= */}
      {/* DESKTOP HUD DOCK (md:flex) - Preserved Exactly                            */}
      {/* ========================================================================= */}
      <div 
        className="hidden md:flex relative group bg-[#090e1a]/90 border border-cyan-500/30 px-6 py-2.5 rounded-lg backdrop-blur-md font-mono shadow-[0_0_25px_rgba(0,0,0,0.85)] flex-wrap items-center justify-center gap-7 md:gap-8 max-w-5xl"
        onMouseEnter={playHoverSound}
      >
        {/* Futuristic Cyber Corner Accents */}
        <div className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400" />
        <div className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400" />
        <div className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400" />
        <div className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400" />

        {/* 1. Location */}
        <div className="flex items-center gap-2 text-xs">
          <div className="p-1 rounded bg-cyan-950/60 border border-cyan-500/30">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[9px] text-slate-400 tracking-wider">LOCATION</span>
            <span className="text-cyan-300 font-bold tracking-wider text-xs">
              DELHI, INDIA
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-7 bg-cyan-500/20" />

        {/* 2. Focus / Role */}
        <div className="flex items-center gap-2 text-xs">
          <div className="p-1 rounded bg-pink-950/60 border border-pink-500/30">
            <Code2 className="w-3.5 h-3.5 text-pink-400" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[9px] text-slate-400 tracking-wider">FOCUS</span>
            <span className="text-pink-400 font-bold tracking-wider text-xs">
              FULL STACK DEVELOPER
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-7 bg-cyan-500/20" />

        {/* 3. Status */}
        <div className="flex items-center gap-2 text-xs">
          <div className="p-1 rounded bg-emerald-950/60 border border-emerald-500/30">
            <Zap className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[9px] text-slate-400 tracking-wider">STATUS</span>
            <span className="text-emerald-400 font-bold tracking-wider text-xs flex items-center gap-1.5">
              <span>GRINDING HACKATHONS</span>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_6px_#00ff66]"></span>
              </span>
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-7 bg-cyan-500/20" />

        {/* 4. Cyber Multi-Track Audio Switcher */}
        <button
          onClick={() => {
            playClickSound();
            handleAudioToggle();
          }}
          onMouseEnter={playHoverSound}
          title="Click to cycle audio: Grimes 4ÆM → Synth Ambient Drone → Mute"
          className={`flex items-center gap-2 px-3 py-1.5 rounded border transition-all duration-300 font-bold text-[11px] tracking-wider cursor-pointer ${
            audioMode === 'grimes'
              ? 'bg-pink-950/60 text-pink-300 border-pink-400 shadow-[0_0_15px_rgba(255,0,127,0.6)]'
              : audioMode === 'synth'
              ? 'bg-cyan-950/60 text-cyan-300 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.6)]'
              : 'bg-slate-900/80 text-slate-400 border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300'
          }`}
        >
          {audioMode === 'grimes' && (
            <>
              <Disc3 className="w-3.5 h-3.5 text-pink-400 animate-spin" style={{ animationDuration: '3s' }} />
              <div className="flex items-center gap-1.5">
                <span>OST: GRIMES 4ÆM</span>
                {/* Mini animated equalizer bars */}
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 bg-pink-400 animate-[pulse_0.6s_ease-in-out_infinite] h-full" />
                  <span className="w-0.5 bg-pink-400 animate-[pulse_0.8s_ease-in-out_infinite] h-2/3" />
                  <span className="w-0.5 bg-pink-400 animate-[pulse_0.5s_ease-in-out_infinite] h-4/5" />
                </div>
              </div>
            </>
          )}

          {audioMode === 'synth' && (
            <>
              <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <div className="flex items-center gap-1.5">
                <span>SYNTH DRONE</span>
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 bg-cyan-400 animate-[pulse_1.2s_ease-in-out_infinite] h-2/3" />
                  <span className="w-0.5 bg-cyan-400 animate-[pulse_0.9s_ease-in-out_infinite] h-full" />
                  <span className="w-0.5 bg-cyan-400 animate-[pulse_1.4s_ease-in-out_infinite] h-1/2" />
                </div>
              </div>
            </>
          )}

          {audioMode === 'off' && (
            <>
              <VolumeX className="w-3.5 h-3.5 text-slate-500" />
              <span>SOUND: OFF</span>
            </>
          )}
        </button>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET COMPACT HORIZONTAL HUD (< md)                             */}
      {/* ========================================================================= */}
      <div className="flex md:hidden w-full max-w-lg items-center justify-between gap-1.5 bg-[#090e1a]/95 border border-cyan-500/30 px-2.5 py-1.5 rounded-lg backdrop-blur-md font-mono text-[9px] sm:text-[10px] shadow-[0_0_15px_rgba(0,0,0,0.8)]">
        
        {/* Telemetry Items */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-slate-300 overflow-x-auto no-scrollbar whitespace-nowrap">
          <span className="flex items-center gap-1 text-cyan-300 font-semibold">
            <MapPin className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
            <span>DELHI</span>
          </span>
          <span className="text-cyan-500/40">•</span>
          
          <span className="flex items-center gap-1 text-pink-400 font-semibold">
            <Code2 className="w-2.5 h-2.5 text-pink-400 shrink-0" />
            <span>FULL STACK</span>
          </span>
          <span className="text-cyan-500/40">•</span>

          <span className="flex items-center gap-1 text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>HACKATHONS</span>
          </span>
        </div>

        {/* Compact Mobile Audio Control */}
        <button
          onClick={() => {
            playClickSound();
            handleAudioToggle();
          }}
          className={`flex items-center gap-1 px-2 py-1 rounded border transition-all duration-200 font-bold text-[8.5px] sm:text-[9px] shrink-0 cursor-pointer ${
            audioMode === 'grimes'
              ? 'bg-pink-950/70 text-pink-300 border-pink-400'
              : audioMode === 'synth'
              ? 'bg-cyan-950/70 text-cyan-300 border-cyan-400'
              : 'bg-slate-900/80 text-slate-400 border-slate-700'
          }`}
        >
          {audioMode === 'grimes' ? (
            <>
              <Disc3 className="w-2.5 h-2.5 text-pink-400 animate-spin" />
              <span>4ÆM</span>
            </>
          ) : audioMode === 'synth' ? (
            <>
              <Radio className="w-2.5 h-2.5 text-cyan-400 animate-pulse" />
              <span>SYNTH</span>
            </>
          ) : (
            <>
              <VolumeX className="w-2.5 h-2.5 text-slate-500" />
              <span>MUTED</span>
            </>
          )}
        </button>

      </div>

    </footer>
  );
};

export default HudStatus;

