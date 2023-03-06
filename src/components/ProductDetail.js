import React, {useState, useContext} from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Container, ListItem, Typography, Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { RiPlantLine } from "react-icons/ri";
import LocaleContext from "../contexts/LocaleContext";
import Skeleton from "@mui/material/Skeleton";
import { colors, fonts } from "../utils";

export default function ProductDetail({
  namePlant,
  plantLike,
  plantAbout,
  loading,
}) {
  const { locale } = useContext(LocaleContext);
  const [open, setOpen] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  return (
    <Container fixed sx={{ mb: 4 }}>
      {loading ? (
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            display: "contents",
            mb: 10,
          }}
          component="ul"
          aria-labelledby="nested-list-subheader"
        >
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              disableGutters
              disableRipple
              onClick={handleClick}
              disabled={!loading}
            >
              <Typography
                variant="h5"
                component="h1"
                paddingY={1}
                fontFamily={fonts.comfortaa}
                fontWeight={700}
              >
                {locale === "id"
                  ? `Perawatan ${namePlant}`
                  : `${namePlant} Like`}
              </Typography>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {Array.isArray(plantLike)
                  ? plantLike.map((item, index) => (
                      <ListItemText key={index}>
                        <Typography
                          variant="h6"
                          component="h3"
                          fontFamily={fonts.inter}
                          fontWeight={600}
                          gutterBottom
                        >
                          <RiPlantLine color={colors.secondary} />
                          {item.titleLike}
                        </Typography>
                        <Typography
                          component="p"
                          fontFamily={fonts.inter}
                          fontWeight={400}
                          gutterBottom
                        >
                          {item.descLike}
                        </Typography>
                      </ListItemText>
                    ))
                  : null}
              </List>
            </Collapse>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              disableGutters
              disableRipple
              onClick={handleClick3}
              disabled={!loading}
            >
              <Typography
                variant="h5"
                component="h1"
                paddingY={1}
                fontFamily={fonts.comfortaa}
                fontWeight={700}
              >
                {locale === "id"
                  ? `Tentang ${namePlant}`
                  : `About ${namePlant}`}
              </Typography>
              {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemText>
                  <Typography
                    component="p"
                    fontFamily={fonts.inter}
                    fontWeight={400}
                    gutterBottom
                  >
                    {plantAbout}
                  </Typography>
                </ListItemText>
              </List>
            </Collapse>
          </ListItem>
        </List>
      ) : (
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            display: "contents",
            mb: 10,
          }}
          component="ul"
          aria-labelledby="nested-list-subheader"
        >
          <ListItem disablePadding sx={{ display: "block", mb: "20px" }}>
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={"59%"}
              height={50}
            />
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={"59%"}
              height={50}
            />
          </ListItem>
        </List>
      )}
    </Container>
  );
}
