import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import fetchRecipieByArea from '../services/fetch_recipie_by_area';
import { useParams } from 'react-router-dom';
import RecipieByArea from '../components/recipe_details/recipie_by_area';

function SearchByArea() {
  const [recipiesByArea, setRecipiesByArea] = useState([]);
  const { area } = useParams();

  useEffect(() => {
    fetchrecipies(area);
  }, [area]);

  const fetchrecipies = async (area) => {
    const data = await fetchRecipieByArea(area);
    setRecipiesByArea(data);
  };

  return (
    <Container
      sx={{
        my: 2,
      }}
    >
      <Grid container rowSpacing={4} columnSpacing={4}>
        {recipiesByArea.map((e) => {
          return <RecipieByArea e={e} />;
        })}
      </Grid>
    </Container>
  );
}

export default SearchByArea;
