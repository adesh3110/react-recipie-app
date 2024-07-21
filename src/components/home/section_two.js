import React from 'react';
import img1 from '../../assets/diet.svg';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

function SectionTwo() {
  return (
    <div
      style={{
        height: '30vh',
        width: '100%',
        display: 'flex',
        marginTop: '60px',
      }}
    >
      <div>
        <Box>
          <Typography variant='h4' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </Box>
      </div>
      <div style={{ width: '100%' }}>
        <img
          src={img1}
          style={{ height: '30vh', padding: '20px', marginLeft: '100px' }}
        />
      </div>
    </div>
  );
}

export default SectionTwo;
