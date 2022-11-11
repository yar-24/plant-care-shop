/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Footer from '../components/Footer';
import BannerFreeOngkir from "../components/BannerFreeOngkir";
import CardList from "../components/CardList";
import { Photo, Photo1, Photo2, Photo3, Photo4 } from "../images/img";
import ProductDetail from '../components/ProductDetail';

const DetailProduct = () => {
  return (
    <>
    <div className='detail-product'>
        <div className='photos'>
          <img src={Photo}/>
          <img src={Photo1}/>
          <img src={Photo2}/>
          <img src={Photo3}/>
          <img src={Photo4}/>
        </div>
    </div>

    <ProductDetail/>
    <BannerFreeOngkir/>
    <CardList>You Might Like</CardList>

    <Footer/>
    </>
  )
}

export default DetailProduct

