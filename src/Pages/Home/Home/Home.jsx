import React from 'react';
import Baner from '../Baner/Baner';
import Services from '../Services/Services';
import DeliveryServices from '../DeliveryServices/DeliveryServices';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';

const reviewsPromise =fetch('../reviews.json').then( res => res.json())

const Home = () => {
  return (
    <div className="my-5">
      <Baner />
      <Services />
      <DeliveryServices />
      <Brands />
      <Reviews reviewsPromise={reviewsPromise} />
    </div>
  );
};

export default Home;