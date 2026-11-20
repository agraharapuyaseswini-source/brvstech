'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import CallToAction from '@/components/CallToAction';
import { useContactModal } from '@/context/ContactContext';
import FuturisticTechCanvas from '@/components/FuturisticTechCanvas';

const perks = [
  {
    icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 28, color: '#2563eb' }} />,
    title: 'High-Impact Enterprise Projects',
    description: 'Work directly on distributed systems and AI platforms that process millions of daily transactions.',
  },
  {
    icon: <SchoolOutlinedIcon sx={{ fontSize: 28, color: '#2563eb' }} />,
    title: 'Certifications & Continuous Learning',
    description: 'Annual sponsorship and study budgets for AWS, Azure, GCP, and AI/ML advanced certifications.',
  },
  {
    icon: <PublicOutlinedIcon sx={{ fontSize: 28, color: '#2563eb' }} />,
    title: 'Global Engineering Culture',
    description: 'Collaborate with top engineering talent across our Dallas, Visakhapatnam, and European hubs.',
  },
  {
    icon: <FavoriteBorderOutlinedIcon sx={{ fontSize: 28, color: '#2563eb' }} />,
    title: 'Comprehensive Health & Flexibility',
    description: 'Industry-leading healthcare packages, hybrid work flexibility, and generous paid time off.',
  },
];

