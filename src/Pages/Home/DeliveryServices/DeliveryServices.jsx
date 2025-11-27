import React from 'react';
import serviceImg from '../../../assets/service.png'

const DeliveryServices = () => {
  // deliveryServicesData.js
  const deliveryServicesData = [
    {
      id: 1,
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      id: 6,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];
  return (
    <div className="p-[100px] bg-secondary rounded-[32px] my-[100px]">
      <div className='text-center'>
        <h1 className="text-[40px] font-bold text-base-100">Our Services</h1>
        <p className="text-[#dadada] mb-8 mt-4">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {deliveryServicesData.map((delivery) => (
          <div key={delivery.id} className="px-[24px] py-[32px] flex justify-center flex-col bg-base-100 shadow  rounded-3xl items-center text-justify hover:bg-[#CAEB66]  duration-300">
            <div className="bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300] p-6 mx-auto rounded-full">
              <img
                className="max-w-[24px] bg-"
                src={serviceImg}
                alt="serviceImg"
              />
            </div>
            <h1 className="text-6 font-bold my-[16px]">{delivery.title}</h1>
            <p className="text-[#606060] text-[16px]">{delivery.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryServices;