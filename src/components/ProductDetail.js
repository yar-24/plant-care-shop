import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ListItem } from '@mui/material';
import LocaleContext from "../contexts/LocaleContext";
import { Container } from '@mui/system';

export default function ProductDetail() {
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
    <Container fixed>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper', display: 'contents' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItem disablePadding sx={{ display: 'block', marginBottom: 12 }}>
          <ListItemButton disableGutters disableRipple disableTouchRipple onClick={handleClick} >
            <p className='title-detail'>{locale === 'id' ? 'Tanaman / Bunga ' : 'Plant / Flower Like'}</p>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* <ListItemButton disableGutters sx={{ pl: 4 }} style={{ backgroundColor: '#9ed7c1' }}> */}
                <ListItemText>
                  {/* <h3>{locale === 'id' ? 'Tanaman / Bunga ' : 'Plant / Flower Like'}</h3> */}
                  <p>Bunga matahari (Helianthus annuus L.) adalah tumbuhan semusim dari suku kenikir-kenikiran (Asteraceae) yang populer, baik sebagai
                    tanaman hias maupun tanaman penghasil minyak. Bunga tumbuhan ini sangat khas: besar, biasanya berwarna kuning terang, dengan kepala
                    bunga yang besar (diameter bisa mencapai 30 cm).</p>
                </ListItemText>
              {/* </ListItemButton> */}
            </List>
          </Collapse>
          <ListItemButton disableGutters onClick={handleClick2}>
            <p className='title-detail'>{locale === 'id' ? 'Fakta Cepat' : 'Quick Facts'}</p>
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* <ListItemButton sx={{ pl: 4 }} style={{ backgroundColor: '#9ed7c1' }}> */}
                <ListItemText>
                  {/* <h3>{locale === 'id' ? 'Fakta Cepat' : 'Quick Facts'}</h3> */}
                  <p>1. Tidak Semua Bunga Matahari Berwarna Kuning</p>
                  <p>2. Terdapat Ribuan Bunga di Dalam Kepala Bunga Matahari</p>
                  <p>3. Biji Bunga Matahari Bermanfaat untuk Kesehatan</p>
                </ListItemText>
              {/* </ListItemButton> */}
            </List>
          </Collapse>
          <ListItemButton disableGutters onClick={handleClick3}>
            <p className='title-detail'>{locale === 'id' ? 'Tentang' : 'About'}</p>
            {open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* <ListItemButton sx={{ pl: 4 }} style={{ backgroundColor: '#9ed7c1' }}> */}
                <ListItemText>
                  {/* <h3>{locale === 'id' ? 'Tentang' : 'About'}</h3> */}
                  <p>Bunga matahari adalah tumbuhan semusim dari suku kenikir-kenikiran yang populer, baik sebagai tanaman hias maupun tanaman
                    penghasil minyak. Bunga tumbuhan ini sangat khas: besar, biasanya berwarna kuning terang, dengan kepala bunga yang besar.</p>
                </ListItemText>
              {/* </ListItemButton> */}
            </List>
          </Collapse>
        </ListItem>
      </List>
    </Container>
    );
}