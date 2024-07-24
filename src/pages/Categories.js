import React, { useEffect, useState } from 'react';
import fetchCategoryService from '../services/fetch_category_services';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function Categories() {
  const [Categories, setCategories] = useState([]);
  const fetchCategory = async () => {
    const data = await fetchCategoryService();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <Grid container>
      {Categories.map((e) => {
        return (
          <Grid key={e.strCategory} item md={4} p={1}>
            <Link to={`/categories/${e.strCategory}`}>
              <Button
                variant='text'
                style={{
                  width: '100%',
                  margin: '10px',
                  background: '#fefefe',
                }}
              >
                {e.strCategory}
              </Button>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Categories;
