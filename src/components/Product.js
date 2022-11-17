import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Stack } from "@mui/material";
import Swal from "sweetalert2";
import { getProducts } from "../redux/features/products/productSlice";
import CardItem from "./CardItem";
import Filter from "./Filter";
import LocaleContext from "../contexts/LocaleContext";
import SkeletonCardItem from "./kecil/SkeletonCardItem";


const Product = () => {
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
          footer: err
        })
      });
  }, [dispatch]);

  return (
    <>
      <h2 className="title-product">{locale === 'id' ? 'Semua Produk' : 'All Product'}</h2>
      <Container fixed sx={{ display: 'flex' }}>
        <Filter />
        <Stack>
          {products.map((product, index) => (
            <div className="product" key={index}>
              {isLoading ? (
                <CardItem
                  nameProduct={product.namePlant}
                  imgProduct={`${product.idImageProduct}`}
                  priceProduct={product.price}
                  idProduct={product._id}
                />
              ) : (
                <SkeletonCardItem />
              )}
            </div>
          ))}
        </Stack>
      </Container>
    </>
  );
};
export default Product;
