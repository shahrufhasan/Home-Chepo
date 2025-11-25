"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

export default function CreateNewProduct() {
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
    date: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/addedProducts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          title: "Created Successfully!",
          icon: "success",
          confirmButtonColor: "#FF7F07",
          draggable: true,
        });

        setFormData({
          title: "",
          shortDescription: "",
          fullDescription: "",
          price: "",
          date: "",
          imageUrl: "",
        });
      } else {
        Swal.fire({
          title: data.message || "Failed to add product",
          icon: "error",
          draggable: true,
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error connecting to server",
        icon: "error",
        draggable: true,
      });
    }
  };

  return (
    <div className="py-16 h-screen">
      <h1 className="text-gray-800 text-center  text-5xl font-bold pb-12">
        Add New <span className="text-[#FF7F07]"> Product</span>
      </h1>
      <p className="text-center text-gray-500 text-lg max-w-3xl mx-auto mt-4 mb-10">
        Fill out the form below to add a new product to your collection. Make
        sure to provide all details including title, description, price, and
        image URL.
      </p>
      <div className="max-w-md mx-auto mt-10 p-6 bg-base-200 rounded shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Create New Product</h2>
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset space-y-3">
            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              className="input input-bordered w-full"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <label className="label">Short Description</label>
            <input
              type="text"
              name="shortDescription"
              className="input input-bordered w-full"
              placeholder="Short Description"
              value={formData.shortDescription}
              onChange={handleChange}
              required
            />

            <label className="label">Full Description</label>
            <textarea
              name="fullDescription"
              className="input input-bordered w-full h-24"
              placeholder="Full Description"
              value={formData.fullDescription}
              onChange={handleChange}
              required
            />

            <label className="label">Price</label>
            <input
              type="number"
              name="price"
              className="input input-bordered w-full"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              required
            />

            <label className="label">Date</label>
            <input
              type="date"
              name="date"
              className="input input-bordered w-full"
              value={formData.date}
              onChange={handleChange}
            />

            <label className="label">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              className="input input-bordered w-full"
              placeholder="Image URL"
              value={formData.imageUrl}
              onChange={handleChange}
            />

            <button type="submit" className="btn bg-[#FF7F07] mt-4 w-full">
              Add Product
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
