'use client';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ContactModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    requirement: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', company: '', requirement: '' });
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleReset}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '16px',
          p: { xs: 2, sm: 3 },
          boxShadow: '0 25px 50px -12px rgba(11, 19, 43, 0.25)',
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#0b132b' }}>
          {submitted ? 'Inquiry Received' : 'Book a Strategy Call'}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleReset}
          sx={{ color: '#94a3b8' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 1, pt: '10px !important' }}>
        {submitted ? (
          <Box sx={{ py: 4, textAlign: 'center' }}>
            <CheckCircleIcon sx={{ fontSize: 60, color: '#2563eb', mb: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#0b132b', mb: 1 }}>
              Thank you, {formData.name || 'there'}!
            </Typography>
            <Typography sx={{ color: '#64748b', mb: 3, maxWidth: 400, mx: 'auto' }}>
              Our executive solution architects have received your note and will reach out within 24 hours.
            </Typography>
            <Button
              variant="contained"
              onClick={handleReset}
              sx={{
                backgroundColor: '#0b132b',
                color: '#ffffff',
                borderRadius: 9999,
                px: 4,
                py: 1,
              }}
            >
              Done
            </Button>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit}>
            <Typography sx={{ fontSize: '0.9rem', color: '#64748b', mb: 3 }}>
              Connect with BRVS leadership to discuss your engineering, cloud, or AI roadmap.
            </Typography>

            <Stack spacing={2.5}>
              <TextField
                required
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                size="small"
              />
              <TextField
                required
                fullWidth
                label="Work Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                size="small"
              />
              <TextField
                fullWidth
                label="Company / Organization"
                name="company"
                value={formData.company}
                onChange={handleChange}
                variant="outlined"
                size="small"
              />
              <TextField
                fullWidth
                multiline
                rows={3}
                label="How can we help? (e.g. Staff Augmentation, AI Roadmap, Cloud)"
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                variant="outlined"
                size="small"
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  fontWeight: 600,
                  py: 1.2,
                  borderRadius: 9999,
                  '&:hover': {
                    backgroundColor: '#1d4ed8',
                  },
                }}
              >
                Submit Request
              </Button>
            </Stack>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
