import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Shop,
  PlantCare,
  Services,
  Register,
  ForgotPassword,
  DetailProduct,
  Cart
} from "../pages";
import Header from "../components/Header";
import Appbar from "../components/Appbar";


const Navigation = () => {
  return (
    <>
        {/* <Header/> */}
        <Appbar/>
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Register/>} path="/register"/>
            <Route element={<Login/>} path="/login"/>
            <Route element={<Services/>} path="/services"/>
            <Route element={<PlantCare/>} path="/plant-care"/>
            <Route element={<Shop/>} path="/shop"/>
            <Route element={<DetailProduct/>} path="/detail-product"/>
            <Route element={<ForgotPassword/>} path="/forgot-password"/>
            <Route element={<Cart />} path="/cart" />
        </Routes>
    </>
  );
};

export default Navigation;