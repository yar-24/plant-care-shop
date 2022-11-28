import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Container,
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  Popper,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { BsFillCartFill, BsTranslate } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { colors, fonts } from '../utils';
import Swal from 'sweetalert2';
import { logout, reset } from '../redux/features/auth/authSlice';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/Inbox';
import { LocaleConsumer } from '../contexts/LocaleContext';
import Search from "./kecil/Search";
import CustomButton from './CustomButton';


const drawerWidth = 240;
const navItems = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Shop',
    link: '/shop',
  },
  {
    name: 'Plant Care',
    link: '/plant-care',
  },
  {
    name: 'Services',
    link: '/services',
  },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you have Logout!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: colors.secondary,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Logout!',
          'Your account has been logout.',
          'success',
          dispatch(logout()),
          dispatch(reset())
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

  const DrawerListItem = styled(ListItem)`
    display: flex;
    text-align: center;
  `;

  const DrawerLink = styled(Link)`
    flex-grow: 1;
    padding: 16px;
  `;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Breath
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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const navigate = useNavigate();

  const onNavigate = () => {
    navigate('/home-write');
  };

  const quantity = useSelector(state=>state.cart.quantity)

  return (
    <LocaleConsumer>
      {({ locale, toggleLocale }) => {
        return (
          <>
            <AppBar
              component="nav"
              sx={{ background: '#e5f7f0', color: '#009e72' }}>
              <Container fixed>
                <Toolbar
                  sx={{ justifyContent: 'space-between' }}
                  disableGutters>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: 'none' } }}>
                    <MenuIcon />
                  </IconButton>
                  <Link to="/" style={{ color: '#009e72' }}>
                    <Typography
                      variant="h6"
                      component="div"
                      fontFamily={fonts.comfortaa}
                      fontSize={32}
                      sx={{
                        display: {
                          xs: 'none',
                          md: 'block',
                        },
                      }}>
                      Breath
                    </Typography>
                  </Link>
                  <Box sx={{ display: 'flex' }}>
                    <Box
                      sx={{
                        display: { xs: 'none', md: 'flex' },
                        marginRight: 1,
                      }}>
                      {navItems.map((item, index) => (
                        <NavLink key={index} to={item.link}>
                          {item.name}
                        </NavLink>
                      ))}
                    </Box>
                    <Box sx={{ display: 'block' }}>
                      {/* <LoginLink to="/login">{locale === 'id' ? 'Masuk' : 'Login'}</LoginLink> */}
                      {user ? (
                        <CustomButton
                          sx={{
                            fontSize: '16px',
                            borderRadius: 8,
                            fontFamily: fonts.comfortaa,
                            mx: 2,
                          }}
                          onClick={onLogout}>
                          Logout
                        </CustomButton>
                      ) : (
                        <CustomButton
                          component={Link}
                          to="/login"
                          sx={{
                            fontSize: '16px',
                            borderRadius: 8,
                            fontFamily: fonts.comfortaa,
                            mx: 2,
                          }}>
                          {locale === 'id' ? 'Masuk' : 'Login'}
                        </CustomButton>
                      )}
                      <IconButton
                        size="medium"
                        style={{ color: 'black' }}>
                        <Search />
                      </IconButton>
                      <IconButton
                        size="medium"
                        LinkComponent={Link}
                        to="/cart"
                        style={{ color: 'black', position: "relative"}}>
                        <BsFillCartFill />
                        <p style={{position: "absolute", color: "red", fontSize: "16px", right: 0, bottom: 0, borderRadius: "50%"}}>{quantity}</p>
                      </IconButton>
                      <IconButton
                        size="medium"
                        style={{ color: 'black' }}
                        onClick={toggleLocale}>
                        <BsTranslate />
                      </IconButton>
                      {user ? (
                        <IconButton
                          aria-describedby={id}
                          size="medium"
                          style={{ color: 'black' }}
                          onClick={handleClick}>
                          {open ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                      ) : null}
                    </Box>
                    {user ? (
                      <Popper id={id} open={open} anchorEl={anchorEl}>
                        <Box
                          sx={{
                            border: `1px solid ${colors.secondary}`,
                            mt: 2,
                            bgcolor: 'background.paper',
                          }}>
                          <List>
                            <ListItem disablePadding>
                              <ListItemButton onClick={onNavigate}>
                                <ListItemIcon>
                                  <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Edit Blog" />
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </Box>
                      </Popper>
                    ) : null}
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
                  display: { xs: 'block', md: 'none' },
                  '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth,
                  },
                }}>
                {drawer}
              </Drawer>
            </Box>
            <Box component="main" sx={{ p: 4 }}></Box>
          </>
        );
      }}
    </LocaleConsumer>
  );
}

export default DrawerAppBar;