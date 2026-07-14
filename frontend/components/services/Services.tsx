"use client";

import {
  FiGlobe,
  FiLayers,
  FiSmartphone,
  FiCode,
  FiDatabase,
  FiCloud,
  FiArrowRight,
} from "react-icons/fi";
import Link from "next/link";

const services = [
  {
    title: "Business Website",
    description:
      "Modern, responsive, SEO-friendly websites for startups, businesses, manufacturers, hospitals, and service companies.",
    icon: <FiGlobe size={24} />,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "SEO",
    ],
  },
  {
    title: "Custom Web Application",
    description:
      "Scalable web applications built around your business workflows with authentication, dashboards, analytics, and APIs.",
    icon: <FiLayers size={24} />,
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "REST API",
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Fast, interactive, pixel-perfect user interfaces with responsive layouts and smooth user experiences.",
    icon: <FiCode size={24} />,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Secure backend architecture with authentication, APIs, databases, role management, and business logic.",
    icon: <FiDatabase size={24} />,
    technologies: [
      "Node.js",
      "Express",
      "Prisma",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform Android and iOS applications with clean UI, Firebase integration, and scalable architecture.",
    icon: <FiSmartphone size={24} />,
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST API",
      "Bloc",
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deploy, manage, and scale applications using Docker, CI/CD pipelines, cloud hosting, and VPS servers.",
    icon: <FiCloud size={24} />,
    technologies: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "AWS",
      "Vercel",
    ],
  },
];

const Services = () => {
  return (
    <section className="px-6 py-20 md:px-16 lg:px-24 xl:px-32">
      <div>
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            SERVICES
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Professional Software Development Services
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
            From business websites to enterprise software, I build scalable,
            secure, and high-performance digital products using modern
            technologies that help businesses grow faster.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white">
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-3"
              >
                Start Your Project
                <FiArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;