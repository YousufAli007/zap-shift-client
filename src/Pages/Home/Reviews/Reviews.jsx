import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewsPromise }) => {
    const reviews =use(reviewsPromise)
     
    
  return (
    <div>
      <div className='my-15'>
        <h1 className="text-5xl text-center font-bold mb-3">Reviews</h1>
        <p className='text-center w-[700px] mx-auto  '>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
          quibusdam dolorem dolores illo accusantium placeat nisi porro quia,
          fuga molestiae non nulla. Obcaecati architecto facere sequi repellat
          molestiae nam suscipit.
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 5000 }}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          scale: 0.75,
          modifier:1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;