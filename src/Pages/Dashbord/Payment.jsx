import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../Hook/useAxiosSecure';

const Payment = () => {
  const {parcelId}=useParams()
  const axiosSecure =useAxiosSecure()
   const {data:parcel ={}}=useQuery({
    queryKey:['parcel',parcelId],
    queryFn: async()=>{
      const res = await axiosSecure.get(`parcels/${parcelId}`);
      return res.data;
    }

   })
  //  console.log(parcel?.senderEmail);
   
  //  console.log(parcel.cons)
   const handlePayment = async()=>{
    const paymentInfo= {
      cost: parcel?.cost,
      parcelId: parcel?._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };
    console.log(paymentInfo)
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    // console.log(res.data);
    window.location.href=res.data.url
    
   }
   
  return (
    <div>
      <h1>Pless Pay ${parcel?.cost} for :{parcel?.parcelName} </h1>
      <button onClick={handlePayment} className='btn-primary btn text-black'>Paw Now</button>
    </div>
  );
};

export default Payment;