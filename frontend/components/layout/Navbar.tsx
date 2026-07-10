"use client";

import React from "react";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full transition-all duration-300 ${scrolled ? "bg-black backdrop-blur-md border-b border-white/10" : "bg-transparent border-b border-slate-200"}`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 w-full py-4 md:py-4   relative">
        <h1
          className={`text-2xl font-bold transition-colors ${scrolled || mobileOpen ? "text-white" : "text-zinc-900"}`}
        >
          Vivek Sharma
        </h1>

        <div
          id="menu"
          className={`${mobileOpen ? "max-md:w-full" : "max-md:w-0"} max-md:fixed max-md:top-0 max-md:z-50 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-screen max-md:bg-black/90 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-8 text-sm`}
        >
          <div className="group relative max-md:flex max-md:flex-col max-md:items-center">
            <button
              type="button"
              className={`flex items-center gap-1 transition-colors ${scrolled || mobileOpen ? "text-zinc-200 hover:text-white" : "text-zinc-800 hover:text-zinc-600"}`}
            >
              Pages
            </button>
          </div>
          <a
            href="#"
            onClick={() => setMobileOpen(false)}
            className={`transition-colors ${scrolled || mobileOpen ? "text-zinc-200 hover:text-white" : "text-zinc-800 hover:text-zinc-500"}`}
          >
            Company
          </a>
          <a
            href="#"
            onClick={() => setMobileOpen(false)}
            className={`transition-colors ${scrolled || mobileOpen ? "text-zinc-200 hover:text-white" : "text-zinc-800 hover:text-zinc-500"}`}
          >
            Pricing
          </a>
          <a
            href="#"
            onClick={() => setMobileOpen(false)}
            className={`transition-colors ${scrolled || mobileOpen ? "text-zinc-200 hover:text-white" : "text-zinc-800 hover:text-zinc-500"}`}
          >
            Blogs
          </a>
          <a
            href="#"
            onClick={() => setMobileOpen(false)}
            className={`transition-colors ${scrolled || mobileOpen ? "text-zinc-200 hover:text-white" : "text-zinc-800 hover:text-zinc-500"}`}
          >
            Contact
          </a>

          <button
            id="close-menu"
            onClick={() => {
              setMobileOpen(false);
            }}
            className="md:hidden bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-md aspect-square font-medium transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <button className="hidden md:block bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-3 rounded-lg text-sm transition cursor-pointer group">
          Hire Me
        </button>
        <button
          id="open-menu"
          onClick={() => setMobileOpen(true)}
          className={`md:hidden p-2 rounded-md aspect-square font-medium transition ${scrolled ? "bg-zinc-800 text-white hover:bg-zinc-700" : "bg-zinc-900 text-white hover:bg-zinc-800"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12h16" />
            <path d="M4 18h16" />
            <path d="M4 6h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
