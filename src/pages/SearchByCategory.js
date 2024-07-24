import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import recipieByCategory from '../services/fetch_recipie_by_category';
import fetchRecipieById from '../services/fetch_recipie_by_id';
import LoadingRecipe from '../components/recipe_details/loading_recipe';
import { Container, Grid } from '@mui/material';
import RecipeCard from '../components/common/recipe_card';

function SearchByCategory() {
  const { categories } = useParams();
  const [categoriesUp, setCategoriesUp] = useState([]);

  const fetchCategory = async (categories) => {
    const data = await recipieByCategory(categories);
    const promises = data.map((e) => fetchRecipieById(e['idMeal']));
    const results = await Promise.allSettled(promises);
    const updateData = results
      .filter((e) => e.status == 'fulfilled')
      .reduce((prev, curr) => [...prev, ...curr?.value], []);
    setCategoriesUp(updateData);
  };

  useEffect(() => {
    fetchCategory(categories);
  }, []);

  const l = categoriesUp.length;
  if (l < 1) {
    return <LoadingRecipe />;
  } else {
    return (
      <>
        {categoriesUp.map((e, i) => {
          return (
            <Container>
              <Grid container rowSpacing={4} columnSpacing={4} py={2}>
                {<RecipeCard key={i} meal={e} />}
              </Grid>
            </Container>
          );
        })}
      </>
    );
  }
}

export default SearchByCategory;
