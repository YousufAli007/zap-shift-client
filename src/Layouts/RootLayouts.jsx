import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Pages/Shared/Navber/Navber';
import Footer from '../Pages/Shared/Footer/Footer';
import Logo from '../Components/Logo/Logo';
import Container from '../Components/Container/Container';
// import Logo from '../Components/Logo/Logo';

const RootLayouts = () => {
  return (
    <div className="flex  flex-col min-h-screen bg-[#eaeced]">
      <Navber />
      <main className="flex-1">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayouts;