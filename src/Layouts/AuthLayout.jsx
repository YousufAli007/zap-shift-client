import React from 'react';
import { Link, Outlet } from 'react-router';
import authImage from '../assets/authImage.png'
import Container from '../Components/Container/Container';
import Logo from '../Components/Logo/Logo';

const AuthLayout = () => {
  return (
    <Container>
      <div>
        <Link to='/'>
          <Logo />
        </Link>
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