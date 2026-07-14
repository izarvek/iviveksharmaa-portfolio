"use client";

import {
  FiCode,
  FiDatabase,
  FiServer,
  FiLayout,
  FiCloud,
  FiGitBranch,
  FiCpu,
  FiShield,
} from "react-icons/fi";

const skills = [
  {
    title: "Frontend Development",
    icon: <FiLayout size={24} />,
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
      "Shadcn UI",
    ],
  },
  {
    title: "Backend Development",
    icon: <FiServer size={24} />,
    items: [
      "Node.js",
      "Express.js",
      "REST API",
      "Authentication",
      "JWT",
      "Role Based Access",
      "API Integration",
    ],
  },
  {
    title: "Database",
    icon: <FiDatabase size={24} />,
    items: [
      "MongoDB",
      "PostgreSQL",
      "Prisma ORM",
      "Mongoose",
      "Firebase",
      "Supabase",
    ],
  },
  {
    title: "Mobile Development",
    icon: <FiCode size={24} />,
    items: [
      "Flutter",
      "Dart",
      "Bloc",
      "Firebase",
      "REST API",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <FiCloud size={24} />,
    items: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "AWS",
      "Vercel",
      "Hostinger VPS",
      "Linux",
    ],
  },
  {
    title: "Version Control",
    icon: <FiGitBranch size={24} />,
    items: [
      "Git",
      "GitHub",
      "Git Flow",
      "Branching Strategy",
    ],
  },
  {
    title: "AI / ML",
    icon: <FiCpu size={24} />,
    items: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "LangChain",
      "Playwright",
      "TensorFlow (Learning)",
      "PyTorch (Learning)",
    ],
  },
  {
    title: "Cyber Security",
    icon: <FiShield size={24} />,
    items: [
      "OWASP",
      "Authentication",
      "Authorization",
      "Secure APIs",
      "JWT Security",
      "Web Security",
    ],
  },
];

const Skills = () => {
  return (
    <section className="px-6 py-20 md:px-16 lg:px-24 xl:px-32">
      <div>
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            MY SKILLS
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Technologies & Expertise
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
            I build scalable web applications, enterprise software, business
            websites, mobile applications, AI-powered solutions, and cloud-ready
            systems using modern technologies and industry-standard development
            practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                {skill.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {skill.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;