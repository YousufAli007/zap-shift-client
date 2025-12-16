import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';
const googleProvider =new GoogleAuthProvider();
const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const [loding,setLoding]=useState(true)
  //  createUser 
  const createUser =(email,password)=>{
    setLoding(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  // singInUser
  const singnInUser =(email,password)=>{
     setLoding(true);
    return signInWithEmailAndPassword(auth,email,password)
  }
  // singInWithGoogle 
  const googleSingIn =()=>{
     setLoding(true);
    return signInWithPopup(auth,googleProvider)
  }
  // currentUser
  useEffect(()=>{
    const unSubcribe =onAuthStateChanged(auth,currentUser =>{
      setUser(currentUser)
      setLoding(false)
      // console.log(currentUser)
    })
    return()=>{
      unSubcribe()
    }
  },[])
  // sing Out
  const logOut =()=>{
    return signOut(auth)
  }
  // update profile
  const updateUserProfle = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  const authInfo = {
    user,
    loding,
    logOut,
    createUser,
    singnInUser,
    googleSingIn,
    updateUserProfle,
  };
  return <AuthContext value={authInfo}>
    {children}
    </AuthContext>;
};

export default AuthProvider;