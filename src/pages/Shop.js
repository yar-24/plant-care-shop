/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Photo, Photo1, Photo2, Photo3, Photo4 } from "../images/img";


const Shop = () => {
  return (
    <div className='shop'>
        <div className='photos'>
          <img src={Photo}/>
          <img src={Photo1}/>
          <img src={Photo2}/>
          <img src={Photo3}/>
          <img src={Photo4}/>

        </div>
    </div>
  )
}

export default Shop