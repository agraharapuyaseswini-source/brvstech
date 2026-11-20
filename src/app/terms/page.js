'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CallToAction from '@/components/CallToAction';
import FuturisticTechCanvas from '@/components/FuturisticTechCanvas';

export default function TermsPage() {
  return (
    <Box>
      {/* 1. Header Section - NEURAL NODES BACKGROUND */}
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
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
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
                LEGAL & SERVICE AGREEMENTS
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.2rem' },
                fontWeight: 800,
                color: '#0b132b',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                mb: 2,
              }}
            >
              Terms & Conditions
            </Typography>

            <Typography sx={{ fontSize: '1rem', color: '#64748b' }}>
              Last updated: November 2026 · BRVS Group Inc. Enterprise Legal Office
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 2. Terms Content - SOLID WHITE BACKGROUND */}
      <Box className="white-section-bg" sx={{ py: { xs: 3, md: 4 } }}>
        <Container maxWidth="md">
          <Card
            sx={{
              p: { xs: 3.5, sm: 5 },
              borderRadius: '16px',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 8px 30px rgba(15, 23, 42, 0.04)',
            }}
          >
            <Stack spacing={4}>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#0b132b', mb: 1.5 }}>
                  1. Agreement to Terms
                </Typography>
                <Typography sx={{ color: '#475569', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  By accessing or utilizing services provided by BRVS Group Inc. (&ldquo;BRVS&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;),
                  including our software platforms, engineering consulting, cloud operations, and managed services, you agree to be bound
                  by these Terms and Conditions. Individual enterprise engagements are additionally governed by formal Master Services
                  Agreements (MSA) and Service Level Agreements (SLA).
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#0b132b', mb: 1.5 }}>
                  2. Enterprise Services & Delivery Standards
                </Typography>
                <Typography sx={{ color: '#475569', lineHeight: 1.7, fontSize: '0.95rem', mb: 2 }}>
                  BRVS delivers professional technology services compliant with ISO 27001, ISO 9001, and SOC 2 Type II controls.
                  All deliverables adhere to rigorous engineering standards:
                </Typography>
                <Box component="ul" sx={{ pl: 3, color: '#475569', lineHeight: 1.8, fontSize: '0.95rem' }}>
                  <li>All engagements operate under transparent milestone delivery schedules and written scope definitions.</li>
                  <li>Managed services include contractual response times and guaranteed infrastructure availability SLAs.</li>
                  <li>Staff augmentation and squad deployments are backed by our senior vetting framework and ongoing performance audits.</li>
                </Box>
              </Box>

              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#0b132b', mb: 1.5 }}>
                  3. Intellectual Property Rights
                </Typography>
                <Typography sx={{ color: '#475569', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  Client custom developments, source repositories, workflows, and proprietary configurations created pursuant to an executed
                  Statement of Work (SOW) remain the exclusive property of the client upon fulfillment of contractual payment obligations.
                  BRVS retains ownership of its pre-existing frameworks, proprietary platforms, and reusable internal tooling.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#0b132b', mb: 1.5 }}>
                  4. Confidentiality & Non-Disclosure
                </Typography>
                <Typography sx={{ color: '#475569', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  Both parties commit to holding all non-public technical, architectural, operational, and commercial information in strict
                  confidence. This obligation extends beyond engagement termination and applies to all employees, contractors, and agents.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#0b132b', mb: 1.5 }}>
                  5. Contact & Legal Inquiries
                </Typography>
                <Typography sx={{ color: '#475569', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  For legal inquiries or notices regarding these terms, please contact our General Counsel at{' '}
                  <Box component="a" href="mailto:legal@brvstech.com" sx={{ color: '#2563eb', textDecoration: 'none' }}>
                    legal@brvstech.com
                  </Box>{' '}
                  or via mail to BRVS Group Inc., 5050 Quorum Dr #700, Dallas, Texas 75254.
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Container>
      </Box>

      {/* 3. Call to Action - DOTS BACKGROUND */}
      <CallToAction />
    </Box>
  );
}

