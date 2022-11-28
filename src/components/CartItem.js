import React from "react";
import styled from "styled-components";
import { colors, fonts, rupiah } from "../utils";
import { RiDeleteBinLine } from "react-icons/ri";

const Container = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid ${colors.secondary};
  margin-top: 50px ;

  @media (max-width: 600px) {
    margin-top: 30px ;
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column ;
  }
`;

const Image = styled.img`
  width: 192px;
  height: 188px;
  margin: 20px 40px 20px 40px;
  object-fit: cover ;

  @media (max-width: 1000px) {
    width: 152px;
    height: 148px;
  }

  @media (max-width: 600px) {
    width: 102px;
    height: 98px;
    margin: 10px 20px 10px 20px;

  }
`;

const ContainerText = styled.div`
    margin-top: 30px ;
   @media (max-width: 600px) {
   margin: 10px 0px 10px 20px;
  }
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
  padding-right: 50px;
  @media (max-width: 600px) {
    flex-direction: column ;
    justify-content: center ;
    align-items: center;
    padding-right: 20px ;
  }
`;

const ContainerJumlah = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100px;
  height: 50px ;
  background-color: ${colors.grey};
  @media (max-width: 600px) {
    width: 80px;
    height: 40px ;
  }
`;
const CounterBtn = styled.button`
  display: flex ;
  justify-content: center ;
  align-items: center ;
  width: 30px;
  height: 30px;
  font-size: 20px;
  border: 2px solid black;
  background-color: transparent ;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 20px ;
    height: 20px ;
  }
`;
const Angka = styled.p`
    font-weight: bold ;
`;

const ContainerHarga = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between ;
  width: max-content ;
  margin-left: 50px;
  @media (max-width: 725px) {
  margin-left: 20px;
  }
  @media (max-width: 550px) {
  margin-left: 15px;
  margin-top:20px ;
  }
`;

const Harga = styled.p`
    font-weight: bold ;
    font-size: 1.2rem ;
    margin-right: 20px ;
`;

const BtnDelete = styled(RiDeleteBinLine)`
cursor: pointer;
`

const CartItem = ({product, handleAdd, handleRemove, handleDelete }) => {

  const {idImageProduct, namePlant, height, price, quantity} = product
    

  return (
    <Container>
      <Left>
        <Image src={`https://res.cloudinary.com/eundangdotcom/image/upload/v1666578066/${idImageProduct}`} />
        <ContainerText>
          <NamePlant>{namePlant}</NamePlant>
          <HeightPlant>{height}</HeightPlant>
        </ContainerText>
      </Left>
      <Right>
        <ContainerJumlah>
          <CounterBtn onClick={handleRemove}>-</CounterBtn>
          <Angka>{quantity}</Angka>
          <CounterBtn onClick={handleAdd}>+</CounterBtn>
        </ContainerJumlah>
        <ContainerHarga>
          <Harga>{rupiah(price)}</Harga>
          <BtnDelete onClick={handleDelete} size={20}  />
        </ContainerHarga>
      </Right>
    </Container>
  );
};

export default CartItem;
