'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useContactModal } from '@/context/ContactContext';
import FuturisticTechCanvas from './FuturisticTechCanvas';

const caseStudies = [
  {
    image: '/images/hero/telemetry-manufacturing.jpg',
    category: 'AI & DATA PRODUCTS · MANUFACTURING',
    title: 'Real-time telemetry across the plant floor',
    description: 'Sensor data from 40+ endpoints in one dashboard, with predictive alerts before a line goes down.',
    stats: [
      { value: '40+', label: 'endpoints' },
      { value: 'Live', label: 'inference' },
      { value: '1', label: 'dashboard' },
    ],
  },
  {
    image: '/images/hero/operations-healthcare.jpg',
    category: 'MANAGED SERVICES · HEALTHCARE',
    title: 'A 24/7 operations desk for 1,200 endpoints',
    description: 'Round-the-clock NOC and SOC, automated patching and an estate hardened ahead of a HIPAA audit.',
    stats: [
      { value: '<15 min', label: 'MTTR' },
      { value: '99.9%', label: 'uptime' },
      { value: '24/7', label: 'coverage' },
    ],
  },
  {
    image: '/images/hero/cloud-logistics.jpg',
    category: 'APP & INFRASTRUCTURE · LOGISTICS',
    title: '140 workloads to multi-cloud, zero downtime',
    description: 'A phased move to AWS and Azure, rebuilt with Terraform, Kubernetes and CI/CD.',
    stats: [
      { value: '140', label: 'workloads' },
      { value: '0', label: 'outages' },
      { value: '31%', label: 'lower run cost' },
    ],
  },
  {
    image: '/images/hero/ai-roadmap-insurance.jpg',
    category: 'CONSULTANCY · INSURANCE',
    title: 'A board-approved AI roadmap in six weeks',
    description: 'Twelve AI use cases scored for value and risk, then three compliant pilots, starting with claims triage.',
    stats: [
      { value: '12', label: 'use cases' },
      { value: '3', label: 'pilots' },
      { value: '30%', label: 'faster triage' },
    ],
  },
  {
    image: '/images/hero/staff-fintech.jpg',
    category: 'STAFF AUGMENTATION · FINTECH',
    title: 'From 6 to 28 engineers in ten weeks',
    description: "Vetted cloud and full-stack engineers placed inside the client's sprints, with no slip in the release train.",
    stats: [
      { value: '22', label: 'placed' },
      { value: '10 wks', label: 'to capacity' },
      { value: '0', label: 'missed releases' },
    ],
  },
];

