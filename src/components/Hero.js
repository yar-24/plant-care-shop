import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../utils/";
import { PlantHero } from "../images/img";
import Tombol from "./kecil/Tombol";

const Container = styled.div`
  display: flex;
  height: 90vh;
  background: ${colors.primary};
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 50px 50px 50px 100px;
`;
const Title = styled.h1`
  font-family: ${fonts.comforteaa};
`;

const Desc = styled.p`
  font-family: ${fonts.inter};
  margin: 0px 0px 40px 0px;
`;
const Right = styled.div`
  display: flex;
  justify-content: end;
  width: 50%;
  position: relative;
`;
const Image = styled.img`
  position: absolute;
  right: 100px;
  bottom: 0;
`;

const Box = styled.div`
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
`;

const Hero = () => {
  return (
    <Container>
      <Left>
        <Title>
          Discover the best plant for your aura and your space. Protect your
          breath.
        </Title>
        <Desc>
          Breath helps you discover the best plants for your space, delivers
          them to your door and helps you look after them.
        </Desc>
        <Tombol label="Discover The Plants" />
      </Left>
      <Right>
        <Image src={PlantHero} />
        <Box></Box>
      </Right>
    </Container>
  );
};

export default Hero;
