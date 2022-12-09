import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  Tooltip,
  Link as Links,
} from "@mui/material";
import React from "react";
import { BiTime } from "react-icons/bi";
import {
  BsFacebook,
  BsFillTelephoneFill,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";
import { fonts } from "../utils";

const Footer = () => {
  const { locale } = React.useContext(LocaleContext);

  return (
    <Box component="footer" mt={10} py={{ xs: 2, md: 3 }} bgcolor="#E5F7F0">
      <Container fixed>
        <Grid
          container
          rowSpacing={{ xs: 2, md: 4 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} sm={6} md={3} className="footer-col">
            <h4>{locale === "id" ? "Tentang" : "About"}</h4>
            <ul>
              <li>
                <Link to="/">
                  {locale === "id" ? "Tentang Breath" : "About Breath"}
                </Link>
              </li>
              <li>
                <Link to="/shop">{locale === "id" ? "Belanja" : "Shop"}</Link>
              </li>
              <li>
                <Link to="/plant-care">
                  {locale === "id" ? "Perawatan Tanaman" : "Plant Care"}
                </Link>
              </li>
              <li>
                <Link to="/services">
                  {locale === "id" ? "Layanan" : "Services"}
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="footer-col">
            <h4>{locale === "id" ? "Ketentuan" : "Terms"}</h4>
            <ul>
              <li>
                <Link to="/">
                  {locale === "id" ? "Ketentuan Layanan" : "Terms of Service"}
                </Link>
              </li>
              <li>
                <Link to="/">
                  {locale === "id" ? "Kebijakan Privasi" : "Privacy Policy"}
                </Link>
              </li>
              <li>
                <Link to="/">
                  {locale === "id"
                    ? "Pengembalian dan Pengiriman"
                    : "Return and Delivery"}
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="footer-col">
            <h4>{locale === "id" ? "Kontak" : "Contacts"}</h4>
            <ul>
              <li>
                <a>
                  <HiLocationMarker color="#006d4e" /> Jakarta, Soekarno Hatta
                  No. 13
                </a>
              </li>
              <li>
                <Link>
                  <BsFillTelephoneFill color="#006d4e" /> 082050123458
                </Link>
              </li>
              <li>
                <Link>
                  <BiTime color="#006d4e" />
                  {locale === "id" ? " Jam Buka" : " Business Hours:"} 08:00 -
                  24:00
                </Link>
              </li>
              <li>
                <Link to="/">
                  <MdEmail color="#006d4e" /> breath@gmail.com
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="footer-col">
            <h4>{locale === "id" ? "Ikuti Kami" : "Follow us"}</h4>
            <div className="social-links">
              <Link to="/">
                <BsFacebook />
              </Link>
              <Tooltip title="m.rfiqi_">
                <Links
                  href="https://instagram.com/m.rfiqi_?igshid=MDM4ZDc5MmU="
                  target="_blank"
                >
                  <BsInstagram />
                </Links>
              </Tooltip>
              <Tooltip title="artyardhan">
                <Links
                  href="https://instagram.com/artyardhan?igshid=YmMyMTA2M2Y="
                  target="_blank"
                >
                  <BsInstagram />
                </Links>
              </Tooltip>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container fixed sx={{ pt: 4 }}>
        <Divider sx={{ bgcolor: "#006d4e" }} />
        <Typography
          component="p"
          fontSize={16}
          pt={2}
          color="#000"
          fontWeight={400}
          fontFamily={fonts.inter}
        >
          © 2022 Breath. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
