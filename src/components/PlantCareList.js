import { Container, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import PlantCareItem from "./PlantCareItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { getServices } from "../redux/features/services/servicesSlice";


const PlantCareList = () => {
  const [services, setServices] = useState([]);

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices())
      .then((res) => {
        setServices(res.payload.services);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

const careServices = services.filter((carePost) => carePost.category === "care" );

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
          swipeable
        >
          {careServices.map((item, index) => (
            <PlantCareItem
              key={index}
              title={item.title}
              image={item.idImage}
              id={item._id}
            />
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};

export default PlantCareList;
