'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import { useContactModal } from '@/context/ContactContext';
import FuturisticTechCanvas from './FuturisticTechCanvas';

export default function CallToAction({ title = 'Put BRVS in your orbit.', subtitle = 'Our executive solution architects will review your requirements and come back with a plan.' }) {
  const { openContactModal } = useContactModal();

  return (
    <Box
      id="contact-cta"
      sx={{
        py: { xs: 3, md: 4 },
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#eef5fe',
        textAlign: 'center',
      }}
    >
      {/* Neural Nodes Background Canvas */}
      <FuturisticTechCanvas />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Top Floating Phone Badge */}
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 56,
            height: 56,
            borderRadius: '50%',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            boxShadow: '0 8px 24px rgba(37, 99, 235, 0.35)',
            mb: 2,
            transition: 'transform 0.25s ease',
            '&:hover': {
              transform: 'scale(1.08)',
            },
          }}
        >
          <PhoneIcon sx={{ fontSize: 26 }} />
        </Box>

        {/* Heading */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.6rem' },
            color: '#0b132b',
            letterSpacing: '-0.03em',
            mb: 2,
          }}
        >
          {title}
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontSize: { xs: '1rem', sm: '1.15rem' },
            color: '#64748b',
            lineHeight: 1.6,
            maxWidth: 620,
            mx: 'auto',
            mb: 4.5,
          }}
        >
          {subtitle}
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            width: '100%',
            mx: 'auto',
          }}
        >
          <Button
            variant="contained"
            onClick={openContactModal}
            sx={{
              backgroundColor: '#0b132b',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '0.95rem',
              py: 1.3,
              px: 3.8,
              borderRadius: 9999,
              boxShadow: '0 4px 14px rgba(11, 19, 43, 0.2)',
              '&:hover': {
                backgroundColor: '#1c2541',
              },
            }}
          >
            Book a strategy call
          </Button>

          <Button
            variant="outlined"
            component="a"
            href="tel:+14085988149"
            sx={{
              backgroundColor: '#ffffff',
              borderColor: '#e2e8f0',
              color: '#0b132b',
              fontWeight: 600,
              fontSize: '0.95rem',
              py: 1.3,
              px: 3.5,
              borderRadius: 9999,
              boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
              '&:hover': {
                borderColor: '#cbd5e1',
                backgroundColor: '#f8fafc',
              },
            }}
          >
            +1 (408) 598-8149
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
