import React from 'react';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

function RecipieByArea({ e }) {
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
          <Link to={`/recipe/${e['idMeal']}`}>
            <Button variant='contained'>Give me Recipe</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default RecipieByArea;
