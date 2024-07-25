import React from 'react';
import { Box } from '@mui/system';
import { Button, Container, Grid, Typography } from '@mui/material';
import Greek from '../../assets/Greek.avif';
import { Link } from 'react-router-dom';

function SectionThree() {
  return (
    <Container>
      <Box my={4} style={{ background: 'red' }}>
        <Grid container>
          <Grid item xs={12} md={5}>
            <img
              src={Greek}
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
                Inviting your Greek freind for Match..?
              </Typography>
              <Typography variant='h4' color='text.secondary'>
                We got your back.
              </Typography>
              <Typography variant='body1' color='text.secondary' my={4}>
                Greek cuisine is the cuisine of Greece and the Greek diaspora.
                In common with many other cuisines of the Mediterranean, it is
                founded on the triad of wheat, olive oil, and wine.\It uses
                vegetables, olive oil, grains, fish, and meat, including pork,
                poultry, veal and beef, lamb, rabbit, and goat. Other important
                ingredients include pasta (for example hilopites), cheeses,
                herbs, lemon juice, olives and olive oil, and yogurt.
              </Typography>
              <Link to={`/area/French`}>
                <Button variant='contained' style={{ marginTop: '16px' }}>
                  Let's Surprise them.
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default SectionThree;
