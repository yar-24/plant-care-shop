import React from "react";
import styled from "styled-components";
import { fonts, mobile } from "../utils/";
import { PlantHero } from "../images/img";
import Tombol from "./kecil/Tombol";
import { Container, Stack, Box, Typography } from "@mui/material";

const Right = styled(Box)`
  display: flex;
  justify-content: end;
  position: relative;
  width: 50%;
  ${mobile({ display: "none" })}
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  z-index: 2;
`;

const Kotak = styled.div`
  background: linear-gradient(
    7.46deg,
    rgba(0, 158, 114, 0) -13.09%,
    rgba(0, 158, 114, 0.36) 4.09%,
    rgba(0, 158, 114, 0.531008) 67.54%,
    rgba(0, 158, 114, 0.57) 76.86%,
    rgba(0, 158, 114, 0.277619) 95.8%,
    rgba(0, 158, 114, 0) 102.77%
  );
  width: 200px;
  height: 100%;
  max-height: 600px;
  position: absolute;
  right: 0;
  ${mobile({ display: "none" })}
`;

const Hero = () => {
  return (
    <Container fixed>
      <Stack direction="row" spacing={10}>
        <Box my={{ xs: 5, md: 20 }} sx={{ flex: 3 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontFamily: fonts.comfortaa, fontWeight: 700 }}
            gutterBottom
          >
            Discover the best plant for your aura and your space. Protect your
            breath.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: fonts.inter, lineHeight: 2, mt: 2, mb: 3 }}
            gutterBottom
          >
            Breath helps you discover the best plants for your space, delivers
            them to your door and helps you look after them.
          </Typography>
          <Tombol
            label="Discover The Plants"
          />
        </Box>
        <Right>
          <Image src={PlantHero} />
        </Right>
        <Kotak></Kotak>
      </Stack>
    </Container>
  );
};

export default Hero;
