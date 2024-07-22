import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ meal }) {
  return (
    <Box my={4} component={Paper} elevation={2}>
      <Grid container>
        <Grid item md={5} width='100%'>
          <Box height='300px'>
            <img
              src={meal.strMealThumb}
              style={{
                fit: 'cover',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
              alt={meal.idMeal}
            />
          </Box>
        </Grid>
        <Grid item md={7} p={1} pb={4}>
          <Typography variant='h3' component='h1' mb={1}>
            {meal.strMeal}
          </Typography>
          <Typography component='h3' mb={1}>
            {meal.strInstructions.substring(0, 256)}...
          </Typography>
          <Link to={`/recipe/${meal['idMeal']}`}>
            <Button variant='contained'>Give me Recipe</Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default RecipeCard;
