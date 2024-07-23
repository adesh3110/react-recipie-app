import { Box, Breadcrumbs, Container, Typography } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function MyBreadCrumbs() {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((e) => e.length > 0);
  const last = paths.pop();
  return (
    <Box py={4}>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='inherit' to='/'>
          Recipe App
        </Link>
        {paths.map((path) => {
          return (
            <Link key={path} underline='hover' color='inherit' to={path}>
              {path.split('-').join(' ').toUpperCase()}
            </Link>
          );
        })}
        <Typography color='text.primary'>
          {last.split('-').join(' ').toUpperCase()}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}

export default MyBreadCrumbs;
