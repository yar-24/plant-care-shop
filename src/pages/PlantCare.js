import { Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Banner from '../components/Banner';
import BannerFreeOngkir from '../components/BannerFreeOngkir';
import CardList from '../components/CardList';
import HeroPlantCare from '../components/HeroPlantCare';
import SkeletonBannerPlantCare from '../components/kecil/SkeletonBannerPlantCare';
import PlantCareList from '../components/PlantCareList';
import LocaleContext from '../contexts/LocaleContext';
import { getServices } from '../redux/features/services/servicesSlice';
import { colors, fonts } from '../utils';

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
    </>
  );
};

export default PlantCare;
