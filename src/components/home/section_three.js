import React from 'react';
import { Box } from '@mui/system';
import { Button, Container, Grid, Typography } from '@mui/material';
import French from '../../assets/French.webp';
import { Link } from 'react-router-dom';

function SectionThree() {
  return (
    <Container>
      <Box my={4} style={{ background: 'red' }}>
        <Grid container>
          <Grid item xs={12} md={5}>
            <img
              src={French}
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
                Inviting your French freind for Match..?
              </Typography>
              <Typography variant='h4' color='text.secondary'>
                We got your back.
              </Typography>
              <Typography variant='body1' color='text.secondary' my={4}>
                Knowledge of French cooking has contributed significantly to
                Western cuisines. Its criteria are used widely in Western
                cookery school boards and culinary education. In November 2010,
                French gastronomy was added by the UNESCO to its lists of the
                world's "intangible cultural heritage".
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
