import React from "react";
import { BsCashCoin } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineCorporateFare } from "react-icons/md";
import { TbZoomInArea } from "react-icons/tb";

export default function OurServices() {
  return (
    <div className="py-16 px-4">
      <h1 className="text-gray-800 text-center  text-5xl font-bold py-4">
        Our Services
      </h1>
      <p className="text-center text-gray-500 text-lg max-w-3xl mx-auto mt-4 mb-10">
        We provide a range of services to make your home beautiful, comfortable,
        and functional. From design consultation to fast delivery, our team is
        here to help every step of the way.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  max-w-6xl  mx-auto">
        <div className="card card-border bg-base-100 hover:bg-orange-100 hover:scale-105 transition-all duration-300">
          <div className="card-body">
            <CiDeliveryTruck size={48} />
            <h2 className="card-title">Booking Pick & Drop</h2>
            <p className="text-gray-500">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        <div className="card card-border bg-base-100 hover:bg-orange-100 hover:scale-105 transition-all duration-300">
          <div className="card-body">
            <BsCashCoin size={48} />
            <h2 className="card-title">Cash On Delivery</h2>
            <p className="text-gray-500">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        <div className="card card-border bg-base-100 hover:bg-orange-100 hover:scale-105 transition-all duration-300">
          <div className="card-body">
            <TbZoomInArea size={48} />
            <h2 className="card-title">Delivery Hub</h2>
            <p className="text-gray-500">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        <div className="card card-border bg-base-100 hover:bg-orange-100 hover:scale-105 transition-all duration-300">
          <div className="card-body">
            <MdOutlineCorporateFare size={48} />
            <h2 className="card-title">Booking SME & Corporate</h2>
            <p className="text-gray-500">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
