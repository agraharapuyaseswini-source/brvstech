'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import PlaceIcon from '@mui/icons-material/Place';
import CallToAction from '@/components/CallToAction';
import ValueProposition from '@/components/ValueProposition';
import { useContactModal } from '@/context/ContactContext';
import FuturisticTechCanvas from '@/components/FuturisticTechCanvas';

const stats = [
  { value: '15+', label: 'Years Serving Enterprises' },
  { value: '250+', label: 'Senior Engineers & Architects' },
  { value: '99.99%', label: 'SLA Delivery Compliance' },
  { value: '3', label: 'Global Operational Hubs' },
];

const offices = [
  {
    city: 'Dallas, Texas',
    role: 'Global Headquarters',
    address: '5050 Quorum Dr #700, Dallas, TX 75254, USA',
    phone: '+1 (408) 598-8149',
    email: 'sales@brvstech.com',
    details: 'Executive leadership, client partner teams, enterprise solution architecture, and strategic operations.',
  },
  {
    city: 'Visakhapatnam, India',
    role: 'Global Engineering & NOC Hub',
    address: '1st Floor, CBM Compound, Asilmetta, Vizag, AP 530003, India',
    phone: '+1 (408) 598-8149',
    email: 'hrteam@brvstech.com',
    details: '24/7/365 follow-the-sun Network Operations Center, cloud engineering squads, AI research, and delivery pods.',
  },
  {
    city: 'Dublin, Ireland',
    role: 'European Tech Center',
    address: 'European Enterprise Support Center, Ireland',
    phone: '+1 (408) 598-8149',
    email: 'sales@brvstech.com',
    details: 'European enterprise client coordination, GDPR compliance management, and regional cloud oversight.',
  },
];

const pillars = [
  {
    title: 'Accountability First',
    description: 'We do not hide behind vague promises. Every engagement comes with written SLAs and measurable KPIs that hold up to financial and technical audit.',
  },
  {
    title: 'Deep Environmental Empathy',
    description: 'We do not force cookie-cutter templates. We study your existing architecture, codebases, and team dynamics to design solutions that genuinely fit.',
  },
  {
    title: 'Bank-Grade Security',
    description: 'With ISO 27001, ISO 9001, and SOC 2 Type II accreditations, zero-trust security is baked into our engineering lifecycle from day one.',
  },
  {
    title: 'Supplier Diversity Partner',
    description: 'As a certified Women-Owned Small Business (WOSB), we empower enterprise clients to hit aggressive supplier-diversity targets while elevating technical execution.',
  },
];

export default function AboutPage() {
  const { openContactModal } = useContactModal();

  return (
    <Box>
      {/* 1. Header & Stats Section - NEURAL NODES BACKGROUND */}
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
                ABOUT BRVS GROUP
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
              Engineering with accountability,{' '}
              <Box component="span" sx={{ color: '#2563eb' }}>
                built for the long term.
              </Box>
            </Typography>

            <Typography sx={{ fontSize: { xs: '1rem', sm: '1.15rem' }, color: '#64748b', lineHeight: 1.6 }}>
              BRVS Group is a technology-driven company that builds long-term partnerships: we learn your
              environment, then deliver high-quality, scalable solutions that produce measurable results.
            </Typography>
          </Box>

          {/* Big Numbers Grid */}
          <Grid container spacing={3}>
            {stats.map((s, idx) => (
              <Grid key={idx} size={{ xs: 6, md: 3 }}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    borderRadius: '16px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)',
                  }}
                >
                  <Typography sx={{ fontSize: { xs: '2rem', sm: '2.5rem' }, fontWeight: 800, color: '#2563eb', mb: 0.5 }}>
                    {s.value}
                  </Typography>
                  <Typography sx={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
                    {s.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 2. Value Proposition Feature Cards - SOLID WHITE BACKGROUND */}
      <ValueProposition />

      {/* 3. Guiding Delivery Principles - NEURAL NODES BACKGROUND */}
      <Box
        sx={{
          py: { xs: 3, md: 4 },
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#eef5fe',
        }}
      >
        <FuturisticTechCanvas />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.8rem', sm: '2.3rem' },
              color: '#0b132b',
              textAlign: 'center',
              mb: 5,
            }}
          >
            Our Guiding Delivery Principles
          </Typography>

          <Grid container spacing={3.5}>
            {pillars.map((pillar, idx) => (
              <Grid key={idx} size={{ xs: 12, sm: 6 }}>
                <Card
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: '16px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 6px 20px rgba(15, 23, 42, 0.03)',
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#0b132b', mb: 1.5 }}>
                    {pillar.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.65 }}>
                    {pillar.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. Global Delivery Hubs - SOLID WHITE BACKGROUND */}
      <Box className="white-section-bg" sx={{ py: { xs: 3, md: 4 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.8rem', sm: '2.3rem' },
              color: '#0b132b',
              textAlign: 'center',
              mb: 1.5,
            }}
          >
            Global Presence & Operational Hubs
          </Typography>
          <Typography sx={{ textAlign: 'center', color: '#64748b', mb: 5, maxWidth: 600, mx: 'auto' }}>
            Operating follow-the-sun engineering and management across the United States, India, and Europe.
          </Typography>

          <Grid container spacing={3.5}>
            {offices.map((office, idx) => (
              <Grid key={idx} size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '16px',
                    p: 3.5,
                    backgroundColor: idx === 0 ? '#0b132b' : '#ffffff',
                    color: idx === 0 ? '#ffffff' : '#0b132b',
                    border: idx === 0 ? '1px solid #0b132b' : '1px solid #e2e8f0',
                    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <PlaceIcon sx={{ color: idx === 0 ? '#60a5fa' : '#2563eb' }} />
                    <Typography sx={{ fontWeight: 700, fontSize: '1.2rem', color: idx === 0 ? '#ffffff' : '#0b132b' }}>
                      {office.city}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: idx === 0 ? '#93c5fd' : '#2563eb',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      mb: 2,
                    }}
                  >
                    {office.role}
                  </Typography>
                  <Typography sx={{ fontSize: '0.85rem', color: idx === 0 ? '#cbd5e1' : '#475569', mb: 2 }}>
                    {office.address}
                  </Typography>
                  <Typography sx={{ fontSize: '0.85rem', color: idx === 0 ? '#94a3b8' : '#64748b', lineHeight: 1.6 }}>
                    {office.details}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 5. Call to Action Banner - DOTS BACKGROUND */}
      <CallToAction
        title="Partner with BRVS Group"
        subtitle="Speak directly with our leadership team about your strategic technology initiatives."
      />
    </Box>
  );
}
