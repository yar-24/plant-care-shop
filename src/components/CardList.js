import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Typography, Container, Stack, Box } from "@mui/material";
import CardItem from "./CardItem";
import { fonts } from "../utils";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/features/products/productSlice";
import Swal from "sweetalert2";
import SkeletonCardItem from "./kecil/SkeletonCardItem";

const TitleText = styled(Typography)`
  font-family: ${fonts.comfortaa};
  font-weight: 700;
  margin: 30px 0;
  font-size: 30px;
`;
const CardList = ({ children }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
      .then((res) => {
        const data = res.payload.products;
        setproducts(data);
        setIsLoading(true);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: err,
        });
      });
  }, [dispatch]);

  return (
    <Container fixed>
      <TitleText variant="h5" component="h2">{children}</TitleText>
      <Stack my={5}>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
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
          {products.map((product, index) => (
            <Box key={index}>
              {isLoading ? (
                <CardItem
                  nameProduct={product.namePlant}
                  imgProduct={`${product.idImageProduct}`}
                  priceProduct={product.price}
                  idProduct={product._id}
                />
              ) : (
                <SkeletonCardItem />
              )}
            </Box>
          ))}
        </Carousel>
      </Stack>
    </Container>
  );
};
export default CardList;
