import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from "@mui/material";
import { colors, fonts } from "../utils";
import Tombol from "./kecil/Tombol";


const PlantCareItem = ({title, image}) => {
  return (
    <Card sx={{ maxWidth: 345, m: 1 }}>
      <CardContent sx={{backgroundColor: colors.hijau}}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontFamily: fonts.comfortaa,
            lineHeight: 1.5,
            color: colors.white,
          }}
        >
          {title}
        </Typography>
        <CardActions sx={{justifyContent: 'flex-end', padding: 0}}>
          <Tombol label="Read more" />
        </CardActions>
      </CardContent>
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt="green iguana"
      />
    </Card>
  );
};

export default PlantCareItem;
