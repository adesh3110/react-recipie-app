import { Box, Container, Paper, Typography } from '@mui/material';
import React from 'react';
import IngredientTable from './ingrident_table';

function RecipieDetaidCard({ data }) {
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
          <Typography variant='h2' component='h1' pb={4}>
            {data.strMeal}
          </Typography>
          <img
            src={data.strMealThumb}
            style={{
              fit: 'cover',
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />

          <Typography variant='h4' component='h2' py={2}>
            {data.strMeal}
          </Typography>
          <IngredientTable meal={data} />
        </Paper>
      </Container>
    </Box>
  );
}

export default RecipieDetaidCard;
