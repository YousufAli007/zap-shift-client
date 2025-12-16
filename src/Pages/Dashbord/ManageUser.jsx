import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import { FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { FiShieldOff } from 'react-icons/fi';

const ManageUser = () => {
  const axiosSecure =useAxiosSecure()
  const { refetch,data:users=[]}=useQuery({
    queryKey:['users'],
    queryFn: async()=>{
      const res =await axiosSecure.get('/users')
      return res.data
    }
  })
  
  const handleMarkUser =user =>{
    const roleInfo ={role:'admin'}
    axiosSecure.patch(`/users/${user._id}`, roleInfo)
    .then(res =>{
      console.log(res.data)
      if(res.data.modifiedCount){
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.displayName} Mark has admin`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
  }
  const handleRemoveAdmin =user =>{
    const roleInfo ={role:'user'}
    axiosSecure.patch(`/users/${user._id}`, roleInfo)
    .then(res =>{
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.displayName} user remove from admin`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
  }
  return (
    <div>
      <h1 className="text-5xl font-bold">Manage User</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      className="btn bg-red-400"
                    >
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMarkUser(user)}
                      className="btn bg-green-400"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>Other Action</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;