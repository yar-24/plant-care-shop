import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../utils";
import { RiDeleteBinLine } from "react-icons/ri";

const Container = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid ${colors.secondary};
  margin-top: 50px ;
`;

const Left = styled.div`
  width: 50%;
  display: flex;
`;

const Image = styled.img`
  width: 192px;
  height: 188px;
  margin: 20px 40px 20px 40px;
`;

const ContainerText = styled.div`
    margin-top: 30px ;
`;

const NamePlant = styled.h4`
  font-family: ${fonts.comfortaa};
`;

const HeightPlant = styled.p`
  font-family: ${fonts.inter};
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 50px;
`;

const ContainerJumlah = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
  padding: 2px;
  background-color: ${colors.grey};
`;
const CounterBtn = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  border: 2px solid black;
  background-color: transparent ;
  cursor: pointer;
`;
const Angka = styled.p`
    font-weight: bold ;
`;

const ContainerHarga = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between ;
  width: 70px ;
  margin-left: 50px;
`;

const Harga = styled.p`
    font-weight: bold ;
    font-size: 1.2rem ;

`;

const BtnDelete = styled(RiDeleteBinLine)`
cursor: pointer;
`

const CartItem = ({src, name, height, price}) => {
  return (
    <Container>
      <Left>
        <Image src={src} />
        <ContainerText>
          <NamePlant>{name}</NamePlant>
          <HeightPlant>{height}</HeightPlant>
        </ContainerText>
      </Left>
      <Right>
        <ContainerJumlah>
          <CounterBtn>-</CounterBtn>
          <Angka>1</Angka>
          <CounterBtn>+</CounterBtn>
        </ContainerJumlah>
        <ContainerHarga>
          <Harga>${price}</Harga>
          <BtnDelete size={20}  />
        </ContainerHarga>
      </Right>
    </Container>
  );
};

export default CartItem;
