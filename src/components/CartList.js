import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Typography, Container, Box, Stack } from "@mui/material";
import CartItem from "./CartItem";
import { colors, fonts } from "../utils";
import { ShoppingCart } from "@mui/icons-material";
import CustomButton from "./CustomButton";
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
        Rp. {totalHarga}
      </Typography>
    </ContainerHarga>
  );
};

const CartList = () => {
  const [ongkir, setOngkir] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const { locale } = React.useContext(LocaleContext);

  const {
    isEmpty,
    cartTotal,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    metadata,
  } = useCart();

  useEffect(() => {
    if (cartTotal > 40000) {
      setOngkir("Free");
    } else {
      setOngkir("13000");
      setTotalPrice(cartTotal + ongkir);
    }
  }, [cartTotal, ongkir]);

  return (
    <>
      {totalUniqueItems === 0 ? (
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
          {items.map((item, index) => (
            <CartItem
              key={index}
              product={item}
              handleMinus={() => updateItemQuantity(item.id, item.quantity - 1)}
              handlePlus={() => updateItemQuantity(item.id, item.quantity + 1)}
              handleRemove={() => removeItem(item.id)}
              quantity={item.quantity}
            />
          ))}
          <ListHarga textHarga="Subtotal" totalHarga={cartTotal} />
          <ListHarga
            textHarga={locale === "id" ? "Pengiriman" : "Delivery"}
            totalHarga={ongkir}
          />
          <ListHarga textHarga="Total" totalHarga={cartTotal + ongkir} />
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
