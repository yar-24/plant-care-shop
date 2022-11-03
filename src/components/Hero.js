import React from "react";
import styled from "styled-components";
import { fonts } from "../utils/";
import { PlantHero } from "../images/img";
import Tombol from "./kecil/Tombol";
import { Container, Stack, Box } from "@mui/material";

const Title = styled.h1`
  font-family: ${fonts.comfortaa};
`;

const Desc = styled.p`
  font-family: ${fonts.inter};
  margin: 0px 0px 40px 0px;
`;
const Right = styled(Box)`
  display: flex;
  justify-content: end;
  position: relative;
  width: 50%;
`;
const Image = styled.img`
  position: absolute;
  bottom: 0;
  z-index:2 ;
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
  width: 241px;
  height: 100%;
  position: absolute ;
  right: -90px;
`;

const Hero = () => {
  return (
    <Container fixed>
      <Stack direction="row" spacing={10}>
        <Box my={21} sx={{ width: "50%"}}>
          <Title>
            Discover the best plant for your aura and your space. Protect your
            breath.
          </Title>
          <Desc>
            Breath helps you discover the best plants for your space, delivers
            them to your door and helps you look after them.
          </Desc>
          <Tombol
            label="Discover The Plants"
            style={{ alignSelf: "flex-start" }}
          />
        </Box>
        <Right >
          <Image src={PlantHero} />
          <Kotak></Kotak>
        </Right>
      </Stack>
    </Container>
  );
};

export default Hero;
