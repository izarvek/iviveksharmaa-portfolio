"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiLayers, FiExternalLink } from "react-icons/fi";
import CountUp from "react-countup";

type Project = {
  id: number;
  name: string;
  image: string;
  description: string;
  techStack: string[];
  github?: string;
  live?: string;
};

type ProjectCardProps = {
  project: Project;
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    name: "CareSphere HMS",
    description:
      "A modern Hospital Management System with role-based dashboards for Admin, Doctor, Patient, Nurse, and Receptionist. Features appointment booking, medical records, authentication, analytics, and responsive UI.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "JWT",
    ],
    github: "https://github.com/yourusername/caresphere",
    live: "https://caresphere.vercel.app",
  },
  {
    id: 2,
    name: "DazzelMart",
    description:
      "A scalable multi-vendor eCommerce platform supporting product management, secure authentication, shopping cart, order tracking, payments, seller dashboard, and admin management.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    techStack: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express",
      "Redux Toolkit",
      "Stripe",
    ],
    github: "https://github.com/yourusername/dazzelmart",
    live: "https://dazzelmart.vercel.app",
  },
  {
    id: 3,
    name: "Creature Industry",
    description:
      "Official manufacturing company website with product catalog, machine showcase, inquiry system, responsive pages, SEO optimization, and admin-controlled content management.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/creatureindustry",
    live: "https://creatureindustry.com",
  },
  {
    id: 4,
    name: "Portfolio Website",
    description:
      "A premium personal portfolio featuring modern animations, responsive design, project showcase, blogs, contact form, dark mode, and SEO optimization.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://portfolio.vercel.app",
  },
  {
    id: 5,
    name: "Task Management System",
    description:
      "A collaborative productivity platform supporting projects, task assignment, Kanban boards, team management, notifications, authentication, and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/yourusername/task-manager",
    live: "https://taskmanager.vercel.app",
  },
  {
    id: 6,
    name: "AI Resume Builder",
    description:
      "An AI-powered resume builder that generates ATS-friendly resumes with customizable templates, PDF export, live preview, and authentication.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
    techStack: ["Next.js", "OpenAI", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/yourusername/resume-builder",
    live: "https://resumebuilder.vercel.app",
  },
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-cyan-400 via-blue-500 to-indigo-600 p-0.5 transition-all duration-500 hover:-translate-y-2 hover:shadow-sm hover:shadow-blue-500/30">
      <div className="flex h-full flex-col overflow-hidden rounded-[22px] bg-white">
        <div className="relative h-50 overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority={false}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-900/20 to-transparent" />
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/90 p-2 text-slate-700 shadow-md backdrop-blur transition hover:bg-blue-600 hover:text-white"
              >
                <FiGithub size={18} />
              </Link>
            )}
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/90 p-2 text-slate-700 shadow-md backdrop-blur transition hover:bg-blue-600 hover:text-white"
              >
                <FiExternalLink size={18} />
              </Link>
            )}
          </div>
          <div className="absolute bottom-5 left-6 right-6">
            <h3 className="text-2xl font-bold text-white">{project.name}</h3>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="line-clamp-3 text-sm leading-7 text-slate-600">
            {project.description}
          </p>
          <div className="my-5 h-px bg-slate-200" />
          <div className="flex items-start gap-3">
            <div className="mt-1 text-blue-600">
              <FiLayers size={18} />
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCards: React.FC<{ projects: Project[] }> = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="flex min-h-75 items-center justify-center px-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-slate-200 bg-slate-50 px-10 py-8 text-center"
        >
          <h3 className="text-xl font-semibold text-slate-800">
            No Projects Available
          </h3>
          <p className="mt-2 text-slate-500">
            Projects will be added soon. Stay tuned for upcoming work.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="px-5 py-16 md:px-20 lg:px-28 xl:px-40">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto mb-14 max-w-4xl text-center"
      >
        <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          🚀 Portfolio Showcase
        </span>

        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Featured Projects
        </h2>

        <div className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-600" />

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
          A collection of full-stack applications built with modern technologies
          including Next.js, React, Node.js, TypeScript, Prisma, PostgreSQL,
          MongoDB, Tailwind CSS, and cloud deployment. Every project focuses on
          clean architecture, scalability, performance, responsive design, and
          user experience.
        </p>
      </motion.div>

      {/* Statistics */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-14 grid grid-cols-2 gap-5 md:grid-cols-4"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
        >
          <h3 className="text-3xl font-bold text-blue-600">
            <CountUp end={projects.length} duration={2} suffix="+" />
          </h3>
          <p className="mt-2 text-sm text-slate-500">Featured Projects</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
        >
          <h3 className="text-3xl font-bold text-blue-600">
            <CountUp end={20} duration={2} suffix="+" />
          </h3>
          <p className="mt-2 text-sm text-slate-500">Technologies</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
        >
          <h3 className="text-3xl font-bold text-blue-600">
            <CountUp end={100} duration={2.5} suffix="%" />
          </h3>
          <p className="mt-2 text-sm text-slate-500">Responsive Design</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
        >
          <h3 className="text-3xl font-bold text-blue-600">Modern</h3>
          <p className="mt-2 text-sm text-slate-500">Tech Stack</p>
        </motion.div>
      </motion.div>

      {/* Project Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default function FeaturedCards() {
  return (
    <main className="bg-slate-50 font-sans mt-10">
      <ProjectCards projects={MOCK_PROJECTS} />
    </main>
  );
}