const openPositions = [
  {
    title: 'Senior Cloud & DevOps Architect',
    department: 'Cloud & Infrastructure',
    location: 'Dallas, TX / Remote (US)',
    type: 'Full-time',
    experience: '7+ years',
    description: 'Lead Kubernetes orchestration, Terraform automation, and multi-cloud resilience for tier-1 enterprise clients.',
  },
  {
    title: 'Staff Full-Stack Engineer (React & Node.js)',
    department: 'Engineering',
    location: 'Visakhapatnam, India / Hybrid',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Architect scalable web applications, event-driven backends, and micro-frontends with high performance standards.',
  },
  {
    title: 'Generative AI & Machine Learning Engineer',
    department: 'AI & Data',
    location: 'Dallas, TX / Remote',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Build production agentic workflows, fine-tune open-weights LLMs, and optimize enterprise RAG vector stores.',
  },
  {
    title: 'Site Reliability Engineer (24/7 NOC / SRE)',
    department: 'Managed Services',
    location: 'Visakhapatnam, India / Shift',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Maintain 99.99% uptime SLAs across distributed cloud workloads with Prometheus, Datadog, and automated recovery.',
  },
  {
    title: 'Principal Enterprise Solutions Architect',
    department: 'Consultancy',
    location: 'Dallas, TX / Hybrid',
    type: 'Full-time',
    experience: '10+ years',
    description: 'Work with C-level client executives to formulate technology roadmaps, cloud migrations, and security postures.',
  },
  {
    title: 'Data Engineer (Snowflake & Databricks)',
    department: 'AI & Data',
    location: 'Visakhapatnam, India / Remote',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Design real-time data pipelines, lakehouse architectures, and streaming transforms for high-volume analytics.',
  },
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState('All');
  const { openContactModal } = useContactModal();

  const departments = ['All', 'Engineering', 'Cloud & Infrastructure', 'AI & Data', 'Managed Services', 'Consultancy'];

  const filteredJobs =
    selectedDept === 'All' ? openPositions : openPositions.filter((job) => job.department === selectedDept);

  return (
    <Box>
      {/* 1. Header & Perks Section - NEURAL NODES BACKGROUND */}
      <Box
        sx={{
          pt: { xs: 9.5, md: 11.5 },
          pb: { xs: 2.5, md: 3 },
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#eef5fe',
        }}
      >
        <FuturisticTechCanvas />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', maxWidth: 840, mx: 'auto', mb: 6 }}>
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
                mb: 2.5,
                boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
              }}
            >
              <Box sx={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#2563eb' }} />
              <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569' }}>
                JOIN THE BRVS TEAM
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.4rem', md: '3.8rem' },
                fontWeight: 800,
                color: '#0b132b',
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                mb: 2.5,
              }}
            >
              Put your talents{' '}
              <Box component="span" sx={{ color: '#2563eb' }}>
                in our orbit.
              </Box>
            </Typography>

            <Typography sx={{ fontSize: { xs: '1rem', sm: '1.15rem' }, color: '#64748b', lineHeight: 1.6 }}>
              We are solving high-stakes technical challenges for enterprise organizations. Join a culture
              built on engineering craft, technical curiosity, and authentic ownership.
            </Typography>
          </Box>

          {/* Culture & Perks Grid */}
          <Grid container spacing={3}>
            {perks.map((perk, idx) => (
              <Grid key={idx} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: '16px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)',
                    transition: 'all 0.25s ease',
                    '&:hover': { transform: 'translateY(-4px)', borderColor: '#bfdbfe' },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{perk.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.05rem', color: '#0b132b', mb: 1 }}>
                    {perk.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.55 }}>
                    {perk.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 2. Live Open Roles - SOLID WHITE BACKGROUND */}
      <Box className="white-section-bg" sx={{ py: { xs: 3, md: 4 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, fontSize: { xs: '1.8rem', sm: '2.3rem' }, color: '#0b132b', mb: 1.5 }}>
              Current Open Opportunities
            </Typography>
            <Typography sx={{ color: '#64748b', fontSize: '1rem' }}>
              Explore current roles across our US and India engineering hubs.
            </Typography>

            {/* Department filters */}
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{ justifyContent: 'center', flexWrap: 'wrap', mt: 3.5 }}
            >
              {departments.map((dept) => {
                const isSelected = selectedDept === dept;
                return (
                  <Button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    sx={{
                      borderRadius: 9999,
                      px: 2.5,
                      py: 0.8,
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      backgroundColor: isSelected ? '#0b132b !important' : '#ffffff',
                      color: isSelected ? '#ffffff' : '#475569',
                      border: isSelected ? '1px solid #0b132b' : '1px solid #e2e8f0',
                      '&:hover': { backgroundColor: isSelected ? '#0b132b' : '#f8fafc' },
                    }}
                  >
                    {dept}
                  </Button>
                );
              })}
            </Stack>
          </Box>

          {/* Job listings list */}
          <Stack spacing={2.5}>
            {filteredJobs.map((job, idx) => (
              <Card
                key={idx}
                sx={{
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)',
                  p: { xs: 3, sm: 3.5 },
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', md: 'center' },
                  gap: 3,
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    borderColor: '#2563eb',
                    boxShadow: '0 8px 24px rgba(37, 99, 235, 0.08)',
                  },
                }}
              >
                <Box sx={{ maxWidth: 700 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1, flexWrap: 'wrap' }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.25rem', color: '#0b132b' }}>
                      {job.title}
                    </Typography>
                    <Chip
                      label={job.department}
                      size="small"
                      sx={{ backgroundColor: '#eff6ff', color: '#2563eb', fontWeight: 600, fontSize: '0.75rem' }}
                    />
                  </Box>

                  <Typography sx={{ fontSize: '0.9rem', color: '#64748b', mb: 2 }}>
                    {job.description}
                  </Typography>

                  <Stack direction="row" spacing={2.5} sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                      <LocationOnOutlinedIcon sx={{ fontSize: 18, color: '#94a3b8' }} />
                      <Typography sx={{ fontSize: '0.85rem', color: '#475569', fontWeight: 500 }}>
                        {job.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                      <WorkOutlinedIcon sx={{ fontSize: 18, color: '#94a3b8' }} />
                      <Typography sx={{ fontSize: '0.85rem', color: '#475569', fontWeight: 500 }}>
                        {job.type} · {job.experience}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>

                <Button
                  variant="contained"
                  onClick={openContactModal}
                  sx={{
                    backgroundColor: '#0b132b',
                    color: '#ffffff',
                    borderRadius: 9999,
                    px: 3.5,
                    py: 1.1,
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    '&:hover': { backgroundColor: '#1c2541' },
                  }}
                >
                  Apply Now
                </Button>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* 3. Call to Action Banner - DOTS BACKGROUND */}
      <CallToAction
        title="Don't see your specific role?"
        subtitle="We are constantly scouting for top tier engineers. Send your resume to hrteam@brvstech.com"
      />
    </Box>
  );
}
