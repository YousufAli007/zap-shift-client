import React from 'react';
import useAuth from '../Hook/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivatRoutes = ({children}) => {
  const {user,loding}=useAuth()
  const location =useLocation()
  // console.log(location)
  if(loding){
    return <p>Loding</p>
  }
  if(!user){
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return  children;
};

export default PrivatRoutes;