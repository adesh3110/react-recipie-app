import React from 'react';
import { Box } from '@mui/system';
import { Button, Container, Grid, Typography } from '@mui/material';
import chicken from '../../assets/Chicken.webp';
import { Link } from 'react-router-dom';

function SectionTwo() {
  return (
    <Container>
      <Box my={4} style={{ background: '#efefef' }}>
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
                Want to have Deliciuos Dinner ..?
              </Typography>
              <Typography variant='body1' color='text.secondary' my={4}>
                Chicken as a meat has been depicted in Babylonian carvings from
                around 600 BC. Chicken was one of the most common meats
                available in the Middle Ages. It was eaten over most of the
                Eastern hemisphere and several different numbers and kinds of
                chicken such as capons, pullets, and hens were eaten. Chicken
                has good source of lean protien and is very nutrional.
              </Typography>
              <Link to={`/search?q=Chicken`}>
                <Button variant='contained' style={{ marginTop: '16px' }}>
                  Let's Make Chicken
                </Button>
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <img
              src={chicken}
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

export default SectionTwo;
