"use client";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto border-x border-slate-200 min-h-screen pt-32 pb-10">
      {/* Hero Badge */}
      <div className="flex flex-wrap items-center justify-center gap-2 pl-2.5 pr-4 py-1.5 mt-0 rounded-lg bg-slate-50 border border-slate-200">
        <p className="px-2 py-1 rounded-sm border bg-zinc-950 text-xs text-white">
          NEW
        </p>
        <p className="text-sm text-zinc-800">AI-Powered Growth Suite</p>
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl/18 text-center font-medium text-zinc-900 bg-clip-text leading-tight max-w-[700px] mt-4 px-4">
        Turn Your Ideas Into Scalable Products Faster
      </h1>

      {/* Description */}
      <p className="text-sm md:text-base text-center max-w-[500px] mt-2.5 text-zinc-700 px-4">
        Everything you need to design, develop and launch high-quality
        products — all in one place.
      </p>

      {/* CTA */}
      <div className="flex gap-3.5 mt-6">
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-3.5 rounded-lg text-sm font-medium transition cursor-pointer">
          Start Free Trial
        </button>
      </div>

      {/* Subtext */}
      <p className="text-sm font-medium text-zinc-700 mt-5.5">
        No credit card required · Setup in seconds
      </p>

      <div className="w-full mt-8 border-t border-slate-200"></div>

      {/* Dashboard Image */}
      <div className="w-full px-8 md:px-12 mt-8 md:mt-11 pb-20">
        <img
          className="max-h-64 md:max-h-96 object-cover object-top w-full max-w-6xl mx-auto border border-zinc-200 rounded-xl"
          src="https://assets.prebuiltui.com/images/components/hero-section/hero-modern-dashboard.png"
          alt="dashboard"
        />
      </div>
    </div>
  );
};

export default Hero;