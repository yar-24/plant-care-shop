import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServicesItem from "./ServicesItem";
import { fonts } from "../utils";
import { useDispatch } from "react-redux";
import { getServices } from "../redux/features/services/servicesSlice";
import { useParams } from "react-router-dom";

const ServicesList = ({ children, category }) => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const TitleText = styled(Typography)`
    font-family: ${fonts.comfortaa};
    font-weight: 700;
    margin: 30px 0;
    font-size: 24px;
  `;

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
  const { id } = useParams();

  useEffect(() => {
    dispatch(getServices())
      .then((res) => {
        setServices(res.payload.services);
        setIsLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  const otherServices = services.filter((otherPost) => otherPost.category === category && otherPost._id !== id);

  return (
    <Container fixed>
      <TitleText variant="h5" component="h2">
        {children}
      </TitleText>
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
          {otherServices.map((item, index) =>
            isLoading ? (
              <ServicesItem
                key={index}
                title={item.title}
                image={`https://res.cloudinary.com/eundangdotcom/image/upload/v1666578066/${item.idImage}`}
                id={item._id}
              />
            ) : (
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={300}
                height={300}
              />
            )
          )}
        </Carousel>
      </Box>
    </Container>
  );
};

export default ServicesList;
