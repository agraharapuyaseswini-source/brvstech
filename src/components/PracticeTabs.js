'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useContactModal } from '@/context/ContactContext';
import Link from 'next/link';
import FuturisticTechCanvas from './FuturisticTechCanvas';

const practices = [
  {
    id: '01',
    tabLabel: '01  Staff augmentation',
    image: '/images/hero/staff-fintech.jpg',
    tag: 'TALENT ON DEMAND',
    title: 'Staff augmentation',
    description:
      'Scalable, top-tier engineering talent and specialized domain experts, embedded seamlessly into your workflow and accountable to your roadmap.',
    points: [
      'Dedicated full-stack & cloud developers',
      'Rigorous 4-stage technical vetting',
      'Rapid onboarding within 48–72 hours',
    ],
  },
  {
    id: '02',
    tabLabel: '02  Managed services',
    image: '/images/hero/operations-healthcare.jpg',
    tag: '24/7 CLOUD & NOC',
    title: 'Managed services',
    description:
      'End-to-end cloud infrastructure monitoring, proactive incident response, and SLA-backed management to ensure continuous availability.',
    points: [
      '24/7/365 global follow-the-sun monitoring',
      'Automated disaster recovery and failover systems',
      'Continuous FinOps cloud cost optimization',
    ],
  },
  {
    id: '03',
    tabLabel: '03  App & infra management',
    image: '/images/hero/cloud-logistics.jpg',
    tag: 'PLATFORM ENGINEERING',
    title: 'App & infra management',
    description:
      'Modernize enterprise systems with microservices, container orchestration, robust CI/CD automation, and secure hybrid clouds.',
    points: [
      'Kubernetes orchestration & GitOps pipelines',
      'Zero-trust network architecture implementation',
      'Legacy application modernization and refactoring',
    ],
  },
  {
    id: '04',
    tabLabel: '04  Consultancy',
    image: '/images/hero/ai-roadmap-insurance.jpg',
    tag: 'STRATEGIC ARCHITECTURE',
    title: 'Consultancy',
    description:
      'Executive technical guidance and hands-on architects who translate complex business objectives into resilient, future-proof blueprints.',
    points: [
      'Enterprise architecture reviews & audit readiness',
      'Technology stack evaluation and selection',
      'Compliance alignment for SOC 2, ISO & HIPAA',
    ],
  },
  {
    id: '05',
    tabLabel: '05  AI & data products',
    image: '/images/hero/telemetry-manufacturing.jpg',
    tag: 'INTELLIGENT SYSTEMS',
    title: 'AI & data products',
    description:
      'Custom machine learning models, production generative AI workflows, and enterprise data pipelines built for measurable operational impact.',
    points: [
      'Enterprise RAG & fine-tuned LLM agents',
      'Streaming analytics and predictive data models',
      'Ethical AI governance and data privacy controls',
    ],
  },
];

