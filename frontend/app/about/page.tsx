import AboutFeature from "@/components/about/AboutFeature";
import AboutHero from "@/components/about/AboutHero";
import SmoothScroll from "@/components/common/SmoothScroll";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <SmoothScroll>
        <Navbar />
        <AboutHero />
        <AboutFeature />
        <Footer />
      </SmoothScroll>
    </>
  );
};

export default page;
