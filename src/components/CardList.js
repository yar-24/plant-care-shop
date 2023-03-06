import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Typography, Container, Stack, Box } from "@mui/material";
import CardItem from "./CardItem";
import { fonts } from "../utils";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import SkeletonCardItem from "./kecil/SkeletonCardItem";
import { useParams } from "react-router-dom";
import { getProducts } from "../redux/features/products/productSlice";
import Swal from "sweetalert2";

const TitleText = styled(Typography)`
  font-family: ${fonts.comfortaa};
  font-weight: 700;
  margin: 32px 0;
`;

const CardList = ({ children }) => {
  const [products, setproducts] = useState([]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
      .then((res) => {
        const data = res.payload.products;
        setproducts(data);
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


  const { isLoading } = useSelector((states) => states.products);
  
  const filterProducts = products.filter((product) => product._id !== id);

  return (
    <Container sx={{ padding: 0 }} disableGutters fixed>
      <TitleText sx={{ px: 3 }} variant="h5" component="h2">
        {children}
      </TitleText>
      <Stack mx={1} my={5}>
        <Carousel
          ssr
          partialVisbile
          // deviceType={deviceType}
          itemClass="image-item"
          responsive={responsive}
        >
          {(isLoading ? Array.from(new Array(4)) : filterProducts).map(
            (product, index) => (
              <Box sx={{ mx: 2 }} key={index}>
                {product ? (
                  <CardItem product={product} />
                ) : (
                  <SkeletonCardItem />
                )}
              </Box>
            )
          )}
        </Carousel>
      </Stack>
    </Container>
  );
};
export default CardList;
