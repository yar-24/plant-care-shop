import { Box, Container, Skeleton, Stack, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import BannerFreeOngkir from "../components/BannerFreeOngkir";
import CardList from "../components/CardList";
import ProductDetail from "../components/ProductDetail";
import ProductInformation from "../components/ProductInformation";
import LocaleContext from "../contexts/LocaleContext";
import { getProduct } from "../redux/features/products/productSlice";
import ImagePreview from "../components/kecil/ImagePreview";

const ProductImage = styled("img")`
  object-fit: cover;
  max-width: 100%;
  height: 100%;
  vertical-align: middle;
  cursor: pointer;
`;

const DetailProduct = () => {
  const { locale } = React.useContext(LocaleContext);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState("");
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
    dispatch(getProduct(id))
      .then((res) => {
        const data = res.payload.product;
        setLoading(true);
        setProduct(data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: err,
        });
      });
  }, [id, dispatch]);

  return (
    <>
      <ImagePreview open={open} handleClose={handleClose} product={product} loading={loading} />
      <ProductInformation product={product} loading={loading} />
      <Container fixed sx={{ my: 4 }}>
        <Stack component="ul" direction="row" gap={{ xs: 1, sm: 2, md: 4 }}>
          {Array.isArray(product.images)
            ? product.images.map((item, index) => (
                <Box component="li" sx={{ flex: 1 }} key={index}>
                  {loading ? (
                    <ProductImage
                      src={`https://res.cloudinary.com/eundangdotcom/image/upload/${item.image_id}`}
                      alt={item.image_id}
                      onClick={handleOpen}
                    />
                  ) : (
                    <Skeleton
                      variant="rectangular"
                      animation="wave"
                      sx={{
                        width: { md: 200, xs: 65 },
                        height: { md: 220, xs: 90 },
                      }}
                    />
                  )}
                </Box>
              ))
            : null}
        </Stack>
      </Container>
      <ProductDetail
        namePlant={product.namePlant}
        plantAbout={product.plantAbout}
        plantLike={product.plantLike}
        loading={loading}
      />
      <BannerFreeOngkir />
      <CardList>
        {locale === "id" ? "Mungkin Anda Sukai" : "You Might Like"}
      </CardList>
    </>
  );
};

export default DetailProduct;
