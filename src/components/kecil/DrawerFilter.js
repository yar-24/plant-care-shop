import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  SwipeableDrawer,
} from "@mui/material";
import React from "react";
import LocaleContext from "../../contexts/LocaleContext";
import { colors, fonts } from "../../utils";
import { useFilter } from "../../contexts/filterContext";
import DeleteIcon from "@mui/icons-material/Delete";

const SelectButton = ({ children, ...rest }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          sx={{ px: 1, py: 0.5 }}
          icon={
            <Button variant="outlined" disableRipple sx={{ borderRadius: 4 }}>
              {children}
            </Button>
          }
          checkedIcon={
            <Button
              variant="contained"
              disableRipple
              disableElevation
              sx={{ borderRadius: 4 }}
            >
              {children}
            </Button>
          }
        />
      }
      {...rest}
    />
  );
};

const DrawerFilter = ({ openDrawer, toggleDrawer }) => {
  const { locale } = React.useContext(LocaleContext);

  const {
    filterDispatch,
    plantTipe,
    plantEnvironment,
    plantSize,
    plantBenefit,
    productTipe,
    sale,
  } = useFilter();

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

  const handleSaleChange = (e, option) => {
    const check = e.target.checked;
    filterDispatch({
      type: "SALE",
      payload: { option, check },
    });
  };

  const drawerBleeding = 56;

  return (
    <SwipeableDrawer
      anchor="bottom"
      disableBackdropTransition
      swipeAreaWidth={drawerBleeding}
      open={openDrawer}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            sx={{ fontSize: 24, color: "black" }}
            component="div"
            id="nested-list-subheader"
          >
            <Box
              sx={{
                width: "15%",
                height: "8px",
                bgcolor: colors.grey,
                mx: "auto",
                my: 1.5,
                borderRadius: 4,
              }}
            />
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
        ></ListItem>
        <ListItem sx={{ display: "block" }}>
          <ListItemText
            primary={locale === "id" ? "Tipe Tumbuhan" : "Plant Tipe"}
            primaryTypographyProps={{
              fontWeight: "bold",
              fontSize: 16,
              fontFamily: fonts.comfortaa,
            }}
          />
          <FormControl
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <SelectButton
              onChange={(e) => handlePlantTipeChange(e, "flowering")}
              checked={plantTipe.includes("flowering")}
            >
              {locale === "id" ? "Berbunga" : "Flowering"}
            </SelectButton>
            <SelectButton
              onChange={(e) => handlePlantTipeChange(e, "ferns")}
              checked={plantTipe.includes("ferns")}
            >
              {locale === "id" ? "Pakis" : "Ferns"}
            </SelectButton>
            <SelectButton
              onChange={(e) => handlePlantTipeChange(e, "cactus")}
              checked={plantTipe.includes("cactus")}
            >
              {locale === "id" ? "Kaktus" : "Cactus"}
            </SelectButton>
            <SelectButton
              onChange={(e) => handlePlantTipeChange(e, "palm&trees")}
              checked={plantTipe.includes("palm&trees")}
            >
              {locale === "id" ? "Palem & pohon" : "Palms & trees"}
            </SelectButton>
            <SelectButton
              onChange={(e) => handlePlantTipeChange(e, "bamboo&grasses")}
              checked={plantTipe.includes("bamboo&grasses")}
            >
              {locale === "id" ? "Bambu & rumput" : "Bamboo & grasses"}
            </SelectButton>
          </FormControl>
        </ListItem>
        <ListItem sx={{ display: "block" }}>
          <ListItemText
            primary={locale === "id" ? "Lingkungan" : "Environment"}
            primaryTypographyProps={{
              fontWeight: "bold",
              fontSize: 16,
              fontFamily: fonts.comfortaa,
            }}
          />
          <FormControl
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <SelectButton
              onChange={(e) => handleEnvChange(e, "indoor")}
              checked={plantEnvironment.includes("indoor")}
            >
              {locale === "id" ? "Dalam ruangan" : "Indoor"}
            </SelectButton>
            <SelectButton
              onChange={(e) => handleEnvChange(e, "outdoor")}
              checked={plantEnvironment.includes("outdoor")}
            >
              {locale === "id" ? "Luar Ruangan" : "Outdoor"}
            </SelectButton>
          </FormControl>
        </ListItem>
        <ListItem sx={{ display: "block" }}>
          <ListItemText
            primary={locale === "id" ? "Tinggi" : "Plant Height"}
            primaryTypographyProps={{
              fontWeight: "bold",
              fontSize: 16,
              fontFamily: fonts.comfortaa,
            }}
          />
          <FormControl
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <SelectButton
              onChange={(e) => handlePlantHeightChange(e, "tall")}
              checked={plantSize.includes("tall")}
            >
              {locale === "id" ? "Tinggi / 1m-2.8m" : "Tall / 1m-2.8m"}
            </SelectButton>
            <SelectButton
              onChange={(e) => handlePlantHeightChange(e, "medium")}
              checked={plantSize.includes("medium")}
            >
              {locale === "id" ? "Sedang / 50cm-1m" : "Medium / 50cm-1m"}
            </SelectButton>
            <SelectButton
              onChange={(e) => handlePlantHeightChange(e, "small")}
              checked={plantSize.includes("small")}
            >
              {locale === "id" ? "Kecil / 15-50cm" : "Small / 15-50cm"}
            </SelectButton>
            <SelectButton
              onChange={(e) => handlePlantHeightChange(e, "tiny")}
              checked={plantSize.includes("tiny")}
            >
              {locale === "id" ? "Mungil / 0-15cm" : "Tiny / 0-15cm"}
            </SelectButton>
          </FormControl>
        </ListItem>
        <ListItem sx={{ display: "block" }}>
          <ListItemText
            primary={locale === "id" ? "Manfaat" : "Benefit"}
            primaryTypographyProps={{
              fontWeight: "bold",
              fontSize: 16,
              fontFamily: fonts.comfortaa,
            }}
          />
          <FormControl
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <SelectButton
              onChange={(e) => handleBenefitChange(e, "airPurifier")}
              checked={plantBenefit.includes("airPurifier")}
            >
              {locale === "id" ? "Pembersih udara" : "Air purifier"}
            </SelectButton>
            <SelectButton
              onChange={(e) => handleBenefitChange(e, "easyCare")}
              checked={plantBenefit.includes("easyCare")}
            >
              {locale === "id" ? "Perawatan mudah" : "Easy care"}
            </SelectButton>
          </FormControl>
        </ListItem>
        <ListItem sx={{ display: "block" }}>
          <ListItemText
            primary={locale === "id" ? "Tipe Produk" : "Product tipe"}
            primaryTypographyProps={{
              fontWeight: "bold",
              fontSize: 16,
              fontFamily: fonts.comfortaa,
            }}
          />
          <FormControl
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <SelectButton
              onChange={(e) => handleProductTipeChange(e, "pots")}
              checked={productTipe.includes("pots")}
            >
              {locale === "id" ? "Pot" : "Pots"}
            </SelectButton>
            <SelectButton
              onChange={(e) => handleProductTipeChange(e, "plants")}
              checked={productTipe.includes("plants")}
            >
              {locale === "id" ? "Tanaman" : "Plants "}
            </SelectButton>
            <SelectButton
              onChange={(e) => handleProductTipeChange(e, "bundles")}
              checked={productTipe.includes("bundles")}
            >
              {locale === "id" ? "Kumpulan" : "Bundles "}
            </SelectButton>
            <SelectButton
              onChange={(e) => handleProductTipeChange(e, "accessories")}
              checked={productTipe.includes("accessories")}
            >
              {locale === "id" ? "Aksesoris" : "Tools & accessories "}
            </SelectButton>
          </FormControl>
        </ListItem>
        <ListItem sx={{ display: "block" }}>
          <ListItemText
            primary={locale === "id" ? "Obral" : "Sale"}
            primaryTypographyProps={{
              fontWeight: "bold",
              fontSize: 16,
              fontFamily: fonts.comfortaa,
            }}
          />
          <FormControl
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <SelectButton
              onChange={(e) => handleSaleChange(e, "discount")}
              checked={sale.includes("discount")}
            >
              {locale === "id" ? "Item diskon" : "Discounted items"}
            </SelectButton>
          </FormControl>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default DrawerFilter;
