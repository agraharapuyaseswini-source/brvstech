'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import SpeedIcon from '@mui/icons-material/Speed';
import HubIcon from '@mui/icons-material/Hub';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import CallToAction from '@/components/CallToAction';
import OrbitEcosystem from '@/components/OrbitEcosystem';
import { useContactModal } from '@/context/ContactContext';
import FuturisticTechCanvas from '@/components/FuturisticTechCanvas';

const products = [
  {
    icon: <AutoModeIcon sx={{ fontSize: 32, color: '#2563eb' }} />,
    tag: 'AUTOMATION',
    name: 'BRVS Orbit Automate',
    badge: 'Proprietary Engine',
    subtitle: 'Zero-touch orchestration for repetitive enterprise operations and workflows.',
    description:
      'Eliminates friction across multi-step human-in-the-loop workflows. Orbit Automate triggers event-driven actions across ERP, CRM, and cloud platforms with strict audit logging.',
    metrics: ['80% reduction in manual triage', 'Sub-second event trigger', 'Full SOC 2 audit trail'],
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 32, color: '#2563eb' }} />,
    tag: 'REAL-TIME DATA',
    name: 'BRVS DataPulse Mesh',
    badge: 'High Throughput',
    subtitle: 'Ultra-low latency streaming ingest and anomaly detection framework.',
    description:
      'Engineered for financial, healthtech, and logistics workloads. Handles millions of concurrent events per second, executing real-time data scoring and instant alerts.',
    metrics: ['Sub-10ms processing latency', '99.999% data delivery guarantee', 'Native Kafka & Snowflake connectors'],
  },
  {
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 32, color: '#2563eb' }} />,
    tag: 'AI & ML',
    name: 'BRVS Cognition AI Suite',
    badge: 'Agentic Workflows',
    subtitle: 'Enterprise-grade RAG, fine-tuned agentic models, and document intelligence.',
    description:
      'Enables organizations to securely deploy generative AI agents backed by internal knowledge stores without vendor lock-in or proprietary data leakage.',
    metrics: ['Zero public training exposure', 'Multi-model LLM abstraction', 'Context-aware semantic caching'],
  },
  {
    icon: <QueryStatsIcon sx={{ fontSize: 32, color: '#2563eb' }} />,
    tag: 'ANALYTICS',
    name: 'BRVS Telemetry Insights',
    badge: 'Executive Dashboard',
    subtitle: 'Unified operational observability and predictive capacity forecasting.',
    description:
      'Consolidates cloud spend, infrastructure latency, error budgets, and SLA health into a single pane of glass for engineering leadership and executives.',
    metrics: ['Predictive FinOps anomaly detection', 'Custom metric dashboards', 'Instant PDF executive reporting'],
  },
  {
    icon: <HubIcon sx={{ fontSize: 32, color: '#2563eb' }} />,
    tag: 'ALLIANCES',
    name: 'BRVS Enterprise Alliance Hub',
    badge: 'Ecosystem Connectors',
    subtitle: 'Turnkey pre-built integrations with major cloud and SaaS hyperscalers.',
    description:
      'Pre-validated security and operational bridges with AWS, Microsoft Azure, Google Cloud, Databricks, and HashiCorp to accelerate enterprise deployments.',
    metrics: ['50+ native enterprise connectors', 'Automated security handshakes', 'Bi-directional sync'],
  },
];

export default function ProductsPage() {
  const { openContactModal } = useContactModal();

  return (
    <Box>
      {/* 1. Header Section - NEURAL NODES BACKGROUND */}
      <Box
        sx={{
          pt: { xs: 2, md: 3 },
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
                PROPRIETARY PRODUCT ECOSYSTEM
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
              Autonomous workflows &{' '}
              <Box component="span" sx={{ color: '#2563eb' }}>
                real-time intelligence.
              </Box>
            </Typography>

            <Typography sx={{ fontSize: { xs: '1rem', sm: '1.15rem' }, color: '#64748b', lineHeight: 1.6 }}>
              The BRVS Unified Ecosystem combines intelligent automation with real-time insight,
              allowing engineering leaders to streamline complex operations and make decisive moves.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 2. Orbit Ecosystem Diagram - SOLID WHITE BACKGROUND */}
      <Box className="white-section-bg">
        <OrbitEcosystem />
      </Box>

      {/* 3. Detailed Product Capabilities Grid - NEURAL NODES BACKGROUND */}
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
              fontSize: { xs: '1.8rem', sm: '2.2rem' },
              color: '#0b132b',
              mb: 5,
              textAlign: 'center',
            }}
          >
            Platform Capabilities & Engine Modules
          </Typography>

          <Grid container spacing={3.5}>
            {products.map((product, idx) => (
              <Grid key={idx} size={{ xs: 12, md: idx === 0 || idx === 1 ? 6 : 4 }}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)',
                    backgroundColor: '#ffffff',
                    p: 3.5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: '#93c5fd',
                      boxShadow: '0 16px 36px rgba(37, 99, 235, 0.08)',
                    },
                  }}
                >
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2.5,
                          backgroundColor: '#eff6ff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid #dbeafe',
                        }}
                      >
                        {product.icon}
                      </Box>
                      <Chip
                        label={product.badge}
                        size="small"
                        sx={{
                          backgroundColor: '#f1f5f9',
                          color: '#475569',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          borderRadius: 9999,
                        }}
                      />
                    </Box>

                    <Typography
                      sx={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#2563eb',
                        letterSpacing: '0.08em',
                        mb: 0.5,
                      }}
                    >
                      {product.tag}
                    </Typography>

                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#0b132b', mb: 1 }}>
                      {product.name}
                    </Typography>

                    <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155', mb: 1.5 }}>
                      {product.subtitle}
                    </Typography>

                    <Typography sx={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6, mb: 3 }}>
                      {product.description}
                    </Typography>
                  </Box>

                  <Box sx={{ pt: 2.5, borderTop: '1px solid #f1f5f9' }}>
                    <Stack spacing={0.8} sx={{ mb: 2.5 }}>
                      {product.metrics.map((m, mIdx) => (
                        <Typography key={mIdx} sx={{ fontSize: '0.8rem', color: '#475569', fontWeight: 500 }}>
                          • {m}
                        </Typography>
                      ))}
                    </Stack>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={openContactModal}
                      sx={{
                        borderRadius: 9999,
                        borderColor: '#e2e8f0',
                        color: '#0b132b',
                        fontWeight: 600,
                        backgroundColor: '#ffffff',
                        '&:hover': { borderColor: '#2563eb', backgroundColor: '#eff6ff', color: '#2563eb' },
                      }}
                    >
                      Request Architecture Demo
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. Call to Action Banner - SOLID WHITE or DOTS */}
      <CallToAction
        title="Deploy BRVS Ecosystem within your stack"
        subtitle="Our technical architects can conduct a compatibility assessment for your environment."
      />
    </Box>
  );
}
