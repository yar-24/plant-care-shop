import React, {useState} from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import LocaleContext from "../contexts/LocaleContext";

export default function Filter() {
  const { locale } = React.useContext(LocaleContext);

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);

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
        sx={{ bgcolor: "background.paper", display:{xs:'none',sm:'block'}, alignSelf:'flex-start'}}
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            style={{
              backgroundColor: "#009E72",
              color: "white",
              fontSize: "22px",
              fontWeight: 700,
              position: "sticky",

            }}
          >
            {locale === 'id' ? 'Pilihan' : 'Filter'}
          </ListSubheader>
        }
      >
        <ListItemButton onClick={handleClick}>
        <ListItemText
            primary={
              <Typography variant="h6" component="h6">
            {locale === 'id' ? 'Tipe Tumbuhan' : 'Plant Tipe'}
              </Typography>
            }
            sx={{
              fontWeight: "bold",
              fontSize: 30,
            }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <ListItemButton>
            <ListItemText primary={locale === 'id' ? 'Berbunga' : 'Flowering'}/>
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary= {locale === 'id' ? 'Pakis' : 'Ferns'}/>
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary={locale === 'id' ? 'Kaktus' : 'Cactus'} />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary={locale === 'id' ? 'Palem & pohon' : "Palms & trees"} />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary={locale === 'id' ? 'Bambu & rumput' : "Bamboo & grasses"} />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
        </Collapse>
        <ListItemButton onClick={handleClick2}>
          <ListItemText
            primary={
              <Typography variant="h6" component="h5">
                {locale === 'id' ? 'Lingkungan': 'Environment'}
              </Typography>
            }
            sx={{
              fontWeight: "bold",
              fontSize: 30,
            }}
          />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <ListItemButton>
            <ListItemText primary={locale === 'id' ? 'Dalam ruangan' : "Indoor"} />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
          <ListItemText primary={locale === 'id' ? 'Luar ruangan' : "Outdoor"} />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
        </Collapse>
        <ListItemButton onClick={handleClick3}>
          <ListItemText
            primary={
              <Typography variant="h6" component="h5">
                {locale === 'id' ? 'Tinggi' : 'Plant Height' }
              </Typography>
            }
            sx={{
              fontWeight: "bold",
              fontSize: 30,
            }}
          />
          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <ListItemButton>
            <ListItemText primary={locale === 'id' ? 'Tinggi / 1m-2.8m' : "Tall / 1m-2.8m"} />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary={locale === 'id' ? 'Sedang / 50cm-1m' : "Medium / 50cm-1m" }/>
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary={locale === 'id' ? 'Kecil / 15-50cm' : "Small / 15-50cm" } />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary={locale === 'id' ? 'Mungil / 0-15cm' : "Tiny / 0-15cm"} />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
        </Collapse>
        <ListItemButton onClick={handleClick4}>
          <ListItemText
            primary={
              <Typography variant="h6" component="h5">
                {locale === 'id' ? 'Manfaat' : 'Benefit'}
              </Typography>
            }
            sx={{
              fontWeight: "bold",
              fontSize: 30,
            }}
          />
          {open4 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open4} timeout="auto" unmountOnExit>
          <ListItemButton>
            <ListItemText primary={locale === 'id' ? 'Pembersih udara' : "Air purifier"} />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary={locale === 'id' ? 'Perawatan mudah' : "Easy care"} />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
        </Collapse>
        <ListItemButton onClick={handleClick5}>
          <ListItemText
            primary={
              <Typography variant="h6" component="h5">
                {locale === 'id' ? 'Tipe Produk' : 'Product tipe'}
              </Typography>
            }
            sx={{
              fontWeight: "bold",
              fontSize: 30,
            }}
          />
          {open5 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open5} timeout="auto" unmountOnExit>
          <ListItemButton>
            <ListItemText primary={locale === 'id' ? 'Pot' : "Pots"} />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary={locale === 'id' ? 'Tanaman' : "Plants "} />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary={locale === 'id' ? 'Kumpulan' : "Bundles "} />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary={locale === 'id' ? 'Aksesoris' : "Tools & accessories "} />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
        </Collapse>
        <ListItemButton onClick={handleClick6}>
          <ListItemText
            primary={
              <Typography variant="h6" component="h5">
                {locale === 'id' ? 'Harga' : 'Prices'}
              </Typography>
            }
            sx={{
              fontWeight: "bold",
              fontSize: 30,
            }}
          />
          {open6 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open6} timeout="auto" unmountOnExit>
          <ListItemButton>
            <ListItemText primary="10 - 50K " />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="50 - 100K " />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="100 - 500K" />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              labelPlacement="start"
            />
          </ListItemButton>
        </Collapse>
        <ListItemButton onClick={handleClick7}>
          <ListItemText
            primary={
              <Typography variant="h6" component="h5">
               {locale === 'id' ? 'Obral' : 'Sale'}
              </Typography>
            }
            sx={{
              fontWeight: "bold",
              fontSize: 30,
            }}
          />
          {open7 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open7} timeout="auto" unmountOnExit>
          <ListItemButton>
            <ListItemText primary={locale === 'id' ? 'Item diskon' : "Discounted items"} />
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
