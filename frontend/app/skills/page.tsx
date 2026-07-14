import SmoothScroll from "@/components/common/SmoothScroll";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Skills from "@/components/skills/Skills";
import SkillsHero from "@/components/skills/SkillsHero";

const SkillsPage = () => {
  return (
    <>
      <SmoothScroll>
        <Navbar />
        <SkillsHero />
        <Skills/>
        <Footer />
      </SmoothScroll>
    </>
  );
};

export default SkillsPage;
