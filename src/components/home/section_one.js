import React from 'react';
import { Box } from '@mui/system';
import img1 from '../../assets/breakfast.svg';
import { Container, Grid, Typography } from '@mui/material';

function SectionOne() {
  return (
    <Box
      py={8}
      style={{
        background: '#efefef',
      }}
    >
      <Container>
        <Grid container>
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
          <Grid item md='6'>
            <Box>
              <Typography variant='h4' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default SectionOne;
