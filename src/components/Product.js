import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import React, { useContext } from 'react';
import { useFilter } from '../contexts/filterContext';
import LocaleContext from '../contexts/LocaleContext';
import { colors, fonts } from '../utils';
import CardItem from './CardItem';
import SkeletonCardItem from './kecil/SkeletonCardItem';

const Product = ({
  products,
  loading,
  toggleDrawer,
  Sort,
  handlePriceChange,
}) => {
  const { locale } = useContext(LocaleContext);
  const { sort } = useFilter();

  return (
    <Stack spacing={1} width="100%" flex={{ sm: 3, md: 8 }}>
      <Stack
        direction="row"
        gap={1}
        justifyContent={{ xs: 'space-between', sm: 'flex-end' }}>
        <Button
          variant="contained"
          disableElevation
          startIcon={<FilterAltIcon />}
          onClick={toggleDrawer(true)}
          sx={{
            minWidth: 'initial',
            p: 2,
            display: { sm: 'none' },
            borderRadius: 0,
            fontWeight: 600,
          }}
          aria-label="filter">
          Filter
        </Button>
        <FormControl>
          <Select
            value={Sort}
            sx={{
              backgroundColor: colors.white,
              borderRadius: 0,
            }}
            onChange={handlePriceChange}
            color="primary"
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            checked={sort === Sort}>
            <MenuItem name="price" value="">
              {locale === 'id' ? 'Urutkan : Default' : 'Sort by : Default'}
            </MenuItem>
            <MenuItem name="price" value="lth">
              {locale === 'id'
                ? 'Urutkan : Harga Terendah'
                : 'Sort by : Price (low to hight)'}
            </MenuItem>
            <MenuItem name="price" value="htl">
              {locale === 'id'
                ? 'Urutkan : Harga Tertinggi'
                : 'Sort by : Price (high to low)'}
            </MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Grid
        maxWidth="100%"
        container
        rowSpacing={{ xs: 2, sm: 3, md: 2, lg: 3 }}
        columnSpacing={{ xs: 0, sm: 3, md: 2, lg: 3 }}>
        {loading ? (
          Array.from(new Array(6)).map((index) => (
            <Grid item key={index} xs={12} sm={12} md={4}>
              <SkeletonCardItem />
              <h1>{index}</h1>
            </Grid>
          ))
        ) : products.length > 0 ? (
          products.map((product, index) => (
            <Grid item key={index} xs={12} sm={12} md={4} >
              <CardItem product={product} />
            </Grid>
          ))
        ) : (
          <Box>
            <Typography
              variant="body1"
              sx={{ fontFamily: fonts.inter, lineHeight: 2 }}
              style={{ marginLeft: '30px' }}
              gutterBottom>
              {locale === 'id'
                ? 'Tidak ada yang ditampilkan.'
                : 'Nothing to display.'}
            </Typography>
          </Box>
        )}
      </Grid>
    </Stack>
  );
};
export default Product;
