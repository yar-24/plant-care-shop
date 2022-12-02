import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from "@mui/material";
import { colors, fonts, getText, truncate } from "../utils";
import Tombol from "./kecil/Tombol";
import LocaleContext from "../contexts/LocaleContext";
import { useNavigate } from "react-router-dom";

const PlantCareItem = ({title, image, id}) => {
  const { locale } = React.useContext(LocaleContext);

const navigasi = useNavigate()

  const onDetail = (id) => {
    navigasi(`/detail/${id}`);
  }

  return (
    <Card sx={{ maxWidth: 345, m: 1 }}>
      <CardContent sx={{backgroundColor: colors.hijau, minHeight: "160px"}}>
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
         {getText(truncate(title, 40))}
        </Typography>
        <CardActions sx={{justifyContent: 'flex-end', padding: 0}}>
          <Tombol label={locale === 'id' ? 'Baca Lainya' : 'Read More'} onClick={() => onDetail(id)} />
        </CardActions>
      </CardContent>
      <CardMedia
        component="img"
        height="250"
        src={`https://res.cloudinary.com/eundangdotcom/image/upload/v1666578066/${image}`}
        alt="green iguana"
      />
    </Card>
  );
};

export default PlantCareItem;
