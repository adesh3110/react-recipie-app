import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/common/app_bar';

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
