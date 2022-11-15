import React from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fonts } from "../utils/";
import CustomButton from "./CustomButton";
import { ServicesHero } from "../images/img";

const HeroImage = styled("img")`
  width: 100%;
`;

const HeroServices = () => {
  return (
    <Container fixed>
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        alignItems="center"
        my={{ xs: 4, md: 6 }}
        spacing={{ xs: 4, md: 6 }}>
        <Stack sx={{ flex: 3 }}>
          <Typography variant="body1" sx={{ fontFamily: fonts.inter, lineHeight: 2 }} gutterBottom>
            Plants are power for your brain. Research has found that a bit of green can have a
            positive impact on productivity and improve the air of household pollutants. Our
            collection of concentration-boosting indoor house plants will turn the focus on in your
            home or study.
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: fonts.inter, lineHeight: 2 }} gutterBottom>
            Once you've decided on your plants, get your and your new pals some pots and plant
            stands to help them look their best. Entrust us with the decoration of your home
          </Typography>
          <CustomButton size="large" sx={{ alignSelf: "flex-start", my: 4, px: 4, py: 2 }}>
            Decorate your home now
          </CustomButton>
        </Stack>
        <Box sx={{ flex: 2 }}>
          <HeroImage src={ServicesHero} alt="Plant" />
        </Box>
      </Stack>
    </Container>
  );
};

export default HeroServices;
