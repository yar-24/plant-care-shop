import React, { useState } from "react";
import { Container, Stack, Box, Typography, Skeleton } from "@mui/material";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GiBottleVapors } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import { colors, fonts, getItemById, rupiah } from "../utils";
import CustomButton from "./CustomButton";
import LocaleContext from "../contexts/LocaleContext";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/reducer/cartRedux";

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

const ProductInformation = ({ product, loading }) => {
  const { locale } = React.useContext(LocaleContext);
  const [count, setCount] = useState(1);
  const {
    _id,
    idImageProduct,
    namePlant,
    plantHeight,
    plantLight,
    care,
    price,
  } = product;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ item: { ...product, count } }));
    setCount(1)
    navigate("/cart");
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  const cart = useSelector((state) => state.cart.cart);
  const isItemInCart = getItemById(cart, _id);

  return (
    <Container fixed>
      <Stack
        spacing={{ xs: 2, sm: 4, md: 6 }}
        my={{ xs: 2, sm: 4 }}
        direction={{ xs: "column", md: "row" }}
      >
        <ImageContainer>
          {loading ? (
            <ProductImage
              src={`https://res.cloudinary.com/eundangdotcom/image/upload/${idImageProduct}`}
              alt={namePlant}
            />
          ) : (
            <Skeleton variant="rectangular" animation="wave" height={"100%"} />
          )}
        </ImageContainer>
        <Stack sx={{ flex: 3 }} spacing={4} justifyContent="space-between">
          <Box>
            {loading ? (
              <>
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
              </>
            ) : (
              <>
                <Skeleton variant="text" animation="wave" width={"30%"} />
                <Skeleton variant="text" animation="wave" width={"50%"} />
              </>
            )}

            <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
              {loading ? (
                Array.isArray(plantHeight) ? (
                  plantHeight.map((item, index) => (
                    <CustomButton
                      size="large"
                      key={index}
                      sx={{ my: 1, px: 3, py: 2, width: "max-content" }}
                    >
                      {item.centimeters} cm
                    </CustomButton>
                  ))
                ) : null
              ) : (
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={100}
                  height={50}
                />
              )}
            </Stack>
            {loading ? (
              <Typography
                variant="body1"
                lineHeight={2}
                fontFamily={fonts.inter}
                gutterBottom
              >
                <TiWeatherPartlySunny color="orange" size={25} /> {plantLight}
              </Typography>
            ) : (
              <Skeleton animation="wave" variant="text" width={"20%"} />
            )}
            {loading ? (
              <Typography
                variant="body1"
                lineHeight={2}
                fontFamily={fonts.inter}
                gutterBottom
              >
                <GiBottleVapors color={colors.secondary} size={25} /> {care}
              </Typography>
            ) : (
              <Skeleton animation="wave" variant="text" width={"20%"} />
            )}
          </Box>
          <Stack>
            {" "}
            {loading ? (
              <Typography
                variant="h6"
                component="p"
                sx={{ fontFamily: fonts.comfortaa, fontWeight: 700 }}
                gutterBottom
              >
                {locale === "id" ? "Mulai Dari" : "From"} {rupiah(price)}
              </Typography>
            ) : (
              <Skeleton
                animation="wave"
                variant="text"
                width={"40%"}
                height={40}
              />
            )}
            {loading ? (
              <CustomButton
                onClick={isItemInCart ? handleGoToCart : handleAddToCart}
                startIcon={<FaShoppingCart />}
                size="medium"
                sx={{ fontSize: 18 }}
              >
                {" "}
                {isItemInCart
                  ? locale === "id"
                    ? "Lihat Keranjang"
                    : "See To Bag"
                  : locale === "id"
                    ? "Tambahkan ke Keranjang"
                    : "Add To Bag"}
              </CustomButton>
            ) : (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={"100%"}
                height={40}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ProductInformation;
