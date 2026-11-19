'use client';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BrvsLogo from './BrvsLogo';

const footerLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      className="white-section-bg"
      sx={{
        py: { xs: 3, md: 3.5 },
        borderTop: '1px solid #e2e8f0',
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'center',
            position: 'relative',
            minHeight: { md: 74 },
          }}
        >
          {/* Left: BRVS Logo + Address in Two Lines Below */}
          <Box
            sx={{
              position: { xs: 'static', md: 'absolute' },
              left: 0,
              top: { md: '50%' },
              transform: { md: 'translateY(-50%)' },
              display: 'flex',
              flexDirection: 'column',
              gap: 0.6,
              mb: { xs: 2.5, md: 0 },
            }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <BrvsLogo size="small" />
            </Link>
            <Typography sx={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.55 }}>
              5050 Quorum Dr #700, Dallas, Texas 75254
              <br />
              <Box
                component="a"
                href="mailto:sales@brvstech.com"
                sx={{
                  color: '#475569',
                  textDecoration: 'none',
                  '&:hover': { color: '#2563eb' },
                }}
              >
                sales@brvstech.com
              </Box>
            </Typography>
          </Box>

          {/* Center of Screen: Navigation & Legal Links Block */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1.2,
              mx: 'auto',
              width: 'fit-content',
              maxWidth: '100%',
            }}
          >
            {/* Top Row: Navigation Links (Work -> Privacy) Centered on Screen */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: 2, sm: 2.5, md: 3 },
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {footerLinks.map((link) => (
                <Box
                  key={link.label}
                  component={Link}
                  href={link.href}
                  sx={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: '#475569',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#2563eb' },
                  }}
                >
                  {link.label}
                </Box>
              ))}
            </Box>

            {/* Bottom Row: T&C (under Work) and Privacy Policy (under Contact) */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', sm: 'space-between' },
                width: '100%',
                gap: { xs: 2.5, sm: 3 },
              }}
            >
              <Box
                component={Link}
                href="/terms"
                sx={{
                  fontSize: '0.8rem',
                  color: '#64748b',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  '&:hover': { color: '#2563eb' },
                }}
              >
                Terms and conditions
              </Box>

              <Box
                component={Link}
                href="/privacy"
                sx={{
                  fontSize: '0.8rem',
                  color: '#64748b',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  '&:hover': { color: '#2563eb' },
                }}
              >
                Privacy policy
              </Box>
            </Box>
          </Box>

          {/* Complete Right: Copyright Notice */}
          <Box
            sx={{
              position: { xs: 'static', md: 'absolute' },
              right: 0,
              top: { md: '50%' },
              transform: { md: 'translateY(-50%)' },
              mt: { xs: 2.5, md: 0 },
              textAlign: { xs: 'center', md: 'right' },
            }}
          >
            <Typography sx={{ fontSize: '0.8rem', color: '#94a3b8', whiteSpace: { md: 'nowrap' } }}>
              © 2026 BRVS Group Inc. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
