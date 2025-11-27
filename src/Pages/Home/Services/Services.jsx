import React from 'react';
import bookingIcon from '../../../assets/bookingIcon.png'

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: "",
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      badge: "32",
      highlighted: true,
    },
    {
      id: 2,
      icon: " ",
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      badge: null,
      highlighted: false,
    },
    {
      id: 3,
      icon: " ",
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      badge: null,
      highlighted: false,
    },
    {
      id: 4,
      icon: "",
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      badge: null,
      highlighted: false,
    },
  ];
  return (
    <>
      <h1 className="text-[32px] font-semibold my-[32px]">How It Works</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {servicesData.map((service) => (
          <div key={service.id} className="p-[32px] bg-base-100 shadow rounded-[24px]">
            <img src={bookingIcon} alt="" />
            <h3 className="text-[20px] font-semibold my-[16px] ">{service.title}</h3>
            <p className="text-[#606060] text-[16px]">{service.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;