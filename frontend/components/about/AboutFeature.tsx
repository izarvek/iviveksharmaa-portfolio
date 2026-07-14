import {
  FiGrid,
  FiZap,
  FiUsers,
  FiShield,
  FiLink,
  FiSend,
  FiArrowRight,
} from "react-icons/fi";
const AboutFeature = () => {
  const features = [
    {
      title: "Analytics Dashboard",
      description:
        "Track performance with real-time insights and make data-driven decisions effortlessly.",
      action: "View Insights",
      icon: <FiGrid className="text-xl text-slate-700" />,
    },
    {
      title: "Instant Automation",
      description:
        "Automate repetitive tasks and streamline workflows to save time and boost efficiency.",
      action: "Automate Now",
      icon: <FiZap className="text-xl text-slate-700" />,
    },
    {
      title: "Team Collaboration",
      description:
        "Work seamlessly with your team using shared tools and real-time updates.",
      action: "Collaborate",
      icon: <FiUsers className="text-xl text-slate-700" />,
    },
    {
      title: "Advanced Security",
      description:
        "Keep your data safe with enterprise-grade security and access controls.",
      action: "Learn Security",
      icon: <FiShield className="text-xl text-slate-700" />,
    },
    {
      title: "Easy Integrations",
      description:
        "Connect with your favorite tools and services without any hassle.",
      action: "Explore Integrations",
      icon: <FiLink className="text-xl text-slate-700" />,
    },
    {
      title: "Fast Deployment",
      description:
        "Launch your projects quickly with optimized performance and scalability.",
      action: "Deploy Now",
      icon: <FiSend className="text-xl text-slate-700" />,
    },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 ">
      <section className="w-full flex-col items-center mx-auto px-4 py-20  border border-gray-200 rounded-2xl">
        <div className="mx-auto flex w-full flex-col items-center">
          <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm text-slate-800">
            Core Features
          </div>

          <h1 className="mt-7 text-center text-5xl font-medium text-slate-900">
            Build Faster and Grow Smarter
          </h1>

          <p className="mt-3 max-w-[540px] text-center text-sm md:text-base text-slate-600">
            Build faster with powerful, flexible tools designed to simplify
            workflows and deliver results without complexity.
          </p>

          <div className="mt-10 grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-lg border border-slate-200 bg-slate-50 p-6 hover:bg-slate-100 transition-colors duration-300"
              >
                <div className="flex size-10 items-center justify-center rounded-lg border border-slate-200">
                  {feature.icon}
                </div>
                <h2 className="mt-6 text-sm font-medium text-slate-800">
                  {feature.title}
                </h2>
                <p className="mt-2 grow text-sm leading-5 text-slate-600">
                  {feature.description}
                </p>
                <div className="my-4.5 h-px w-full bg-linear-to-r from-slate-100 via-slate-200 to-slate-100" />
                <a
                  href="#"
                  className="group flex items-center gap-1 text-sm text-slate-600"
                >
                  {feature.action}
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFeature;
