import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import fetchRecipieByArea from '../services/fetch_recipie_by_area';
import { useParams } from 'react-router-dom';

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
          return (
            <Grid item sm={12} md={6} width='100%'>
              <Card>
                <CardMedia
                  sx={{ height: 240, width: '100%' }}
                  image={e.strMealThumb}
                  title='green iguana'
                />
                <CardContent
                  style={{
                    minHeight: '40px',
                  }}
                >
                  <Typography gutterBottom variant='h5' component='div'>
                    {e.strMeal}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>Give Me Recipie</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default SearchByArea;
