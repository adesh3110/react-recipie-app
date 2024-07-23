import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box py={8} style={{ backgroundColor: '#efefef' }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={3}>
            <Typography variant='h6'>Company</Typography>
            <Link href='#' display='block'>
              About Us
            </Link>
            <Link href='#' display='block'>
              Expansion Plan
            </Link>
            <Link href='#' display='block'>
              Careers
            </Link>
          </Grid>
          <Grid item lg={3}>
            <Typography variant='h6'>Support</Typography>
            <Link href='#' display='block'>
              FAQs
            </Link>
            <Link href='#' display='block'>
              Email Us
            </Link>
            <Link href='#' display='block'>
              Refund Policy
            </Link>
          </Grid>
          <Grid item lg={3}>
            <Typography variant='h6'>Partnerships</Typography>
            <Link href='#' display='block'>
              Become a Partner
            </Link>
            <Link href='#' display='block'>
              Check Status
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
