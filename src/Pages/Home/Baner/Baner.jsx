import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banerImg1 from '../../../assets/banner/banner1.png';
import banerImg2 from '../../../assets/banner/banner2.png';
import banerImg3 from '../../../assets/banner/banner3.png';
import { FaArrowRight } from 'react-icons/fa';
 

const Baner = () => {
  const handleBtn =()=>{
    alert('fuction work success')
  }
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div className="relative">
        <img src={banerImg1} />
        <button className="absolute z-10 btn bg-primary rounded-[99px] left-15 bottom-13 font-extrabold">
          Track Your Parcel
        </button>
        <div onClick={handleBtn} className="absolute z-10 left-55 bottom-14 bg-black text-primary p-[6px] rounded-full">
          <FaArrowRight className='-rotate-50'/>
        </div>
      </div>
      <div>
        <img src={banerImg2} />
      </div>
      <div>
        <img src={banerImg3} />
      </div>
    </Carousel>
  );
};

export default Baner;