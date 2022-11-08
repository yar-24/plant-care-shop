import { Box, Typography } from "@mui/material";
import React from "react";
import { colors, fonts } from "../utils";

const BannerFreeOngkir = () => {
  return (
    <Box sx={{backgroundColor: colors.hijau, textAlign: "center", padding: "20px 0px"}}>
      <Typography variant="h5" component="h1" sx={{fontFamily: fonts.inter, color: colors.white}}>
        Free standard delivery on orders over 100$
      </Typography>
    </Box>
  );
};

export default BannerFreeOngkir;
