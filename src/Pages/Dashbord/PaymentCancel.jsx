import React from 'react';
import { Link } from 'react-router';

const PaymentCancel = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Payment Calcel</h1>
      <Link to='/dashboard/my-parcels'>
      <button className='btn btn-primary text-black'>Pay Again</button>
      </Link>
    </div>
  );
};

export default PaymentCancel;