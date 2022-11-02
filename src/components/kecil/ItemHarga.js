import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../utils";

const ContainerHarga = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.secondary};
  font-family: ${fonts.inter};
`;
const Text = styled.h2``;
const Harga = styled.p`
  font-weight: 600;
  margin-right: 50px;
`;

const ItemHarga = ({title, harga}) => {
  return (
    <ContainerHarga>
      <Text>{title}</Text>
      <Harga>{harga}</Harga>
    </ContainerHarga>
  );
};

export default ItemHarga;
