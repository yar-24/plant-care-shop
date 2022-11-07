import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { BsFillCartFill, BsSearch, BsTranslate } from "react-icons/bs";
import { Link } from "react-router-dom";
import { colors, fonts } from "../utils";

const drawerWidth = 240;
const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Shop",
    link: "/shop",
  },
  {
    name: "Plant Care",
    link: "/plant-care",
  },
  {
    name: "Services",
    link: "/services",
  },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const NavLink = styled(Link)`
    font-family: ${fonts.comfortaa};
    font-weight: 700;
    font-size: 18px;
    padding: 0 16px;
    &:hover {
      color: ${colors.secondary};
    }
    @media screen and (max-width: 1024px) {
      padding: 0 8px;
    }
  `;

  const LoginLink = styled(Link)`
    margin: 0 16px;
    font-size: 18px;
    padding: 10px;
    font-weight: 700;
    background-color: #009e72;
    color: white;
    border: transparent;
    border-radius: 32px;
    font-family: ${fonts.comfortaa};
    text-decoration: "none";
    color: "#ffffff";
    &:hover {
      background-image: linear-gradient(rgb(0 0 0/30%) 0 0);
    }
  `;

  const DrawerListItem = styled(ListItem)`
    display: flex;
    text-align: center;
  `;

  const DrawerLink = styled(Link)`
    flex-grow: 1;
    padding: 16px;
  `;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Plant and Care Shop
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <DrawerListItem key={item.name} disablePadding>
            <DrawerLink to={item.link}>{item.name}</DrawerLink>
          </DrawerListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav" sx={{ background: "#e5f7f0", color: "#009e72" }}>
        <Container fixed>
          <Toolbar sx={{ justifyContent: "space-between" }} disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}>
              <MenuIcon />
            </IconButton>
            <Link to="/" style={{ color: "#009e72" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  display: { xs: "none", md: "block", fontFamily: "Comfortaa", fontSize: "27px" },
                }}>
                LOGO
              </Typography>
            </Link>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: { xs: "none", md: "flex" }, marginRight: 4 }}>
                {navItems.map((item) => (
                  <NavLink to={item.link}>{item.name}</NavLink>
                ))}
              </Box>
              <Box sx={{ display: "block" }}>
                <LoginLink to="/login">Login</LoginLink>
                <IconButton
                  size="medium"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  style={{ color: "black" }}>
                  <BsSearch />
                </IconButton>
                <IconButton
                  size="medium"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  style={{ color: "black" }}>
                  <Link to="/cart">
                    <BsFillCartFill />
                  </Link>
                </IconButton>
                <IconButton
                  size="medium"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  style={{ color: "black" }}>
                  <BsTranslate />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}>
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 4 }}></Box>
    </>
  );
}

export default DrawerAppBar;
