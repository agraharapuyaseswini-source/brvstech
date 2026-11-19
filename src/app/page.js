import Box from '@mui/material/Box';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import PracticeTabs from '@/components/PracticeTabs';
import OrbitEcosystem from '@/components/OrbitEcosystem';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <Box>
      {/* 1. Hero Section with Interactive Case Study Carousel */}
      <Hero />

      {/* 2. Value Proposition with 4 Highlight Cards */}
      <ValueProposition />

      {/* 3. Choose a practice to see how it works (Interactive Tabs) */}
      <PracticeTabs />

      {/* 4. Orbit Ecosystem (Proprietary Product Ecosystem) */}
      <OrbitEcosystem />

      {/* 5. Call To Action (Put BRVS in your orbit) */}
      <CallToAction />
    </Box>
  );
}