export default function PracticeTabs({ onOpenContact }) {
  const { openContactModal } = useContactModal();
  const handleContact = onOpenContact || openContactModal;
  const [activeTab, setActiveTab] = useState(0);
  const [displayedTab, setDisplayedTab] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth fade-out then fade-in switch
  const handleTabChange = (nextIndex) => {
    if (nextIndex === activeTab || isFading) return;
    setActiveTab(nextIndex);
    setIsFading(true);
    setTimeout(() => {
      setDisplayedTab(nextIndex);
      setIsFading(false);
    }, 280);
  };

  // Auto-rotate practice tabs every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      const next = (activeTab + 1) % practices.length;
      handleTabChange(next);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused, activeTab, isFading]);

  const currentPractice = practices[displayedTab];

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 3, md: 4 },
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#eef5fe',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Neural Nodes Background Canvas */}
      <FuturisticTechCanvas />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 2, md: 3 } }}>
          <Typography
            sx={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#2563eb',
              letterSpacing: '0.08em',
              mb: 1.5,
              textTransform: 'uppercase',
            }}
          >
            SERVICES
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '2.85rem' },
              color: '#0b132b',
              letterSpacing: '-0.025em',
            }}
          >
            Choose a practice to see how it works
          </Typography>
        </Box>

        {/* Content Area: Left Tab Options, Right Showcase Card */}
        <Grid container spacing={{ xs: 4, md: 4.5 }} alignItems="stretch">
          {/* Left Column: Tab Option List (Equal in height to the right card) */}
          <Grid size={{ xs: 12, md: 4.2 }} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                gap: { xs: 1.5, md: 1.8 },
              }}
            >
              {practices.map((practice, index) => {
                const isSelected = activeTab === index;
                return (
                  <Box
                    key={practice.id}
                    component="button"
                    onClick={() => handleTabChange(index)}
                    sx={{
                      width: '100%',
                      flex: { md: 1 },
                      display: 'flex',
                      alignItems: 'center',
                      textAlign: 'left',
                      py: { xs: 1.8, md: 1.2 },
                      px: { xs: 2.5, md: 3 },
                      borderRadius: '14px',
                      backgroundColor: isSelected ? '#0b132b' : '#ffffff',
                      color: isSelected ? '#ffffff' : '#1e293b',
                      border: isSelected ? '1px solid #0b132b' : '1px solid #e2e8f0',
                      boxShadow: isSelected
                        ? '0 10px 25px rgba(11, 19, 43, 0.2)'
                        : '0 2px 6px rgba(15, 23, 42, 0.02)',
                      fontSize: { xs: '0.95rem', md: '1rem' },
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'background-color 0.35s ease, color 0.35s ease, border-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease',
                      outline: 'none',
                      fontFamily: 'inherit',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        backgroundColor: isSelected ? '#0b132b' : '#f8fafc',
                        borderColor: isSelected ? '#0b132b' : '#cbd5e1',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    {practice.tabLabel}
                  </Box>
                );
              })}
            </Box>
          </Grid>

          {/* Right Column: Practice Detailed Showcase Card */}
          <Grid size={{ xs: 12, md: 7.8 }} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 15px 35px rgba(15, 23, 42, 0.05)',
                backgroundColor: '#ffffff',
                overflow: 'hidden',
                p: { xs: 3, sm: 4 },
                minHeight: { xs: 440, sm: 380 },
              }}
            >
              <Box
                sx={{
                  opacity: isFading ? 0 : 1,
                  transform: isFading ? 'translateY(6px) scale(0.995)' : 'translateY(0) scale(1)',
                  transition: 'opacity 0.28s cubic-bezier(0.25, 1, 0.5, 1), transform 0.28s cubic-bezier(0.25, 1, 0.5, 1)',
                  willChange: 'opacity, transform',
                }}
              >
                <Grid container spacing={{ xs: 3, sm: 4 }} alignItems="center">
                  {/* Visual Half with Real Artwork */}
                  <Grid size={{ xs: 12, sm: 5 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: { xs: 220, sm: 280 },
                        borderRadius: '14px',
                        overflow: 'hidden',
                        backgroundColor: '#eff6ff',
                        boxShadow: '0 4px 14px rgba(37, 99, 235, 0.08)',
                      }}
                    >
                      <Image
                        src={currentPractice.image}
                        alt={currentPractice.title}
                        fill
                        priority
                        sizes="(max-width: 600px) 100vw, 320px"
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center',
                        }}
                      />
                    </Box>
                  </Grid>

                  {/* Info Half */}
                  <Grid size={{ xs: 12, sm: 7 }}>
                    <Typography
                      sx={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#2563eb',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        mb: 1,
                      }}
                    >
                      {currentPractice.tag}
                    </Typography>

                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: '#0b132b',
                        fontSize: { xs: '1.4rem', sm: '1.65rem' },
                        mb: 1.5,
                      }}
                    >
                      {currentPractice.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: '0.9rem',
                        color: '#64748b',
                        lineHeight: 1.6,
                        mb: 3,
                      }}
                    >
                      {currentPractice.description}
                    </Typography>

                    {/* Bullet points */}
                    <Stack spacing={1.2} sx={{ mb: 3.5 }}>
                      {currentPractice.points.map((point, idx) => (
                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <CheckCircleIcon sx={{ fontSize: 18, color: '#2563eb', flexShrink: 0 }} />
                          <Typography sx={{ fontSize: '0.85rem', color: '#334155', fontWeight: 500 }}>
                            {point}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    {/* Link action */}
                    <Button
                      component={Link}
                      href="/services"
                      endIcon={<ArrowForwardIcon sx={{ fontSize: '1rem !important' }} />}
                      sx={{
                        p: 0,
                        color: '#2563eb',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        '&:hover': {
                          backgroundColor: 'transparent',
                          color: '#1d4ed8',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Explore {currentPractice.title}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
