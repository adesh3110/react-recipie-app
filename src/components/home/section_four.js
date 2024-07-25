import React from 'react';
import { Box } from '@mui/system';
import { Button, Container, Grid, Typography } from '@mui/material';
import side from '../../assets/Side.avif';
import { Link } from 'react-router-dom';

function SectionFour() {
  return (
    <Container>
      <Box my={4} style={{ background: 'red' }}>
        <Grid container>
          <Grid
            item
            md={7}
            p={4}
            style={{
              background: '#C6E0FF',
            }}
          >
            <Box>
              <Typography variant='h4' color='text.secondary'>
                Lets make Side for your Main Course
              </Typography>
              <Typography variant='body1' color='text.secondary' my={4}>
                Side dishes such as salad, potatoes and bread are commonly used
                with main courses throughout many countries of the western
                world. Rice and couscous have grown to be quite popular
                throughout Europe, especially at formal occasions (with couscous
                appearing more commonly at dinner parties with Middle Eastern
                dishes).
              </Typography>
              <Link to={`/categories/Side`}>
                <Button variant='contained' style={{ marginTop: '16px' }}>
                  Let's Make Sides
                </Button>
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <img
              src={side}
              style={{
                width: '100%',
                height: '100%',

                objectFit: 'cover',
              }}
              alt='img1'
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default SectionFour;
