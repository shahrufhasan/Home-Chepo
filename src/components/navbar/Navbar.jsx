"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await logOut();
    router.push("/");
  };

  const navbarHeight = 70;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <>
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-xl z-50"
            : "relative bg-base-100 shadow-sm"
        }`}
        style={{ height: navbarHeight }}
      >
        <div className="navbar px-4">
          <div className="navbar-start">
            <div className="dropdown">
              <button tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-20"
              >
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`px-3 mx-1 py-2 rounded-md ${
                        isActive(link.path) ? "bg-[#FF7F07] text-white" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/">
              <Image
                src="/logo.png"
                alt="E-commerce Logo"
                width={100}
                height={80}
              />
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`px-3 py-2 mx-1 rounded-md ${
                      isActive(link.path) ? "bg-[#FF7F07] text-white" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end gap-2">
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={user.photoURL || "/default-avatar.png"}
                      alt="User"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                >
                  <li>
                    <Link href="/createNewProduct">Create Product</Link>
                  </li>
                  <li>
                    <Link href="/manageProduct">Manage Products</Link>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="btn text-white bg-[#FF7F07] hover:text-black hover:bg-white"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="btn bg-white hover:bg-[#007FFF]"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {isScrolled && <div style={{ height: navbarHeight }} />}
    </>
  );
}
