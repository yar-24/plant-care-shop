import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import CardList from "../components/CardList";

const Home = () => {
  return (
    <>
      <Hero />
      <Banner/>
      <CardList>Popular Categories</CardList>
    </>
  );
};

export default Home;
