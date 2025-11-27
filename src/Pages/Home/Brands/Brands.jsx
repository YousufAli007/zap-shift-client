import React from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import starPeople from '../../../assets/brands/start_people.png'
import amazonVector from '../../../assets/brands/amazon_vector.png'
import { Autoplay } from 'swiper/modules';
import "swiper/css/autoplay"; 
const companyLogo =[amazon,casio,moonstar,star,starPeople,amazonVector,randstad]
const Brands = () => {
  return (
    <>
      <h3 className="text-center text-secondary font-bold text-[28px] my-10">
        We've helped thousands of sales teams
      </h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 1500 }}
        modules={[Autoplay]}
      >
        {companyLogo.map((logo) => (
          <SwiperSlide>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Brands;