import React, { useContext, useState } from 'react';
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popover,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { BsFillCartFill, BsSearch } from 'react-icons/bs';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/Inbox';
import MenuIcon from '@mui/icons-material/Menu';
import { RiSettings3Line, RiSettings3Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import LocaleContext from '../contexts/LocaleContext';
import { logout, reset } from '../redux/features/auth/authSlice';
import { colors, fonts } from '../utils';
import CustomButton from './CustomButton';
import { useCart } from '../contexts/cartContext';

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

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [localePopover, setLocalePopover] = useState(null);
  const { locale, changeLocale } = useContext(LocaleContext);
  const { cart } = useCart();

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
  `;

  const DrawerLink = styled(Link)`
    font-family: ${fonts.comfortaa};
    font-weight: 700;
    font-size: 18px;
    flex-grow: 1;
    padding: 16px;
  `;

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Typography
        variant="h6"
        component="div"
        color="primary"
        fontFamily={fonts.comfortaa}
        fontSize={32}
        textAlign="center"
        my={2}>
        Breath
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <DrawerListItem key={item.name}>
            <DrawerLink to={item.link}>{item.name}</DrawerLink>
          </DrawerListItem>
        ))}
        <Divider />
        {user ? (
          <DrawerListItem onClick={onLogout}>
            <DrawerLink>{locale === 'id' ? 'Keluar' : 'Logout'}</DrawerLink>
          </DrawerListItem>
        ) : (
          <DrawerListItem>
            <DrawerLink to="/login">
              {locale === 'id' ? 'Masuk' : 'Login'}
            </DrawerLink>
          </DrawerListItem>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleLocaleClick = (event) => {
    setLocalePopover(localePopover ? null : event.currentTarget);
  };

  const handleLocaleClose = () => {
    setLocalePopover(null);
  };
  const openLocalePopover = Boolean(localePopover);

  const navigate = useNavigate();

  const onNavigate = () => {
    navigate('/home-write');
  };

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          component="nav"
          sx={{
            background: '#e5f7f0',
          }}>
          <Container fixed>
            <Toolbar sx={{ justifyContent: 'space-between' }} disableGutters>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' }, color: 'black' }}>
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
                    alignItems: 'center',
                    marginRight: 1,
                  }}>
                  {navItems.map((item, index) => (
                    <NavLink key={index} to={item.link}>
                      {item.name}
                    </NavLink>
                  ))}
                </Box>
                <Box sx={{ display: 'block' }}>
                  {user ? (
                    <CustomButton
                      sx={{
                        display: { xs: 'none', md: 'initial' },
                        fontSize: '16px',
                        borderRadius: 8,
                        fontFamily: fonts.comfortaa,
                        mx: 2,
                        py: 1,
                      }}
                      onClick={onLogout}>
                      {locale === 'id' ? 'Keluar' : 'Logout'}
                    </CustomButton>
                  ) : (
                    <CustomButton
                      component={Link}
                      to="/login"
                      sx={{
                        display: { xs: 'none', md: 'initial' },
                        fontSize: '16px',
                        borderRadius: 8,
                        fontFamily: fonts.comfortaa,
                        mx: 2,
                        py: 1.5,
                      }}>
                      {locale === 'id' ? 'Masuk' : 'Login'}
                    </CustomButton>
                  )}
                  <IconButton
                    component={Link}
                    to="/search"
                    size="medium"
                    style={{ color: 'black' }}>
                    <BsSearch />
                  </IconButton>
                  <IconButton
                    size="medium"
                    LinkComponent={Link}
                    to="/cart"
                    style={{ color: 'black', position: 'relative' }}>
                    <BsFillCartFill />
                    {cart.length > 0 ? (
                      <Typography
                        variant="span"
                        sx={{
                          minWidth: '20px',
                          minHeight: '20px',
                          position: 'absolute',
                          color: 'white',
                          backgroundColor: 'red',
                          fontSize: '14px',
                          fontWeight: 700,
                          textAlign: 'center',
                          lineHeight: 1.6,
                          px: '4px',
                          borderRadius: 16,
                          right: 0,
                          top: 0,
                        }}>
                        {cart.length}
                      </Typography>
                    ) : null}
                  </IconButton>
                  <IconButton
                    size="medium"
                    style={{
                      color: 'black',
                      fontFamily: fonts.comfortaa,
                      fontWeight: 700,
                      fontSize: 18,
                    }}
                    onClick={handleLocaleClick}>
                    {locale.toUpperCase()}
                    {localePopover ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                  <Popover
                    open={openLocalePopover}
                    anchorEl={localePopover}
                    onClose={handleLocaleClose}
                    disableScrollLock
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}>
                    <List
                      sx={{
                        border: `1px solid ${colors.secondary}`,
                      }}>
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={() => {
                            changeLocale('en');
                            handleLocaleClose();
                          }}>
                          <ListItemText primary="English" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={() => {
                            changeLocale('id');
                            handleLocaleClose();
                          }}>
                          <ListItemText primary="Indonesia" />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </Popover>
                  {user ? (
                    <IconButton
                      aria-describedby={id}
                      size="medium"
                      style={{ color: 'black' }}
                      onClick={handleClick}>
                      {open ? <RiSettings3Fill /> : <RiSettings3Line />}
                    </IconButton>
                  ) : null}
                </Box>
                {user ? (
                  <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    disableScrollLock
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}>
                    <List sx={{ border: `1px solid ${colors.secondary}` }}>
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={() => {
                            onNavigate();
                            handleClose();
                          }}>
                          <InboxIcon />
                          <ListItemText sx={{ ml: 2 }} primary="Edit Blog" />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </Popover>
                ) : null}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
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
            background: '#e5f7f0',
          },
        }}>
        {drawer}
      </Drawer>
    </>
  );
}

export default DrawerAppBar;
