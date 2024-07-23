import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Popover,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import fetchAreasService from '../services/fetch_area_services';
import Footer from '../components/footer';

function MainLayout() {
  const [areas, setAreas] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

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
                {isMobile ? (
                  <>
                    <IconButton
                      edge='start'
                      color='inherit'
                      aria-label='menu'
                      onClick={handleMobileMenuOpen}
                    >
                      <MenuIcon /> {/* Updated icon */}
                    </IconButton>
                    <Menu
                      anchorEl={mobileMenuAnchorEl}
                      open={Boolean(mobileMenuAnchorEl)}
                      onClose={handleMobileMenuClose}
                    >
                      <MenuItem onClick={handleMobileMenuClose}>
                        <Link
                          to='/'
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          HOME
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleMobileMenuClose}>
                        <Link
                          to='/random-recipie'
                          reloadDocument={true}
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          RANDOM
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleArea}>AREA</MenuItem>
                      <MenuItem onClick={handleMobileMenuClose}>
                        Category
                      </MenuItem>
                      <MenuItem onClick={handleMobileMenuClose}>Login</MenuItem>
                      <MenuItem onClick={handleMobileMenuClose}>
                        Register
                      </MenuItem>
                    </Menu>
                  </>
                ) : (
                  <>
                    <Link
                      to='/'
                      style={{
                        textDecoration: 'none',
                        paddingRight: '20px',
                        color: 'white',
                      }}
                    >
                      HOME
                    </Link>
                    <Link
                      to='/random-recipie'
                      reloadDocument={true}
                      style={{
                        textDecoration: 'none',
                        paddingRight: '20px',
                        color: 'white',
                      }}
                    >
                      RANDOM
                    </Link>
                    <Button color='inherit' onClick={handleArea}>
                      AREA
                    </Button>
                    <Button color='inherit'>Category</Button>
                    <Button color='inherit'>Login</Button>
                    <Button color='inherit'>Register</Button>
                  </>
                )}
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
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
