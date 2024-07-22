import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Popover,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import fetchAreasService from '../services/fetch_area_services';

function MainLayout() {
  const [areas, setAreas] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleArea = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const getAreas = async () => {
    const areas = await fetchAreasService();
    setAreas(areas);
  };

  useEffect(() => {
    getAreas();
  }, []);

  return (
    <>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position='static'>
            <Container>
              <Toolbar style={{ paddingLeft: '10px' }}>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                  Recipie App
                </Typography>
                <Link
                  to={'/'}
                  style={{ textDecoration: 'none', paddingRight: '20px' }}
                  color='white'
                >
                  HOME
                </Link>
                <Link
                  to={'/random-recipie'}
                  reloadDocument={true}
                  style={{ textDecoration: 'none', paddingRight: '20px' }}
                  color='white'
                >
                  RANDOM
                </Link>
                <Button color='inherit' onClick={handleArea}>
                  AREA
                </Button>
                <Button color='inherit'>Category</Button>
                <Button color='inherit'>Login</Button>
                <Button color='inherit'>Register</Button>
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
      <Popover
        style={{
          maxHeight: '500px',
          left: '0px',
          right: '0px',
          width: '100%',
        }}
        open={isMenuOpen}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handleMenuClose}
      >
        <Grid container p={4}>
          {areas.map((e) => {
            return (
              <Grid key={e.strArea} item md={3} p={1}>
                <Link to={`/area/${e.strArea}`}>
                  <Button
                    onClick={() => setIsMenuOpen(false)}
                    variant='text'
                    style={{
                      width: '100%',
                    }}
                  >
                    {e.strArea}
                  </Button>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Popover>
    </>
  );
}

export default MainLayout;
