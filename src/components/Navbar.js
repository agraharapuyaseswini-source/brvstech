'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { openContactModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1100,
        backgroundColor: scrolled
          ? 'rgba(255, 255, 255, 0.52)'
          : 'rgba(255, 255, 255, 0.35)',
        backdropFilter: 'blur(20px) saturate(190%)',
        WebkitBackdropFilter: 'blur(20px) saturate(190%)',
        borderBottom: scrolled
          ? '1px solid rgba(226, 232, 240, 0.65)'
          : '1px solid rgba(226, 232, 240, 0.4)',
        boxShadow: scrolled
          ? '0 8px 24px -8px rgba(11, 19, 43, 0.06), 0 1px 0 rgba(226, 232, 240, 0.45)'
          : '0 2px 14px rgba(11, 19, 43, 0.02)',
        transition: 'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        pt: 0.25,
        pb: 0,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: { xs: '54px !important', sm: '58px !important', md: '60px !important' },
            py: 0,
          }}
        >
          {/* Brand Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <BrvsLogo />
          </Link>

          {/* Desktop Center Pill Nav with Glassmorphism */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.45)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              borderRadius: 9999,
              px: 0.8,
              py: 0.35,
              boxShadow: '0 2px 10px rgba(15, 23, 42, 0.03), inset 0 1px 1px rgba(255, 255, 255, 0.9)',
              gap: 0.5,
            }}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link key={item.label} href={item.href} style={{ textDecoration: 'none' }}>
                  <Button
                    sx={{
                      color: isActive ? '#ffffff' : '#475569',
                      backgroundColor: isActive ? '#0b132b !important' : 'transparent',
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 600 : 500,
                      px: 2.2,
                      py: 0.75,
                      borderRadius: 9999,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: isActive ? '#ffffff' : '#0b132b',
                        backgroundColor: isActive ? '#0b132b' : 'rgba(241, 245, 249, 0.8)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </Box>

          {/* Right Action Button */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1.5 }}>
            <Button
              variant="contained"
              onClick={openContactModal}
              sx={{
                backgroundColor: '#0b132b',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.9rem',
                borderRadius: 9999,
                px: 3,
                py: 1,
                boxShadow: '0 4px 14px rgba(11, 19, 43, 0.2)',
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: '#1c2541',
                  boxShadow: '0 6px 18px rgba(11, 19, 43, 0.3)',
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
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 290,
            p: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.88)',
            backdropFilter: 'blur(20px) saturate(190%)',
            WebkitBackdropFilter: 'blur(20px) saturate(190%)',
            borderLeft: '1px solid rgba(226, 232, 240, 0.75)',
            boxShadow: '-8px 0 32px rgba(11, 19, 43, 0.08)',
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
            backgroundColor: '#0b132b',
            color: '#ffffff',
            borderRadius: 9999,
            py: 1.2,
            boxShadow: '0 4px 14px rgba(11, 19, 43, 0.2)',
            '&:hover': {
              backgroundColor: '#1c2541',
            },
          }}
        >
          Let&apos;s talk
        </Button>
      </Drawer>
    </AppBar>
  );
}
