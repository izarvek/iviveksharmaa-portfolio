"use client";

import { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiDollarSign,
  FiClock,
  FiMessageSquare,
  FiSend,
} from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    // API Call Here

    alert("Inquiry submitted successfully.");
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        {/* Full Name */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
            <FiUser />
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Company */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
            <FiBriefcase />
            Company Name
          </label>

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="ABC Technologies"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
            <FiMail />
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
            <FiPhone />
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Service */}
        <div>
          <label className="mb-2 text-sm font-medium text-slate-700">
            Service Required
          </label>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option value="">Select Service</option>
            <option>Business Website</option>
            <option>Portfolio Website</option>
            <option>E-Commerce Website</option>
            <option>Custom Web Application</option>
            <option>Mobile App Development</option>
            <option>UI/UX Design</option>
            <option>API Development</option>
            <option>Maintenance & Support</option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
            <FiDollarSign />
            Estimated Budget
          </label>

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option value="">Select Budget</option>
            <option>₹10K - ₹20K</option>
            <option>₹20K - ₹50K</option>
            <option>₹50K - ₹1L</option>
            <option>₹1L - ₹5L</option>
            <option>Above ₹5L</option>
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
            <FiClock />
            Project Timeline
          </label>

          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option value="">Select Timeline</option>
            <option>ASAP</option>
            <option>1 Week</option>
            <option>2-4 Weeks</option>
            <option>1-2 Months</option>
            <option>Flexible</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
            <FiMessageSquare />
            Project Description
          </label>

          <textarea
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            required
            className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <FiSend size={18} />
          Send Inquiry
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
