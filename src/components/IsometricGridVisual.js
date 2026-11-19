'use client';
import Box from '@mui/material/Box';

export default function IsometricGridVisual({ activeIndex = 0 }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        minHeight: { xs: 220, md: 320 },
        background: 'linear-gradient(135deg, #dbeafe 0%, #eff6ff 50%, #bfdbfe 100%)',
        borderRadius: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glow */}
      <Box
        sx={{
          position: 'absolute',
          width: 180,
          height: 180,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)',
          filter: 'blur(25px)',
        }}
      />

      <svg width="280" height="220" viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cubeTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="cubeLeft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="cubeRight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.75" />
          </linearGradient>

          {/* Active Glowing Neon Cube */}
          <linearGradient id="glowCubeTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="glowCubeLeft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
          <linearGradient id="glowCubeRight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>

        {/* Isometric Grid Matrix */}
        <g opacity="0.95">
          {/* Row 1 */}
          <polygon points="140,20 160,30 140,40 120,30" fill="url(#cubeTop)" />
          <polygon points="160,30 180,40 160,50 140,40" fill="url(#cubeTop)" />
          <polygon points="180,40 200,50 180,60 160,50" fill="url(#cubeTop)" />
          <polygon points="200,50 220,60 200,70 180,60" fill="url(#cubeTop)" />

          {/* Row 2 */}
          <polygon points="120,30 140,40 120,50 100,40" fill="url(#cubeTop)" />
          <polygon points="140,40 160,50 140,60 120,50" fill="url(#cubeTop)" />
          <polygon points="160,50 180,60 160,70 140,60" fill="url(#cubeTop)" />
          <polygon points="180,60 200,70 180,80 160,70" fill="url(#cubeTop)" />
          <polygon points="200,70 220,80 200,90 180,80" fill="url(#cubeTop)" />

          {/* Row 3 */}
          <polygon points="100,40 120,50 100,60 80,50" fill="url(#cubeTop)" />
          <polygon points="120,50 140,60 120,70 100,60" fill="url(#cubeTop)" />
          
          {/* Active Elevated Cube 1 */}
          <g transform="translate(140, 48)">
            {/* Top */}
            <polygon points="0,-10 20,0 0,10 -20,0" fill="url(#glowCubeTop)" />
            {/* Left */}
            <polygon points="-20,0 0,10 0,26 -20,16" fill="url(#glowCubeLeft)" />
            {/* Right */}
            <polygon points="0,10 20,0 20,16 0,26" fill="url(#glowCubeRight)" />
            {/* Light beam shoot up */}
            <line x1="0" y1="-10" x2="0" y2="-45" stroke="#93c5fd" strokeWidth="2" strokeDasharray="3 2" opacity="0.8" />
          </g>

          <polygon points="160,70 180,80 160,90 140,80" fill="url(#cubeTop)" />
          <polygon points="180,80 200,90 180,100 160,90" fill="url(#cubeTop)" />

          {/* Row 4 */}
          <polygon points="80,50 100,60 80,70 60,60" fill="url(#cubeTop)" />
          <polygon points="100,60 120,70 100,80 80,70" fill="url(#cubeTop)" />
          <polygon points="120,70 140,80 120,90 100,80" fill="url(#cubeTop)" />
          <polygon points="140,80 160,90 140,100 120,90" fill="url(#cubeTop)" />
          <polygon points="160,90 180,100 160,110 140,100" fill="url(#cubeTop)" />

          {/* Row 5 with Second Active Glow Cube */}
          <polygon points="60,60 80,70 60,80 40,70" fill="url(#cubeTop)" />
          <polygon points="80,70 100,80 80,90 60,80" fill="url(#cubeTop)" />

          <g transform="translate(118, 90)">
            {/* Top */}
            <polygon points="0,-10 20,0 0,10 -20,0" fill="url(#glowCubeTop)" />
            {/* Left */}
            <polygon points="-20,0 0,10 0,26 -20,16" fill="url(#glowCubeLeft)" />
            {/* Right */}
            <polygon points="0,10 20,0 20,16 0,26" fill="url(#glowCubeRight)" />
            <line x1="0" y1="-10" x2="0" y2="-40" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.9" />
          </g>

          <polygon points="140,100 160,110 140,120 120,110" fill="url(#cubeTop)" />

          {/* Row 6 */}
          <polygon points="40,70 60,80 40,90 20,80" fill="url(#cubeTop)" />
          <polygon points="60,80 80,90 60,100 40,90" fill="url(#cubeTop)" />
          <polygon points="80,90 100,100 80,110 60,100" fill="url(#cubeTop)" />
          <polygon points="100,100 120,110 100,120 80,110" fill="url(#cubeTop)" />
          <polygon points="120,110 140,120 120,130 100,120" fill="url(#cubeTop)" />

          {/* Isometric grid sides and thickness */}
          <polygon points="20,80 40,90 40,105 20,95" fill="url(#cubeLeft)" />
          <polygon points="40,90 60,100 60,115 40,105" fill="url(#cubeLeft)" />
          <polygon points="60,100 80,110 80,125 60,115" fill="url(#cubeLeft)" />
          <polygon points="80,110 100,120 100,135 80,125" fill="url(#cubeLeft)" />
          <polygon points="100,120 120,130 120,145 100,135" fill="url(#cubeLeft)" />
          <polygon points="120,130 140,120 140,135 120,145" fill="url(#cubeRight)" />
          <polygon points="140,120 160,110 160,125 140,135" fill="url(#cubeRight)" />
          <polygon points="160,110 180,100 180,115 160,125" fill="url(#cubeRight)" />
          <polygon points="180,100 200,90 200,105 180,115" fill="url(#cubeRight)" />
          <polygon points="200,90 220,80 220,95 200,105" fill="url(#cubeRight)" />

          {/* Floating tiny data cubes */}
          <polygon points="50,40 58,44 50,48 42,44" fill="#ffffff" opacity="0.7" />
          <polygon points="190,30 198,34 190,38 182,34" fill="#60a5fa" opacity="0.8" />
          <polygon points="230,45 238,49 230,53 222,49" fill="#ffffff" opacity="0.6" />
        </g>
      </svg>
    </Box>
  );
}

