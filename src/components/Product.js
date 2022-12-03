import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { colors, fonts } from "../utils";
import CardItem from "./CardItem";
import SkeletonCardItem from "./kecil/SkeletonCardItem";
import styled from "styled-components";
import LocaleContext from "../contexts/LocaleContext";
import { useFilter } from "../contexts/filterContext";

const Layout = styled.div`
  width: 80%;
  @media (max-width: 600px) {
    width: 100%;
    padding-right: 18px;
  }
`;

const Product = ({ products, loading }) => {
  const [Sort, setSort] = useState("");

  const { locale } = useContext(LocaleContext);
  const { filterDispatch, sort} = useFilter();

  const handlePriceChange = (e) => {
    setSort(e.target.value);
    filterDispatch({
      type: Sort === "lth" ? "LTH" : "HTL",
      payload: Sort === "lth" ? "htl" : "lth",
    });
  };

  return (
    <Layout>
      <Stack spacing={1} sx={{ flex: 8 }}>
        <FormControl fullWidth>
          <Select
            value={Sort}
            sx={{
              alignSelf: "flex-end",
              backgroundColor: colors.white,
              borderRadius: 0,
            }}
            onChange={handlePriceChange}
            color="success" 
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            checked={sort === Sort}
          >
            <MenuItem disabled value=""><em>Sort by : Recommended</em></MenuItem>
            {/* <MenuItem value={20}>Sort by : Most Popular</MenuItem> */}
            <MenuItem
              name="price"
              value="htl"
            >
              Sort by : Price (high to low)
            </MenuItem>
            <MenuItem
              name="price"
              value="lth"
            >
              Sort by : Price (low to hight)
            </MenuItem>
          </Select>
        </FormControl>
        <Grid
          maxWidth="100%"
          container
          spacing={{ xs: 2, sm: 3, md: 2, lg: 3 }}
          columns={{ xs: 6, sm: 8, md: 12 }}
        >
          {products.length > 0 ? (
            (!loading ? Array.from(new Array(6)) : products).map(
              (product, index) => (
                <Grid item xs={6} sm={8} md={4} key={index}>
                  {product ? (
                    <CardItem product={product} />
                  ) : (
                    <SkeletonCardItem />
                  )}
                </Grid>
              )
            )
          ) : (
            <Box>
              <Typography
                variant="body1"
                sx={{ fontFamily: fonts.inter, lineHeight: 2 }}
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
    </Layout>
  );
};
export default Product;
