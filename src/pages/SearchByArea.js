import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import fetchRecipieByArea from '../services/fetch_recipie_by_area';
import { useParams } from 'react-router-dom';
import fetchRecipieById from '../services/fetch_recipie_by_id';
import RecipeCard from '../components/common/recipe_card';
import LoadingRecipe from '../components/recipe_details/loading_recipe';

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

  const l = recipiesByArea.length;
  if (l < 1) {
    return <LoadingRecipe />;
  } else {
    return (
      <>
        {recipiesByArea.map((e, i) => {
          return (
            <Container
              sx={{
                my: 2,
              }}
            >
              <Grid container rowSpacing={4} columnSpacing={4}>
                {<RecipeCard key={i} meal={e} />}
              </Grid>
            </Container>
          );
        })}
      </>
    );
  }
}

export default SearchByArea;
