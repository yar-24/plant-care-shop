import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Container, Box } from "@mui/material";
import CartItem from "./CartItem";
import { colors, fonts } from "../utils";
import { ShoppingCart } from "@mui/icons-material";
import CustomButton from "./CustomButton";
import { Cart1, Cart2, Cart3 } from "../images/img";
import LocaleContext from "../contexts/LocaleContext";
import { useCart } from "react-use-cart";

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

const CartList = () => {
  const { locale } = React.useContext(LocaleContext);
  const { addItem } = useCart();
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =useCart();

  console.log(items)

  return (
    <CartListContainer>
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontFamily: fonts.comfortaa }}
      >
        {locale === "id" ? "Keranjang anda" : "Your bag"}
      </Typography>
      {items.map((item) => (
        <CartItem src={Cart1} name={item.namePlant} price="10" />
      ))}
      {/* <CartItem src={Cart2} name="Cactus" height="40-50 cm" price="30" />
      <CartItem src={Cart3} name="Snake plant" height="70-80 cm" price="40" /> */}
      <ListHarga textHarga="Subtotal" totalHarga="100k" />
      <ListHarga
        textHarga={locale === "id" ? "Pengiriman" : "Delivery"}
        totalHarga="Free"
      />
      <ListHarga textHarga="Total" totalHarga="100k" />
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
  );
};
export default CartList;
