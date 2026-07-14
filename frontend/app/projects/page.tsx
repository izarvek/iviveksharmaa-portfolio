import SmoothScroll from "@/components/common/SmoothScroll";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProjectsCards from "@/components/projects/ProjectsCards";
import ProjectsHero from "@/components/projects/ProjectsHero";

const ProjectsPage = () => {
  return (
    <>
      <SmoothScroll>
        <Navbar />
        <ProjectsHero />
        <ProjectsCards/>
        <Footer />
      </SmoothScroll>
    </>
  );
};

export default ProjectsPage;
