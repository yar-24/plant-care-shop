import { Box, Typography } from "@mui/material";
import React from "react";
import { colors, fonts } from "../utils";
import LocaleContext from "../contexts/LocaleContext";

const BannerFreeOngkir = () => {
  const { locale } = React.useContext(LocaleContext);

  return (
    <Box sx={{backgroundColor: colors.hijau, textAlign: "center", padding: "20px 0px"}}>
      <Typography variant="h5" component="h1" sx={{fontFamily: fonts.inter, color: colors.white}}>
        {locale === 'id' ? 'Pengiriman standar gratis untuk pesanan di atas 100k' : 'Free standard delivery on orders over 100k'}
      </Typography>
    </Box>
  );
};

export default BannerFreeOngkir;
