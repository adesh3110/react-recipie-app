import React from 'react';
import { Box } from '@mui/system';
import HeroSection from '../components/home/hero_section';
import SectionOne from '../components/home/section_one';
import SectionTwo from '../components/home/section_two';

function HomePage() {
  return (
    <Box>
      <HeroSection />
      <SectionOne />
      <SectionTwo />
    </Box>
  );
}

export default HomePage;
