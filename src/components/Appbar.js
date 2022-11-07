import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BsSearch, BsFillCartFill, BsTranslate } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

const drawerWidth = 240;
const navItems = ["Home", "Shop", "Care", "Services"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const ListNav = ({ ...rest }) => {
    return (
      <List>
        <Link to="/">
          <ListItem {...rest}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/shop">
          <ListItem {...rest}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Shop"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/plant-care">
          <ListItem {...rest}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Care"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/services">
          <ListItem {...rest}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Services"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    );
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Plant and Care Shop
      </Typography>
      <Divider />
      <ListNav />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Stack
      sx={{
        display: "flex",
        background: "#fff",
        justifyContent: "space-around",
      }}
    >
      <AppBar
        component="nav"
        style={{ background: "#e5f7f0", color: "#009e72" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  sm: "block",
                  fontFamily: "Comfortaa",
                  fontSize: "27px",
                },
              }}
            >
              <Link to="/" style={{ color: "#009e72" }}>
                Plant and Care Shop
              </Link>
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: { xs: "none", sm: "contents" } }}>
              <ListNav />
            </Box>
            <div>
              <button className="login">
                <Link
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  to="/login"
                >
                  Login
                </Link>
              </button>
            </div>
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              style={{ color: "black" }}
            >
              <BsSearch />
            </IconButton>
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              style={{ color: "black" }}
            >
              <Link to="/cart">
                <BsFillCartFill />
              </Link>
            </IconButton>
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              style={{ color: "black" }}
            >
              <BsTranslate />
            </IconButton>
          </Box>
        </Toolbar>
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 4 }}></Box>
    </Stack>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
