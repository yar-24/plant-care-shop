import React from "react";
import { Container, Stack, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors, fonts } from "../utils/";
import { PlantCareHero } from "../images/img";

const ReadMoreButton = styled(Button)`
  background-color: ${colors.secondary};
  box-shadow: none;
  text-transform: none;
  align-self: flex-end;
  margin: 16px 0;
  padding: 16px 32px;
  font-weight: 600;
  font-family: ${fonts.inter};
  &:hover {
    background-color: ${colors.secondary};
    background-image: linear-gradient(rgb(0 0 0/30%) 0 0);
    box-shadow: none;
  }
`;

const HeroPlantCare = () => {
  return (
    <Container fixed >
      <Stack direction="row" my={10} spacing={10}>
        <Stack>
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
          <ReadMoreButton variant="contained" size="large">
            Read More
          </ReadMoreButton>
        </Stack>
        <Box>
          <img src={PlantCareHero} alt="Plant" className="plant-img"/>
        </Box>
      </Stack>
    </Container>
  );
};

export default HeroPlantCare;
