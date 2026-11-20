'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FuturisticTechCanvas from '@/components/FuturisticTechCanvas';

const serviceOptions = [
  'Staff Augmentation',
  'Managed Services',
  'App & Infrastructure Management',
  'Consultancy Services',
  'AI & Data Products',
  'General Inquiry / Other',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Staff Augmentation',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                CONNECT WITH BRVS LEADERSHIP
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
              Put BRVS{' '}
              <Box component="span" sx={{ color: '#2563eb' }}>
                in your orbit.
              </Box>
            </Typography>

            <Typography sx={{ fontSize: { xs: '1rem', sm: '1.15rem' }, color: '#64748b', lineHeight: 1.6 }}>
              Our executive solution architects will review your requirements, conduct a preliminary
              architectural evaluation, and come back with an actionable proposal.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 2. Direct Details & Form - SOLID WHITE BACKGROUND */}
      <Box className="white-section-bg" sx={{ py: { xs: 3, md: 4 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 6 }}>
            {/* Left Column: Direct Contact Info & Locations */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={3}>
                <Card
                  sx={{
                    p: 3.5,
                    borderRadius: '16px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 6px 20px rgba(15, 23, 42, 0.03)',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0b132b', mb: 2.5 }}>
                    Direct Contact Lines
                  </Typography>

                  <Stack spacing={2.5}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: '50%',
                          backgroundColor: '#eff6ff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <PhoneIcon sx={{ color: '#2563eb', fontSize: 22 }} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                          24/7 EXECUTIVE DIRECT LINE
                        </Typography>
                        <Typography
                          component="a"
                          href="tel:+14085988149"
                          sx={{
                            fontSize: '1.05rem',
                            fontWeight: 700,
                            color: '#0b132b',
                            textDecoration: 'none',
                            '&:hover': { color: '#2563eb' },
                          }}
                        >
                          +1 (408) 598-8149
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: '50%',
                          backgroundColor: '#eff6ff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <EmailOutlinedIcon sx={{ color: '#2563eb', fontSize: 22 }} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                          ENTERPRISE SALES & PARTNERSHIPS
                        </Typography>
                        <Typography
                          component="a"
                          href="mailto:sales@brvstech.com"
                          sx={{
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            color: '#0b132b',
                            textDecoration: 'none',
                            '&:hover': { color: '#2563eb' },
                          }}
                        >
                          sales@brvstech.com
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: '50%',
                          backgroundColor: '#eff6ff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <EmailOutlinedIcon sx={{ color: '#2563eb', fontSize: 22 }} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                          HUMAN RESOURCES & RECRUITMENT
                        </Typography>
                        <Typography
                          component="a"
                          href="mailto:hrteam@brvstech.com"
                          sx={{
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            color: '#0b132b',
                            textDecoration: 'none',
                            '&:hover': { color: '#2563eb' },
                          }}
                        >
                          hrteam@brvstech.com
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Card>

                {/* Office preview card */}
                <Card
                  sx={{
                    p: 3.5,
                    borderRadius: '16px',
                    backgroundColor: '#0b132b',
                    color: '#ffffff',
                    boxShadow: '0 12px 28px rgba(11, 19, 43, 0.25)',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff', mb: 2 }}>
                    US Headquarters
                  </Typography>
                  <Typography sx={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: 1.6, mb: 1.5 }}>
                    5050 Quorum Dr #700, Dallas, Texas 75254, USA
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                    Serving enterprise clients across North America, Europe, and Asia-Pacific.
                  </Typography>
                </Card>
              </Stack>
            </Grid>

            {/* Right Column: Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Card
                sx={{
                  p: { xs: 3.5, sm: 4.5 },
                  borderRadius: '16px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 12px 36px rgba(15, 23, 42, 0.05)',
                }}
              >
                {submitted ? (
                  <Box sx={{ py: 6, textAlign: 'center' }}>
                    <CheckCircleIcon sx={{ fontSize: 72, color: '#2563eb', mb: 2 }} />
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#0b132b', mb: 1.5 }}>
                      Thank you, {formData.name}!
                    </Typography>
                    <Typography sx={{ color: '#64748b', fontSize: '1.05rem', maxWidth: 450, mx: 'auto', mb: 4 }}>
                      Your strategy call request has been assigned to an executive solutions architect.
                      We will be in touch within 24 hours.
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          service: 'Staff Augmentation',
                          message: '',
                        });
                      }}
                      sx={{ backgroundColor: '#0b132b', color: '#ffffff', borderRadius: 9999, px: 4, py: 1.2 }}
                    >
                      Submit another inquiry
                    </Button>
                  </Box>
                ) : (
                  <Box component="form" onSubmit={handleSubmit}>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#0b132b', mb: 1 }}>
                      Schedule a Strategy Call
                    </Typography>
                    <Typography sx={{ color: '#64748b', fontSize: '0.925rem', mb: 3.5 }}>
                      Fill out the form below and an architect will review your technical specs.
                    </Typography>

                    <Grid container spacing={2.5}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          required
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          required
                          fullWidth
                          type="email"
                          label="Work Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          required
                          fullWidth
                          label="Company Name"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          select
                          fullWidth
                          label="Primary Practice / Requirement"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          variant="outlined"
                        >
                          {serviceOptions.map((opt) => (
                            <MenuItem key={opt} value={opt}>
                              {opt}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          label="Describe your current requirements, tech stack, or objectives"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          sx={{
                            backgroundColor: '#2563eb',
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: '1rem',
                            py: 1.5,
                            borderRadius: 9999,
                            boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
                            '&:hover': {
                              backgroundColor: '#1d4ed8',
                            },
                          }}
                        >
                          Submit Strategy Call Request
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                )}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
