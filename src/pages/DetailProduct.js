/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import BannerFreeOngkir from "../components/BannerFreeOngkir";
import CardList from "../components/CardList";
import ProductDetail from '../components/ProductDetail';
import LocaleContext from "../contexts/LocaleContext";
import ProductInformation from '../components/ProductInformation';
import { getProduct } from '../redux/features/products/productSlice';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailProduct = () => {
  const { locale } = React.useContext(LocaleContext);
  const [product, setProduct] = useState({});
  const {id} = useParams();
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id))
    .then((res) => {
      const data = res.payload.product;
      setProduct(data);
    })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: err
        })
      });
  }, [id, dispatch]);

  return (
    <>
    <ProductInformation product={product} />
    <div className='detail-product'>
        <div className='photos'>
          {Array.isArray(product.images)
            ? product.images.map((item)=>(
            <img src={item.url} key={item.image_id} alt=''/>
          ))
          : null}
        </div>
    </div>

    <ProductDetail/>
    <BannerFreeOngkir/>
    <CardList>{locale === 'id' ? 'Mungkin Anda Sukai' : 'You Might Like'}</CardList>

    <Footer/>
    </>
  )
}

export default DetailProduct

