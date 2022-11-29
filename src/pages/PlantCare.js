import { Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Banner from "../components/Banner";
import BannerFreeOngkir from "../components/BannerFreeOngkir";
import CardList from "../components/CardList";
import HeroPlantCare from "../components/HeroPlantCare";
import SkeletonBannerPlantCare from "../components/kecil/SkeletonBannerPlantCare";
import PlantCareList from "../components/PlantCareList";
import LocaleContext from "../contexts/LocaleContext";
import { getServices } from "../redux/features/services/servicesSlice";
import { colors, fonts } from "../utils";
import { styled } from "@mui/material/styles";

const Title = styled(Typography)`
  font-family: ${fonts.confortaa};
  line-height: 2;
  color: ${colors.white};

  @media (max-width: 1200px) {
    font-size: 36px;
  }

  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

const Desc = styled(Typography)`
  font-family: ${fonts.confortaa};
  line-height: 2;
  color: ${colors.white};
  @media (max-width: 1200px) {
    font-size: 30px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const PlantCare = ({ addItem }) => {
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

      <Banner sx={{ m: 1 }}>
        <Title variant="h3" component="h3" gutterBottom>
          {locale === "id" ? "Perawatan Tanaman" : "Plant Care"}
        </Title>
        <Desc variant="h4" component="h3" gutterBottom>
          {locale === "id"
            ? "Kiat, trik, dan panduan untuk membuat perawatan tanaman benar-benar mudah."
            : "Tips, tricks, and plant guides to make plant care downright easy."}
        </Desc>
      </Banner>
      <PlantCareList />
      <BannerFreeOngkir />
      <CardList addItem={addItem}>
        {locale === "id" ? "Mungkin Anda sukai" : "You might like"}
      </CardList>
    </>
  );
};

export default PlantCare;
