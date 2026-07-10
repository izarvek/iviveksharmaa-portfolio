import Link from "next/link";
// import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col justify-end bg-black pt-20 overflow-hidden w-full">
        <div className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">
          <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
            <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-start text-left">
              <div className="flex items-center gap-2">
                {/* <Image
                  src="/window.svg"
                  alt="Window Icon"
                  width={24}
                  height={24}
                /> */}
                <h1 className="text-white text-xl">Vivek Sharma</h1>
              </div>
              <div className="w-full max-w-52 h-0.5 mt-8 bg-linear-to-r from-[#24212D] to-[#24212D]/0"></div>
              <p className="text-sm text-white/60 mt-6 max-w-[350px] leading-relaxed">
                PrebuiltUI is a growing collection of beautifully designed,
                production-ready Tailwind CSS UI components.
              </p>
            </div>

            <div className="w-[45%] md:w-[45%] lg:w-[15%] flex flex-col items-start text-left">
              <h3 className="text-sm text-white font-medium">
                Important Links
              </h3>
              <div className="flex flex-col gap-2 mt-6">
                <Link
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </div>
            </div>
            <div className="w-[45%] md:w-[45%] lg:w-[15%] flex flex-col items-start text-left">
              <h3 className="text-sm text-white font-medium">Social Links</h3>
              <div className="flex flex-col gap-2 mt-6">
                <Link
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Twitter
                </Link>
                <Link
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Youtube
                </Link>
                <Link
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Linkedin
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[45%] lg:w-[25%] flex flex-col items-start text-left mt-4 md:mt-0">
              <h3 className="text-sm text-white font-medium">
                Subscribe for news
              </h3>
              <div className="flex items-center border gap-2 border-white/20 h-13 max-w-80 w-full rounded-full overflow-hidden mt-4">
                <input
                  type="email"
                  placeholder="Enter your email.."
                  className="w-full h-full pl-6 outline-none text-sm bg-transparent text-white placeholder-white/60 placeholder:text-xs"
                  required
                />
                <button
                  type="submit"
                  className="bg-linear-to-b from-[#5623D8] to-[#7B53E2] hover:opacity-90 active:scale-95 transition w-56 h-10 rounded-full text-sm text-white cursor-pointer mr-1.5 focus:outline-none"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="w-full h-0.5 mt-16 mb-4 bg-linear-to-r from-[#24212D]/0 via-[#24212D] to-[#24212D]/0"></div>

          <div className="flex flex-wrap sm:flex-row items-center justify-between gap-y-4 gap-x-2 relative z-10">
            <p className="text-xs text-white/60">© 2026 Vivek Sharma</p>
            <div className="flex items-center gap-6 text-right">
              <Link
                href="#"
                className="text-xs text-white/60 hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <div className="w-px h-4 bg-white/20"></div>
              <Link
                href="#"
                className="text-xs text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="w-full flex justify-center mt-6 md:mt-12 md:mb-[-0.5%]">
            <h1 className="text-center font-extrabold tracking leading-[0.70] text-zinc-900 text-[clamp(4.5rem,19.5vw,25rem)] pointer-events-none select-none">
              HireMe
            </h1>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
