import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LocaleContext from '../contexts/LocaleContext';
import { PlantHero } from '../images/img';
import { fonts } from '../utils/';
import Tombol from './kecil/Tombol';

const Right = styled(Box)`
  display: flex;
  justify-content: end;
  position: relative;
  width: 50%;
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  z-index: 2;

  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 900px) {
    width: 200%;
  }
`;

const Kotak = styled.div`
  background: linear-gradient(
    7.46deg,
    rgba(0, 158, 114, 0) -13.09%,
    rgba(0, 158, 114, 0.36) 4.09%,
    rgba(0, 158, 114, 0.531008) 67.54%,
    rgba(0, 158, 114, 0.57) 76.86%,
    rgba(0, 158, 114, 0.277619) 95.8%,
    rgba(0, 158, 114, 0) 102.77%
  );
  width: 200px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 900px) {
    width: 150px;
  }
  @media (max-width: 600px) {
    width: 100px;
    height: 100%;
    max-height: 100%;
  }
`;

const Layout = styled.div`
  margin: 20px;
  margin-left: 0;

  @media (max-width: 1200px) {
    margin: 0px auto;
  }
  @media (max-width: 900px) {
    margin: 85px auto;
  }
  @media (max-width: 600px) {
    margin: 20px auto;
  }
`;

const Hero = () => {
  const { locale } = React.useContext(LocaleContext);

  return (
    <Box position="relative" width="100%">
      <Container fixed>
        <Stack direction="row" spacing={10}>
          <Layout>
            <Box my={{ xs: 5, md: 20 }} sx={{ flex: 5 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{ fontFamily: fonts.comfortaa, fontWeight: 700 }}
                gutterBottom>
                {locale === 'id'
                  ? 'Temukan tanaman terbaik untuk aura dan ruang anda. Lindungi napas anda.'
                  : 'Discover the best plant for your aura and your space. Protect your breath.'}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: fonts.inter, lineHeight: 2, mt: 2, mb: 3 }}
                gutterBottom>
                {locale === 'id'
                  ? 'Nafas membantu anda menemukan tanaman terbaik untuk ruang anda, mengirimkannya ke pintu anda dan membantu anda merawatnya.'
                  : 'Breath helps you discover the best plants for your space, delivers them to your door and helps you look after them.'}
              </Typography>
              <Tombol
                component={Link}
                to={`/shop`}
                label={
                  locale === 'id' ? 'Temukan Tanaman' : 'Discover The Plants'
                }
              />
            </Box>
          </Layout>
          <Right>
            <Image src={PlantHero} />
          </Right>
        </Stack>
      </Container>
      <Kotak></Kotak>
    </Box>
  );
};

export default Hero;
