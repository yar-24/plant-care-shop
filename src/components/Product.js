import { FormControl, Grid, MenuItem, Select } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { colors } from "../utils";
import CardItem from "./CardItem";
import SkeletonCardItem from "./kecil/SkeletonCardItem";

const Product = ({ products, loading }) => {
  const [Sort, setSort] = React.useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Stack spacing={1} sx={{flex:1}}>
      <FormControl size="medium">
        <Select
          value={Sort}
          sx={{alignSelf:"flex-end", backgroundColor: colors.white}}
          onChange={handleChange}
          color="success"
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}>
          <MenuItem value="">Sort by : Recommended</MenuItem>
          <MenuItem value={20}>Sort by : Most Popular</MenuItem>
          <MenuItem value={30}>Sort by : Price (high to low)</MenuItem>
          <MenuItem value={30}>Sort by : Price (low to hight)</MenuItem>
        </Select>
      </FormControl>
      <Grid
        maxWidth="100%"
        container
        spacing={{ xs: 2,sm:3, md:2, lg:3 }}
        columns={{ xs: 6, sm: 8, md: 12 }}>
        {products.map((product, index) =>
          loading ? (
            <Grid item xs={6} sm={8} md={4} key={index}>
              <CardItem
                nameProduct={product.namePlant}
                imgProduct={`${product.idImageProduct}`}
                priceProduct={product.price}
                idProduct={product._id}
              />
            </Grid>
          ) : (
            <SkeletonCardItem />
          )
        )}
      </Grid>
    </Stack>
  );
};
export default Product;