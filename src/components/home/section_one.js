import React from 'react';
import { Box } from '@mui/system';
import img1 from '../../assets/breakfast.svg';
import { Typography } from '@mui/material';

function SectionOne() {
  return (
    <div style={{ height: '30vh', width: '100%', display: 'flex' }}>
      <div style={{ width: '100%' }}>
        <img src={img1} style={{ height: '30vh', padding: '20px' }} />
      </div>
      <div>
        <Box>
          <Typography variant='h4' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </Box>
      </div>
    </div>
  );
}

export default SectionOne;
