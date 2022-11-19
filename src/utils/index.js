import axios from "axios"
import { css } from "styled-components";

export  const colors = {
    primary: "linear-gradient(97.44deg, rgba(0, 158, 114, 0.2) 4.51%, rgba(196, 255, 216, 0.15) 97.54%)",
    secondary: "#009E72",
    hijau: "rgba(0, 158, 114, 0.43)",
    white: "#ffff",
    grey: "#C6C4C5"
}

export const fonts = {
    comfortaa : "'Comfortaa', cursive",
    inter : "'Inter', sans-serif"
}


export const mobile = (props) => {
    return css`
      @media only screen and (max-width: 960px) {
        ${props}
      }
    `;
}

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 1320px) {
      ${props}
    }
  `
}

export const getText = (html) =>{
  const doc = new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent
}

export const axiosInstance = axios.create({
    baseURL : "https://plant-care-shop-api.herokuapp.com/v2"
    // baseURL : "http://localhost:5000/v2"
})