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


const ServicesItem = ({title, image}) => {
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
            fontSize: 20,
          }}
        >
          {title}
        </Typography>
      </CardContent>
      
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt="green iguana"
      />
      <CardActions sx={{justifyContent: 'flex-end', marginLeft: '180px auto', position: 'fixed', top: '260px', padding: '10px'}}>
          <Tombol label="Read more" />
        </CardActions>
    </Card>
  );
};

export default ServicesItem;