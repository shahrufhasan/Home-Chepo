"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for contacting us. We will get back to you soon.",
      icon: "success",
      confirmButtonColor: "#FF7F07",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 h-screen ">
      <h1 className="text-5xl font-bold text-center py-4">
        Contact <span className="text-[#FF7F07]">Us</span>
      </h1>
      <p className="text-center text-gray-500 text-lg max-w-3xl mx-auto mt-2 mb-10">
        Have a question or want to work with us? Fill out the form below and
        we’ll get back to you shortly.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-base-200 p-10 rounded-lg"
      >
        <div className="flex flex-col">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input input-bordered w-full"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="label">Message</label>
          <textarea
            name="message"
            className="textarea textarea-bordered w-full"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="btn bg-[#FF7F07] text-white hover:bg-white hover:text-black w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
