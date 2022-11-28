import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Typography, Container, Box } from "@mui/material";
import CartItem from "./CartItem";
import { colors, fonts } from "../utils";
import { ShoppingCart } from "@mui/icons-material";
import CustomButton from "./CustomButton";
import { useCart } from "react-use-cart";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/features/auth/authSlice";

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

const CartList = ({locale, user}) => {
  const [quantity, setQuantity] = useState(1);
  const cart = useSelector((state) => state.cart);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else if(type === "inc") {
      setQuantity(quantity + 1);
    }else{
      setQuantity(quantity * 0)
    }
  };

  console.log(cart)


  return (
    <>
      {/* {totalUniqueItems === 0 ? (
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
      ) : ( */}
        <CartListContainer>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontFamily: fonts.comfortaa }}
          >
            {locale === "id" ? "Keranjang anda" : "Your bag"}
          </Typography>
          {cart.products.map((item, index) => (
            <CartItem
              key={index}
              product={item.product}
              handleMinus={() =>  handleQuantity("dec")}
              handlePlus={() => handleQuantity("inc")}
              handleRemove={() => handleQuantity("rem")}
              quantity={cart.quantity}
            />
          ))}
          <ListHarga textHarga="Subtotal" totalHarga="3000" />
          <ListHarga
            textHarga={locale === "id" ? "Pengiriman" : "Delivery"}
            totalHarga="free"
          />
          <ListHarga textHarga="Total" totalHarga="4000" />
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
      {/* )} */}
    </>
  );
};
export default CartList;
