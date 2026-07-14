"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "CareSphere HMS",
    description:
      "Enterprise Hospital Management System with appointment scheduling, EMR management, billing, authentication, role-based dashboards, and analytics for hospitals and clinics.",
    image:
      "https://images.unsplash.com/photo-1637592156141-d41fb6234e71?q=80&w=1553&auto=format&fit=crop",
    category: "Web Application",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "DazzelMart",
    description:
      "Modern multi-vendor eCommerce platform with product management, secure payments, order tracking, vendor dashboards, coupons, and customer reviews.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop",
    category: "E-Commerce",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Yantrava Industries",
    description:
      "Corporate business website showcasing industrial machines, services, product catalog, inquiry management, and SEO-optimized landing pages.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1600&auto=format&fit=crop",
    category: "Business Website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "TaskFlow CRM",
    description:
      "Customer Relationship Management platform with lead management, task tracking, sales pipeline, team collaboration, and performance analytics.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
    category: "SaaS Platform",
    technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Finance Analytics Dashboard",
    description:
      "Interactive admin dashboard for monitoring revenue, expenses, transactions, KPIs, charts, reports, and business insights in real time.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    category: "Dashboard",
    technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Portfolio CMS",
    description:
      "Personal portfolio and content management system with dynamic blogs, projects, contact form, admin panel, SEO, and performance optimization.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    category: "Portfolio Website",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const ProjectsCards = () => {
  if (PROJECTS.length === 0) {
    return (
      <div className="flex min-h-[350px] items-center justify-center">
        No Projects Found
      </div>
    );
  }

  return (
    <section className="px-6 py-10 md:px-16 lg:px-24 xl:px-32 mt-10">
      <div className="mb-12 text-center">
        <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          Portfolio Collection
        </span>

        <h2 className="mt-5 text-5xl font-bold text-slate-900 md:text-5xl">
          Explore My Latest Projects
        </h2>

        <p className="mx-auto mt-5 max-w-6xl text-base leading-8 text-slate-600">
          A showcase of modern websites, business platforms, enterprise web
          applications, dashboards, SaaS products, and custom software solutions
          built using Next.js, React, TypeScript, Node.js, Prisma, PostgreSQL,
          MongoDB, Tailwind CSS, and cloud technologies. Each project focuses on
          clean architecture, responsive design, performance, scalability, and
          an exceptional user experience.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-sm"
          >
            {/* Image */}

            <div className="relative h-60 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                {project.category}
              </span>

              {project.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-900">
                  Featured
                </span>
              )}
            </div>

            {/* Content */}

            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900">
                {project.title}
              </h3>

              <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
                {project.description}
              </p>

              {/* Technologies */}

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}

              <div className="mt-8 flex items-center gap-3">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  <FiExternalLink />
                  Live Demo
                </Link>

                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="flex items-center justify-center rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100"
                >
                  <FiGithub size={20} />
                </Link>

                <Link
                  href={`/projects/${project.id}`}
                  className="flex items-center justify-center rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100"
                >
                  <FiArrowUpRight size={20} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCards;
