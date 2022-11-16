import React, {useState, useEffect} from "react";
import HeroPlantCare from "../components/HeroPlantCare";
import Banner from "../components/Banner";
import { Typography } from "@mui/material";
import { colors, fonts } from "../utils";
import PlantCareList from "../components/PlantCareList";
import BannerFreeOngkir from "../components/BannerFreeOngkir";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { getServices } from "../redux/features/services/servicesSlice";

const PlantCare = () => {
const [planeCare, setPlantCare] = useState([])

const dispacth = useDispatch()

useEffect(() => {
  dispacth(getServices())
  .then((res)=>{
    setPlantCare(res)
  }).catch((err) => {
    console.log(err)
  })
},[dispacth])

console.log(planeCare);

  return (
    <>
      <HeroPlantCare />
      <Banner>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontFamily: fonts.comfortaa,
            lineHeight: 2,
            color: colors.white
          }}
          gutterBottom
        >
          Plant Care
        </Typography>
        <Typography
          variant="h4"
          component="h3"
          sx={{ fontFamily: fonts.inter, lineHeight: 2, color: colors.white}}
          gutterBottom
        >
          Tips, tricks, and plant guides to make plant care downright easy.
        </Typography>
      </Banner>
      <PlantCareList/>
      <BannerFreeOngkir/>
      <Footer/>
    </>
  );
};

export default PlantCare;
