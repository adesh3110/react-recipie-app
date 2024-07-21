import React from 'react';
import img1 from '../../assets/diet.svg';
import { Box } from '@mui/system';
import { Container, Grid, Typography } from '@mui/material';

function SectionTwo() {
  return (
    <Box
      py={8}
      style={{
        background: '#d1d1d1',
      }}
    >
      <Container>
        <Grid container>
          <Grid item md='6'>
            <Box>
              <Typography variant='h4' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </Box>
          </Grid>
          <Grid item md='6'>
            <div style={{ width: '100%' }}>
              <img
                src={img1}
                style={{
                  height: '300px',
                  width: '100%',
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default SectionTwo;
