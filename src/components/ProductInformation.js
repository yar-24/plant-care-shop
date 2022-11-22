import React, { useState } from 'react'
import { Container, Stack, Box, Typography } from "@mui/material";
import {TiWeatherPartlySunny} from "react-icons/ti";
import {FaShoppingCart} from "react-icons/fa";
import { styled } from "@mui/material/styles";
import { fonts } from '../utils';
import CustomButton from './CustomButton';
import LocaleContext from "../contexts/LocaleContext";
import { useCart } from "react-use-cart";

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
  ::after{
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const ProductInformation = ({product}) => {
  const { addItem } = useCart();
  const { locale } = React.useContext(LocaleContext);
  const {imageProduct, namePlant, plantHeight, plantLight, care, price} = product;

  return (
    <Container fixed>
    <Stack spacing={6} my={4} direction={{ xs: "column", md: "row" }}>
      <ImageContainer>
        <ProductImage src={imageProduct} alt={namePlant}/>
      </ImageContainer>
      <Stack sx={{flex:3}} justifyContent="space-between">
        <Box>
          <Typography
            variant="h5"
            component="h1"
            sx={{ fontFamily: fonts.comfortaa, fontWeight: 700 }}
            gutterBottom>
              {namePlant}
          </Typography>
          <Typography
              variant="body1"
              sx={{ fontFamily: fonts.inter, lineHeight: 2 }}
              gutterBottom
            >
              {locale === 'id' ? 'Pilih tinggi tanaman (cm)' : 'Choose plant height (cm)'}
          </Typography>
          <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
            {Array.isArray(plantHeight)
              ? plantHeight.map((item,index)=>(
                <CustomButton size="large" key={index} sx={{my: 1, px: 3, py: 2, width: "max-content"}}>{item.centimeters} cm</CustomButton>
              ))
            : null}
          </Stack>
          <Typography
              variant="body1"
              sx={{ fontFamily: fonts.inter, lineHeight: 2 }}
              gutterBottom
            >
              <TiWeatherPartlySunny/> {plantLight}
          </Typography>
          <Typography
              variant="body1"
              sx={{ fontFamily: fonts.inter, lineHeight: 2 }}
              gutterBottom
            >
              <TiWeatherPartlySunny/> {care}
          </Typography>
        </Box>
        <Stack>
          <Typography
            variant="h6"
            component="p"
            sx={{ fontFamily: fonts.comfortaa, fontWeight: 700 }}
            gutterBottom>
              {locale === 'id' ? 'Mulai Dari' : 'From'} Rp{price} 
          </Typography>
            <CustomButton startIcon={<FaShoppingCart/>} onClick={() => addItem(product)} size="medium" sx={{fontSize:18}}>  {locale === 'id' ? 'Tambahkan ke Keranjang' : 'Add To Bag'}</CustomButton>
        </Stack>
      </Stack>
    </Stack>

    </Container>
  )
}

export default ProductInformation