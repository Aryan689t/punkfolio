import React from 'react';
import { playHoverSound } from '../utils/audio';

const FloatingBillboards = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden hidden lg:block select-none">
      
      {/* Left Tower Cyber Signs */}
      <div 
        className="absolute left-6 top-1/4 flex flex-col gap-8 pointer-events-auto cursor-default"
        onMouseEnter={playHoverSound}
      >
        {/* Holographic Slogan Card */}
        <div className="border-l-2 border-cyan-400 bg-cyan-950/20 backdrop-blur-sm p-3 font-mono text-[11px] tracking-widest text-cyan-300/80 leading-relaxed shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all hover:bg-cyan-950/40 hover:text-cyan-200">
          <div>SAME</div>
          <div>HUMAN</div>
          <div>DIFFERENT</div>
          <div className="text-pink-400 font-bold">DREAMS</div>
        </div>

        {/* Vertical Japanese Kanji Neon Sign */}
        <div className="flex flex-col items-center gap-1 font-bold text-lg tracking-widest text-pink-500 bg-black/40 border border-pink-500/30 px-2 py-4 rounded backdrop-blur-sm shadow-[0_0_20px_rgba(255,0,127,0.4)]">
          <span className="drop-shadow-[0_0_8px_#ff007f]">未</span>
          <span className="drop-shadow-[0_0_8px_#ff007f]">来</span>
          <span className="drop-shadow-[0_0_8px_#ff007f]">の</span>
          <span className="drop-shadow-[0_0_8px_#ff007f]">都</span>
          <span className="drop-shadow-[0_0_8px_#ff007f]">市</span>
          <div className="w-full h-[1px] bg-pink-500/40 my-1" />
          <span className="text-[9px] font-mono tracking-tighter text-cyan-300">A BRIGHTER</span>
          <span className="text-[9px] font-mono tracking-tighter text-cyan-300">TOMORROW</span>
        </div>
      </div>

      {/* Right Tower Cyber Signs */}
      <div 
        className="absolute right-6 top-1/4 flex flex-col items-end gap-8 pointer-events-auto cursor-default"
        onMouseEnter={playHoverSound}
      >
        {/* Holographic Cyan Billboard */}
        <div className="border-r-2 border-cyan-400 bg-cyan-950/20 backdrop-blur-sm p-3 font-mono text-[11px] tracking-widest text-cyan-300 text-right leading-relaxed shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all hover:bg-cyan-950/40 hover:text-cyan-100">
          <div className="font-bold text-cyan-400 drop-shadow-[0_0_5px_#00f0ff]">BETTER</div>
          <div className="font-bold text-cyan-400 drop-shadow-[0_0_5px_#00f0ff]">CODE</div>
          <div className="text-pink-400 font-bold drop-shadow-[0_0_5px_#ff007f]">BRIGHTER</div>
          <div className="text-pink-400 font-bold drop-shadow-[0_0_5px_#ff007f]">TOMORROW</div>
        </div>

        {/* Vertical Japanese Kanji Neon Sign */}
        <div className="flex flex-col items-center gap-1 font-bold text-lg tracking-widest text-pink-400 bg-black/40 border border-pink-500/30 px-2 py-4 rounded backdrop-blur-sm shadow-[0_0_20px_rgba(255,0,127,0.4)]">
          <span className="drop-shadow-[0_0_8px_#ff007f]">世</span>
          <span className="drop-shadow-[0_0_8px_#ff007f]">界</span>
          <span className="drop-shadow-[0_0_8px_#ff007f]">は</span>
          <span className="drop-shadow-[0_0_8px_#ff007f]">ま</span>
          <span className="drop-shadow-[0_0_8px_#ff007f]">だ</span>
          <span className="drop-shadow-[0_0_8px_#ff007f]">美</span>
          <span className="drop-shadow-[0_0_8px_#ff007f]">し</span>
          <span className="drop-shadow-[0_0_8px_#ff007f]">い</span>
          <div className="w-full h-[1px] bg-pink-500/40 my-1" />
          <span className="text-[9px] font-mono tracking-tighter text-slate-400">STILL</span>
          <span className="text-[9px] font-mono tracking-tighter text-slate-400">BEAUTIFUL</span>
        </div>
      </div>

    </div>
  );
};

export default FloatingBillboards;
