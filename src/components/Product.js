import {
  Box,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useFilter } from "../contexts/filterContext";
import LocaleContext from "../contexts/LocaleContext";
import { colors, fonts } from "../utils";
import CardItem from "./CardItem";
import SkeletonCardItem from "./kecil/SkeletonCardItem";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const Product = ({ products, loading }) => {
  const [Sort, setSort] = useState("");

  const { locale } = useContext(LocaleContext);
  const { filterDispatch, sort } = useFilter();

  const handlePriceChange = (e) => {
    setSort(e.target.value);
    filterDispatch({
      type: Sort === "lth" ? "LTH" : "HTL",
      payload: Sort === "lth" ? "htl" : "lth",
    });
  };

  useEffect(() => {
    setSort("lth");
    filterDispatch({
      type: Sort === "lth" ? "LTH" : "HTL",
      payload: Sort === "lth" ? "htl" : "lth",
    });
  }, [filterDispatch]);

  return (
    <Stack spacing={1} width="100%" flex={{ sm: 3, md: 8 }}>
      <Box sx={{display:"flex", justifyContent: "center"}}>
        <IconButton sx={{display : {md : "none"}}} aria-label="filter">
          <FilterAltIcon />
        </IconButton>
        <FormControl fullWidth>
          <Select
            value={Sort}
            sx={{
              alignSelf: "flex-end",
              backgroundColor: colors.white,
              borderRadius: 0,
            }}
            onChange={handlePriceChange}
            color="primary"
            inputProps={{ "aria-label": "Without label" }}
            checked={sort === Sort}
          >
            <MenuItem name="price" value="lth">
              Sort by : Price (low to hight)
            </MenuItem>
            <MenuItem name="price" value="htl">
              Sort by : Price (high to low)
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid
        maxWidth="100%"
        container
        rowSpacing={{ xs: 2, sm: 3, md: 2, lg: 3 }}
        columnSpacing={{ xs: 0, sm: 3, md: 2, lg: 3 }}
      >
        {!loading ? (
          Array.from(new Array(6)).map((index) => (
            <Grid item key={index} xs={12} sm={12} md={4}>
              <SkeletonCardItem />
            </Grid>
          ))
        ) : products.length > 0 ? (
          products.map((product, index) => (
            <Grid item key={index} xs={12} sm={12} md={4}>
              <CardItem product={product} />
            </Grid>
          ))
        ) : (
          <Box>
            <Typography
              variant="body1"
              sx={{ fontFamily: fonts.inter, lineHeight: 2 }}
              style={{ marginLeft: "30px" }}
              gutterBottom
            >
              {locale === "id"
                ? "Tidak ada yang ditampilkan."
                : "Nothing to display."}
            </Typography>
          </Box>
        )}
      </Grid>
    </Stack>
  );
};
export default Product;
