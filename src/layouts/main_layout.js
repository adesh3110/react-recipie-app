import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/common/app_bar';
import MyBreadCrumbs from '../components/common/bread_crumbs';
import { Container, Divider } from '@mui/material';

function MainLayout() {
  return (
    <>
      <Header />
      <main
        style={{
          background: '#efefef',
        }}
      >
        <Container>
          <MyBreadCrumbs />
        </Container>

        <Divider />

        <Container>
          <Outlet />
        </Container>
      </main>
      <Divider />
      <Footer />
    </>
  );
}

export default MainLayout;
