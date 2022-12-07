import axios from 'axios';
import { css } from 'styled-components';

export const colors = {
  primary:
    'linear-gradient(97.44deg, rgba(0, 158, 114, 0.2) 4.51%, rgba(196, 255, 216, 0.15) 97.54%)',
  secondary: '#009E72',
  hijau: 'rgba(0, 158, 114, 0.43)',
  white: '#ffff',
  grey: '#C6C4C5',
};

export const fonts = {
  comfortaa: "'Comfortaa', cursive",
  inter: "'Inter', sans-serif",
};

export const rupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(number);
};

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 960px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 1320px) {
      ${props}
    }
  `;
};

export const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent;
};

export const truncate = (string, length, delimiter) => {
  delimiter = delimiter || '&hellip;';
  return string.length > length ? string.substr(0, length) + delimiter : string;
};

export const axiosInstance = axios.create({
  baseURL: 'https://friendly-red-frock.cyclic.app//v2',
  // baseURL : "http://localhost:5000/v2"
});


export const getItemById = (products, itemId)  => products.some(product => product._id === itemId);

export const getProductsByPriceSort = (products, type) => {
  const priceSortedProducts = [...products].sort((product1, product2) => type==="lth" ? product1.price - product2.price : type==="htl" ? product2.price - product1.price: products );

  return priceSortedProducts
}

export const getProductsByPlantTipe = (products, plantTipes) => products.filter(product => plantTipes.length > 0 ? plantTipes.includes(product.plantTipe) : products);

export const getProductsByEnv = (products, plantEnvironments) => products.filter(product => plantEnvironments.length > 0 ? plantEnvironments.includes(product.plantEnvironment) : products); 

export const getProductsByPlantHeight = (products, plantSizes) => products.filter(product => plantSizes.length > 0 ? plantSizes.includes(product.plantSize) : products); 

export const getProductsByBenefit = (products, benefits) => products.filter(product => benefits.length > 0 ? benefits.includes(product.plantBenefit) : products); 

export const getProductsByProductTipe = (products, productTipes) => products.filter(product => productTipes.length > 0 ? productTipes.includes(product.productTipe) : products); 

export const getProductsBySale = (products, sales) => products.filter(product => sales.length > 0 ? sales.includes(product.sale) : products); 