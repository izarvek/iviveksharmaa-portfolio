import React from "react";

const AboutHero = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <div className="flex min-h-[300px] flex-col items-center justify-center px-6 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            About Us
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            We are committed to providing accessible, reliable, and
            patient-centered healthcare services through modern technology and
            compassionate care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
