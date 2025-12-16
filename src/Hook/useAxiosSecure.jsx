import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
  const { user, logOut } = useAuth();
  const navigate =useNavigate()
  useEffect(()=>{
   const reqIntercepter =axiosSecure.interceptors.request.use(config =>{
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    })
    // Intercepter response 
    const resIntercepter =axiosSecure.interceptors.response.use((response)=>{
      return response
    },
    (error)=>{
      console.log(error)
      const statuseCode = error.status;
;
      if(statuseCode === 401 || statuseCode ===403){
        logOut()
        .then(()=>{
          navigate('/login')
        })
      }
      return Promise.reject(error)
    })
    return ()=>{
      axiosSecure.interceptors.request.eject(reqIntercepter)
      axiosSecure.interceptors.response.eject(resIntercepter);
    }
  },[user,logOut,navigate])
  return axiosSecure;
};

export default useAxiosSecure;