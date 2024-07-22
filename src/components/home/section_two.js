import React from 'react';
import img1 from '../../assets/diet.svg';
import { Box } from '@mui/system';
import { Container, Grid, Typography } from '@mui/material';

function SectionTwo() {
  return (
    <Container>
      <Box my={8}>
        <Grid container>
          <Grid
            item
            md='7'
            p={4}
            style={{
              background: '#C6E0FF',
            }}
          >
            <Box>
              <Typography variant='h5' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            md='5'
            style={{
              padding: '0px',
              margin: '0px',
            }}
          >
            <img
              src={
                'https://images.unsplash.com/photo-1556909211-36987daf7b4d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              style={{
                height: '400px',
                width: '100%',
                objectFit: 'cover',
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default SectionTwo;
