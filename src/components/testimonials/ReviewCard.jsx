"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function ReviewCard({ reviews }) {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 30,
        stretch: 50,
        depth: 200,
        modifier: 1,
        scale: 0.75,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Autoplay]}
      className="mySwiper"
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="p-6 bg-orange-100 rounded-lg text-center">
            <img
              src={review.image}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
            <p className="text-gray-500">{review.review}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
