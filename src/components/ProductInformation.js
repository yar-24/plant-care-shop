import React from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import { fonts, getItemById, rupiah } from "../utils";
import CustomButton from "./CustomButton";
import LocaleContext from "../contexts/LocaleContext";
import { useCart } from "../contexts/cartContext";
import { useNavigate } from "react-router-dom";

const ProductImage = styled("img")`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ImageContainer = styled(Box)`
  position: relative;
  flex: 2;
  ::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const ProductInformation = ({ product }) => {
  const { locale } = React.useContext(LocaleContext);
  const { cart, cartDispatch } = useCart();
  const { _id, idImageProduct, namePlant, plantHeight, plantLight, care, price } =
    product;

    const navigate = useNavigate();

    const handleAddToCart = () => {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
      navigate("/cart");
    };
  
    const handleGoToCart = () => {
      navigate("/cart");
    };
  
    const isItemInCart = getItemById(cart, _id);

  return (
    <Container fixed>
      <Stack
        spacing={{ xs: 2, sm: 4, md: 6 }}
        my={{ xs: 2, sm: 4 }}
        direction={{ xs: "column", md: "row" }}
      >
        <ImageContainer>
          <ProductImage
            src={`https://res.cloudinary.com/eundangdotcom/image/upload/${idImageProduct}`}
            alt={namePlant}
          />
        </ImageContainer>
        <Stack sx={{ flex: 3 }} spacing={4} justifyContent="space-between">
          <Box>
            <Typography
              variant="h5"
              component="h1"
              fontFamily={fonts.comfortaa}
              fontWeight={700}
              gutterBottom
            >
              {namePlant}
            </Typography>
            <Typography
              variant="body1"
              lineHeight={2}
              fontFamily={fonts.inter}
              gutterBottom
            >
              {locale === "id"
                ? "Pilih tinggi tanaman (cm)"
                : "Choose plant height (cm)"}
            </Typography>
            <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
              {Array.isArray(plantHeight)
                ? plantHeight.map((item, index) => (
                    <CustomButton
                      size="large"
                      key={index}
                      sx={{ my: 1, px: 3, py: 2, width: "max-content" }}
                    >
                      {item.centimeters} cm
                    </CustomButton>
                  ))
                : null}
            </Stack>
            <Typography
              variant="body1"
              lineHeight={2}
              fontFamily={fonts.inter}
              gutterBottom
            >
              <TiWeatherPartlySunny /> {plantLight}
            </Typography>
            <Typography
              variant="body1"
              lineHeight={2}
              fontFamily={fonts.inter}
              gutterBottom
            >
              <TiWeatherPartlySunny /> {care}
            </Typography>
          </Box>
          <Stack>
            <Typography
              variant="h6"
              component="p"
              sx={{ fontFamily: fonts.comfortaa, fontWeight: 700 }}
              gutterBottom
            >
              {locale === "id" ? "Mulai Dari" : "From"} {rupiah(price)}
            </Typography>
            <CustomButton
               onClick={isItemInCart ? handleGoToCart : handleAddToCart}
              startIcon={<FaShoppingCart />}
              size="medium"
              sx={{ fontSize: 18 }}
            >
              {" "}
              {locale === "id" ? "Tambahkan ke Keranjang" : "Add To Bag"}
            </CustomButton>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ProductInformation;
