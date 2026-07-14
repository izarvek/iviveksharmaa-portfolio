"use client";

import React from "react";
import { Menu, X, Download, Briefcase } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Services", href: "/services" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-500 md:hidden ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-30 transition-colors duration-500 ease-in-out border py-2 ${
          scrolled
            ? "bg-gradient-to-r from-slate-950 via-blue-950 to-cyan-950 shadow-2xl backdrop-blur-xl border-transparent"
            : "bg-transparent border-gray-200"
        }`}
      >
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => handleNavigation()}
            className={`text-2xl font-extrabold tracking-wide ${scrolled ? "text-white " : "text-black"}`}
          >
            Vivek
            <span className="text-cyan-300">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  handleNavigation();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`relative transition group ${
                  pathname === item.href
                    ? "text-cyan-500"
                    : scrolled
                      ? "text-white/90 hover:text-white"
                      : "text-gray-800 hover:text-cyan-600"
                }`}
              >
                {item.name}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              className={`flex items-center gap-2 rounded-full border  px-5 py-2.5 transition-all duration-300 ${scrolled ? "text-white hover:bg-white/10 border-white/20" : "text-black border-gray-200"}`}
            >
              <Download size={18} />
              Resume
            </button>

            <button
              className={`flex items-center gap-2 rounded-full  px-6 py-2.5 font-semibold  shadow-lg hover:scale-105 transition-all duration-300 ${scrolled ? "bg-white text-black" : "bg-blue-900 text-white"}`}
            >
              <Briefcase size={18} />
              Hire Me
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden ${scrolled ? "text-white" : "text-black"}`}
          >
            <Menu size={25} />
          </button>
        </div>
      </nav>

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[300px] bg-slate-950/95 backdrop-blur-2xl z-50 transform transition-transform duration-500 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">Vivek Sharma</h2>

          <button onClick={() => setMenuOpen(false)} className="text-white">
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col px-6 py-4">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => handleNavigation()}
              className={`py-4 text-lg font-medium border-b border-white/10 transition ${
                pathname === item.href
                  ? "text-cyan-300"
                  : "text-white/80 hover:text-cyan-300"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <button className="mt-8 flex items-center justify-center gap-2 rounded-full border border-white/20 py-3 text-white hover:bg-white/10 transition">
            <Download size={18} />
            Download Resume
          </button>

          <button className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 py-3 font-semibold text-white shadow-xl">
            <Briefcase size={18} />
            Hire Me
          </button>
        </div>
      </aside>

      {/* Spacer */}
      <div className="h-24" />
    </>
  );
};

export default Navbar;
