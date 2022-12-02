import { FormControl, Grid, MenuItem, Select, Stack } from "@mui/material";
import React from "react";
import { colors } from "../utils";
import CardItem from "./CardItem";
import SkeletonCardItem from "./kecil/SkeletonCardItem";
import styled from "styled-components";

const Layout = styled.div`
width: 80% ;
  @media (max-width: 600px) {
    width: 100% ;
    padding-right: 18px;
  }
`;

const Product = ({ products, loading, addItem }) => {
  const [Sort, setSort] = React.useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Layout>
      <Stack spacing={1} sx={{ flex: 8 }}>
        <FormControl size="medium">
          <Select
            value={Sort}
            sx={{
              alignSelf: "flex-end",
              backgroundColor: colors.white,
              borderRadius: 0,
            }}
            onChange={handleChange}
            color="success"
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">Sort by : Recommended</MenuItem>
            <MenuItem value={20}>Sort by : Most Popular</MenuItem>
            <MenuItem value={30}>Sort by : Price (high to low)</MenuItem>
            <MenuItem value={30}>Sort by : Price (low to hight)</MenuItem>
          </Select>
        </FormControl>
        <Grid
          maxWidth="100%"
          container
          spacing={{ xs: 2, sm: 3, md: 2, lg: 3 }}
          columns={{ xs: 6, sm: 8, md: 12 }}
        >
          {(!loading ? Array.from(new Array(6)) : products).map(
            (product, index) => (
              <Grid item xs={6} sm={8} md={4} key={index}>
                {product ? (
                  <CardItem product={product} addItem={addItem} />
                ) : (
                  <SkeletonCardItem />
                )}
              </Grid>
            )
          )}
        </Grid>
      </Stack>
    </Layout>
  );
};
export default Product;
