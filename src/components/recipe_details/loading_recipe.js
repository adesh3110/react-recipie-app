import React from 'react';
import { Box, Container, Paper, Skeleton } from '@mui/material';

function LoadingRecipe() {
  return (
    <Box
      py={10}
      style={{
        background: '#efefef',
      }}
    >
      <Container
        maxWidth='md'
        style={{ backgroundColor: '#fefefe', padding: '0px' }}
      >
        <Paper
          sx={{
            padding: '30px',
          }}
        >
          <Skeleton variant='rectangular' width='100%' height={60} />
          <Skeleton
            variant='rectangular'
            width='100%'
            height={300}
            sx={{
              marginTop: '40px',
            }}
          />
          <Skeleton
            variant='rectangular'
            width='100%'
            height={60}
            sx={{
              marginTop: '40px',
            }}
          />

          <Skeleton
            variant='rectangular'
            width='100%'
            height={400}
            sx={{
              marginTop: '40px',
            }}
          />
        </Paper>
      </Container>
    </Box>
  );
}

export default LoadingRecipe;
