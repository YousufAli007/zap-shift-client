import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../Hook/useAuth';
import { useLocation, useNavigate } from 'react-router';

const GoogleLogin = () => {
  const{googleSingIn}=useAuth()
  const navigate =useNavigate()
  const location=useLocation()
  console.log('after google login',location);
  
  const handleGoogleSignIn =()=>{
    googleSingIn()
    .then(res =>{
      console.log(res.user)
      navigate(location?.state , '/')
    })
    .catch(error =>{
      console.log(error)
    })
  }
  return (
    <div>
      {/* Google Login */}
      <button onClick={handleGoogleSignIn}
        type="button"
        className="btn btn-outline w-full h-12 flex items-center justify-center gap-3 bg-gray-300 text-base"
      >
        <FcGoogle className="text-2xl" />
        Login with Google
      </button>
    </div>
  );
};

export default GoogleLogin;