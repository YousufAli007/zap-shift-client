import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenter = useLoaderData();
  console.log(serviceCenter)
  const position = [23.8103, 90.4125];
  return (
    <div className="bg-base-100 shadow-sm p-10 my-20 rounded-2xl">
      <h1 className="text-5xl font-bold mt-10">
        We are available in 64 districts
      </h1>
      <div className="my-10"></div>
      <div>
        <h1 className="text-3xl font-bold">
          We deliver almost all over Bangladesh
        </h1>
      </div>
      <div className="w-full border h-[800px] my-10">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenter.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
