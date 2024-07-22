import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function MainLayout() {
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

                <Link
                  to={'/search/area'}
                  reloadDocument={true}
                  style={{ textDecoration: 'none', paddingRight: '20px' }}
                  color='white'
                >
                  AREA
                </Link>
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
    </>
  );
}

export default MainLayout;
