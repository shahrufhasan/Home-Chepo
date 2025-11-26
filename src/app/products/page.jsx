"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/productCard/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [sortRating, setSortRating] = useState(""); // "high" or "low"

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

  // Filter products based on search and minimum rating
  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const meetsRating = product.rating >= minRating;
    return matchesSearch && meetsRating;
  });

  // Sort products by rating
  if (sortRating === "high") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortRating === "low") {
    filteredProducts.sort((a, b) => a.rating - b.rating);
  }

  if (loading) return <p className="text-center py-10">Loading products...</p>;
  if (products.length === 0)
    return <p className="text-center py-10 text-lg">No products found.</p>;

  return (
    <div className="px-4 md:px-0">
      <h1 className="text-5xl font-bold text-center py-4">
        Our All <span className="text-[#FF7F07]">Products</span>
      </h1>
      <p className="text-center text-gray-500 text-lg max-w-3xl mx-auto mt-4 mb-10">
        Explore our full collection of home products. Each item is carefully
        selected to bring style, comfort, and functionality to your living
        space.
      </p>

      <div className="max-w-7xl px-2 md:px-6 mx-auto flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="input input-bordered w-full sm:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-4 w-full sm:w-1/2 justify-end">
          <select
            className="select select-bordered w-1/2"
            value={sortRating}
            onChange={(e) => setSortRating(e.target.value)}
          >
            <option value="">Sort by Rating</option>
            <option value="high">High to Low</option>
            <option value="low">Low to High</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto py-10 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))
        ) : (
          <p className="text-center col-span-full py-10">
            No products match your search or filters.
          </p>
        )}
      </div>
    </div>
  );
}
