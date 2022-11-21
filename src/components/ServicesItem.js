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
import { useNavigate } from "react-router-dom";

const ServicesItem = ({ title, image, id }) => {
  const { locale } = React.useContext(LocaleContext);

const navigasi = useNavigate()

  const onDetail = (id) => {
    navigasi(`/detail-services/${id}`)
  }

  return (
    <Card sx={{ maxWidth: 345, m: 1 }}>
      <CardContent sx={{ backgroundColor: colors.hijau, minHeight: "100px" }}>
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
        src={`https://res.cloudinary.com/eundangdotcom/image/upload/v1666578066/${image}`}
        alt="green iguana"
      />
      <CardActions sx={{ justifyContent: 'flex-end', marginLeft: '180px auto', position: 'fixed', top: '260px', padding: '10px' }}>
        <Tombol label={locale === 'id' ? 'Baca Lainya' : 'Read More'} onClick={(e) => onDetail(id)} />
      </CardActions>
    </Card>
  );
};

export default ServicesItem;