export default function Hero({ onOpenContact }) {
  const { openContactModal } = useContactModal();
  const handleContact = onOpenContact || openContactModal;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cyclingToBackIndex, setCyclingToBackIndex] = useState(null);
  const [cyclingToFrontIndex, setCyclingToFrontIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const currentIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  currentIndexRef.current = currentIndex;
  isAnimatingRef.current = isAnimating;

  const handleNext = () => {
    if (isAnimatingRef.current) return;
    setIsAnimating(true);
    isAnimatingRef.current = true;
    const prev = currentIndexRef.current;
    const next = (prev + 1) % caseStudies.length;
    setCyclingToBackIndex(prev);
    setCurrentIndex(next);

    setTimeout(() => {
      setCyclingToBackIndex(null);
      setIsAnimating(false);
      isAnimatingRef.current = false;
    }, 650);
  };

  const handlePrev = () => {
    if (isAnimatingRef.current) return;
    setIsAnimating(true);
    isAnimatingRef.current = true;
    const prev = currentIndexRef.current === 0 ? caseStudies.length - 1 : currentIndexRef.current - 1;
    setCyclingToFrontIndex(prev);
    setCurrentIndex(prev);

    setTimeout(() => {
      setCyclingToFrontIndex(null);
      setIsAnimating(false);
      isAnimatingRef.current = false;
    }, 650);
  };

  const handleCardClick = (index) => {
    if (isAnimatingRef.current || index === currentIndex) return;
    handleNext();
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      if (!isAnimatingRef.current) {
        handleNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <Box
      id="hero-case-studies"
      sx={{
        pt: { xs: 1.5, md: 2 },
        pb: { xs: 2, md: 3 },
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#eef5fe',
      }}
    >
      {/* Interactive 60fps Neural Tech Network Background Canvas */}
      <FuturisticTechCanvas />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
          {/* Left Column: Heading and CTAs */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            {/* Top Enterprise Badge */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 0.6,
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: 9999,
                mb: 3,
                boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  backgroundColor: '#2563eb',
                }}
              />
              <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569' }}>
                Enterprise technology · Dallas, TX
              </Typography>
            </Box>

            {/* Main Headline */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.4rem', lg: '3.9rem' },
                fontWeight: 800,
                color: '#0b132b',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                mb: 3,
              }}
            >
              Engineering,
              <br />
              operations and
              <br />
              AI,{' '}
              <Box
                component="span"
                sx={{
                  color: '#2563eb',
                  display: 'inline',
                }}
              >
                in perfect orbit.
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                fontSize: { xs: '1rem', sm: '1.125rem' },
                color: '#64748b',
                lineHeight: 1.6,
                maxWidth: 540,
                mb: 4.5,
              }}
            >
              BRVS Group brings vetted engineers, 24/7 managed operations and AI strategy
              together under one accountable partner. Browse a few of the outcomes we design for.
            </Typography>

            {/* Action Buttons */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 5 }}>
              <Button
                variant="contained"
                onClick={handleContact}
                sx={{
                  backgroundColor: '#0b132b',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  py: 1.3,
                  px: 3.5,
                  borderRadius: 9999,
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
                href="/services"
                sx={{
                  backgroundColor: '#ffffff',
                  borderColor: '#e2e8f0',
                  color: '#334155',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  py: 1.3,
                  px: 3.5,
                  borderRadius: 9999,
                  '&:hover': {
                    borderColor: '#cbd5e1',
                    backgroundColor: '#f8fafc',
                  },
                }}
              >
                Explore services
              </Button>
            </Stack>
          </Grid>

          {/* Right Column: Stacked Cards Carousel Effect */}
          <Grid size={{ xs: 12, md: 5.5 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: { xs: 340, sm: 390 },
                height: 475,
                overflow: 'visible', // Ensures back cards are fully visible overlapping behind!
                perspective: 1200,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Concentric Orbit Rings & Nodes (True Round Circles) */}
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: 460, sm: 530 },
                  height: { xs: 460, sm: 530 },
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              >
                {/* Outer Orbit Circle */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '1px solid rgba(191, 219, 254, 0.75)',
                  }}
                />

                {/* Inner Dashed Orbit Circle */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: '78%',
                    height: '78%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                    border: '1px dashed rgba(147, 197, 253, 0.65)',
                  }}
                />

                {/* Top Satellite Dot (12 o'clock) */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-5px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: '#2563eb',
                    boxShadow: '0 0 10px rgba(37, 99, 235, 0.5)',
                  }}
                />

                {/* Left Satellite Dot (9 o'clock) */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '-5px',
                    transform: 'translateY(-50%)',
                    width: 9,
                    height: 9,
                    borderRadius: '50%',
                    backgroundColor: '#0b132b',
                  }}
                />

                {/* Right Satellite Dot (3 o'clock) */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '-4px',
                    transform: 'translateY(-50%)',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#93c5fd',
                  }}
                />
              </Box>

              {/* Render Stacked Cards */}
              {caseStudies.map((study, index) => {
                const isCyclingToBack = index === cyclingToBackIndex;
                const isCyclingToFront = index === cyclingToFrontIndex;
                const diff = (index - currentIndex + caseStudies.length) % caseStudies.length;

                // Card Stack Positioning & Fading Styles
                let transformStyle = '';
                let opacityStyle = 0;
                let zIndexStyle = 2;
                let boxShadowStyle = 'none';

                if (isCyclingToBack) {
                  // Keyframe "stack-slide-to-back" handles animation to the back smoothly
                } else if (isCyclingToFront) {
                  // Keyframe "stack-slide-to-front" handles animation to the front smoothly
                } else if (diff === 0) {
                  // 1. TOP ACTIVE CARD: Foreground, fully opaque
                  transformStyle = 'translate3d(0, 0, 0px) scale(1)';
                  opacityStyle = 1;
                  zIndexStyle = 20;
                  boxShadowStyle = '0 20px 45px -10px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.85)';
                } else if (diff === 1) {
                  // 2. 1st STACKED CARD BEHIND: Lightly faded (0.75 opacity), shifted top-right
                  transformStyle = 'translate3d(20px, -12px, 0px) scale(0.96)';
                  opacityStyle = 0.75;
                  zIndexStyle = 14;
                  boxShadowStyle = '0 14px 35px -8px rgba(15, 23, 42, 0.07), 0 0 0 1px rgba(226, 232, 240, 0.7)';
                } else if (diff === 2) {
                  // 3. 2nd STACKED CARD BEHIND: More faded (0.45 opacity), shifted further top-right
                  transformStyle = 'translate3d(36px, -20px, 0px) scale(0.92)';
                  opacityStyle = 0.45;
                  zIndexStyle = 8;
                  boxShadowStyle = '0 10px 25px -8px rgba(15, 23, 42, 0.05), 0 0 0 1px rgba(226, 232, 240, 0.6)';
                } else {
                  // Idle cards waiting in queue behind the stack
                  transformStyle = 'translate3d(48px, -28px, 0px) scale(0.88)';
                  opacityStyle = 0;
                  zIndexStyle = 2;
                }

                return (
                  <Card
                    key={index}
                    onClick={() => handleCardClick(index)}
                    className={
                      isCyclingToBack
                        ? 'stack-slide-to-back'
                        : isCyclingToFront
                        ? 'stack-slide-to-front'
                        : ''
                    }
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#ffffff',
                      borderRadius: '20px',
                      border: '1px solid rgba(226, 232, 240, 0.9)',
                      boxShadow: boxShadowStyle,
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: diff === 1 || diff === 2 ? 'pointer' : 'default',
                      transform: isCyclingToBack || isCyclingToFront ? undefined : transformStyle,
                      opacity: isCyclingToBack || isCyclingToFront ? undefined : opacityStyle,
                      zIndex: isCyclingToBack || isCyclingToFront ? undefined : zIndexStyle,
                      pointerEvents: isCyclingToBack || isCyclingToFront ? 'none' : diff === 0 || diff === 1 || diff === 2 ? 'auto' : 'none',
                      transition: isCyclingToBack || isCyclingToFront
                        ? 'none'
                        : 'transform 0.65s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.65s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.65s ease',
                      transformOrigin: 'center center',
                      willChange: 'transform, opacity',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      '&:hover': {
                        transform: diff === 1 ? 'translate3d(24px, -15px, 0px) scale(0.97)' : diff === 2 ? 'translate3d(40px, -23px, 0px) scale(0.93)' : undefined,
                      },
                    }}
                  >
                    {/* Top Artwork Image */}
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: { xs: 205, sm: 225 },
                        overflow: 'hidden',
                        backgroundColor: '#f1f5f9',
                      }}
                    >
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        sizes="(max-width: 600px) 100vw, 390px"
                        priority={true}
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center',
                        }}
                      />
                    </Box>

                    {/* Case Study Content */}
                    <CardContent sx={{ p: { xs: 2.2, sm: 2.8 }, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: '#2563eb',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            mb: 0.8,
                          }}
                        >
                          {study.category}
                        </Typography>

                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: '#0b132b',
                            fontSize: '1.25rem',
                            lineHeight: 1.25,
                            mb: 1,
                          }}
                        >
                          {study.title}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: '0.85rem',
                            color: '#64748b',
                            lineHeight: 1.5,
                            mb: 2,
                          }}
                        >
                          {study.description}
                        </Typography>
                      </Box>

                      {/* Metrics Stats Row */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: { xs: 2.5, sm: 3.5 },
                          pt: 1.8,
                          borderTop: '1px solid #f1f5f9',
                        }}
                      >
                        {study.stats.map((stat, sIdx) => (
                          <Box key={sIdx}>
                            <Typography
                              sx={{
                                fontWeight: 800,
                                fontSize: '1.3rem',
                                color: '#0b132b',
                                lineHeight: 1.1,
                              }}
                            >
                              {stat.value}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: '0.72rem',
                                color: '#64748b',
                                fontWeight: 500,
                              }}
                            >
                              {stat.label}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>

            {/* Carousel Navigation Arrows: Left & Right Bottom of Cards */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                maxWidth: { xs: 340, sm: 390 },
                mt: 1.5,
                px: 0.5,
                position: 'relative',
                zIndex: 10,
              }}
            >
              <IconButton
                onClick={handlePrev}
                size="small"
                aria-label="Previous case study"
                sx={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  color: '#475569',
                  width: 38,
                  height: 38,
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.08)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: '#f1f5f9',
                    borderColor: '#cbd5e1',
                    transform: 'scale(1.06)',
                  },
                }}
              >
                <ArrowBackIcon fontSize="small" />
              </IconButton>

              <Typography sx={{ fontSize: '0.825rem', color: '#64748b', fontWeight: 600 }}>
                {currentIndex + 1} / {caseStudies.length}
              </Typography>

              <IconButton
                onClick={handleNext}
                size="small"
                aria-label="Next case study"
                sx={{
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  width: 38,
                  height: 38,
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.28)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: '#1d4ed8',
                    transform: 'scale(1.06)',
                  },
                }}
              >
                <ArrowForwardIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
