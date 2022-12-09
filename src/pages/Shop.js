import { Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import Filter from '../components/Filter';
import DrawerFilter from '../components/kecil/DrawerFilter';
import Product from '../components/Product';
import { useFilter } from '../contexts/filterContext';
import LocaleContext from '../contexts/LocaleContext';
import { getProducts } from '../redux/features/products/productSlice';
import {
  fonts,
  getProductsByBenefit,
  getProductsByEnv,
  getProductsByPlantHeight,
  getProductsByPlantTipe,
  getProductsByPriceSort,
  getProductsByProductTipe,
  getProductsBySale,
} from '../utils';

const Shop = () => {
  const { locale } = React.useContext(LocaleContext);
  const [drawerFilter, setdrawerFilter] = useState(false);
  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [Sort, setSort] = useState('');

  const handlePriceChange = (e) => {
    setSort(e.target.value);
    if (e.target.value === '') {
      filterDispatch({
        type: 'CLEAR',
      });
    } else {
      filterDispatch({
        type: e.target.value === 'lth' ? 'LTH' : 'HTL',
        payload: e.target.value === 'lth' ? 'lth' : 'htl',
      });
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setdrawerFilter(open);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
      .then((res) => {
        const data = res.payload.products;
        setproducts(data);
        setIsLoading(true);
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: err,
        });
      });
  }, [dispatch]);

  const {
    filterDispatch,
    sort,
    plantTipe,
    plantEnvironment,
    plantSize,
    plantBenefit,
    productTipe,
    sale,
  } = useFilter();

  const filteredProductsByPriceSort = getProductsByPriceSort(products, sort);
  const filteredProductsByPlantTipe = getProductsByPlantTipe(
    filteredProductsByPriceSort,
    plantTipe
  );
  const filteredProductsByEnv = getProductsByEnv(
    filteredProductsByPlantTipe,
    plantEnvironment
  );
  const filteredProductsByPlantHeight = getProductsByPlantHeight(
    filteredProductsByEnv,
    plantSize
  );
  const filteredProductsByBenefit = getProductsByBenefit(
    filteredProductsByPlantHeight,
    plantBenefit
  );
  const filteredProductsByProductTipe = getProductsByProductTipe(
    filteredProductsByBenefit,
    productTipe
  );
  const filteredProductsBySale = getProductsBySale(
    filteredProductsByProductTipe,
    sale
  );

  return (
    <>
      <Container fixed>
        <Typography
          sx={{ px: 3, fontFamily: fonts.comfortaa, fontWeight: 700 }}
          variant="h5"
          component="h2"
          align="center"
          paddingY={4}>
          {locale === 'id' ? 'Semua Produk' : 'All Product'}
        </Typography>
        <Stack direction="row" spacing={{ md: 1 }}>
          <Filter setSort={setSort} />
          <DrawerFilter
            openDrawer={drawerFilter}
            toggleDrawer={toggleDrawer}
            setSort={setSort}
          />
          <Product
            toggleDrawer={toggleDrawer}
            loading={isLoading}
            products={filteredProductsBySale}
            Sort={Sort}
            handlePriceChange={handlePriceChange}
          />
        </Stack>
      </Container>
    </>
  );
};

export default Shop;
