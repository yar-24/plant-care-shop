import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import { colors, fonts } from "../utils/";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocaleContext from "../contexts/LocaleContext";
import { Link } from "react-router-dom";

const CardContainer = styled(Card)`
  border-radius: 0;
  background-color: #cedfd9;
  /* width: auto; */
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
const CardItem = ({imgProduct, priceProduct, nameProduct, idProduct, onAddCart}) => {
  const { locale } = React.useContext(LocaleContext);
 
  return (
    <CardContainer sx={{mx:2, mt: 4}}>
      <CardMedia component="img" height="235" src={`https://res.cloudinary.com/eundangdotcom/image/upload/v1666578066/${imgProduct}`} alt="green iguana" />
      <CardContent>
        <PlantTitleText>{nameProduct}</PlantTitleText>
        <PlantPriceText mt={2}>{locale === 'id' ? 'Dari' : 'From'} Rp.{priceProduct}</PlantPriceText>
      </CardContent>
      <CardActionsContainer>
        <ActionButton bgcolor={colors.white} txcolor="#000" size="large">
          <FaShoppingCart onClick={onAddCart}/>
        </ActionButton>
        <ActionButton component={Link} to={`/detail-product/${idProduct}`} bgcolor={colors.secondary} txcolor={colors.white} size="large" >
        {locale === 'id' ? 'Lihat Lainya' : 'See More'}
        </ActionButton>
      </CardActionsContainer>
    </CardContainer>
  );
};
export default CardItem;
