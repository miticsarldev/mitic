import React, { useEffect } from "react";
import Navbar from "../parts/Navbar";
import Hero from "../parts/Hero";
import AgenceLanding from "../parts/AgenceLanding";
import Services from "../parts/Services";
import OffreExpertise from "../parts/OffreExpertise";
import ServicesCarousel from "../parts/ServicesCarousel";

const MainPage = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <AgenceLanding />
      <Services />
      <OffreExpertise />
      <ServicesCarousel />
      <div className="w-full h-[1000px]"></div>
    </div>
  );
};

export default MainPage;
