'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

// Theme for the card that pops up in repetition (newdark1 - dark royal blue wave)
const POPPED_THEME = {
  bgImage: '/images/cards/newdark1.png',
  isDark: true,
  overlayBg: 'rgba(5, 14, 36, 0.16)',
  borderColor: 'rgba(96, 165, 250, 0.6)',
  iconColor: '#ffffff',
  titleColor: '#ffffff',
  descColor: '#e0f2fe',
  boxShadow: '0 20px 42px rgba(5, 12, 30, 0.42), 0 0 22px rgba(37, 99, 235, 0.38)',
  transform: 'translateY(-10px) scale(1.025)',
};

// Theme for the cards that are not popping (newdark3 - light sky blue wave)
const RESTING_THEME = {
  bgImage: '/images/cards/newdark3.png',
  isDark: false,
  overlayBg: 'rgba(255, 255, 255, 0.08)',
  borderColor: 'rgba(191, 219, 254, 0.75)',
  iconColor: '#1d4ed8',
  titleColor: '#0b132b',
  descColor: '#1e293b',
  boxShadow: '0 6px 18px rgba(37, 99, 235, 0.08)',
  transform: 'translateY(0) scale(1)',
};

// Preserving the exact 4 content items and icons
const highlights = [
  {
    IconComponent: VerifiedUserOutlinedIcon,
    title: 'Certified & audited',
    description: 'ISO 27001, ISO 9001 and SOC 2 Type II controls across every engagement.',
  },
  {
    IconComponent: PersonOutlineOutlinedIcon,
    title: 'Women-owned',
    description: 'A certified WOSB, which helps clients meet supplier-diversity goals.',
  },
  {
    IconComponent: AccessTimeOutlinedIcon,
    title: 'On time, every time',
    description: 'Written SLAs and milestone delivery, with quality that holds up to audit.',
  },
  {
    IconComponent: LocationOnOutlinedIcon,
    title: 'Dallas headquarters',
    description: '5050 Quorum Dr, serving enterprise clients across continents.',
  },
];

export default function ValueProposition() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle popup card in repetition every 2 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <Box
      id="about"
      className="white-section-bg"
      sx={{
        py: { xs: 3, md: 4 },
        position: 'relative',
        backgroundColor: '#ffffff',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container maxWidth="lg">
        {/* Main Value Statement */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1.65rem', sm: '2.1rem', md: '2.45rem' },
            color: '#0b132b',
            lineHeight: 1.35,
            letterSpacing: '-0.02em',
            maxWidth: 1060,
            mb: { xs: 3, md: 3.5 },
          }}
        >
          BRVS Group is a{' '}
          <Box component="span" sx={{ color: '#2563eb' }}>
            technology-driven company
          </Box>{' '}
          that builds long-term partnerships: we learn your environment, then deliver
          high-quality, scalable solutions that produce{' '}
          <Box component="span" sx={{ color: '#2563eb' }}>
            measurable results.
          </Box>
        </Typography>

        {/* 4 Cards: newdark1 for popping card in repetition, newdark3 for resting cards */}
        <Grid container spacing={{ xs: 2.5, md: 2.5 }} sx={{ justifyContent: 'center' }}>
          {highlights.map((item, index) => {
            const isPopped = index === activeCardIndex;
            const currentTheme = isPopped ? POPPED_THEME : RESTING_THEME;
            const Icon = item.IconComponent;

            return (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  onClick={() => setActiveCardIndex(index)}
                  sx={{
                    position: 'relative',
                    height: '100%',
                    minHeight: { xs: 185, sm: 195, md: 205 },
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: `1.5px solid ${currentTheme.borderColor}`,
                    boxShadow: currentTheme.boxShadow,
                    transform: currentTheme.transform,
                    zIndex: isPopped ? 5 : 1,
                    transition: 'transform 0.5s cubic-bezier(0.34, 1.45, 0.64, 1), box-shadow 0.5s ease, border-color 0.5s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: isPopped ? 'translateY(-12px) scale(1.03)' : 'translateY(-4px) scale(1.01)',
                    },
                  }}
                >
                  {/* Resting Background: newdark3 (for cards that are not popping) */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      opacity: isPopped ? 0 : 1,
                      transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      pointerEvents: 'none',
                      zIndex: 0,
                    }}
                  >
                    <Image
                      src="/images/cards/newdark3.png"
                      alt={item.title}
                      fill
                      priority
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                  </Box>

                  {/* Popped Background: newdark1 (for the card that pops up in repetition) */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      opacity: isPopped ? 1 : 0,
                      transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      pointerEvents: 'none',
                      zIndex: 0,
                    }}
                  >
                    <Image
                      src="/images/cards/newdark1.png"
                      alt={item.title}
                      fill
                      priority
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                  </Box>

                  {/* Frosted Translucent Glass Layer */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: currentTheme.overlayBg,
                      backdropFilter: 'blur(1.5px)',
                      pointerEvents: 'none',
                      zIndex: 1,
                      transition: 'background-color 0.5s ease',
                    }}
                  />

                  {/* Content: Clean Icon + Title + Description */}
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 2,
                      p: { xs: 2.2, sm: 2.4, md: 2.6 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                    }}
                  >
                    {/* Clean Vector Icon in Top-Left */}
                    <Box sx={{ mb: 1.5, display: 'inline-flex', alignItems: 'center' }}>
                      <Icon
                        sx={{
                          fontSize: 32,
                          color: currentTheme.iconColor,
                          transition: 'color 0.5s ease, transform 0.4s ease',
                          transform: isPopped ? 'scale(1.08)' : 'scale(1)',
                        }}
                      />
                    </Box>

                    {/* Card Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '1.02rem', md: '1.08rem' },
                        mb: 0.8,
                        color: currentTheme.titleColor,
                        lineHeight: 1.25,
                        letterSpacing: '-0.01em',
                        transition: 'color 0.5s ease',
                      }}
                    >
                      {item.title}
                    </Typography>

                    {/* Card Description */}
                    <Typography
                      sx={{
                        fontSize: { xs: '0.825rem', md: '0.84rem' },
                        lineHeight: 1.48,
                        color: currentTheme.descColor,
                        fontWeight: 500,
                        transition: 'color 0.5s ease',
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
