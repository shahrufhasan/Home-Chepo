"use client";

import React, { useState } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { singInUser, signInGoogle, loading } = useAuth();
  const router = useRouter();
  const [error, setError] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await singInUser(email, password);
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInGoogle();
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />

          <button className="btn btn-primary w-full" disabled={loading}>
            Log In
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-accent w-full"
          disabled={loading}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
