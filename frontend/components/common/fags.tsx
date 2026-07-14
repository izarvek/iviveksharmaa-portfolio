"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion } from "framer-motion";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "How soon can you join a new role?",
      answer:
        "I can join within 6 days after receiving the official offer, allowing enough time to complete the necessary formalities and prepare for a smooth onboarding process.",
    },
    {
      question: "Which role are you currently seeking?",
      answer:
        "I am actively seeking a Full Stack Developer position where I can contribute to building scalable, high-performance web applications using modern technologies.",
    },
    {
      question: "Where do you see yourself in the next 2 years?",
      answer:
        "My goal is to become an exceptional Software Engineer with strong expertise in AI/ML while continuing to build scalable products and solve real-world business problems.",
    },
    {
      question: "Which technical roles can you work in?",
      answer:
        "I can work as a Full Stack Developer, Frontend Developer, Backend Developer, DevOps Engineer, Flutter Developer, Data Scientist, AI/ML Engineer, and Cybersecurity Engineer depending on project requirements.",
    },
    {
      question: "What is the estimated cost of a business website?",
      answer:
        "A professional business website typically starts from ₹8,000 and can go up to ₹15,000 depending on the design, features, responsiveness, SEO, and custom requirements.",
    },
    {
      question: "What is the estimated cost of a web application?",
      answer:
        "A custom web application generally ranges between ₹20,000 and ₹50,000 based on modules, authentication, dashboards, APIs, payment integration, and deployment requirements.",
    },
    {
      question: "Which technologies do you specialize in?",
      answer:
        "I primarily work with Next.js, React.js, Node.js, Express.js, FastAPI, Python, TypeScript, JavaScript, Tailwind CSS, Prisma ORM, Mongoose ODM, PostgreSQL, MongoDB, Flutter, Firebase, Supabase, Docker, Kubernetes, AWS, VPS, Jenkins, and GitHub Actions.",
    },
    {
      question: "Do you build responsive websites?",
      answer:
        "Yes. Every project is designed to work seamlessly across desktops, tablets, and mobile devices with a mobile-first and responsive design approach.",
    },
    {
      question: "Do you develop custom software solutions?",
      answer:
        "Yes. I build custom websites, web applications, admin dashboards, enterprise management systems, REST APIs, SaaS products, and automation solutions tailored to business requirements.",
    },
    {
      question: "Can you work with existing projects?",
      answer:
        "Absolutely. I can maintain, optimize, redesign, add new features, fix bugs, improve performance, and modernize existing applications without affecting the current workflow.",
    },
    {
      question: "Do you provide deployment services?",
      answer:
        "Yes. I can deploy applications on Vercel, AWS, VPS servers, Hostinger, DigitalOcean, or any cloud platform, including domain configuration, SSL, CI/CD, and production optimization.",
    },
    {
      question: "Can you develop AI-powered applications?",
      answer:
        "Yes. I can integrate AI capabilities such as chatbots, recommendation systems, document analysis, intelligent search, automation workflows, and OpenAI-powered features into modern applications.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes. I provide ongoing maintenance, bug fixes, feature enhancements, security updates, and technical support after project delivery based on client requirements.",
    },
    {
      question: "Do you work with startups and businesses?",
      answer:
        "Yes. I collaborate with startups, entrepreneurs, agencies, and established businesses to transform ideas into scalable digital products.",
    },
    {
      question: "Why should someone hire you?",
      answer:
        "I focus on writing clean, maintainable, and scalable code while delivering modern UI/UX, optimized performance, SEO-friendly architecture, and reliable long-term solutions that create real business value.",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-semibold text-neutral-900 text-center md:text-start mb-4">
            Most asked FAQs
          </h2>

          <p className="text-neutral-800 max-w-[416px] text-sm text-center md:text-start mx-auto md:mx-0">
            We are here to help you and solve doubts. Find answers to the most
            common questions below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              onClick={() => toggleFAQ(index)}
              className="bg-slate-50 p-3.5 rounded-lg cursor-pointer transition-all duration-300 border border-slate-200 hover:bg-slate-100"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-800">
                  {faq.question}
                </span>

                <div
                  className={`p-1 rounded transition-colors ${
                    openIndex === index
                      ? "bg-slate-200 text-slate-600"
                      : "text-slate-400 hover:bg-slate-300 hover:text-slate-600"
                  }`}
                >
                  {openIndex === index ? (
                    <FiMinus size={20} />
                  ) : (
                    <FiPlus size={20} />
                  )}
                </div>
              </div>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
