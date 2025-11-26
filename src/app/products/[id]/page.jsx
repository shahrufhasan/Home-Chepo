"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Use environment variable for API base URL
  const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`${apiBase}/products/${id}`);
        const data = await res.json();

        if (data) {
          const normalizedProduct = {
            ...data,
            _id: data._id?.$oid || data._id,
            price: data.price?.$numberDouble || data.price,
            rating: data.rating?.$numberDouble || data.rating,
          };
          setProduct(normalizedProduct);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product:", err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, apiBase]);

  if (loading)
    return <div className="text-center py-10">Loading product...</div>;
  if (!product)
    return <div className="text-center py-10">Product not found</div>;

  return (
    <div className="p-6 bg-base-200 rounded-xl max-w-3xl mx-auto my-16">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-700 mb-2">{product.details}</p>
      <p className="text-xl font-semibold mb-2">
        Price: <span className="text-[#FF7F07]">${product.price}</span>
      </p>
      <p className="mb-2">
        <span className="font-semibold">Rating:</span>{" "}
        <span className="text-gray-500">{product.rating}</span>
      </p>
      <p className="mb-2">
        <span className="font-semibold">Date: </span>{" "}
        <span className="text-gray-500">{product.date}</span>
      </p>
      <div>
        <Link className="btn bg-[#FF7F07] text-white mt-4" href="/products">
          Back To All Products
        </Link>
      </div>
    </div>
  );
}
