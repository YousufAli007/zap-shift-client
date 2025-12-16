import React from 'react';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FcApprove, FcDisapprove } from 'react-icons/fc';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
 

const ApproveRiders = () => {
  const axiosSecure =useAxiosSecure()
  const {refetch ,data:riders =[]}= useQuery({
    queryKey:['raiders','pending'],
    queryFn: async ()=>{
      const res = await axiosSecure.get("/raiders");
      return res.data
    }
  }) 
  const updateRaiderStatul =(rider, status)=>{
     const updateInfo = { status: status, email:rider.email};
     axiosSecure.patch(`/raiders/${rider._id}`, updateInfo).then((res) => {
       if (res.data.modifiedCount) {
        refetch()
         Swal.fire({
           position: "top-end",
           icon: "success",
           title: "Your requst approval Completed ",
           showConfirmButton: false,
           timer: 1500,
         });
       }
     });
  }
  const handleApproval=(rider)=>{
   updateRaiderStatul(rider, 'approved')
  }
  const handeReject =(rider)=>{
    updateRaiderStatul(rider,'reject')
  }
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Approve Raiders Paindding ({riders.length})
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Ragister time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.createAt}</td>
                <td>{rider.status}</td>
                <td>
                  <button onClick={()=>handleApproval(rider)} className="btn">
                    <FcApprove size={25} />
                  </button>
                  <button onClick={()=>handeReject(rider)} className="btn mx-2">
                    <FcDisapprove size={25} />
                  </button>
                  <button className="btn">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRiders;