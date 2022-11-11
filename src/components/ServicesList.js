import { Container, Box } from "@mui/material";
import React from "react";
import { ServicesList1, ServicesList2, ServicesList3, ServicesList4, ServicesList5 } from "../images/img";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServicesItem from "./ServicesItem";

const ServicesList = () => {
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
    <Container fixed>
      <Box my={5}>
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
          swipeable>
          <ServicesItem title="The New Plant Parent" image={ServicesList1} />
          <ServicesItem title="The New Plant Parent" image={ServicesList2} />
          <ServicesItem title="The New Plant Parent" image={ServicesList3} />
          <ServicesItem title="The New Plant Parent" image={ServicesList4} />
          <ServicesItem title="The New Plant Parent" image={ServicesList5} />
        </Carousel>
      </Box>
    </Container>
  );
};

export default ServicesList;
