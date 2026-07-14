import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      description:
        "Vivek developed our business website with a clean, modern design and excellent responsiveness. The project was delivered on time, and communication throughout the development process was smooth and professional.",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Alex Turner",
      company: "Startup Founder",
    },
    {
      id: 2,
      description:
        "Our custom web application exceeded expectations. The admin dashboard, authentication system, and API integrations were implemented efficiently with a strong focus on performance and scalability.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Harry Peter",
      company: "Business Owner",
    },
    {
      id: 3,
      description:
        "Working with Vivek was a great experience. The project was built using modern technologies like Next.js and TypeScript, resulting in a fast, secure, and maintainable application.",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
      name: "Jason Kim",
      company: "Product Manager",
    },
    {
      id: 4,
      description:
        "The user interface is polished, responsive, and easy to navigate. Every feature was thoughtfully implemented, making our software more efficient and enjoyable for end users.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
      name: "Sofia Martinez",
      company: "UI/UX Consultant",
    },
    {
      id: 5,
      description:
        "From planning to deployment, the entire development process was handled professionally. The final application is secure, optimized, and ready to scale as our business grows.",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
      name: "Alex Johnson",
      company: "CEO",
    },
    {
      id: 6,
      description:
        "Our web application performs exceptionally well across desktop and mobile devices. The code quality, responsive design, and backend architecture were all delivered to a high standard.",
      image:
        "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
      name: "Emily Karter",
      company: "Project Lead",
    },
    {
      id: 7,
      description:
        "Vivek quickly understood our business requirements and transformed them into a reliable software solution. The clean architecture makes future feature additions much easier.",
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
      name: "Christofer Levin",
      company: "Operations Manager",
    },
    {
      id: 8,
      description:
        "The project delivery was transparent, timely, and exceeded our expectations. We appreciated the attention to detail, performance optimization, and responsive communication.",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Alex Turner",
      company: "Small Business Owner",
    },
    {
      id: 9,
      description:
        "Whether it's a business website or a custom web application, Vivek delivers solutions with modern technologies, clean code, and a strong commitment to quality and long-term maintainability.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Harry Peter",
      company: "Entrepreneur",
    },
  ];

  const columns = [
    { start: 0, end: 3, className: "animate-scroll-up-1" },
    { start: 3, end: 6, className: "hidden md:block animate-scroll-up-2" },
    { start: 6, end: 9, className: "hidden lg:block animate-scroll-up-3" },
  ];

  const renderCard = (testimonial, index) => (
    <div
      key={`${testimonial.id}-${index}`}
      className="group relative mb-4 overflow-hidden rounded-2xl border border-blue-500/20 bg-blue-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/5 to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Quote */}
      <div className="relative mb-5 flex items-center justify-between">
        <div>
          <FaQuoteLeft className="text-2xl text-white" />
        </div>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-sm text-yellow-400" />
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="relative mb-6 text-sm leading-7 text-slate-300">
        {testimonial.description}
      </p>

      {/* User */}
      <div className="relative flex items-center gap-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={42}
          height={42}
          className="rounded-full border-2 border-cyan-500/30 object-cover"
        />

        <div>
          <h4 className="font-medium text-white">{testimonial.name}</h4>

          <p className="text-sm text-slate-400">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }

                    @keyframes scroll-up {
                        0% {
                            transform: translateY(0);
                        }
                        100% {
                            transform: translateY(-50%);
                        }
                    }
                    .animate-scroll-up-1 {
                        animation: scroll-up 25s linear infinite;
                    }
                    .animate-scroll-up-2 {
                        animation: scroll-up 30s linear infinite;
                    }
                    .animate-scroll-up-3 {
                        animation: scroll-up 20s linear infinite; 
                    }
                `}
      </style>

      <div className="bg-white flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-medium text-black mb-4">
            What Clients Say
          </h1>
          <p className="text-sm text-slate-800 max-w-xl mx-auto">
            Discover how businesses and clients have benefited from high-quality
            web development, scalable solutions, and reliable project delivery.
          </p>
        </div>

        <div className="relative px-6 md:px-16 lg:px-24 xl:px-32  overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[600px] overflow-hidden">
            {columns.map((col, colIndex) => (
              <div key={colIndex} className={col.className}>
                {[
                  ...testimonials.slice(col.start, col.end),
                  ...testimonials.slice(col.start, col.end),
                ].map((testimonial, index) => renderCard(testimonial, index))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
