import React from 'react';
import useAuth from '../Hook/useAuth';
import useRole from '../Hook/useRole';
import { Link } from 'react-router';

const AdminRoutes = ({childred}) => {
  const {loding}=useAuth()
  const { role, isLoading } = useRole();
  if(loding || isLoading){
    return <p>Loding</p>;
  }
  if(role ==='admin'){
    return <div>
      <h1 className='text-black'>This only admin alow</h1>
      <Link to='/' className='btn btn-primary'>Go Home</Link>
    </div>
  }
  return childred;
};

export default AdminRoutes;