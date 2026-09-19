// Cyberpunk Audio System (Web Audio Synth + Grimes 4AEM Soundtrack)

let audioCtx = null;
let ambientOsc1 = null;
let ambientOsc2 = null;
let ambientGain = null;
let grimesAudio = null;
let currentMode = 'off'; // 'off' | 'grimes' | 'synth'
let isMuted = true;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export const playHoverSound = () => {
  if (isMuted && currentMode === 'off') return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.04);
    
    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {
    // Ignore audio autoplay restrictions
  }
};

export const playClickSound = () => {
  if (isMuted && currentMode === 'off') return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(300, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.08);
    
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.09);
  } catch (e) {
    // Ignore error
  }
};

function stopSynthAmbience() {
  const ctx = getAudioContext();
  if (ambientGain && ctx) {
    ambientGain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
    setTimeout(() => {
      if (ambientOsc1) {
        try {
          ambientOsc1.stop();
          ambientOsc2.stop();
          ambientOsc1.disconnect();
          ambientOsc2.disconnect();
        } catch (e) {}
        ambientOsc1 = null;
        ambientOsc2 = null;
        ambientGain = null;
      }
    }, 600);
  }
}

function startSynthAmbience() {
  const ctx = getAudioContext();
  if (!ctx) return;
  
  if (!ambientOsc1) {
    ambientOsc1 = ctx.createOscillator();
    ambientOsc2 = ctx.createOscillator();
    ambientGain = ctx.createGain();
    
    // Low warm cyberpunk pad frequencies (A minor drone)
    ambientOsc1.type = 'sawtooth';
    ambientOsc1.frequency.setValueAtTime(110, ctx.currentTime); // A2
    
    ambientOsc2.type = 'sine';
    ambientOsc2.frequency.setValueAtTime(220, ctx.currentTime); // A3
    
    // Low pass filter for dark, warm atmosphere
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(350, ctx.currentTime);
    
    ambientGain.gain.setValueAtTime(0.001, ctx.currentTime);
    ambientGain.gain.linearRampToValueAtTime(0.035, ctx.currentTime + 1.5);
    
    ambientOsc1.connect(filter);
    ambientOsc2.connect(filter);
    filter.connect(ambientGain);
    ambientGain.connect(ctx.destination);
    
    ambientOsc1.start();
    ambientOsc2.start();
  }
}

function getGrimesAudio() {
  if (!grimesAudio) {
    grimesAudio = new Audio('/audio/grimes-4aem.mp3');
    grimesAudio.loop = true;
    grimesAudio.volume = 0.35;
  }
  return grimesAudio;
}

export const setCyberAudioMode = (mode) => {
  currentMode = mode;
  const grimes = getGrimesAudio();

  if (mode === 'grimes') {
    isMuted = false;
    stopSynthAmbience();
    try {
      grimes.currentTime = 0;
      grimes.play().catch(() => {});
    } catch (e) {}
    return 'grimes';
  } else if (mode === 'synth') {
    isMuted = false;
    try {
      grimes.pause();
    } catch (e) {}
    startSynthAmbience();
    return 'synth';
  } else {
    // off
    isMuted = true;
    try {
      grimes.pause();
    } catch (e) {}
    stopSynthAmbience();
    return 'off';
  }
};

export const getNextAudioMode = (current) => {
  if (current === 'off') return 'grimes';
  if (current === 'grimes') return 'synth';
  return 'off';
};

