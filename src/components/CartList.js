import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Container, Box } from "@mui/material";
import CartItem from "./CartItem";
import { colors, fonts, rupiah } from "../utils";
import { ShoppingCart } from "@mui/icons-material";
import CustomButton from "./CustomButton";
import { useCart } from "../contexts/cartContext";

const CartListContainer = styled(Container)`
  margin-top: 60px;
`;

const ContainerHarga = styled(Box)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.secondary};
  padding: 20px 0px;
`;

const Button = styled(CustomButton)`
  @media (max-width: 600px) {
    width: 80%;
  }
`;
const ListHarga = ({ textHarga, totalHarga }) => {
  return (
    <ContainerHarga>
      <Typography
        variant="h5"
        component="h1"
        sx={{ fontFamily: fonts.inter, fontWeight: 600 }}
      >
        {textHarga}
      </Typography>
      <Typography sx={{ marginRight: "50px", fontWeight: 600 }}>
        {totalHarga}
      </Typography>
    </ContainerHarga>
  );
};

const CartList = ({ locale }) => {
  
  const { cart } = useCart();

  const subTotal = cart.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  
  return (
    <>
      {cart.length === 0 ? (
        <CartListContainer>
          <Box pb={10}>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontFamily: fonts.comfortaa }}
            >
              {locale === "id" ? "Tidak ada item" : "No items"}
            </Typography>
          </Box>
        </CartListContainer>
      ) : (
        <CartListContainer>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontFamily: fonts.comfortaa }}
          >
            {locale === "id" ? "Keranjang anda" : "Your bag"}
          </Typography>
          {cart.map((item, index) => (
            <CartItem key={index} product={item} />
          ))}
          <ListHarga textHarga="Subtotal" totalHarga={rupiah(subTotal)} />
          <ListHarga
            textHarga={locale === "id" ? "Pengiriman" : "Delivery"}
            totalHarga={subTotal > 30000 ? "Free" : rupiah(13000)}
          />
          <ListHarga
            textHarga="Total"
            totalHarga={
              subTotal > 30000 ? rupiah(subTotal) : rupiah(subTotal + 13000)
            }
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px 0px",
            }}
          >
            <Button
              startIcon={<ShoppingCart />}
              size="large"
              sx={{ alignSelf: "center", width: "50%", fontSize: "20px" }}
            >
              {locale === "id" ? "Pesan Sekarang" : "Place Order"}
            </Button>
          </Box>
        </CartListContainer>
      )}
    </>
  );
};
export default CartList;
