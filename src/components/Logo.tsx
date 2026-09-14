import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showText?: boolean;
  className?: string;
}

export const LogoEmblem: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldLinear" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="35%" stopColor="#d4af37" />
          <stop offset="70%" stopColor="#c69a59" />
          <stop offset="100%" stopColor="#854d0e" />
        </linearGradient>
        <linearGradient id="silverLinear" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#d4af37" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Outer Laurel Wreath (Left branch) */}
      <path
        d="M 28,68 C 18,56 16,36 26,24 C 27,27 28,32 30,36 C 24,42 22,54 28,68 Z"
        fill="url(#goldLinear)"
        opacity="0.95"
      />
      <path
        d="M 22,60 C 14,50 15,35 24,26 C 25,29 27,33 28,36 C 20,44 19,53 22,60 Z"
        fill="url(#goldLinear)"
        opacity="0.8"
      />
      <path
        d="M 33,74 C 23,65 21,48 29,35 C 31,38 33,42 34,45 C 29,52 28,63 33,74 Z"
        fill="url(#goldLinear)"
      />

      {/* Outer Laurel Wreath (Right branch) */}
      <path
        d="M 72,68 C 82,56 84,36 74,24 C 73,27 72,32 70,36 C 76,42 78,54 72,68 Z"
        fill="url(#goldLinear)"
        opacity="0.95"
      />
      <path
        d="M 78,60 C 86,50 85,35 76,26 C 75,29 73,33 72,36 C 80,44 81,53 78,60 Z"
        fill="url(#goldLinear)"
        opacity="0.8"
      />
      <path
        d="M 67,74 C 77,65 79,48 71,35 C 69,38 67,42 66,45 C 71,52 72,63 67,74 Z"
        fill="url(#goldLinear)"
      />

      {/* Laurel Leaves Tips */}
      <ellipse cx="23" cy="28" rx="2.5" ry="5.5" transform="rotate(-30 23 28)" fill="url(#goldLinear)" />
      <ellipse cx="20" cy="39" rx="2.5" ry="5.5" transform="rotate(-15 20 39)" fill="url(#goldLinear)" />
      <ellipse cx="20" cy="50" rx="2.5" ry="5.5" transform="rotate(0 20 50)" fill="url(#goldLinear)" />
      <ellipse cx="23" cy="61" rx="2.5" ry="5.5" transform="rotate(20 23 61)" fill="url(#goldLinear)" />
      
      <ellipse cx="77" cy="28" rx="2.5" ry="5.5" transform="rotate(30 77 28)" fill="url(#goldLinear)" />
      <ellipse cx="80" cy="39" rx="2.5" ry="5.5" transform="rotate(15 80 39)" fill="url(#goldLinear)" />
      <ellipse cx="80" cy="50" rx="2.5" ry="5.5" transform="rotate(0 80 50)" fill="url(#goldLinear)" />
      <ellipse cx="77" cy="61" rx="2.5" ry="5.5" transform="rotate(-20 77 61)" fill="url(#goldLinear)" />

      {/* Central Sword Stem (Justice) */}
      <path
        d="M 50,14 L 52.5,22 L 51,22 L 51,76 L 50,81 L 49,76 L 49,22 L 47.5,22 Z"
        fill="url(#goldLinear)"
        filter="url(#goldGlow)"
      />
      {/* Sword tip finial */}
      <polygon points="50,12 52.5,16 47.5,16" fill="url(#goldLinear)" />

      {/* Scale Beam */}
      <path
        d="M 36,25 Q 50,22 64,25 L 63.5,27 Q 50,24 36.5,27 Z"
        fill="url(#goldLinear)"
      />
      {/* Central beam pivot */}
      <circle cx="50" cy="24" r="2.2" fill="url(#goldLinear)" />

      {/* Scale Left (Strings & Pan) */}
      <line x1="37" y1="26" x2="31" y2="40" stroke="url(#goldLinear)" strokeWidth="0.8" />
      <line x1="37" y1="26" x2="43" y2="40" stroke="url(#goldLinear)" strokeWidth="0.8" />
      <path
        d="M 31,40 Q 37,45 43,40 Z"
        fill="url(#goldLinear)"
      />

      {/* Scale Right (Strings & Pan) */}
      <line x1="63" y1="26" x2="57" y2="40" stroke="url(#goldLinear)" strokeWidth="0.8" />
      <line x1="63" y1="26" x2="69" y2="40" stroke="url(#goldLinear)" strokeWidth="0.8" />
      <path
        d="M 57,40 Q 63,45 69,40 Z"
        fill="url(#goldLinear)"
      />

      {/* Stylized Monogram "Y M" overlapping */}
      {/* Letter 'Y' */}
      <path
        d="M 40,36 L 47,48 L 47,68 L 53,68 L 53,48 L 60,36 L 55,36 L 50,44.5 L 45,36 Z"
        fill="url(#goldLinear)"
        opacity="0.9"
      />

      {/* Letter 'M' Serif Form */}
      <path
        d="M 37,44 L 40,44 L 44,65 L 50,54 L 56,65 L 60,44 L 63,44 L 63,70 L 59,70 L 59,51 L 53,62 L 47,62 L 41,51 L 41,70 L 37,70 Z"
        fill="url(#goldLinear)"
      />

      {/* Bottom curved accent ribbon / swoosh */}
      <path
        d="M 30,76 Q 50,71 70,76 Q 50,73.5 30,76 Z"
        fill="url(#goldLinear)"
      />
      <path
        d="M 34,79 Q 50,75.5 66,79 Q 50,77.5 34,79 Z"
        fill="url(#goldLinear)"
        opacity="0.7"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';
  const isHero = size === 'hero';

  const emblemSize = isSmall
    ? 'w-9 h-9'
    : isLarge
    ? 'w-16 h-16'
    : isHero
    ? 'w-24 h-24'
    : 'w-11 h-11';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoEmblem className={`${emblemSize} flex-shrink-0 transition-transform duration-300 hover:scale-105`} />
      
      {showText && (
        <div className="flex flex-col justify-center select-none">
          <div className="flex items-center tracking-wider leading-none">
            <span
              className={`font-serif tracking-widest text-slate-100 font-bold uppercase ${
                isSmall ? 'text-xs' : isLarge ? 'text-xl' : isHero ? 'text-2xl' : 'text-sm sm:text-base'
              }`}
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Dr. Yuri{' '}
              <span className="text-[#dfb776] font-extrabold ml-1">
                Moreira
              </span>
            </span>
          </div>

          <div className="flex items-center justify-center gap-1 mt-1 text-[#c69a59] text-[8px] sm:text-[9.5px] uppercase tracking-[0.22em] font-medium">
            <span className="w-2.5 h-[1px] bg-[#c69a59]/60 inline-block"></span>
            <span>Advocacia & Consultoria</span>
            <span className="w-2.5 h-[1px] bg-[#c69a59]/60 inline-block"></span>
          </div>
        </div>
      )}
    </div>
  );
};
