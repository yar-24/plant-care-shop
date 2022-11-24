import { FormControl, Grid, MenuItem, Select } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { colors } from '../utils';
import CardItem from './CardItem';
import SkeletonCardItem from './kecil/SkeletonCardItem';

const Product = ({ products, loading }) => {
  const [Sort, setSort] = React.useState('');

  const handleChange = (event) => {
    setSort(event.target.value);
  };
  //  const Layout = styled.div`
  //   margin: 40px 80px 30px 80px;
  //   display: flex;
  //   height: fit-content;
  //   @media (max-width: 1200px) {
  //     margin: 30px auto;
  //   }
  //   @media (max-width: 900px) {
  //     margin: 20px auto;
  //   }
  // `;
  return (
    <Stack spacing={1} sx={{ flex: 1 }}>
      <FormControl size="medium">
        <Select
          value={Sort}
          sx={{
            alignSelf: 'flex-end',
            backgroundColor: colors.white,
            borderRadius: 0,
          }}
          onChange={handleChange}
          color="success"
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}>
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
        columns={{ xs: 6, sm: 8, md: 12 }}>
        {(!loading ? Array.from(new Array(6)) : products).map(
          (product, index) => (
            <Grid item xs={6} sm={8} md={4} key={index}>
              {product ? (
                <CardItem
                  nameProduct={product.namePlant}
                  imgProduct={`${product.idImageProduct}`}
                  priceProduct={product.price}
                  idProduct={product._id}
                />
              ) : (
                <SkeletonCardItem />
              )}
            </Grid>
          )
        )}
      </Grid>
    </Stack>
  );
};
export default Product;
