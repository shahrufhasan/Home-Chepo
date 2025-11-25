"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:4000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
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
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading product...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-200 m-10 rounded-xl">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-700 mb-2">{product.details}</p>
      <p className="text-xl font-semibold  mb-2">
        Price: <span className="text-[#FF7F07]">${product.price}</span>
      </p>
      <p className="mb-2">
        <span className="font-semibold">Rating:</span>{" "}
        <span className="text-gray-500">{product.rating}</span>
      </p>
      <p></p>
      <p>
        <span className="font-semibold">Date: </span>{" "}
        <span className="text-gray-500 ">{product.date}</span>
      </p>
      <div>
        <Link className="btn bg-[#FF7F07] text-white mt-2" href="/products">
          Back To All Products
        </Link>
      </div>
    </div>
  );
}
