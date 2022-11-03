import React from "react";
import HeroPlantCare from "../components/HeroPlantCare";
import Banner from "../components/Banner";
import { Typography } from "@mui/material";
import { colors, fonts } from "../utils";
import PlantCareList from "../components/PlantCareList";

const PlantCare = () => {
  return (
    <>
      <HeroPlantCare />
      <Banner>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontFamily: fonts.comfortaa,
            lineHeight: 2,
            color: colors.white,
            margin: '0px 30px 0px 30px'
          }}
          gutterBottom
        >
          Plant Care
        </Typography>
        <Typography
          variant="h4"
          component="h3"
          sx={{ fontFamily: fonts.inter, lineHeight: 2, color: colors.white, margin: '0px 30px 0px 30px' }}
          gutterBottom
        >
          Tips, tricks, and plant guides to make plant care downright easy.
        </Typography>
      </Banner>
      <PlantCareList/>
    </>
  );
};

export default PlantCare;
