import React, { useEffect, useState } from 'react';
import fetchAreasService from '../services/fetch_area_services';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Areas() {
  const [allAreas, setAllAreas] = useState([]);

  const fetchAllArea = async () => {
    const data = await fetchAreasService();
    console.log(data);
    setAllAreas(data);
  };

  console.log(allAreas);

  useEffect(() => {
    fetchAllArea();
    // console.log('first');
  }, []);
  return (
    <Grid container>
      {allAreas.map((e) => {
        return (
          <Grid key={e.strArea} item md={4} p={1}>
            <Link to={`/area/${e.strArea}`}>
              <Button
                variant='text'
                style={{
                  width: '100%',
                  margin: '10px',
                  background: '#fefefe',
                }}
              >
                {e.strArea}
              </Button>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Areas;
