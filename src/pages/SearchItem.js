import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import fetch_meal from '../services/fetch_meal';
import RecipeCard from '../components/common/recipe_card';

function SearchItem() {
  const [meals, setMeals] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q');

  const searchMeal = async (string) => {
    const result = await fetch_meal(string);
    setMeals(result);
  };

  useEffect(() => {
    searchMeal(query);
  }, []);

  return (
    <Container>
      <Box my={4}>
        <h1>Showing Result for "{query}"</h1>
        {meals.map((meal) => {
          return <RecipeCard meal={meal} />;
        })}
      </Box>
    </Container>
  );
}

export default SearchItem;
