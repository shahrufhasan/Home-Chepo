import React from "react";
import ProductCard from "../productCard/ProductCard";

async function getProducts() {
  const res = await fetch("https://home-chepo.vercel.app/products", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function FeatureProducts() {
  const products = await getProducts();
  const firstSixProducts = products.slice(0, 6);
  return (
    <div className="py-10">
      <h1 className="text-5xl font-bold text-center py-4">
        Featured <span className="text-[#FF7F07]">Products</span>
      </h1>
      <p className="text-center text-gray-500 text-lg max-w-3xl mx-auto mt-4 mb-10">
        Handpicked products selected for their style, quality, and
        functionality. Each item is chosen to help you create a comfortable and
        beautiful home.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {firstSixProducts.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
}
