import React from 'react';
import { Container, Stack, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CustomButton from './CustomButton';
import { fonts } from '../utils/';
import { PlantCareHero } from '../images/img';
import LocaleContext from '../contexts/LocaleContext';
import { Link } from 'react-router-dom';

const HeroImage = styled('img')`
  width: 100%;
`;

const HeroPlantCare = ({ idService }) => {
  const { locale } = React.useContext(LocaleContext);

  return (
    <Container fixed>
      <Stack
        direction={{ xs: 'column-reverse', md: 'row' }}
        my={{ xs: 5, md: 10 }}
        spacing={{ xs: 5, md: 10 }}>
        <Stack sx={{ flex: 3 }}>
          <Typography
            variant="h5"
            component="h1"
            sx={{ fontFamily: fonts.comfortaa, fontWeight: 700 }}
            gutterBottom>
            {locale === 'id'
              ? 'Cara merawat tanaman hias anda di musim panas'
              : 'How to care for your houseplants in summer'}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: fonts.inter, lineHeight: 2 }}
            gutterBottom>
            {locale === 'id'
              ? 'Musim panas adalah waktu yang tepat untuk tanaman dalam ruangan, tetapi ini juga waktu yang paling membutuhkan perhatian. Beri mereka musim panas terbaik yang pernah ada.'
              : 'Summer is a great time for indoor plants, but it’s also the timethey need the most attention. Give them the best summer ever.'}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: fonts.inter, lineHeight: 2 }}
            gutterBottom>
            {locale === 'id'
              ? 'Kami berada di bulan-bulan terpanas dan tercerah dalam setahun (semoga). Itu berarti kondisi pertumbuhan yang bagus untuk tanaman anda, asalkan disiram dengan baik. Inilah cara membantu mereka menikmati musim panas.'
              : 'We’re in the hottest, sunniest months of the year (hopefully). That means great growing conditions for your plants, as long as they’re kept well watered. Here’s how to help them enjoy summer.'}
          </Typography>
          <CustomButton
            size="large"
            LinkComponent={Link}
            to={`/blog/detail/${idService}`}
            sx={{ alignSelf: 'flex-end', my: 4, px: 4, py: 2 }}>
            {locale === 'id' ? 'Baca Selengkapnya' : 'Read More'}
          </CustomButton>
        </Stack>
        <Box sx={{ flex: 2 }}>
          <HeroImage src={PlantCareHero} alt="Plant" />
        </Box>
      </Stack>
    </Container>
  );
};

export default HeroPlantCare;
