'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CallToAction from '@/components/CallToAction';
import { useContactModal } from '@/context/ContactContext';
import FuturisticTechCanvas from '@/components/FuturisticTechCanvas';

const filters = ['All', 'Consultancy', 'Managed Services', 'AI & Data', 'Staff Augmentation', 'Cloud'];

const caseStudiesList = [
  {
    category: 'CONSULTANCY · INSURANCE',
    tag: 'Consultancy',
    title: 'A board-approved AI roadmap in six weeks',
    description:
      'Partnered with a top-tier commercial insurer to evaluate 12 high-priority generative AI use cases, conducting rigorous risk assessments and deploying three production pilots starting with automated claims triage.',
    stats: [
      { value: '12', label: 'Use Cases Scored' },
      { value: '3', label: 'Compliant Pilots' },
      { value: '30%', label: 'Faster Triage' },
    ],
    highlight: 'Reduced claims backlog by 45% within the first quarter of deployment.',
  },
  {
    category: 'MANAGED SERVICES · FINTECH',
    tag: 'Managed Services',
    title: 'Zero-downtime multi-cloud infrastructure migration',
    description:
      'Seamlessly migrated 140+ mission-critical banking microservices from legacy on-prem data centers to a resilient multi-region Kubernetes platform with automated failover and 24/7 NOC monitoring.',
    stats: [
      { value: '140+', label: 'Workloads' },
      { value: '99.99%', label: 'Guaranteed Uptime' },
      { value: '42%', label: 'Infrastructure Savings' },
    ],
    highlight: 'Maintained strict financial audit compliance with zero transaction drops.',
  },
  {
    category: 'AI & DATA · BANKING',
    tag: 'AI & Data',
    title: 'Real-time transaction fraud scoring & telemetry engine',
    description:
      'Designed and deployed high-throughput streaming ML pipelines capable of processing over 5 million daily events with sub-10ms inference, detecting fraudulent transactions before clearing.',
    stats: [
      { value: '5M+', label: 'Events / Day' },
      { value: '<10ms', label: 'Inference Latency' },
      { value: '94%', label: 'Detection Accuracy' },
    ],
    highlight: 'Prevented an estimated $14M in annual unauthorized transaction loss.',
  },
  {
    category: 'CLOUD & INFRA · HEALTHTECH',
    tag: 'Cloud',
    title: 'HIPAA-compliant microservices platform modernization',
    description:
      'Rebuilt monolithic patient records management into a high-throughput event-driven microservices architecture adhering strictly to HIPAA and SOC 2 Type II security specifications.',
    stats: [
      { value: '50+', label: 'Microservices' },
      { value: 'SOC 2', label: 'Type II Certified' },
      { value: '3.5x', label: 'Throughput Increase' },
    ],
    highlight: 'Reduced patient intake workflow latency from 15 minutes to under 2 minutes.',
  },
  {
    category: 'STAFF AUGMENTATION · SAAS',
    tag: 'Staff Augmentation',
    title: 'Rapid-scale elite engineering pod for enterprise SaaS',
    description:
      'Integrated an 8-engineer senior squad with deep expertise in distributed systems, React, and cloud orchestration into active sprint cycles within 72 hours without disrupting current roadmap deliverables.',
    stats: [
      { value: '8', label: 'Senior Engineers' },
      { value: '72h', label: 'Onboarding SLA' },
      { value: '100%', label: 'Sprint Velocity' },
    ],
    highlight: 'Enabled the client to launch their Q3 enterprise tier 6 weeks ahead of schedule.',
  },
  {
    category: 'MANAGED SERVICES · LOGISTICS',
    tag: 'Managed Services',
    title: 'Global fleet telemetry & 24/7 mission control',
    description:
      'Implemented IoT ingest nodes and real-time observability across 12,000 commercial vehicles, backed by BRVS follow-the-sun monitoring and automated dispatch failover.',
    stats: [
      { value: '12K', label: 'Active Vehicles' },
      { value: '24/7', label: 'Follow-The-Sun NOC' },
      { value: '22%', label: 'Fuel & Route Savings' },
    ],
    highlight: 'Automated predictive engine maintenance warnings 48 hours prior to failure.',
  },
];

