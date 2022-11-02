import React from "react";
import styled from "styled-components";
import { fonts } from "../utils";
import { Cart1, Cart2, Cart3 } from "../images/img";
import CartItem from "./CartItem";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ItemHarga from "./kecil/ItemHarga";

const Container = styled.div`
  margin-top: 50px;
`;
const Title = styled.h2`
  font-family: ${fonts.comfortaa};
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0px 50px 0px;

`;

const CartList = () => {
  return (
    <Container>
      <Title>Your bag</Title>
      <CartItem src={Cart1} name="Book The Inspired House Plant" />
      <CartItem src={Cart2} name="Cactus" height="40-50 cm" />
      <CartItem src={Cart3} name="Snake plant" height="70-80 cm" />
      <ItemHarga title="Subtitle" harga="$150"/>
      <ItemHarga title="Delivey" harga="Free"/>
      <ItemHarga title="Total" harga="$150"/>
      <ContainerBtn>
        <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          style={{
            backgroundColor: "#009E72",
            width:"40%",
            padding: "10px 0px 10px 0px",
            fontWeight: "bold"
          }}
        >
          Place Order
        </Button>
      </ContainerBtn>
    </Container>
  );
};

export default CartList;
