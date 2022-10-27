import React from "react";
import styled from "styled-components";
import { BgBanner } from "../images/img";
import { fonts } from "../utils";
import Tombol from "./kecil/Tombol";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BgBanner});
  background-origin: border-box;
  background-size: cover;
  background-position: 100%;
  width: 100%;
  height: 30vh;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 80% ;
`;

const Title = styled.h1`
  font-family: ${fonts.inter};
  color: white;
  letter-spacing: 1px ;
`;

const Banner = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          Tips, tricks, and plant guides to make plant care downright easy
        </Title>
        <Tombol label=" Read more blogs"/>
      </Wrapper>
    </Container>
  );
};

export default Banner;
