"use client";

import React, { useState } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Link from "next/link";

export default function RegisterPage() {
  const { registerUser, updateUser, signInGoogle, loading } = useAuth();
  const router = useRouter();
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await registerUser(email, password);
      await updateUser({ displayName: name });

      Swal.fire({
        title: "Success!",
        text: "Registered successfully",
        icon: "success",
        confirmButtonColor: "#FF7F07",
      });

      router.push("/");
    } catch (err) {
      setError(err.message);
      Swal.fire({
        title: "Error!",
        text: err.message,
        icon: "error",
        confirmButtonColor: "#FF7F07",
      });
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await signInGoogle();

      Swal.fire({
        title: "Success!",
        text: "Registered with Google",
        icon: "success",
        confirmButtonColor: "#FF7F07",
      });

      router.push("/");
    } catch (err) {
      setError(err.message);
      Swal.fire({
        title: "Error!",
        text: err.message,
        icon: "error",
        confirmButtonColor: "#FF7F07",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Register at <span className="text-[#FF7F07]">Home-Chepo</span>
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {error && <p className="text-red-500 text-center">{error}</p>}

          <label className="text-gray-500">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input input-bordered w-full"
            required
          />

          <label className="text-gray-500">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />

          <label className="text-gray-500">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />

          <button
            type="submit"
            className="btn bg-[#FF7F07] text-white w-full hover:bg-white hover:text-black transition-all"
            disabled={loading}
          >
            Register
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleRegister}
          className="btn bg-[#007FFF] text-white w-full hover:bg-white hover:text-black transition-all"
          disabled={loading}
        >
          Register with Google
        </button>
        <Link className="py-6 text-gray-500 text-center" href="/login">
          Have an account already? <span className="text-blue-500">Login</span>
        </Link>
      </div>
    </div>
  );
}
