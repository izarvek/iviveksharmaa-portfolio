import SmoothScroll from "@/components/common/SmoothScroll";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Services from "@/components/services/Services";
import ServicesHero from "@/components/services/ServicesHero";

const ServicesPage = () => {
  return (
    <>
      <SmoothScroll>
        <Navbar />
        <ServicesHero />
        <Services/>
        <Footer />
      </SmoothScroll>
    </>
  );
};

export default ServicesPage;
