import React from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomButton from "./CustomButton";
import { fonts } from "../utils/";
import { PlantCareHero } from "../images/img";

const HeroImage = styled("img")`
  width: 100%;
`;

const HeroPlantCare = () => {
  return (
    <Container fixed>
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        my={{ xs: 5, md: 10 }}
        spacing={{ xs: 5, md: 10 }}>
        <Stack sx={{ flex: 3 }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontFamily: fonts.comfortaa, fontWeight: 700 }}
            gutterBottom>
            How to care for your houseplants in summer
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: fonts.inter, lineHeight: 2 }} gutterBottom>
            Summer is a great time for indoor plants, but it’s also the timethey need the most
            attention. Give them the best summer ever.
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: fonts.inter, lineHeight: 2 }} gutterBottom>
            We’re in the hottest, sunniest months of the year (hopefully). That means great growing
            conditions for your plants, as long as they’re kept well watered. Here’s how to help
            them enjoy summer.
          </Typography>
          <CustomButton size="large" sx={{ alignSelf: "flex-end" }}>
            Read More
          </CustomButton>
        </Stack>
        <Box sx={{ flex: 2 }}>
          <HeroImage src={PlantCareHero} alt="Plant" />
        </Box>
      </Stack>
    </Container>
  );
};

export default HeroPlantCare;
