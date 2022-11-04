import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import CardList from "../components/CardList";
import styled from "styled-components";
import { fonts } from "../utils";
import Tombol from "../components/kecil/Tombol";

const Title = styled.h1`
  font-family: ${fonts.inter};
  color: white;
  letter-spacing: 1px;

  @media (max-width: 1200px) {
  }
`;

const Home = () => {
  return (
    <>
      <Hero />
      <Banner alignItems={{lg: "end", xs: "center"}} sx={{m: 2}} >
        <Title>
          Tips, tricks, and plant guides to make plant care downright easy
        </Title>
        <Tombol label="Read more blogs"  />
      </Banner>
      <CardList>Popular Categories</CardList>
    </>
  );
};

export default Home;
