import { Box, Container, Grid } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Box py={8}>
      <Container>
        <Grid container>
          <Grid lg={3} item spacing={2}>
            <h3>Company</h3>
            <a href='#'>About Us</a>
            <a href='#'>Expansion Plan</a>
            <a href='#'>Careers</a>
          </Grid>
          <Grid lg={3} item spacing={2}>
            <h4>Support</h4>
            <a href='#'>FAQs</a>
            <a href='#'>Email Us</a>
            <a href='#'>Refund Policy</a>
          </Grid>
          <Grid lg={3} item spacing={2}>
            <h4>Partnerships</h4>
            <a href='#'>Become a Partner</a>
            <a href='#'>Check Status</a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
