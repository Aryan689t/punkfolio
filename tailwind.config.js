/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#05070d',
          card: 'rgba(9, 14, 26, 0.75)',
          cyan: '#00f0ff',
          pink: '#ff007f',
          magenta: '#ff0055',
          purple: '#8b00ff',
          yellow: '#ffe600',
          green: '#00ff66',
          border: 'rgba(0, 240, 255, 0.25)',
          textDim: '#7d8da6',
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        mono: ['"Share Tech Mono"', '"Fira Code"', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 240, 255, 0.5), 0 0 30px rgba(0, 240, 255, 0.2)',
        'neon-pink': '0 0 15px rgba(255, 0, 127, 0.6), 0 0 30px rgba(255, 0, 127, 0.3)',
        'neon-glow': '0 0 20px rgba(0, 240, 255, 0.3), inset 0 0 15px rgba(0, 240, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 1s linear infinite',
      }
    },
  },
  plugins: [],
}
