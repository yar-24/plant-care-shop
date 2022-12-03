import React, { useState } from "react";
import {
  ListSubheader,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  IconButton,
  Checkbox,
  FormControlLabel,
  ListItem,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import LocaleContext from "../contexts/LocaleContext";
import { colors, fonts } from "../utils";
import { useFilter } from "../contexts/filterContext";

export default function Filter() {
  const { locale } = React.useContext(LocaleContext);

  const { filterDispatch, plantTipe, plantEnvironment, plantHeight, benefit, productTipe, price, sale} = useFilter();

  const handleClearClick = () => {
    filterDispatch({
      type: "CLEAR",
    });
  };

  const handlePlantTipeChange = (e, option) => {
    const check = e.target.checked;
    filterDispatch({
      type: "PLANT_TIPE",
      payload: { option, check },
    });
  };

  const handleEnvChange = (e, option) => {
    const check = e.target.checked;
    filterDispatch({
      type: "ENVIRONMENT",
      payload: { option, check },
    });
  };

  const handlePlantHeightChange = (e, option) => {
    const check = e.target.checked;
    filterDispatch({
      type: "PLANT_HEIGHT",
      payload: { option, check },
    });
  };

  const handleBenefitChange = (e, option) => {
    const check = e.target.checked;
    filterDispatch({
      type: "BENEFIT",
      payload: { option, check },
    });
  };

  const handleProductTipeChange = (e, option) => {
    const check = e.target.checked;
    filterDispatch({
      type: "PRODUCT_TIPE",
      payload: { option, check },
    });
  };

  const handlePriceChange = (e, option) => {
    const check = e.target.checked;
    filterDispatch({
      type: "PRICE",
      payload: { option, check },
    });
  };

  const handleSaleChange = (e, option) => {
    const check = e.target.checked;
    filterDispatch({
      type: "SALE",
      payload: { option, check },
    });
  };

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
        bgcolor: "background.paper",
        display: { xs: "none", sm: "block" },
        alignSelf: "flex-start",
      }}
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{
            backgroundColor: colors.secondary,
            color: colors.white,
            fontSize: "20px",
            fontWeight: 600,
            fontFamily: fonts.inter,
          }}
        >
          Filter
        </ListSubheader>
      }
    >
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            sx={{ color: "red" }}
            onClick={handleClearClick}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText secondary="Clear" />
      </ListItem>
      <ListItemButton onClick={handleClick}>
        <ListItemText
          primary={locale === "id" ? "Tipe Tumbuhan" : "Plant Tipe"}
          primaryTypographyProps={{
            fontWeight: "bold",
            fontSize: 16,
            fontFamily: fonts.comfortaa,
          }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary={locale === "id" ? "Berbunga" : "Flowering"}
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handlePlantTipeChange(e, "flowering")}
            checked={plantTipe.includes("flowering")}
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary={locale === "id" ? "Pakis" : "Ferns"}
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handlePlantTipeChange(e, "ferns")}
            checked={plantTipe.includes("ferns")}
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary={locale === "id" ? "Kaktus" : "Cactus"}
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handlePlantTipeChange(e, "cactus")}
            checked={plantTipe.includes("cactus")}
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary={locale === "id" ? "Palem & pohon" : "Palms & trees"}
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handlePlantTipeChange(e, "palms&trees")}
            checked={plantTipe.includes("palms&trees")}
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary={locale === "id" ? "Bambu & rumput" : "Bamboo & grasses"}
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handlePlantTipeChange(e, "bamboo&grasses")}
            checked={plantTipe.includes("bamboo&grasses")}
          />
        </ListItemButton>
      </Collapse>
      <ListItemButton onClick={handleClick2}>
        <ListItemText
          primary={locale === "id" ? "Lingkungan" : "Environment"}
          primaryTypographyProps={{
            fontWeight: "bold",
            fontSize: 16,
            fontFamily: fonts.comfortaa,
          }}
        />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary={locale === "id" ? "Dalam ruangan" : "Indoor"}
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handleEnvChange(e, "indoor")}
            checked={plantEnvironment.includes("indoor")}
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary={locale === "id" ? "Luar ruangan" : "Outdoor"}
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handleEnvChange(e, "outdoor")}
            checked={plantEnvironment.includes("outdoor")}
          />
        </ListItemButton>
      </Collapse>
      <ListItemButton onClick={handleClick3}>
        <ListItemText
          primary={locale === "id" ? "Tinggi" : "Plant Height"}
          primaryTypographyProps={{
            fontWeight: "bold",
            fontSize: 16,
            fontFamily: fonts.comfortaa,
          }}
        />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary={locale === "id" ? "Tinggi / 1m-2.8m" : "Tall / 1m-2.8m"}
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handlePlantHeightChange(e, "tall")}
            checked={plantHeight.includes("tall")}
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary={
              locale === "id" ? "Sedang / 50cm-1m" : "Medium / 50cm-1m"
            }
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handlePlantHeightChange(e, "medium")}
            checked={plantHeight.includes("medium")}
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary={locale === "id" ? "Kecil / 15-50cm" : "Small / 15-50cm"}
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handlePlantHeightChange(e, "small")}
            checked={plantHeight.includes("small")}
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary={locale === "id" ? "Mungil / 0-15cm" : "Tiny / 0-15cm"}
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handlePlantHeightChange(e, "tiny")}
            checked={plantHeight.includes("tiny")}
          />
        </ListItemButton>
      </Collapse>
      <ListItemButton onClick={handleClick4}>
        <ListItemText
          primary={locale === "id" ? "Manfaat" : "Benefit"}
          primaryTypographyProps={{
            fontWeight: "bold",
            fontSize: 16,
            fontFamily: fonts.comfortaa,
          }}
        />
        {open4 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open4} timeout="auto" unmountOnExit>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary={locale === "id" ? "Pembersih udara" : "Air purifier"}
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handleBenefitChange(e, "airPurifier")}
            checked={benefit.includes("airPurifier")}
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary={locale === "id" ? "Perawatan mudah" : "Easy care"}
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handleBenefitChange(e, "easyCare")}
            checked={benefit.includes("easyCare")}
          />
        </ListItemButton>
      </Collapse>
      <ListItemButton onClick={handleClick5}>
        <ListItemText
          primary={locale === "id" ? "Tipe Produk" : "Product tipe"}
          primaryTypographyProps={{
            fontWeight: "bold",
            fontSize: 16,
            fontFamily: fonts.comfortaa,
          }}
        />
        {open5 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open5} timeout="auto" unmountOnExit>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary={locale === "id" ? "Pot" : "Pots"}
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handleProductTipeChange(e, "pots")}
            checked={productTipe.includes("pots")}
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary={locale === "id" ? "Tanaman" : "Plants "}
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handleProductTipeChange(e, "plants")}
            checked={productTipe.includes("plants")}
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary={locale === "id" ? "Kumpulan" : "Bundles "}
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handleProductTipeChange(e, "bundles")}
            checked={productTipe.includes("bundles")}
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary={locale === "id" ? "Aksesoris" : "Tools & accessories "}
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handleProductTipeChange(e, "accessories")}
            checked={productTipe.includes("accessories")}
          />
        </ListItemButton>
      </Collapse>
      <ListItemButton onClick={handleClick6}>
        <ListItemText
          primary={locale === "id" ? "Harga" : "Prices"}
          primaryTypographyProps={{
            fontWeight: "bold",
            fontSize: 16,
            fontFamily: fonts.comfortaa,
          }}
        />
        {open6 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open6} timeout="auto" unmountOnExit>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary="10 - 50K "
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handlePriceChange(e, "10-50")}
            checked={price.includes("10-50")}
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary="50 - 100K "
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handlePriceChange(e, "50-100")}
            checked={price.includes("50-100")}
          />
        </ListItemButton>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary="100 - 500K"
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handlePriceChange(e, "100-500")}
            checked={price.includes("100-500")}
          />
        </ListItemButton>
      </Collapse>
      <ListItemButton onClick={handleClick7}>
        <ListItemText
          primary={locale === "id" ? "Obral" : "Sale"}
          primaryTypographyProps={{
            fontWeight: "bold",
            fontSize: 16,
            fontFamily: fonts.comfortaa,
          }}
        />
        {open7 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open7} timeout="auto" unmountOnExit>
        <ListItemButton sx={{ py: 0 }}>
          <ListItemText
            secondary={locale === "id" ? "Item diskon" : "Discounted items"}
            secondaryTypographyProps={{
              fontSize: 16,
              fontWeight: 400,
              fontFamily: fonts.inter,
            }}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            labelPlacement="start"
            onChange={(e) => handleSaleChange(e, "diskon")}
            checked={sale.includes("diskon")}
          />
        </ListItemButton>
      </Collapse>
    </List>
  );
  // </Container>
}
