import * as React from 'react';
import styled from "styled-components";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { colors, fonts } from "../utils/";
import { BsSearch, BsFillCartFill, BsTranslate } from 'react-icons/bs';

const Container = styled.div`
  background: ${colors.appbar};
  font-family: ${fonts.inter};
  color: black;
  left: 0px;
  top: 0px;
`;

const Tombol = styled.div`
  background: ${colors.secondary};
  color: white;
  border-radius: 30px;
  background-color: ${colors.secondary};
  padding: 3px;
`;



// export default function ButtonAppBar() {
const Bar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Container>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h4" component="div" sx={{ flexGrow: 20 }}>
            Breath
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shop
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Plant Care
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Services
          </Typography>
          <Tombol>
            <Button className='login' color="inherit">Login</Button>            
          </Tombol>
          <Button color="inherit" className='navigation'><BsSearch/></Button>
          <Button  color="inherit"><BsFillCartFill /></Button>
          <Button  color="inherit"><BsTranslate /></Button>
        </Toolbar>
      </Container>
      </AppBar>
    </Box>
  );
}

export default Bar;