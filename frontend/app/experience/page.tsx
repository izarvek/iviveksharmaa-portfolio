import SmoothScroll from "@/components/common/SmoothScroll";
import ExperienceHero from "@/components/experience/ExperienceHero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Experience from "@/components/experience/Experience";

const ExperiencePage = () => {
  return (
    <>
      <SmoothScroll>
        <Navbar />
        <ExperienceHero />
        <Experience/>
        <Footer />
      </SmoothScroll>
    </>
  );
};

export default ExperiencePage;
