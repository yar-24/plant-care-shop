import React from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fonts } from "../utils/";
import CustomButton from "./CustomButton";
import { ServicesHero } from "../images/img";
import LocaleContext from "../contexts/LocaleContext";
import { Link } from "react-router-dom";

const HeroImage = styled("img")`
  width: 100%;
`;

const HeroServices = () => {
  const { locale } = React.useContext(LocaleContext);

  return (
    <Container fixed>
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        alignItems="center"
        my={{ xs: 4, md: 6 }}
        spacing={{ xs: 4, md: 6 }}>
        <Stack sx={{ flex: 3 }}>
          <Typography variant="body1" sx={{ fontFamily: fonts.inter, lineHeight: 2 }} gutterBottom>
          {locale === 'id' ? 'Tumbuhan adalah kekuatan untuk otak anda. Penelitian telah menemukan bahwa sedikit warna hijau dapat berdampak positif pada produktivitas dan meningkatkan kualitas udara dari polutan rumah tangga. Koleksi tanaman rumah dalam ruangan kami yang meningkatkan konsentrasi akan mengubah fokus di rumah atau ruang belajar anda.' : 'Plants are power for your brain. Research has found that a bit of green can have a positive impact on productivity and improve the air of household pollutants. Our collection of concentration-boosting indoor house plants will turn the focus on in your home or study.'}'
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: fonts.inter, lineHeight: 2 }} gutterBottom>
          {locale === 'id' ? 'Setelah Anda memutuskan tanaman Anda, dapatkan anda dan teman baru anda beberapa pot dan dudukan tanaman untuk membantu mereka tampil terbaik. Percayakan dekorasi rumah anda kepada kami' : 'Once you`ve decided on your plants, get your and your new pals some pots and plant stands to help them look their best. Entrust us with the decoration of your home'}
          </Typography>
          <CustomButton size="large" sx={{ alignSelf: "flex-start", my: 4, px: 4, py: 2 }}  component={Link} to={`/`}>
          {locale === 'id' ? 'Hiasi rumahmu sekarang' : 'Decorate your home now'}
          </CustomButton>
        </Stack>
        <Box sx={{ flex: 2 }}>
          <HeroImage src={ServicesHero} alt="Plant" />
        </Box>
      </Stack>
    </Container>
  );
};

export default HeroServices;
