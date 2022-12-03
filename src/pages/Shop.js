import { Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import Filter from '../components/Filter';
import Product from '../components/Product';
import { useFilter } from '../contexts/filterContext';
import LocaleContext from '../contexts/LocaleContext';
import { getProducts } from '../redux/features/products/productSlice';
import { fonts, getProductsByBenefit, getProductsByEnv, getProductsByPlantHeight, getProductsByPlantTipe, getProductsByPriceSort, getProductsByProductTipe, getProductsBySale } from '../utils';

const Shop = () => {
  const { locale } = React.useContext(LocaleContext);
  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const { sort, plantTipe, plantEnvironment, benefit, productTipe, price, sale } = useFilter();
  const filteredProductsByPrice = getProductsByPriceSort(products, sort);
  const filteredProductsByPlantTipe = getProductsByPlantTipe(filteredProductsByPrice, plantTipe);
  const filteredProductsByEnv = getProductsByEnv(filteredProductsByPlantTipe, plantEnvironment);
  const filteredProductsByPlantHeight = getProductsByPlantHeight(filteredProductsByEnv, benefit);
  const filteredProductsByBenefit = getProductsByBenefit(filteredProductsByPlantHeight, productTipe);
  const filteredProductsByProductTipe = getProductsByProductTipe(filteredProductsByBenefit, price);
  const filteredProductsBySale = getProductsBySale(filteredProductsByProductTipe, sale);

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
          <Filter/>
          <Product loading={isLoading} products={filteredProductsBySale} />
        </Stack>
      </Container>
    </>
  );
};

export default Shop;
