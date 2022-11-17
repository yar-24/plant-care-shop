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
import LocaleContext from "../contexts/LocaleContext";

const PlantCareItem = ({title, image}) => {
  const { locale } = React.useContext(LocaleContext);

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
          <Tombol label={locale === 'id' ? 'Baca Lainya' : 'Read More'}/>
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
