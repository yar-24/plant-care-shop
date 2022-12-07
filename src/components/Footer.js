import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { BiTime } from 'react-icons/bi';
import {
  BsFacebook,
  BsFillTelephoneFill,
  BsInstagram,
  BsTwitter,
} from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import LocaleContext from '../contexts/LocaleContext';
import { fonts } from '../utils';

const Footer = () => {
  const { locale } = React.useContext(LocaleContext);

  return (
    <Box component="footer" mt={10} py={{ xs: 2, md: 3 }} bgcolor="#E5F7F0">
      <Container fixed>
        <Grid
          container
          rowSpacing={{ xs: 2, md: 4 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={3} className="footer-col">
            <h4>{locale === 'id' ? 'Tentang' : 'About'}</h4>
            <ul>
              <li>
                <a href="/">
                  {locale === 'id' ? 'Tentang Breath' : 'About Breath'}
                </a>
              </li>
              <li>
                <a href="/shop">{locale === 'id' ? 'Belanja' : 'Shop'}</a>
              </li>
              <li>
                <a href="/plant-care">
                  {locale === 'id' ? 'Perawatan Tanaman' : 'Plant Care'}
                </a>
              </li>
              <li>
                <a href="/services">
                  {locale === 'id' ? 'Layanan' : 'Services'}
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="footer-col">
            <h4>{locale === 'id' ? 'Ketentuan' : 'Terms'}</h4>
            <ul>
              <li>
                <a href="/">
                  {locale === 'id' ? 'Ketentuan Layanan' : 'Terms of Service'}
                </a>
              </li>
              <li>
                <a href="/">
                  {locale === 'id' ? 'Kebijakan Privasi' : 'Privacy Policy'}
                </a>
              </li>
              <li>
                <a href="/">
                  {locale === 'id'
                    ? 'Pengembalian dan Pengiriman'
                    : 'Return and Delivery'}
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="footer-col">
            <h4>{locale === 'id' ? 'Kontak' : 'Contacts'}</h4>
            <ul>
              <li>
                <a>
                  <HiLocationMarker color="#006d4e" /> Jakarta, Soekarno Hatta
                  No. 13
                </a>
              </li>
              <li>
                <a>
                  <BsFillTelephoneFill color="#006d4e" /> 082050123458
                </a>
              </li>
              <li>
                <a>
                  <BiTime color="#006d4e" />
                  {locale === 'id' ? ' Jam Buka' : ' Business Hours:'} 08:00 -
                  24:00
                </a>
              </li>
              <li>
                <a href="/">
                  <MdEmail color="#006d4e" /> breath@gmail.com
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="footer-col">
            <h4>{locale === 'id' ? 'Ikuti Kami' : 'Follow us'}</h4>
            <div className="social-links">
              <a href="/">
                <BsFacebook />
              </a>
              <a href="/">
                <BsTwitter />
              </a>
              <a href="/">
                <BsInstagram />
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container fixed sx={{ pt: 4 }}>
        <Divider sx={{ bgcolor: '#006d4e' }} />
        <Typography
          component="p"
          fontSize={16}
          pt={2}
          color="#000"
          fontWeight={400}
          fontFamily={fonts.inter}>
          © 2022 'Nama web'. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
