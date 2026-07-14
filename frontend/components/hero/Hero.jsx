"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="w-full">
      {/* Announcement */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 border border-slate-300 hover:border-blue-400 transition-colors duration-300 rounded-full w-max mx-auto px-4 py-2"
      >
        <span className="text-slate-700">New announcement on your inbox</span>

        <Link
          href="/blog"
          className="flex items-center gap-1 font-medium text-blue-900 hover:text-blue-800 transition-colors duration-300"
        >
          <span>Read more</span>

          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <FiArrowRight className="text-lg hover:translate-y-2" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="text-4xl md:text-7xl font-medium max-w-212.5 text-center mx-auto mt-4 text-slate-900"
      >
        Build apps faster with UI components
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2 text-slate-600 leading-7"
      >
        Build sleek, consistent UIs without wrestling with design systems. Our
        components handle the heavy lifting so you can ship faster.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="mx-auto w-full flex items-center justify-center gap-3 mt-8"
      >
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/projects"
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 ease-in-out cursor-pointer"
          >
            Get Started
          </Link>
        </motion.div>

        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/about"
            className="flex items-center gap-2 border border-slate-300 hover:border-blue-500 hover:bg-blue-50 rounded-full px-6 py-3 transition-all duration-300 text-slate-700 hover:text-blue-700"
          >
            <span>Learn More</span>

            <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
              <FiChevronRight className="text-lg" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Dashboard Image */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mt-10 flex justify-center px-4"
      >
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="relative h-65 w-full max-w-275 overflow-hidden rounded-xl border border-zinc-200 md:h-90 lg:h-105"
        >
          <Image
            src="/images/dashboard.png"
            alt="dashboard image"
            fill
            priority={false}
            className="object-cover object-top"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
