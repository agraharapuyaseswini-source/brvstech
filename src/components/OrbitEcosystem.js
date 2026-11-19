'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BrvsLogo from './BrvsLogo';
import Link from 'next/link';

const orbitNodes = [
  { label: 'Alliances', delay: '-20.4s' },
  { label: 'Automation', delay: '-26.4s' },
  { label: 'Real-time data', delay: '-2.4s' },
  { label: 'Analytics', delay: '-8.4s' },
  { label: 'AI & ML', delay: '-14.4s' },
];

export default function OrbitEcosystem({ onOpenContact }) {
  return (
    <Box
      id="products"
      className="white-section-bg"
      sx={{
        py: { xs: 3, md: 4 },
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Column: Information & CTA */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#2563eb',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              PROPRIETARY PRODUCT ECOSYSTEM
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.2rem' },
                color: '#0b132b',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                mb: 3,
              }}
            >
              Everything connected.
              <br />
              Everything in view.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem' },
                color: '#64748b',
                lineHeight: 1.65,
                maxWidth: 480,
                mb: 4.5,
              }}
            >
              BRVS products combine intelligent automation with real-time insight, so complex
              operations get simpler and teams decide with precision.
            </Typography>

            <Button
              variant="contained"
              component={Link}
              href="/products"
              sx={{
                backgroundColor: '#0b132b',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.95rem',
                py: 1.3,
                px: 3.5,
                borderRadius: 9999,
                boxShadow: '0 4px 14px rgba(11, 19, 43, 0.2)',
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: '#1c2541',
                  boxShadow: '0 6px 18px rgba(11, 19, 43, 0.3)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Explore the ecosystem
            </Button>
          </Grid>

          {/* Right Column: Orbit System Visual matching reference */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              className="orbit-system-container"
              sx={{
                position: 'relative',
                width: { xs: 340, sm: 460, md: 500 },
                height: { xs: 340, sm: 460, md: 500 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '--orbit-radius': { xs: '145px', sm: '190px', md: '210px' },
                '--inner-orbit-radius': { xs: '90px', sm: '115px', md: '130px' },
              }}
            >
              {/* Solid Outer Orbit Ring (Exact path where badges revolve) */}
              <Box
                sx={{
                  position: 'absolute',
                  width: 'calc(var(--orbit-radius) * 2)',
                  height: 'calc(var(--orbit-radius) * 2)',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(191, 219, 254, 0.85)',
                  boxShadow: '0 0 35px rgba(219, 234, 254, 0.35)',
                  pointerEvents: 'none',
                }}
              />

              {/* Inner Dotted/Dashed Orbit Track Revolving Clockwise */}
              <Box
                className="revolving-dots-orbit"
                sx={{
                  position: 'absolute',
                  width: { xs: 180, sm: 230, md: 260 },
                  height: { xs: 180, sm: 230, md: 260 },
                  borderRadius: '50%',
                  border: '1.5px dashed rgba(147, 197, 253, 0.85)',
                  pointerEvents: 'none',
                  animation: 'spinSlow 30s linear infinite',
                  willChange: 'transform',
                }}
              />

              {/* 5 Revolving Badges directly ON the outer orbit ring */}
              {orbitNodes.map((node, index) => (
                <Box
                  key={index}
                  className="revolving-orbit-badge"
                  style={{ animationDelay: node.delay }}
                  sx={{
                    pointerEvents: 'auto',
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: 9999,
                      px: { xs: 1.6, sm: 2.2 },
                      py: { xs: 0.6, sm: 0.8 },
                      boxShadow: '0 4px 14px rgba(15, 23, 42, 0.08)',
                      fontSize: { xs: '0.74rem', sm: '0.825rem' },
                      fontWeight: 600,
                      color: '#1e293b',
                      whiteSpace: 'nowrap',
                      userSelect: 'none',
                      transition: 'transform 0.25s ease, border-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'scale(1.08)',
                        borderColor: '#93c5fd',
                        boxShadow: '0 8px 20px rgba(37, 99, 235, 0.16)',
                        color: '#2563eb',
                      },
                    }}
                  >
                    {node.label}
                  </Box>
                </Box>
              ))}

              {/* Center Core Black Ball with Tight Glowing Blue Border */}
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 8,
                  width: { xs: 135, sm: 155, md: 165 },
                  height: { xs: 135, sm: 155, md: 165 },
                  borderRadius: '50%',
                  backgroundColor: '#0b132b',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(96, 165, 250, 0.85)',
                  boxShadow: '0 0 12px 1px rgba(59, 130, 246, 0.65), 0 0 22px 2px rgba(37, 99, 235, 0.35), 0 14px 32px rgba(11, 19, 43, 0.4)',
                  p: 2,
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'default',
                  '&:hover': {
                    transform: 'scale(1.04)',
                    boxShadow: '0 0 18px 2px rgba(59, 130, 246, 0.8), 0 0 30px 4px rgba(37, 99, 235, 0.45), 0 16px 36px rgba(11, 19, 43, 0.45)',
                  },
                }}
              >
                <BrvsLogo light size="small" />
                <Typography
                  sx={{
                    color: '#94a3b8',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    mt: 0.8,
                  }}
                >
                  Unified ecosystem
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

