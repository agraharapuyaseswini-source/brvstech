'use client';
import Image from 'next/image';
import Box from '@mui/material/Box';

export default function BrvsLogo({ light = false, size = 'medium', sx = {} }) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  // Base dimensions matching official logo aspect ratio (600x329)
  const targetHeight = isSmall ? 36 : isLarge ? 52 : 42;
  const targetWidth = Math.round(targetHeight * (600 / 329));
  const src = light ? '/images/brvs-logo-white.png' : '/images/brvs-logo.png';

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        lineHeight: 0,
        ...sx,
      }}
    >
      <Image
        src={src}
        alt="BRVS Logo"
        width={targetWidth * 2} // 2x for sharp retina rendering
        height={targetHeight * 2}
        priority
        style={{
          width: 'auto',
          height: targetHeight,
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </Box>
  );
}
