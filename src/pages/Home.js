import React from 'react';
import { Box } from '@mui/system';
import HeroSection from '../components/home/hero_section';
import SectionOne from '../components/home/section_one';
import SectionTwo from '../components/home/section_two';
import SectionThree from '../components/home/section_three';
import SectionFour from '../components/home/section_four';

function HomePage() {
  return (
    <Box>
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </Box>
  );
}

export default HomePage;
