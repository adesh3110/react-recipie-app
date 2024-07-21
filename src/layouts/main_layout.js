import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position='static'>
            <Toolbar>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                Recipie App
              </Typography>
              <Button color='inherit'>Home</Button>
              <Button color='inherit'>Random</Button>
              <Button color='inherit'>Area</Button>
              <Button color='inherit'>Category</Button>
              <Button color='inherit'>Login</Button>
              <Button color='inherit'>Register</Button>
            </Toolbar>
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
