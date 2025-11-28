import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';

const AuthProvider = ({children}) => {

  //  createUser 
  const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  // singInUser
  const singnInUser =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const authInfo = {
    createUser,
    singnInUser,

  };
  return <AuthContext value={authInfo}>
    {children}
    </AuthContext>;
};

export default AuthProvider;