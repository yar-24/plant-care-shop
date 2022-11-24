import React, { useState, useEffect, useContext } from 'react';
import HeroPlantCare from '../components/HeroPlantCare';
import Banner from '../components/Banner';
import { Typography } from '@mui/material';
import { colors, fonts } from '../utils';
import PlantCareList from '../components/PlantCareList';
import BannerFreeOngkir from '../components/BannerFreeOngkir';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { getServices } from '../redux/features/services/servicesSlice';
import LocaleContext from '../contexts/LocaleContext';
import SkeletonBannerPlantCare from '../components/kecil/SkeletonBannerPlantCare';
import CardList from '../components/CardList';

const PlantCare = () => {
  const { locale } = useContext(LocaleContext);
  const [heroPlantCare, setHeroPlantCare] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(getServices())
      .then((res) => {
        setHeroPlantCare(res.payload.services[0]);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispacth]);

  return (
    <>
      {isLoading ? (
        <HeroPlantCare idService={heroPlantCare._id} />
      ) : (
        <SkeletonBannerPlantCare />
      )}

      <Banner>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontFamily: fonts.comfortaa,
            lineHeight: 2,
            color: colors.white,
          }}
          gutterBottom>
          {locale === 'id' ? 'Perawatan Tanaman' : 'Plant Care'}
        </Typography>
        <Typography
          variant="h4"
          component="h3"
          sx={{ fontFamily: fonts.inter, lineHeight: 2, color: colors.white }}
          gutterBottom>
          {locale === 'id'
            ? 'Kiat, trik, dan panduan untuk membuat perawatan tanaman benar-benar mudah.'
            : 'Tips, tricks, and plant guides to make plant care downright easy.'}
        </Typography>
      </Banner>
      <PlantCareList />
      <BannerFreeOngkir />
      <CardList>
        {locale === 'id' ? 'Mungkin Anda sukai' : 'You might like'}
      </CardList>
      <Footer />
    </>
  );
};

export default PlantCare;
