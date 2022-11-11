import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import { colors, fonts } from "../utils/";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const CardContainer = styled(Card)`
  /* max-width: 241px; */
  border-radius: 0;
  background-color: #cedfd9;
  width: max-content ;
`;
const CardActionsContainer = styled("div")`
  display: flex;
  padding: 0;
  margin: 0;
`;
const PlantTitleText = styled(Typography)`
  font-weight: 700;
  font-family: ${fonts.comfortaa};
  font-size: 18px;
`;
const PlantPriceText = styled(Typography)`
  font-weight: 400;
  font-family: ${fonts.inter};
  font-size: 14px;
`;
const ActionButton = styled(Button)`
  flex-basis: 50%;
  font-size: 12px;
  font-weight: 700;
  font-family: ${fonts.inter};
  border-radius: 0;
  text-transform: none;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.txcolor};
  &:hover {
    background-color: ${(props) => props.bgcolor};
    background-image: linear-gradient(rgb(0 0 0/30%) 0 0);
  }
`;
const CardItem = ({imgProduct, priceProduct, nameProduct, idProduct}) => {

  const navigate = useNavigate()

  const onDetailproduct = () => {
    navigate(`/detail-product/${idProduct}`)
  }

  return (
    <CardContainer>
      <CardMedia component="img" height="235" src={`https://res.cloudinary.com/eundangdotcom/image/upload/v1666578066/${imgProduct}`} alt="green iguana" />
      <CardContent>
        <PlantTitleText>{nameProduct}</PlantTitleText>
        <PlantPriceText mt={3}>From Rp{priceProduct}</PlantPriceText>
      </CardContent>
      <CardActionsContainer>
        <ActionButton bgcolor={colors.white} txcolor="#000" size="small">
          <FaShoppingCart />
        </ActionButton>
        <ActionButton bgcolor={colors.secondary} txcolor={colors.white} size="small" onClick={onDetailproduct}>
          See More
        </ActionButton>
      </CardActionsContainer>
    </CardContainer>
  );
};
export default CardItem;
