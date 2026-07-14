"use client"
import { motion } from "framer-motion";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Resume", href: "/resume" },
        { name: "Experience", href: "/experience" },
        { name: "Tech Stack", href: "/tech-stack" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms" },
      ],
    },
    {
      title: "Follow Me",
      links: [
        { name: "GitHub", href: "https://github.com/" },
        { name: "LinkedIn", href: "https://linkedin.com/" },
        { name: "Instagram", href: "https://instagram.com/" },
        { name: "Twitter", href: "https://twitter.com/" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-cyan-950 text-white mt-8">
      {/* Animated Grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* Shimmer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_7s_linear_infinite]" />
      </div>

      {/* Blur Orbs */}
      <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col gap-10 border-b border-white/10 py-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-wide">
              Vivek
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-6 max-w-[430px] leading-8 text-slate-300">
              Passionate Full Stack Developer specializing in building modern,
              scalable, and high-performance web applications using Next.js,
              React, Node.js, TypeScript, Prisma, MongoDB, and PostgreSQL.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="https://github.com/"
                target="_blank"
                className="rounded-full border border-white/15 bg-white/5 p-3 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
                <FiGithub size={18} />
              </Link>

              <Link
                href="https://linkedin.com/"
                target="_blank"
                className="rounded-full border border-white/15 bg-white/5 p-3 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
                <FiLinkedin size={18} />
              </Link>

              <Link
                href="https://instagram.com/"
                target="_blank"
                className="rounded-full border border-white/15 bg-white/5 p-3 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
                <FiInstagram size={18} />
              </Link>

              <Link
                href="https://twitter.com/"
                target="_blank"
                className="rounded-full border border-white/15 bg-white/5 p-3 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
                <FiTwitter size={18} />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="flex w-full flex-wrap justify-between gap-10 md:w-[48%]">
            {linkSections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-5 text-lg font-semibold text-white">
                  {section.title}
                </h3>

                <ul className="space-y-3 text-sm">
                  {section.links.map((link , index) => (
                    <motion.li 
                    key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={link.href}
                        className="text-slate-300 transition hover:text-cyan-300"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-slate-400 md:flex-row">
          <p>
            © 2026 <span className="text-white font-medium">Vivek Sharma</span>.
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="hover:text-cyan-300 transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-cyan-300 transition"
            >
              Terms
            </Link>

            <Link
              href="/sitemap"
              className="hover:text-cyan-300 transition"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Animation */}
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
    </footer>
  );
};

export default Footer;