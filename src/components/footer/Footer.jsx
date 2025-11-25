"use client";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 px-10 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        {/* About */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-bold text-[#FF7F07]">Home-Chepo</h2>
          <p className="text-sm mt-2">
            Your one-stop destination for stylish and affordable home products.
            We bring comfort and elegance to your home.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 text-center">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="space-y-2 mt-2 text-sm">
            <li>
              <a href="/" className="hover:text-[#FF7F07]">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-[#FF7F07]">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#FF7F07]">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#FF7F07]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="text-sm mt-2">123 Home Street, Your City</p>
          <p className="text-sm">Email: info@home-chepo.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
        </div>

        {/* Socials */}
        <div className="flex-1 text-left">
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="flex items-center gap-2 text-gray-800 hover:text-[#3b5998]"
            >
              <FaFacebookF /> <span>Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-800 hover:text-[#1DA1F2]"
            >
              <FaTwitter /> <span>X</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-800 hover:text-[#C13584]"
            >
              <FaInstagram /> <span>Instagram</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-800 hover:text-[#0077B5]"
            >
              <FaLinkedinIn /> <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Home-Chepo. All rights reserved.
      </div>
    </footer>
  );
}