export default function WorkPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const { openContactModal } = useContactModal();

  const filteredStudies =
    selectedFilter === 'All'
      ? caseStudiesList
      : caseStudiesList.filter((item) => item.tag === selectedFilter || item.category.includes(selectedFilter.toUpperCase()));

  return (
    <Box>
      {/* 1. Header & Filters Section - NEURAL NODES BACKGROUND */}
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
          <Box sx={{ textAlign: 'center', maxWidth: 840, mx: 'auto' }}>
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
                CLIENT OUTCOMES & CASE STUDIES
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
              Measurable impact,{' '}
              <Box component="span" sx={{ color: '#2563eb' }}>
                proven outcomes.
              </Box>
            </Typography>

            <Typography sx={{ fontSize: { xs: '1rem', sm: '1.15rem' }, color: '#64748b', lineHeight: 1.6 }}>
              Explore how BRVS delivers enterprise agility, uncompromised stability, and custom AI architectures
              for high-growth enterprises worldwide.
            </Typography>

            {/* Filter Pills */}
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{ justifyContent: 'center', flexWrap: 'wrap', mt: 4 }}
            >
              {filters.map((filter) => {
                const isSelected = selectedFilter === filter;
                return (
                  <Button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    sx={{
                      borderRadius: 9999,
                      px: 2.5,
                      py: 0.8,
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      backgroundColor: isSelected ? '#0b132b !important' : '#ffffff',
                      color: isSelected ? '#ffffff' : '#475569',
                      border: isSelected ? '1px solid #0b132b' : '1px solid #e2e8f0',
                      boxShadow: isSelected ? '0 4px 12px rgba(11, 19, 43, 0.15)' : 'none',
                      '&:hover': {
                        backgroundColor: isSelected ? '#0b132b' : '#f8fafc',
                      },
                    }}
                  >
                    {filter}
                  </Button>
                );
              })}
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* 2. Case Studies Grid - SOLID WHITE BACKGROUND */}
      <Box className="white-section-bg" sx={{ py: { xs: 3, md: 4 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {filteredStudies.map((study, idx) => (
              <Grid key={idx} size={{ xs: 12, md: 6 }}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)',
                    backgroundColor: '#ffffff',
                    p: { xs: 3, sm: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 16px 36px rgba(15, 23, 42, 0.08)',
                      borderColor: '#bfdbfe',
                    },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#2563eb',
                        letterSpacing: '0.08em',
                        mb: 1,
                      }}
                    >
                      {study.category}
                    </Typography>

                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: '#0b132b',
                        fontSize: { xs: '1.35rem', sm: '1.5rem' },
                        lineHeight: 1.3,
                        mb: 2,
                      }}
                    >
                      {study.title}
                    </Typography>

                    <Typography sx={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.6, mb: 3 }}>
                      {study.description}
                    </Typography>

                    <Box
                      sx={{
                        p: 2,
                        backgroundColor: '#f8fafc',
                        borderLeft: '3px solid #2563eb',
                        borderRadius: 1.5,
                        mb: 3,
                      }}
                    >
                      <Typography sx={{ fontSize: '0.85rem', color: '#334155', fontStyle: 'italic' }}>
                        &ldquo;{study.highlight}&rdquo;
                      </Typography>
                    </Box>
                  </Box>

                  <Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        pt: 2.5,
                        borderTop: '1px solid #f1f5f9',
                        mb: 2.5,
                      }}
                    >
                      {study.stats.map((stat, sIdx) => (
                        <Box key={sIdx}>
                          <Typography sx={{ fontWeight: 800, fontSize: '1.35rem', color: '#0b132b', lineHeight: 1.1 }}>
                            {stat.value}
                          </Typography>
                          <Typography sx={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500 }}>
                            {stat.label}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <Button
                      onClick={openContactModal}
                      endIcon={<ArrowForwardIcon fontSize="small" />}
                      sx={{
                        p: 0,
                        color: '#2563eb',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        '&:hover': { backgroundColor: 'transparent', textDecoration: 'underline' },
                      }}
                    >
                      Discuss this solution
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. Call to Action Banner - DOTS BACKGROUND */}
      <CallToAction
        title="Ready to engineer your next breakthrough?"
        subtitle="Schedule a consultation with our architects to evaluate your technical roadmap."
      />
    </Box>
  );
}
