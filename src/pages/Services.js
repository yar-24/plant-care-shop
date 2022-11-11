import React from "react";
import BannerFreeOngkir from "../components/BannerFreeOngkir";
import BannerServices from "../components/BannerServices";
import Footer from "../components/Footer";
import HeroServices from "../components/HeroServices";
import ServicesList from "../components/ServicesList";

const Services = () => {
  return (
    <>
      <BannerServices />
      <HeroServices />
      <BannerFreeOngkir/>
      <ServicesList/>
      <Footer/>
    </>
  );
};

export default Services;
