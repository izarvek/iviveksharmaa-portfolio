"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiMail,
  FiMapPin,
  FiPhone,
  FiUser,
} from "react-icons/fi";

const InquiryForm = () => {
  return (
    <section>
      {/* Animated Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-10">
        <div className="grid grid-cols-1 gap-12 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-2 md:gap-20 bg-linear-to-br from-slate-950 via-blue-950 to-cyan-950">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
              <span className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                Contact
              </span>
            </div>

            <h2 className="mb-5 text-4xl font-bold text-white md:text-5xl">
              Lets Build Something Amazing Together
            </h2>

            <p className="max-w-md leading-8 text-slate-300">
              Looking for a Full Stack Developer to build your next website, web
              application, AI-powered solution, or enterprise software? Send
              your inquiry and I will get back to you as soon as possible.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-cyan-500/20 p-3 text-cyan-300">
                  <FiMail size={20} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white">vivek@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-cyan-500/20 p-3 text-cyan-300">
                  <FiPhone size={20} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-white">+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-cyan-500/20 p-3 text-cyan-300">
                  <FiMapPin size={20} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-white">Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Full Name
              </label>

              <div className="flex items-center rounded-xl border border-white/10 bg-white/10 px-4">
                <FiUser className="text-slate-400" />

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent px-3 py-3.5 text-white placeholder:text-slate-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Email Address
              </label>

              <div className="flex items-center rounded-xl border border-white/10 bg-white/10 px-4">
                <FiMail className="text-slate-400" />

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-transparent px-3 py-3.5 text-white placeholder:text-slate-400 focus:outline-none active:bg-transparent"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 py-3.5 font-semibold text-white transition-all duration-300 hover:from-cyan-400 hover:to-blue-500"
            >
              Send Inquiry
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.form>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-150%) skewX(-20deg);
          }
          100% {
            transform: translateX(350%) skewX(-20deg);
          }
        }
      `}</style>
    </section>
  );
};

export default InquiryForm;
