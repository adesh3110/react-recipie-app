import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import fetchRecipieByArea from '../services/fetch_recipie_by_area';
import { useParams } from 'react-router-dom';
import fetchRecipieById from '../services/fetch_recipie_by_id';
import RecipeCard from '../components/common/recipe_card';

function SearchByArea() {
  const [recipiesByArea, setRecipiesByArea] = useState([]);
  const { area } = useParams();

  useEffect(() => {
    fetchrecipies(area);
  }, [area]);

  const fetchrecipies = async (area) => {
    const data = await fetchRecipieByArea(area);
    const promises = data.map((e) => fetchRecipieById(e['idMeal']));
    const results = await Promise.allSettled(promises);
    const updateData = results
      .filter((e) => e.status == 'fulfilled')
      .reduce((prev, curr) => [...prev, ...curr?.value], []);
    setRecipiesByArea(updateData);
  };

  return (
    <Container
      sx={{
        my: 2,
      }}
    >
      <Grid container rowSpacing={4} columnSpacing={4}>
        {recipiesByArea.map((e, i) => {
          // return <RecipieByArea e={e} />;
          return <RecipeCard key={i} meal={e} />;
        })}
      </Grid>
    </Container>
  );
}

export default SearchByArea;
