import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Stack } from "@mui/material";
import Swal from "sweetalert2";
import { getProducts } from "../redux/features/products/productSlice";
import CardItem from "./CardItem";
import Filter from "./Filter";
import LocaleContext from "../contexts/LocaleContext";
import SkeletonCardItem from "./kecil/SkeletonCardItem";
import styled from "styled-components";
import { mobile } from "../utils";

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
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: err,
        });
      });
  }, [dispatch]);

  const Container = styled.div`
    margin: 40px;
    display: flex;
    height: fit-content;

    @media (max-width: 1200px) {
      margin: 30px auto;
    }
    @media (max-width: 900px) {
      margin: 20px auto;
    }
  `;
  return (
    <>
      <h2 className="title-product">
        {locale === "id" ? "Semua Produk" : "All Product"}
      </h2>
      <Container fixed>
        <Stack direction="row" spacing={{ md: 1 }}>
          <Filter />
          <Grid
            style={{ height: "fit-content" }}
            container
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {products.map((product, index) =>
              isLoading ? (
                <Grid item xs={4} sm={4} md={4} key={index}>
                  <CardItem
                    key={index}
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
      </Container>
    </>
  );
};
export default Product;
