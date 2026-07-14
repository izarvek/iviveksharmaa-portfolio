"use client"
import { motion } from "framer-motion";
import {
  FiCheck,
  FiCode,
  FiDatabase,
  FiShield,
  FiSmartphone,
  FiCloud,
  FiCheckCircle,
} from "react-icons/fi";

export const PRICING_PLANS = [
  {
    id: 1,
    title: "Business Website",
    subtitle:
      "Perfect for startups, local businesses, agencies, gym, restaurants, clinics, and personal brands.",
    price: "₹8K - ₹15K",
    duration: "Per Project",
    buttonText: "Get Started",
    highlighted: false,
    features: [
      "Responsive Website (Mobile, Tablet & Desktop)",
      "Up to 8-12 Pages",
      "Modern UI/UX Design",
      "Google Maps Integration",
      "Social Media Integration",
      "Basic SEO Optimization",
      "Fast Loading Performance",
      "SSL & Secure Deployment",
      "WhatsApp Chat Integration",
      "Domain & Hosting Support",
      "30 Days Free Support",
    ],
  },
  {
    id: 2,
    title: "Web Application",
    subtitle:
      "Perfect for dashboards, management systems, booking systems, CRM, ERP, and SaaS MVPs.",
    price: "₹20K - ₹50K",
    duration: "Per Project",
    buttonText: "Start Project",
    highlighted: true,
    features: [
      "Everything in Business Website",
      "Secure Authentication & Authorization",
      "Admin Dashboard",
      "User Dashboard",
      "Role-Based Access Control",
      "CRUD Operations",
      "Database Integration",
      "REST API Development",
      "File Upload Support",
      "Email Notifications",
      "Performance Optimization",
      "Production Deployment",
      "90 Days Free Support",
    ],
  },
  {
    id: 3,
    title: "Custom Web Application",
    subtitle:
      "Designed for enterprise software, SaaS platforms, AI solutions, and business automation.",
    price: "Custom Quote",
    duration: "Based on Requirements",
    buttonText: "Contact Me",
    highlighted: false,
    features: [
      "Everything in Web Application",
      "Fully Customized Features",
      "Multi-User & Multi-Role System",
      "Payment Gateway Integration",
      "Third-Party API Integration",
      "AI & Automation Integration",
      "Advanced Analytics Dashboard",
      "Cloud Deployment",
      "CI/CD Pipeline",
      "Security Hardening",
      "Performance & Scalability Optimization",
      "Technical Documentation",
      "Long-Term Maintenance Available",
      "Priority Technical Support",
    ],
  },
];

export default function PricingCard() {
  return (
    <section className=" px-6 md:px-16 lg:px-24 xl:px-32 py-10 ">
      <div className="flex flex-col xl:flex-row gap-14 items-start justify-between p-6 rounded-2xl border border-gray-200">
        <div className="w-full xl:max-w-sm">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            OUR SERVICES
          </span>

          <h3 className="mt-5 text-3xl font-bold text-slate-900">
            Professional Software Development
          </h3>

          <p className="mt-5 text-sm leading-7 text-slate-500">
            I build modern websites, scalable web applications, and enterprise
            software tailored to your business requirements. Every project is
            developed with clean architecture, responsive UI, security,
            performance, and future scalability in mind.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3 text-slate-600">
              <div className="rounded-lg border border-slate-200 p-2.5">
                <FiCode className="size-5 text-blue-600" />
              </div>
              <p>Modern Tech Stack</p>
            </div>

            <div className="flex items-center gap-3 text-slate-600">
              <div className="rounded-lg border border-slate-200 p-2.5">
                <FiSmartphone className="size-5 text-blue-600" />
              </div>
              <p>Fully Responsive & Mobile-First User Interface</p>
            </div>

            <div className="flex items-center gap-3 text-slate-600">
              <div className="rounded-lg border border-slate-200 p-2.5">
                <FiDatabase className="size-5 text-blue-600" />
              </div>
              <p>Secure Database & REST API Integration</p>
            </div>

            <div className="flex items-center gap-3 text-slate-600">
              <div className="rounded-lg border border-slate-200 p-2.5">
                <FiShield className="size-5 text-blue-600" />
              </div>
              <p>Authentication, Authorization & Secure Development</p>
            </div>

            <div className="flex items-center gap-3 text-slate-600">
              <div className="rounded-lg border border-slate-200 p-2.5">
                <FiCloud className="size-5 text-blue-600" />
              </div>
              <p>Production Deployment with Cloud Hosting Support</p>
            </div>

            <div className="flex items-center gap-3 text-slate-600">
              <div className="rounded-lg border border-slate-200 p-2.5">
                <FiCheckCircle className="size-5 text-blue-600" />
              </div>
              <p>Post-Launch Maintenance & Technical Support</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-end">
          {PRICING_PLANS.map((plan, index) => {
            const isDark = index === 1;
            const isBlue = index === 2;

            return (
              <div
                key={plan.id}
                className={`group w-full  rounded-xl p-6 pb-10 transition-all duration-300 hover:-translate-y-2 ${
                  isDark
                    ? "bg-blue-950 text-white"
                    : isBlue
                      ? "bg-cyan-950 text-white"
                      : "border border-slate-200 bg-white"
                }`}
              >
                {/* Header */}
                <div className="flex flex-col items-center justify-center text-center">
                  <h3 className="text-lg font-semibold">{plan.title}</h3>

                  <p
                    className={`mt-2 text-sm ${
                      isDark || isBlue ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {plan.subtitle}
                  </p>

                  <p className="mt-5 text-2xl font-bold">
                    {plan.price}
                    <span
                      className={`ml-1 text-sm font-normal ${
                        isDark || isBlue ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {plan.duration}
                    </span>
                  </p>

                  <button
                    className={`mt-5 w-full rounded-lg py-2.5 font-medium transition ${
                      isDark || isBlue
                        ? "bg-white text-gray-900 hover:bg-gray-100"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>

                {/* Features */}
                <div className="mt-3 flex flex-col">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.45,
                        delay: featureIndex * 0.08,
                        ease: "easeOut",
                      }}
                      className={`flex items-center gap-2 py-3 ${
                        featureIndex !== plan.features.length - 1 &&
                        (isDark || isBlue
                          ? "border-b border-gray-700"
                          : "border-b border-gray-200")
                      }`}
                    >
                      <div
                        className={`rounded-full p-1 ${
                          isDark || isBlue ? "bg-white/10" : "bg-gray-800"
                        }`}
                      >
                        <FiCheck
                          className={`size-3 ${
                            isDark || isBlue ? "text-white" : "text-white"
                          }`}
                        />
                      </div>

                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
