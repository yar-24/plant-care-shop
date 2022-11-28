import React from "react";
import { useSelector } from "react-redux";
import CartList from "../components/CartList";
import { styled } from "@mui/material/styles";
import { Typography, Container, Box } from "@mui/material";
import { fonts } from "../utils";
import LocaleContext from "../contexts/LocaleContext";

const CartListContainer = styled(Container)`
  margin-top: 60px;
`;

const Cart = ({ handleAddProduct, handleRemoveProduct, handleDeleteProduct, cartItems }) => {
  const { user } = useSelector((state) => state.auth);
  const { locale } = React.useContext(LocaleContext);

  return (
    <>
      {user ? (
        <CartList
          locale={locale}
          user={user}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleDeleteProduct={handleDeleteProduct}
          cartItems={cartItems}
        />
      ) : (
        <CartListContainer>
          <Box pb={10}>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontFamily: fonts.comfortaa }}
            >
              {locale === "id"
                ? "Silahkan login terlebih dahulu"
                : "Please login first"}
            </Typography>
          </Box>
        </CartListContainer>
      )}
    </>
  );
};

export default Cart;
