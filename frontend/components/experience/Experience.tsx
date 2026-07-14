"use client";

import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiCode,
  FiCheckCircle,
} from "react-icons/fi";

const experiences = [
  {
    company: "Creature Industry",
    role: "Full Stack Developer Intern",
    duration: "2025 - Present",
    location: "Remote",
    type: "Internship",
    description:
      "Developed scalable full-stack web applications using the MERN Stack and Next.js. Worked on enterprise-level dashboards, REST APIs, authentication, responsive UI, and database integration while collaborating with the development team.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Git",
    ],
  },
  {
    company: "Cognify Technologies",
    role: "Full Stack Developer Intern",
    duration: "2025",
    location: "Remote",
    type: "Internship",
    description:
      "Built modern responsive web applications and reusable UI components. Worked on frontend development, REST API integration, authentication, and state management while following industry-standard coding practices.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "GitHub",
    ],
  },
  {
    company: "Internshala",
    role: "Web Development Training",
    duration: "Completed",
    location: "Online",
    type: "Training",
    description:
      "Completed comprehensive web development training covering HTML, CSS, JavaScript, React, backend development fundamentals, databases, deployment, and project development.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  },
];

const Experience = () => {
  return (
    <section className="px-6 py-10 md:px-16 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="mb-16 text-center">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
            EXPERIENCE
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Professional Experience
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Hands-on experience building modern web applications, enterprise
            dashboards, REST APIs, responsive interfaces, and scalable backend
            systems using modern technologies.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative border-l-2 border-blue-200 pl-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Dot */}

              <div className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
                <FiBriefcase size={16} />
              </div>

              {/* Card */}

              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-sm">
                <div className="flex flex-col justify-between gap-4 lg:flex-row">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {exp.role}
                    </h3>

                    <p className="mt-1 text-lg font-medium text-blue-600">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <FiCalendar />
                      {exp.duration}
                    </div>

                    <div className="flex items-center gap-2">
                      <FiMapPin />
                      {exp.location}
                    </div>

                    <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="mt-6 leading-7 text-slate-600">
                  {exp.description}
                </p>

                <div className="mt-7">
                  <div className="mb-4 flex items-center gap-2 font-semibold text-slate-800">
                    <FiCode />
                    Technologies
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <div className="flex items-center gap-2 text-green-600">
                    <FiCheckCircle />
                    Successfully contributed to real-world software development
                    projects and production-ready applications.
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
