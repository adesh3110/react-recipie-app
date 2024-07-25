import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function NoDataPage() {
  return (
    <Container maxWidth='sm' sx={{ textAlign: 'center', py: 10 }}>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <ErrorOutlineIcon sx={{ fontSize: 80, color: 'gray' }} />
        <Typography variant='h4' component='h1' gutterBottom sx={{ mt: 2 }}>
          No Data Available
        </Typography>
        <Typography variant='body1' color='textSecondary' sx={{ mb: 4 }}>
          Sorry, we couldn’t find any data to display here. Please try again
          later or contact support if the issue persists.
        </Typography>
        <Button
          variant='contained'
          color='primary'
          onClick={() => window.location.reload()}
        >
          Reload
        </Button>
      </Box>
    </Container>
  );
}

export default NoDataPage;
