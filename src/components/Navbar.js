'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import BrvsLogo from './BrvsLogo';
import { useContactModal } from '@/context/ContactContext';

const navItems = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { openContactModal } = useContactModal();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1100,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        border: 'none',
        mb: { xs: '-60px', sm: '-64px', md: '-72px' },
        pointerEvents: 'none',
      }}
    >
      <Container maxWidth="lg" sx={{ pointerEvents: 'auto' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: { xs: 60, sm: 64, md: 72 },
            py: { xs: 0.5, md: 1 },
          }}
        >
          {/* Brand Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <BrvsLogo />
          </Link>

          {/* Desktop Center Floating Pill Nav: ONLY Card around Work...Careers */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: 9999,
              p: 0.5,
              boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)',
              gap: 0.5,
            }}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link key={item.label} href={item.href} style={{ textDecoration: 'none' }}>
                  <Button
                    disableRipple
                    sx={{
                      color: '#0b132b',
                      backgroundColor: isActive ? '#eaf2fe !important' : 'transparent',
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 600 : 500,
                      px: 2.4,
                      py: 0.75,
                      borderRadius: 9999,
                      textTransform: 'none',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: '#0b132b',
                        backgroundColor: isActive ? '#eaf2fe' : '#f8fafc',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </Box>

          {/* Right Action Button: Let's talk */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1.5 }}>
            <Button
              variant="contained"
              onClick={openContactModal}
              sx={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.9rem',
                borderRadius: 9999,
                px: 3.2,
                py: 1,
                textTransform: 'none',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: '#1d4ed8',
                  boxShadow: '0 6px 18px rgba(37, 99, 235, 0.4)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Let&apos;s talk
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: '#0b132b' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: {
            sx: {
              width: 290,
              p: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.88)',
              backdropFilter: 'blur(20px) saturate(190%)',
              WebkitBackdropFilter: 'blur(20px) saturate(190%)',
              borderLeft: '1px solid rgba(226, 232, 240, 0.75)',
              boxShadow: '-8px 0 32px rgba(11, 19, 43, 0.08)',
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Link href="/" onClick={handleDrawerToggle} style={{ textDecoration: 'none' }}>
            <BrvsLogo />
          </Link>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ mb: 2 }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={handleDrawerToggle}
                  sx={{
                    borderRadius: 2,
                    py: 1.2,
                    backgroundColor: isActive ? '#f0f6ff' : 'transparent',
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: {
                        sx: {
                          fontWeight: isActive ? 700 : 500,
                          color: isActive ? '#2563eb' : '#1e293b',
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href="/contact"
              onClick={handleDrawerToggle}
              sx={{ borderRadius: 2, py: 1.2 }}
            >
              <ListItemText
                primary="Contact Us"
                slotProps={{
                  primary: {
                    sx: { fontWeight: 500, color: '#1e293b' },
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            handleDrawerToggle();
            openContactModal();
          }}
          sx={{
            backgroundColor: '#2563eb',
            color: '#ffffff',
            borderRadius: 9999,
            py: 1.2,
            textTransform: 'none',
            fontWeight: 600,
            boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
            '&:hover': {
              backgroundColor: '#1d4ed8',
            },
          }}
        >
          Let&apos;s talk
        </Button>
      </Drawer>
    </Box>
  );
}
