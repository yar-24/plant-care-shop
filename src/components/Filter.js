import React, { useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Checkbox, FormControlLabel } from '@mui/material';
import LocaleContext from '../contexts/LocaleContext';
import { colors, fonts } from '../utils';

export default function Filter() {
  const { locale } = React.useContext(LocaleContext);

  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);
  const [open4, setOpen4] = useState(true);
  const [open5, setOpen5] = useState(true);
  const [open6, setOpen6] = useState(true);
  const [open7, setOpen7] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const handleClick5 = () => {
    setOpen5(!open5);
  };
  const handleClick6 = () => {
    setOpen6(!open6);
  };
  const handleClick7 = () => {
    setOpen7(!open7);
  };

  return (
    <List
      sx={{
        flex: 2,
        bgcolor: 'background.paper',
        display: { xs: 'none', sm: 'block' },
        alignSelf: 'flex-start',
      }}
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{
            backgroundColor: colors.secondary,
            color: colors.white,
            fontSize: '20px',
            fontWeight: 600,
            fontFamily: fonts.inter,
          }}>
          Filter
        </ListSubheader>
      }>
      <ListItemButton onClick={handleClick}>
        <ListItemText
          primary={locale === 'id' ? 'Tipe Tumbuhan' : 'Plant Tipe'}
          primaryTypographyProps={{
            fontWeight: 'bold',
            fontSize: 16,
            fontFamily: fonts.comfortaa,
          }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary={locale === 'id' ? 'Berbunga' : 'Flowering'}
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary={locale === 'id' ? 'Pakis' : 'Ferns'}
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary={locale === 'id' ? 'Kaktus' : 'Cactus'}
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary={locale === 'id' ? 'Palem & pohon' : 'Palms & trees'}
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary={locale === 'id' ? 'Bambu & rumput' : 'Bamboo & grasses'}
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
      </Collapse>
      <ListItemButton onClick={handleClick2}>
        <ListItemText
          primary={locale === 'id' ? 'Lingkungan' : 'Environment'}
          primaryTypographyProps={{
            fontWeight: 'bold',
            fontSize: 16,
            fontFamily: fonts.comfortaa,
          }}
        />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary={locale === 'id' ? 'Dalam ruangan' : 'Indoor'}
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary={locale === 'id' ? 'Luar ruangan' : 'Outdoor'}
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
      </Collapse>
      <ListItemButton onClick={handleClick3}>
        <ListItemText
          primary={locale === 'id' ? 'Tinggi' : 'Plant Height'}
          primaryTypographyProps={{
            fontWeight: 'bold',
            fontSize: 16,
            fontFamily: fonts.comfortaa,
          }}
        />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary={locale === 'id' ? 'Tinggi / 1m-2.8m' : 'Tall / 1m-2.8m'}
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary={locale === 'id' ? 'Sedang / 50cm-1m' : 'Medium / 50cm-1m'}
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary={locale === 'id' ? 'Kecil / 15-50cm' : 'Small / 15-50cm'}
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary={locale === 'id' ? 'Mungil / 0-15cm' : 'Tiny / 0-15cm'}
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
      </Collapse>
      <ListItemButton onClick={handleClick4}>
        <ListItemText
          primary={locale === 'id' ? 'Manfaat' : 'Benefit'}
          primaryTypographyProps={{
            fontWeight: 'bold',
            fontSize: 16,
            fontFamily: fonts.comfortaa,
          }}
        />
        {open4 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open4} timeout="auto" unmountOnExit>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary={locale === 'id' ? 'Pembersih udara' : 'Air purifier'}
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary={locale === 'id' ? 'Perawatan mudah' : 'Easy care'}
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
      </Collapse>
      <ListItemButton onClick={handleClick5}>
        <ListItemText
          primary={locale === 'id' ? 'Tipe Produk' : 'Product tipe'}
          primaryTypographyProps={{
            fontWeight: 'bold',
            fontSize: 16,
            fontFamily: fonts.comfortaa,
          }}
        />
        {open5 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open5} timeout="auto" unmountOnExit>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary={locale === 'id' ? 'Pot' : 'Pots'}
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary={locale === 'id' ? 'Tanaman' : 'Plants '}
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary={locale === 'id' ? 'Kumpulan' : 'Bundles '}
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary={locale === 'id' ? 'Aksesoris' : 'Tools & accessories '}
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
      </Collapse>
      <ListItemButton onClick={handleClick6}>
        <ListItemText
          primary={locale === 'id' ? 'Harga' : 'Prices'}
          primaryTypographyProps={{
            fontWeight: 'bold',
            fontSize: 16,
            fontFamily: fonts.comfortaa,
          }}
        />
        {open6 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open6} timeout="auto" unmountOnExit>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary="10 - 50K "
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary="50 - 100K "
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary="100 - 500K"
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
      </Collapse>
      <ListItemButton onClick={handleClick7}>
        <ListItemText
          primary={locale === 'id' ? 'Obral' : 'Sale'}
          primaryTypographyProps={{
            fontWeight: 'bold',
            fontSize: 16,
            fontFamily: fonts.comfortaa,
          }}
        />
        {open7 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open7} timeout="auto" unmountOnExit>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            primary={locale === 'id' ? 'Item diskon' : 'Discounted items'}
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
          />
        </ListItemButton>
      </Collapse>
    </List>
  );
  // </Container>
}
