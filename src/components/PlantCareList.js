import { Container, Stack } from "@mui/material";
import React from "react";
import PlantCareItem from "./PlantCareItem";
import { PlantCare1, PlantCare2, PlantCare3, PlantCare4 } from "../images/img";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PlantCareList = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <Container>
      <Stack  my={5}>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
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
          <PlantCareItem
            title="Complete guide to watering"
            image={PlantCare1}
          />
          <PlantCareItem
            title="Complete guide to watering"
            image={PlantCare2}
          />
          <PlantCareItem
            title="Complete guide to watering"
            image={PlantCare3}
          />
          <PlantCareItem
            title="Complete guide to watering"
            image={PlantCare4}
          />
        </Carousel>
      </Stack>
    </Container>
  );
};

export default PlantCareList;