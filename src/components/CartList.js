import React from "react";
import { styled } from "@mui/material/styles";
import {Typography, Container, Stack } from "@mui/material";
import CardItem from "./CardItem";
import { fonts } from "../utils";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CardListContainer = styled(Container)`
  max-width: 1024px;
  margin: 0 auto;
`;

const TitleText = styled(Typography)`
  font-size: 32px;
  font-family: ${fonts.comfortaa};
  font-weight: 700;
  margin: 32px 0;
`;
const CardList = ({ children }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <CardListContainer>
      <TitleText variant="h2">{children}</TitleText>
      <Stack my={5}>

        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={true}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </Carousel>
      </Stack>
    </CardListContainer>
  );
};
export default CardList;