import React from 'react';

// Custom Themed Cyberpunk SVG Icons
export const ReactIcon = ({ className = "w-6 h-6", color = "#00f0ff" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke={color} strokeWidth="1.5" className="animate-[spin_12s_linear_infinite] origin-center opacity-80" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke={color} strokeWidth="1.5" transform="rotate(60 12 12)" className="animate-[spin_12s_linear_infinite_reverse] origin-center opacity-80" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke={color} strokeWidth="1.5" transform="rotate(120 12 12)" className="animate-[spin_12s_linear_infinite] origin-center opacity-80" />
    <circle cx="12" cy="12" r="2" fill={color} className="drop-shadow-[0_0_6px_#00f0ff]" />
  </svg>
);

export const TypeScriptIcon = ({ className = "w-6 h-6", color = "#00f0ff" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="3" stroke={color} strokeWidth="1.5" fill="rgba(0,240,255,0.08)" />
    <path d="M6 7.5H12M9 7.5V16" stroke={color} strokeWidth="1.75" strokeLinecap="round" />
    <path d="M14 14.5C14.5 15.5 15.5 16 16.8 16C18 16 19 15.2 19 14C19 12 15 12.5 15 10C15 8.8 16 8 17.2 8C18.2 8 19 8.5 19.5 9.3" stroke={color} strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

export const JavaScriptIcon = ({ className = "w-6 h-6", color = "#ffe600" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="3" stroke={color} strokeWidth="1.5" fill="rgba(255,230,0,0.08)" />
    <path d="M8 11V14.5C8 15.5 7.2 16 6 16" stroke={color} strokeWidth="1.75" strokeLinecap="round" />
    <path d="M12 14.5C12.5 15.5 13.5 16 14.8 16C16 16 17 15.2 17 14C17 12 13 12.5 13 10C13 8.8 14 8 15.2 8C16.2 8 17 8.5 17.5 9.3" stroke={color} strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

export const HtmlCssIcon = ({ className = "w-6 h-6", color = "#ff007f" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 3L5.5 18.5L12 21L18.5 18.5L20 3H4Z" stroke={color} strokeWidth="1.5" fill="rgba(255,0,127,0.08)" />
    <path d="M12 6V18L16.5 16.5L17.5 6H12Z" fill="rgba(255,0,127,0.2)" />
    <path d="M7.5 7H16.5M7.5 10.5H16M8 14H15.5L14.8 16.5L12 17.3L9.2 16.5" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const NodeIcon = ({ className = "w-6 h-6", color = "#00ff66" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke={color} strokeWidth="1.5" fill="rgba(0,255,102,0.08)" />
    <path d="M12 22V12M12 12L21 7M12 12L3 7" stroke={color} strokeWidth="1.25" opacity="0.6" />
    <circle cx="12" cy="12" r="2.5" fill={color} className="drop-shadow-[0_0_6px_#00ff66]" />
  </svg>
);

export const ExpressIcon = ({ className = "w-6 h-6", color = "#00ff66" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="5" width="20" height="14" rx="2" stroke={color} strokeWidth="1.5" fill="rgba(0,255,102,0.08)" />
    <path d="M6 9L9 12L6 15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 15H17" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="18" cy="8" r="1" fill={color} />
  </svg>
);

export const PrismaIcon = ({ className = "w-6 h-6", color = "#00ff66" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L3 19L10 22L21 7L12 2Z" stroke={color} strokeWidth="1.5" fill="rgba(0,255,102,0.08)" />
    <path d="M12 2L10 22" stroke={color} strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />
    <path d="M3 19L21 7" stroke={color} strokeWidth="1" opacity="0.5" />
    <circle cx="12" cy="2" r="1.5" fill={color} />
  </svg>
);

export const PostgresIcon = ({ className = "w-6 h-6", color = "#00f0ff" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <ellipse cx="12" cy="6" rx="9" ry="3" stroke={color} strokeWidth="1.5" fill="rgba(0,240,255,0.12)" />
    <path d="M3 6V18C3 19.66 7.03 21 12 21C16.97 21 21 19.66 21 18V6" stroke={color} strokeWidth="1.5" />
    <path d="M3 12C3 13.66 7.03 15 12 15C16.97 15 21 13.66 21 12" stroke={color} strokeWidth="1.25" opacity="0.7" />
    <circle cx="12" cy="18" r="1.5" fill={color} />
  </svg>
);

export const MySqlIcon = ({ className = "w-6 h-6", color = "#ff007f" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 16C6 11 10 7 16 6C20 5 21 8 20 10C18 13 14 15 10 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10 16L6 20M13 15L16 19M16 11L21 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="16" cy="8" r="1.5" fill={color} />
  </svg>
);

export const SupabaseIcon = ({ className = "w-6 h-6", color = "#00ff66" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M13.5 2L4 13.5H11.5L9.5 22L20 9.5H12.5L13.5 2Z" stroke={color} strokeWidth="1.5" fill="rgba(0,255,102,0.15)" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(0,255,102,0.6)]" />
  </svg>
);

export const GitIcon = ({ className = "w-6 h-6", color = "#8b00ff" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="6" cy="6" r="3" stroke={color} strokeWidth="1.5" fill="rgba(139,0,255,0.15)" />
    <circle cx="6" cy="18" r="3" stroke={color} strokeWidth="1.5" fill="rgba(139,0,255,0.15)" />
    <circle cx="18" cy="9" r="3" stroke={color} strokeWidth="1.5" fill="rgba(139,0,255,0.15)" />
    <path d="M6 9V15M6 9C6 11.5 9 12 12 12C15 12 18 11.5 18 12V12" stroke={color} strokeWidth="1.5" />
    <path d="M18 12V9" stroke={color} strokeWidth="1.5" />
  </svg>
);

export const VsCodeIcon = ({ className = "w-6 h-6", color = "#00f0ff" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M18.5 2.5L7.5 8L3.5 4.5L2 5.5V18.5L3.5 19.5L7.5 16L18.5 21.5L22 19.5V4.5L18.5 2.5Z" stroke={color} strokeWidth="1.5" fill="rgba(0,240,255,0.1)" strokeLinejoin="round" />
    <path d="M7.5 8L18.5 17M7.5 16L18.5 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const AntigravityIcon = ({ className = "w-6 h-6", color = "#ffe600" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" className="animate-[spin_8s_linear_infinite] origin-center opacity-80" />
    <circle cx="12" cy="12" r="5" stroke="#ff007f" strokeWidth="1.5" fill="rgba(255,0,127,0.15)" />
    <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="12" r="2" fill={color} className="drop-shadow-[0_0_8px_#ffe600]" />
  </svg>
);

export const GitHubIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill={color} className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
