import { Skeleton } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useNavigate } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import {useDispatch, useSelector} from 'react-redux'
import {addToCart} from '../redux/reducer/cartRedux'
import {
  colors,
  fonts,
  getItemById,
  getText,
  rupiah,
  truncate,
} from '../utils/';

const CardContainer = styled(Card)`
  border-radius: 0;
  background-color: #cedfd9;
`;
const CardImage = styled(LazyLoadImage)`
  object-fit: cover;
  object-position: center;
`;
const CardActionsContainer = styled('div')`
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

const CardItem = ({ product }) => {
  const { _id, idImageProduct, price, namePlant } = product;
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart.cart);

  const handleAddToCart = () => {
    dispatch(addToCart({ item: { ...product, count }}))
    setCount(1)
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  const isItemInCart = getItemById(cart, _id);

  const { locale } = React.useContext(LocaleContext);

return (
    <CardContainer>
      <CardImage
        height="235"
        width="100%"
        placeholder={
          <Skeleton variant="rectangular" animation="wave" height={'235px'} />
        }
        src={`https://res.cloudinary.com/eundangdotcom/image/upload/v1666578066/${idImageProduct}`}
        alt={namePlant}
      />
      <CardContent>
        <PlantTitleText>{getText(truncate(namePlant, 17))}</PlantTitleText>
        <PlantPriceText mt={2}>
          {locale === 'id' ? 'Dari' : 'From'} {rupiah(price)}
        </PlantPriceText>
      </CardContent>
      <CardActionsContainer>
        <ActionButton
          bgcolor={colors.white}
          txcolor="#000"
          size="large"
          onClick={isItemInCart ? handleGoToCart : handleAddToCart}>
          <FaShoppingCart />
        </ActionButton>
        <ActionButton
          component={Link}
          to={`/product/detail/${_id}`}
          bgcolor={colors.secondary}
          txcolor={colors.white}
          size="large">
          {locale === 'id' ? 'Lihat Detail' : 'See More'}
        </ActionButton>
      </CardActionsContainer>
    </CardContainer>
  );
};
export default CardItem;
