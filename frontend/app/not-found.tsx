"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="flex items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32">
        <div
          className="w-full rounded-2xl border border-gray-200 p-8 md:p-12 text-center shadow-sm"
        >
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
          >
            404 Not Found
          </motion.h1>

          <div className="mx-auto my-6 h-px w-80 max-w-full rounded bg-gradient-to-r from-gray-400 to-gray-800" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mx-auto max-w-lg text-gray-400 md:text-xl"
          >
            The page you are looking for does not exist or has been moved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Link
              href="/"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-2.5 font-medium text-gray-800 transition-all hover:bg-gray-200 active:scale-95"
            >
              Back to Home

              <FiArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}