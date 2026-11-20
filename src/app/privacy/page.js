'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CallToAction from '@/components/CallToAction';
import FuturisticTechCanvas from '@/components/FuturisticTechCanvas';

export default function PrivacyPage() {
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
                SECURITY & DATA GOVERNANCE
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
              Privacy Policy & Compliance
            </Typography>

            <Typography sx={{ fontSize: '1rem', color: '#64748b' }}>
              Last updated: November 2026 · BRVS Group Inc. Enterprise Security Office
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 2. Privacy Policy Content - SOLID WHITE BACKGROUND */}
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
                  1. Overview & Commitment
                </Typography>
                <Typography sx={{ color: '#475569', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  BRVS Group Inc. (&ldquo;BRVS&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
                  operates under strict enterprise compliance standards including ISO 27001, ISO 9001, and SOC 2 Type II.
                  We recognize that confidentiality, integrity, and availability of client and user data are paramount.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#0b132b', mb: 1.5 }}>
                  2. Information Collection & Use
                </Typography>
                <Typography sx={{ color: '#475569', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  We collect personal and professional information provided voluntarily through contact inquiries, strategy call
                  requests, and job applications. We use this information solely to evaluate partnership engagements, provide
                  requested architectural evaluations, and manage professional recruitment.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#0b132b', mb: 1.5 }}>
                  3. Zero-Trust Security & Data Protection
                </Typography>
                <Typography sx={{ color: '#475569', lineHeight: 1.7, fontSize: '0.95rem', mb: 2 }}>
                  All systems, communications, and client repositories are secured using end-to-end TLS 1.3 encryption in transit
                  and AES-256 encryption at rest. In compliance with SOC 2 Type II:
                </Typography>
                <Box component="ul" sx={{ pl: 3, color: '#475569', lineHeight: 1.8, fontSize: '0.95rem' }}>
                  <li>Multi-factor authentication (MFA) is strictly enforced across all infrastructure access.</li>
                  <li>Access control is governed by least-privilege role-based policies (RBAC).</li>
                  <li>Continuous automated vulnerability scanning and quarterly third-party penetration testing.</li>
                  <li>Annual independent audits for SOC 2 Type II and ISO 27001 recertification.</li>
                </Box>
              </Box>

              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#0b132b', mb: 1.5 }}>
                  4. AI & Client Data Confidentiality
                </Typography>
                <Typography sx={{ color: '#475569', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  BRVS strictly adheres to proprietary data protection standards when developing AI and machine learning models.
                  Client codebases, proprietary business logic, and internal documents are never utilized to train public foundation
                  models without explicit written customer consent.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#0b132b', mb: 1.5 }}>
                  5. Contact the Data Protection Officer
                </Typography>
                <Typography sx={{ color: '#475569', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  For compliance inquiries or data access requests, please contact our Information Security Officer at{' '}
                  <Box component="a" href="mailto:privacy@brvstech.com" sx={{ color: '#2563eb', textDecoration: 'none' }}>
                    privacy@brvstech.com
                  </Box>{' '}
                  or write to BRVS Group Inc., 5050 Quorum Dr #700, Dallas, Texas 75254.
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
