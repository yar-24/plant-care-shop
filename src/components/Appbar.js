import  React, {useEffect, useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, AppBar, Box, Divider, Drawer, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BsFillCartFill, BsSearch, BsTranslate } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { colors, fonts } from "../utils";
import Swal from "sweetalert2";
import { logout, reset } from "../redux/features/auth/authSlice";

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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const onLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you have Logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: colors.secondary,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Logout!",
          "Your account has been logout.",
          "success",
          dispatch(logout()),
          dispatch(reset()),
        );
      }
    });
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
                Breath
              </Typography>
            </Link>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: { xs: "none", md: "flex" }, marginRight: 4 }}>
                {navItems.map((item, index) => (
                  <NavLink key={index} to={item.link}>{item.name}</NavLink>
                ))}
              </Box>
              <Box sx={{ display: "block" }}>
              {user ?  <LoginLink onClick={onLogout}>Logout</LoginLink> :  <LoginLink to="/login">Login</LoginLink>}
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
