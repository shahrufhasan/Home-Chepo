"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/productCard/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:4000/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p className="text-center py-10">Loading products...</p>;

  if (products.length === 0)
    return <p className="text-center py-10 text-lg">No products found.</p>;

  return (
    <div>
      <h1 className="text-5xl font-bold text-center py-4">
        Our All <span className="text-[#FF7F07]">Products</span>
      </h1>
      <p className="text-center text-gray-500 text-lg max-w-3xl mx-auto mt-4 mb-10">
        Explore our full collection of home products. Each item is carefully
        selected to bring style, comfort, and functionality to your living
        space.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto py-10 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
}
