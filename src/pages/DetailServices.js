import React from "react";
import BannerFreeOngkir from "../components/BannerFreeOngkir";
import BlogDetailServices from "../components/BlogDetailServices";
import Footer from "../components/Footer";
import ServicesList from "../components/ServicesList";

const DetailServices = () => {
  return (
    <>
      <BlogDetailServices />
      <BannerFreeOngkir />
      <ServicesList/>
      <Footer/>
    </>
  );
};

export default DetailServices;
