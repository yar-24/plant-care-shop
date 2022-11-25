import React, { useContext } from 'react';
import BannerFreeOngkir from '../components/BannerFreeOngkir';
import BannerServices from '../components/BannerServices';
import HeroServices from '../components/HeroServices';
import ServicesList from '../components/ServicesList';
import LocaleContext from '../contexts/LocaleContext';

const Services = () => {
  const { locale } = useContext(LocaleContext);
  return (
    <>
      <BannerServices />
      <HeroServices />
      <BannerFreeOngkir />
      <ServicesList>
        {locale === 'id' ? 'Mungkin Anda sukai' : 'You might like'}
      </ServicesList>
    </>
  );
};

export default Services;
