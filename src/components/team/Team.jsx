"use client";

import React from "react";

export default function Team() {
  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "Founder & CEO",
      description:
        "Alice leads Home-Chepo with a vision for stylish and affordable home products.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
    {
      name: "Michael Smith",
      role: "Head of Design",
      description:
        "Michael ensures all our products are functional, durable, and beautiful.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      name: "Sophia Williams",
      role: "Marketing Manager",
      description:
        "Sophia brings our products to the world with creative campaigns and strategies.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
    {
      name: "James Brown",
      role: "Operations Manager",
      description:
        "James manages logistics and ensures fast delivery of every order.",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center py-4">
        Meet the <span className="text-[#FF7F07]">Team</span>
      </h1>
      <p className="text-center text-gray-500 text-lg max-w-3xl mx-auto mb-10">
        Our dedicated team works tirelessly to bring you the best home products.
        Every member shares the vision of comfort, style, and affordability.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-base-200 rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:bg-blue-100 transition duration-200"
          >
            <div className="w-full h-56 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center space-y-2">
              <h2 className="text-xl font-bold">{member.name}</h2>
              <p className="text-sm text-gray-500">{member.role}</p>
              <p className="text-sm">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
