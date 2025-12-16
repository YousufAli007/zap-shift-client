import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../Hook/useAxiosSecure';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();
  const [paymentInfo,setPaymentInfo]=useState()
  // console.log(sessionId)
  useEffect(() => {
    if(sessionId){
      axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
      .then(res =>{
        console.log(res.data)
        setPaymentInfo({
          trackingId: res.data.trackingId,
          transactonId: res.data.transactonId,
        });
      })

    }
  }, [sessionId,axiosSecure]);
  return (
    <div>
      <h1 className="text-2xl font-bold">Payment Success</h1>
      <p>Your TransctionId{paymentInfo?.transactonId}</p>
      <p>Your Parcel Tracking id:{paymentInfo?.trackingId}</p>
    </div>
  );
};

export default PaymentSuccess;