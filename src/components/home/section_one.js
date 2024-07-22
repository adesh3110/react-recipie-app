import React from 'react';
import { Box } from '@mui/system';
import img1 from '../../assets/breakfast.svg';
import { Container, Grid, Typography } from '@mui/material';

function SectionOne() {
  return (
    <Container>
      <Box my={8}>
        <Grid container>
          <Grid item md='5'>
            <img
              src={
                'https://plus.unsplash.com/premium_photo-1670963025556-c2d4dc880a45?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              style={{
                height: '400px',
                width: '100%',
                objectFit: 'cover',
              }}
            />
          </Grid>
          <Grid
            item
            md='7'
            p={4}
            style={{
              background: '#E8B4BC',
            }}
          >
            <Box>
              <Typography variant='h5' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default SectionOne;
