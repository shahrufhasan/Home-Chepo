"use client";

import React, { useState } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Link from "next/link";

export default function LoginPage() {
  const { signInUser, signInGoogle, loading } = useAuth();
  const router = useRouter();
  const [error, setError] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInUser(email, password);

      Swal.fire({
        title: "Success!",
        text: "Logged in successfully",
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

  const handleGoogleLogin = async () => {
    try {
      await signInGoogle();

      Swal.fire({
        title: "Success!",
        text: "Logged in with Google",
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
          Login to <span className="text-[#FF7F07]">Home-Chepo</span>
        </h2>

        <form onSubmit={handleEmailLogin} className="space-y-4">
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
            Log In
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn bg-[#007FFF] text-white w-full hover:bg-white hover:text-black transition-all"
          disabled={loading}
        >
          Continue with Google
        </button>
        <Link className="py-6 text-gray-500 text-center" href="/register">
          Have no account ? <span className="text-blue-500">Register</span>
        </Link>
      </div>
    </div>
  );
}
