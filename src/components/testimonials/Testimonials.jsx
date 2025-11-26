import React from "react";
import ReviewCard from "./ReviewCard";

async function getReviews() {
  const res = await fetch("https://home-chepo.vercel.app/reviews");
  const data = await res.json();
  return data;
}
export default async function Testimonials() {
  const reviews = await getReviews();

  return (
    <div className="max-w-5xl mx-auto pb-16">
      <h1 className="text-5xl font-bold text-center py-4 mb-10">
        Our Customer <span className="text-[#FF7F07]">Reviews</span>
      </h1>
      <p className="text-center text-gray-500 text-lg max-w-3xl mx-auto mt-4 mb-10">
        Hear from our satisfied customers! See how Home-Chepo products have
        transformed their homes with style, comfort, and quality.
      </p>
      <ReviewCard reviews={reviews} />
    </div>
  );
}
