import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ListItem, Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Container } from '@mui/system';
import * as React from 'react';
import LocaleContext from '../contexts/LocaleContext';
import { colors, fonts } from '../utils';
import { RiPlantLine } from 'react-icons/ri';

export default function ProductDetail({ namePlant, plantLike, plantAbout }) {
  const { locale } = React.useContext(LocaleContext);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };

  return (
    <Container fixed sx={{ mb: 4 }}>
      <List
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          display: 'contents',
          mb: 10,
        }}
        component="ul"
        aria-labelledby="nested-list-subheader">
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton disableGutters disableRipple onClick={handleClick}>
            <Typography
              variant="h5"
              component="h1"
              paddingY={1}
              fontFamily={fonts.comfortaa}
              fontWeight={700}>
              {locale === 'id' ? `${namePlant}` : `${namePlant} Like`}
            </Typography>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* <ListItemButton disableGutters sx={{ pl: 4 }} style={{ backgroundColor: '#9ed7c1' }}> */}
              {Array.isArray(plantLike)
                ? plantLike.map((item, index) => (
                    <ListItemText key={index}>
                      <Typography
                        variant="h6"
                        component="h3"
                        fontFamily={fonts.inter}
                        fontWeight={600}
                        gutterBottom>
                        <RiPlantLine color={colors.secondary} />{' '}
                        {item.titleLike}
                      </Typography>
                      <Typography
                        component="p"
                        fontFamily={fonts.inter}
                        fontWeight={400}
                        gutterBottom>
                        {item.descLike}
                      </Typography>
                    </ListItemText>
                  ))
                : null}
              {/* </ListItemButton> */}
            </List>
          </Collapse>
        </ListItem>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton disableGutters disableRipple onClick={handleClick3}>
            <Typography
              variant="h5"
              component="h1"
              paddingY={1}
              fontFamily={fonts.comfortaa}
              fontWeight={700}>
              {locale === 'id' ? `Tentang ${namePlant}` : `About ${namePlant}`}
            </Typography>
            {open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* <ListItemButton sx={{ pl: 4 }} style={{ backgroundColor: '#9ed7c1' }}> */}
              <ListItemText>
                <Typography
                  component="p"
                  fontFamily={fonts.inter}
                  fontWeight={400}
                  gutterBottom>
                  {plantAbout}
                </Typography>
              </ListItemText>
              {/* </ListItemButton> */}
            </List>
          </Collapse>
        </ListItem>
      </List>
    </Container>
  );
}
