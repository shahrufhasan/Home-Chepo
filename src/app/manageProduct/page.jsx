"use client";

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function ManageProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:4000/addedProducts");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF7F07",
      cancelButtonColor: "#007FFF",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (!result.isConfirmed) return;

      try {
        const res = await fetch(`http://localhost:4000/addedProducts/${id}`, {
          method: "DELETE",
        });

        if (!res.ok)
          return Swal.fire({
            title: "Error!",
            text: "Delete failed.",
            icon: "error",
          });

        Swal.fire({
          title: "Deleted!",
          text: "Product has been removed.",
          icon: "success",
          confirmButtonColor: "#FF7F07",
        });

        setProducts((prev) => prev.filter((p) => p._id !== id));
      } catch (error) {
        Swal.fire({ title: "Error!", text: "Server failed.", icon: "error" });
      }
    });
  };

  const handleUpdate = async (product) => {
    const { value: formValues } = await Swal.fire({
      title: "Update Product",
      html: `
        <input id="swal-title" class="swal2-input" placeholder="Title" value="${
          product.title
        }" />
        <input id="swal-shortDesc" class="swal2-input" placeholder="Short Description" value="${
          product.shortDescription
        }" />
        <textarea id="swal-fullDesc" class="swal2-textarea" placeholder="Full Description">${
          product.fullDescription
        }</textarea>
        <input id="swal-price" type="number" class="swal2-input" placeholder="Price" value="${
          product.price
        }" />
        <input id="swal-date" type="date" class="swal2-input" value="${
          product.date || ""
        }" />
        <input id="swal-image" class="swal2-input" placeholder="Image URL" value="${
          product.imageUrl || ""
        }" />
      `,
      confirmButtonColor: "#FF7F07",
      showCancelButton: true,
      focusConfirm: false,
      preConfirm: () => ({
        title: document.getElementById("swal-title").value,
        shortDescription: document.getElementById("swal-shortDesc").value,
        fullDescription: document.getElementById("swal-fullDesc").value,
        price: document.getElementById("swal-price").value,
        date: document.getElementById("swal-date").value,
        imageUrl: document.getElementById("swal-image").value,
      }),
    });

    if (!formValues) return;

    try {
      const res = await fetch(
        `http://localhost:4000/addedProducts/${product._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formValues),
        }
      );

      if (!res.ok)
        return Swal.fire({ title: "Failed to update", icon: "error" });

      Swal.fire({
        title: "Updated!",
        icon: "success",
        confirmButtonColor: "#FF7F07",
      });

      fetchProducts();
    } catch (error) {
      Swal.fire({ title: "Error!", icon: "error" });
    }
  };

  if (loading) return <p className="text-center mt-10">Loading products...</p>;
  if (products.length === 0)
    return <p className="text-center mt-10 text-lg">No products found.</p>;

  return (
    <div className="px-3 md:px-6 py-10 max-w-7xl mx-auto h-screen">
      <h1 className="text-gray-800 text-center  text-5xl font-bold pb-12">
        My Created <span className="text-[#FF7F07]">Products</span>
      </h1>
      <p className="text-center text-gray-500 text-lg max-w-3xl mx-auto mt-4 mb-10">
        Add, update, or remove your products easily. Keep your collection
        up-to-date and showcase your latest items to your customers.
      </p>
      <div className="overflow-x-auto w-full rounded-lg">
        <table className="table w-full">
          <thead className="bg-base-200">
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th className="hidden md:table-cell">Short Description</th>
              <th className="hidden md:table-cell">Full Description</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr className="hover:bg-orange-100" key={product._id}>
                <td>
                  {product.imageUrl ? (
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-12 h-12 rounded object-cover"
                    />
                  ) : (
                    "No image"
                  )}
                </td>

                <td className="whitespace-normal  max-w-[150px]">
                  {product.title}
                </td>

                <td className="hidden md:table-cell whitespace-normal  max-w-[240px]">
                  {product.shortDescription}
                </td>

                <td className="hidden md:table-cell whitespace-normal max-w-[300px]">
                  {product.fullDescription}
                </td>

                <td>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <button
                      className="btn w-full bg-[#FF7F07] text-white hover:bg-white hover:text-black"
                      onClick={() => handleUpdate(product)}
                    >
                      Update
                    </button>
                    <button
                      className="btn w-full bg-[#007FFF] text-white hover:bg-white hover:text-black"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
