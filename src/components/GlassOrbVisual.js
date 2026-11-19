'use client';
import Box from '@mui/material/Box';

export default function GlassOrbVisual({ themeColor = '#2563eb' }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 200,
        borderRadius: 3,
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #dbeafe 0%, #eff6ff 60%, #e0e7ff 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background ambient lighting */}
      <Box
        sx={{
          position: 'absolute',
          width: 140,
          height: 140,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.45) 0%, rgba(37, 99, 235, 0.1) 70%, transparent 100%)',
          filter: 'blur(20px)',
        }}
      />

      {/* SVG Sphere Illustration */}
      <svg width="220" height="190" viewBox="0 0 220 190" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="orbGradient" x1="60" y1="20" x2="160" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.95" />
          </linearGradient>
          <radialGradient id="glowGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#2563eb" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="pedestalGrad" x1="70" y1="135" x2="150" y2="165" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Floating Pedestal */}
        <polygon points="70,148 110,136 150,148 110,160" fill="url(#pedestalGrad)" />
        <polygon points="70,148 110,160 110,172 70,160" fill="#93c5fd" opacity="0.7" />
        <polygon points="110,160 150,148 150,160 110,172" fill="#bfdbfe" opacity="0.6" />

        {/* Pedestal shadow */}
        <ellipse cx="110" cy="174" rx="42" ry="7" fill="#1e293b" opacity="0.12" />

        {/* Back Aura */}
        <circle cx="110" cy="85" r="54" fill="url(#glowGlow)" />

        {/* Main Crystal Sphere */}
        <circle cx="110" cy="85" r="48" fill="url(#orbGradient)" />

        {/* Sphere Inner Neural Network Lines */}
        <path d="M85 85 Q 110 65 135 85" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.75" />
        <path d="M92 70 Q 110 88 128 70" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.75" />
        <path d="M85 95 Q 110 108 135 95" stroke="#93c5fd" strokeWidth="1" strokeOpacity="0.8" />
        <path d="M110 40 Q 95 85 110 130" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.6" />
        <path d="M110 40 Q 125 85 110 130" stroke="#93c5fd" strokeWidth="1.2" strokeOpacity="0.6" />

        {/* Constellation Nodes */}
        <circle cx="95" cy="72" r="3" fill="#ffffff" />
        <circle cx="125" cy="74" r="2.5" fill="#ffffff" />
        <circle cx="110" cy="85" r="3.5" fill="#ffffff" />
        <circle cx="90" cy="92" r="2" fill="#93c5fd" />
        <circle cx="130" cy="94" r="2.5" fill="#93c5fd" />
        <circle cx="108" cy="62" r="2.5" fill="#ffffff" />
        <circle cx="114" cy="108" r="2.5" fill="#ffffff" />

        {/* Highlight Specular Gleam */}
        <ellipse cx="94" cy="65" rx="14" ry="7" transform="rotate(-30 94 65)" fill="#ffffff" opacity="0.55" />
        <circle cx="86" cy="58" r="3.5" fill="#ffffff" opacity="0.8" />

        {/* Outer Orbit Particle Ring */}
        <ellipse cx="110" cy="85" rx="60" ry="22" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" transform="rotate(-15 110 85)" />
        <circle cx="160" cy="72" r="3" fill="#3b82f6" />
      </svg>
    </Box>
  );
}

