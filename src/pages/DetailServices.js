import React, { useContext } from "react";
import BannerFreeOngkir from "../components/BannerFreeOngkir";
import BlogDetailServices from "../components/BlogDetailServices";
import Footer from "../components/Footer";
import ServicesList from "../components/ServicesList";
import LocaleContext from "../contexts/LocaleContext";

const DetailServices = () => {
  const { locale } = useContext(LocaleContext);
  return (
    <>
      <BlogDetailServices />
      <BannerFreeOngkir />
      <ServicesList>{locale === 'id' ? 'Mungkin Anda sukai' : 'You might like'}</ServicesList>
      <Footer/>
    </>
  );
};

export default DetailServices;
