import React, { useState } from 'react';

const About = () => {
  const tabs = [
    {
      id: "story",
      label: "Story",
      content: `We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands...`,
    },
    {
      id: "mission",
      label: "Mission",
      content: `Our mission is to revolutionize parcel delivery by providing seamless, transparent, and lightning-fast service that customers can always rely on...`,
    },
    {
      id: "success",
      label: "Success",
      content: `Delivered over 5 million parcels • 99.9% on-time delivery rate • Serving 50+ cities • Trusted by 10,000+ businesses...`,
    },
    {
      id: "team",
      label: "Team & Others",
      content: `Meet the people behind the magic. Our diverse team of logistics experts, developers, and customer support heroes work 24/7...`,
    },
  ];
  const [activeTab, setActiveTab] = useState("story");

  return (
    <section className="about-us my-10 rounded-2xl bg-gray-50">
      <div className="container mx-auto px-6 lg:p-[109px]">
        {/* Header */}
        <div className="  mb-12">
          <h2 className="text-5xl font-bold   mb-4">About Us</h2>
          <p className="text-gray-600  ">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Tabs */}
        <div className=" ">
          <div className="flex flex-wrap justify-center border-b border-gray-300 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 text-lg font-medium transition-all duration-300 
                  ${
                    activeTab === tab.id
                      ? "text-teal-600  "
                      : "text-gray-400 hover:text-gray-800"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div >
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`${activeTab === tab.id ? "block" : "hidden"}`}
              >
                <p className="text-gray-700 text-lg leading-relaxed">
                  {tab.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;