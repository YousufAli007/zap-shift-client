import React from 'react';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'
import Container from '../Components/Container/Container';
import Logo from '../Components/Logo/Logo';

const AuthLayout = () => {
  return (
    <Container>
    <div>
      <Logo/>
      <div className="flex">
        <div className="border flex-1">
          <Outlet />
        </div>
        <div className="border flex-1">
          <img src={authImage} alt="" />
        </div>
      </div>
    </div>

    </Container>
  );
};

export default AuthLayout;