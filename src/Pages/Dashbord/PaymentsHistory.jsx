import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../Hook/useAuth';
import useAxiosSecure from '../../Hook/useAxiosSecure';

const PaymentsHistory = () => {
  const {user}=useAuth()
  const axiosSecure =useAxiosSecure()
  const {data:payments =[]}=useQuery({
    queryKey:['payments', user.email],
    queryFn: async ()=>{
      const res = await axiosSecure.get(`/payments?email=${user.email}`)
      return res.data
    }
  })
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Payments History ({payments.length})
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Amount</th>
              <th>TransctionId</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.parcelName}</td>
                <td>{payment.amount}</td>
                <td>{payment.transactonId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsHistory;