"use client";

import React from "react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center py-4">
        About <span className="text-[#FF7F07]">Home-Chepo</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
        <div className="md:w-1/2">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
            alt="About Home-Chepo"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="md:w-1/2 space-y-6">
          <p className="text-lg leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-[#FF7F07]">Home-Chepo</span>,
            your one-stop destination for high-quality home products. We provide
            a curated selection of furniture, decor, and essentials to make your
            home beautiful, functional, and comfortable.
          </p>

          <p className="text-lg leading-relaxed">
            Our mission is to bring style, comfort, and affordability together.
            Every product is carefully selected and tested to ensure durability,
            design, and sustainability.
          </p>

          <p className="text-lg leading-relaxed">
            Whether you’re furnishing a new home or just adding a touch of
            elegance, Home-Chepo is here to inspire and help you create the
            perfect living space.
          </p>

          <button className="btn bg-[#FF7F07] text-white hover:bg-white hover:text-black">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
        <div className="p-6 bg-base-200 rounded-lg shadow-xl hover:bg-orange-100 transition">
          <h2 className="text-2xl font-bold mb-2">Quality Products</h2>
          <p>
            All products are carefully curated to ensure top quality and
            durability for your home.
          </p>
        </div>

        <div className="p-6 bg-base-200 rounded-lg shadow-xl hover:bg-orange-100 transition">
          <h2 className="text-2xl font-bold mb-2">Affordable Prices</h2>
          <p>
            We provide competitive pricing so you can furnish your home
            beautifully without overspending.
          </p>
        </div>

        <div className="p-6 bg-base-200 rounded-lg shadow-xl hover:bg-orange-100 transition">
          <h2 className="text-2xl font-bold mb-2">Fast Delivery</h2>
          <p>
            Quick and reliable delivery ensures your products arrive safely and
            on time.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-5xl font-bold text-center mb-10">
          Our <span className="text-[#FF7F07]">Story</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-4">
            <p className="text-lg leading-relaxed">
              Home-Chepo was founded with a simple vision: to make beautiful,
              functional home products accessible to everyone. From our humble
              beginnings, we’ve grown into a trusted brand that values quality,
              design, and customer satisfaction above all.
            </p>

            <p className="text-lg leading-relaxed">
              Every item we offer is selected with care, keeping both style and
              utility in mind. We believe that a home should be a reflection of
              the people who live in it, and our mission is to help you create a
              space that feels uniquely yours.
            </p>

            <p className="text-lg leading-relaxed">
              Join us on our journey and experience the perfect blend of
              comfort, style, and affordability.
            </p>
          </div>

          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
              alt="Our Story"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
