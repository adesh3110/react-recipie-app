import React, { useEffect, useState } from 'react';
import fetchAreasService from '../services/fetch_area_services';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

function SearchByArea() {
  const [areas, setAreas] = useState([]);
  const fetchAreas = async () => {
    const data = await fetchAreasService();
    setAreas(data);
  };

  console.log(areas);
  useEffect(() => {
    fetchAreas();
  }, []);

  return (
    <Box component={Paper} elevation={2}>
      {areas.map((area) => {
        return (
          <Container pb={10}>
            <Typography
              variant='h2'
              component='h1'
              m={4}
              style={{ background: '#efefef', textAlign: 'center' }}
            >
              {area.strArea}
            </Typography>
          </Container>
        );
      })}
    </Box>
  );
}

export default SearchByArea;
