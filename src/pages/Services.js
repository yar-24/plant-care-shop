import React from "react";
import BannerFreeOngkir from "../components/BannerFreeOngkir";
import BannerServices from "../components/BannerServices";
import Footer from "../components/Footer";
import HeroServices from "../components/HeroServices";

const Services = () => {
  return (
    <>
      <BannerServices />
      <HeroServices />
      <BannerFreeOngkir/>
      <Footer/>
    </>
  );
};

export default Services;
