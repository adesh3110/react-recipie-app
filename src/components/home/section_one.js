import React from 'react';
import { Box } from '@mui/system';
import { Button, Container, Grid, Typography } from '@mui/material';
import img1 from '../../assets/Salad.avif';
import { Link } from 'react-router-dom';

function SectionOne() {
  return (
    <Container>
      <Box my={4} style={{ background: '#efefef' }}>
        <Grid container>
          <Grid item xs={12} md={5}>
            <img
              src={img1}
              style={{
                width: '100%',
                height: '100%',

                objectFit: 'cover',
              }}
              alt='img1'
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            p={2}
            style={{
              background: '#E8B4BC',
            }}
          >
            <Box>
              <Typography variant='h4' color='text.secondary'>
                Start Your Diet with Salad
              </Typography>
              <Typography variant='body1' color='text.secondary' my={4}>
                Salads offer numerous health benefits, making them a valuable
                addition to any diet. They are nutrient-rich, providing
                essential vitamins, minerals, and antioxidants that support
                overall health and help prevent diseases. High in fiber, salads
                aid digestion and assist in maintaining a healthy weight. They
                are also low in calories yet filling, making them ideal for
                weight management.
              </Typography>
              <Link to={`/search?q=Salad`}>
                <Button variant='contained' style={{ marginTop: '16px' }}>
                  Let's Make Salad
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default SectionOne;
