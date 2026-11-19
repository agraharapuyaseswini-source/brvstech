'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import CallToAction from '@/components/CallToAction';
import { useContactModal } from '@/context/ContactContext';
import FuturisticTechCanvas from '@/components/FuturisticTechCanvas';

const services = [
  {
    icon: <GroupAddOutlinedIcon sx={{ fontSize: 32, color: '#2563eb' }} />,
    tag: 'TALENT ON DEMAND',
    title: 'Staff Augmentation',
    subtitle: 'Scale engineering capacity with elite, pre-vetted engineers embedded into your teams.',
    description:
      'Eliminate hiring bottlenecks. We supply seasoned full-stack engineers, cloud architects, DevOps specialists, and data scientists vetted through a stringent 4-stage technical and cultural assessment.',
    deliverables: [
      'Rapid placement within 48–72 hours',
      'Top 2% vetted engineers across modern tech stacks',
      'Seamless time-zone alignment with US & European schedules',
      'Zero overhead: flexible scaling up or down with monthly terms',
    ],
  },
  {
    icon: <CloudDoneOutlinedIcon sx={{ fontSize: 32, color: '#2563eb' }} />,
    tag: '24/7 RELIABILITY',
    title: 'Managed Services',
    subtitle: 'Proactive infrastructure management, automated failover, and guaranteed 99.99% uptime.',
    description:
      'Our global follow-the-sun Network Operations Center (NOC) and Site Reliability Engineering (SRE) teams take full accountability for your production environment, monitoring metrics and resolving incidents before customers notice.',
    deliverables: [
      '24/7/365 active monitoring with 15-minute SLA response',
      'Continuous FinOps monitoring and cloud cost governance',
      'Automated disaster recovery drills and multi-region failover',
      'Monthly audit reporting with SOC 2 & ISO compliance rigor',
    ],
  },
  {
    icon: <DnsOutlinedIcon sx={{ fontSize: 32, color: '#2563eb' }} />,
    tag: 'PLATFORM ENGINEERING',
    title: 'App & Infrastructure Management',
    subtitle: 'Modernize legacy code, build cloud-native microservices, and automate deployment pipelines.',
    description:
      'We design and operate cloud-native platforms on AWS, Azure, GCP, and hybrid architectures. From Kubernetes clusters to event-driven architectures, we turn infrastructure into competitive leverage.',
    deliverables: [
      'Containerization and GitOps Kubernetes deployment pipelines',
      'Zero-trust network architecture and identity management',
      'Database modernization, sharding, and real-time streaming',
      'Automated automated vulnerability and dependency scanning',
    ],
  },
  {
    icon: <PsychologyOutlinedIcon sx={{ fontSize: 32, color: '#2563eb' }} />,
    tag: 'STRATEGIC ARCHITECTURE',
    title: 'Consultancy Services',
    subtitle: 'Executive technical advisory to de-risk complex software decisions and accelerate time-to-value.',
    description:
      'Our principal consultants work shoulder-to-shoulder with CTOs, VPs, and engineering directors to create pragmatic technical roadmaps, assess risk, evaluate vendors, and align technology investments with business strategy.',
    deliverables: [
      'Enterprise architecture audit and modern target-state design',
      'AI readiness evaluation and compliant pilot roadmapping',
      'Vendor and tech-stack evaluation with objective scoring',
      'Security posture assessment and compliance audit prep',
    ],
  },
  {
    icon: <InsightsOutlinedIcon sx={{ fontSize: 32, color: '#2563eb' }} />,
    tag: 'INTELLIGENT SYSTEMS',
    title: 'AI & Data Products',
    subtitle: 'Turn proprietary enterprise data into automated workflows and real-time predictive intelligence.',
    description:
      'We engineer production-grade AI pipelines, custom Large Language Model (LLM) agents, retrieval-augmented generation (RAG) platforms, and real-time analytics engines tailored to high-compliance industries.',
    deliverables: [
      'Autonomous agentic workflows and human-in-the-loop systems',
      'Enterprise RAG knowledge assistants with strict access control',
      'Real-time streaming ingestion and anomaly detection models',
      'Data lakehouse implementation on Snowflake and Databricks',
    ],
  },
];

export default function ServicesPage() {
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
                OUR PRACTICES & SOLUTIONS
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
              Architected for resilience,{' '}
              <Box component="span" sx={{ color: '#2563eb' }}>
                speed, and intelligence.
              </Box>
            </Typography>

            <Typography sx={{ fontSize: { xs: '1rem', sm: '1.15rem' }, color: '#64748b', lineHeight: 1.6 }}>
              BRVS Group provides full-lifecycle engineering support—from on-demand specialized engineering talent
              to mission-critical 24/7 cloud management and enterprise AI transformation.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 2. Services Grid - SOLID WHITE BACKGROUND */}
      <Box className="white-section-bg" sx={{ py: { xs: 3, md: 4 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid key={index} size={{ xs: 12, md: index === 0 ? 12 : 6 }}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)',
                    backgroundColor: '#ffffff',
                    p: { xs: 3.5, sm: 4.5 },
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
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
                      <Box
                        sx={{
                          width: 54,
                          height: 54,
                          borderRadius: 3,
                          backgroundColor: '#eff6ff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid #dbeafe',
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: '#2563eb',
                          letterSpacing: '0.08em',
                          backgroundColor: '#eff6ff',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 9999,
                        }}
                      >
                        {service.tag}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: '#0b132b',
                        fontSize: { xs: '1.4rem', sm: '1.75rem' },
                        mb: 1.2,
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#334155',
                        mb: 2,
                      }}
                    >
                      {service.subtitle}
                    </Typography>

                    <Typography sx={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.65, mb: 3.5 }}>
                      {service.description}
                    </Typography>

                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#0b132b', mb: 2 }}>
                      Key Deliverables & Capabilities:
                    </Typography>

                    <Stack spacing={1.5} sx={{ mb: 4 }}>
                      {service.deliverables.map((item, dIdx) => (
                        <Box key={dIdx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                          <CheckCircleIcon sx={{ fontSize: 18, color: '#2563eb', mt: '3px', flexShrink: 0 }} />
                          <Typography sx={{ fontSize: '0.875rem', color: '#475569', fontWeight: 500 }}>
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>

                  <Box sx={{ pt: 3, borderTop: '1px solid #f1f5f9' }}>
                    <Button
                      variant="contained"
                      onClick={openContactModal}
                      endIcon={<ArrowForwardIcon fontSize="small" />}
                      sx={{
                        backgroundColor: '#0b132b',
                        color: '#ffffff',
                        borderRadius: 9999,
                        px: 3,
                        py: 1,
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: '#1c2541',
                        },
                      }}
                    >
                      Consult on {service.title}
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
        title="Find the right practice for your team"
        subtitle="Talk directly with a solution architect to scope your technical requirements."
      />
    </Box>
  );
}
