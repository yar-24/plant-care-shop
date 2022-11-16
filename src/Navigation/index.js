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
  Cart,
  ResetPassword,
  DetailServices,
  WriteServices
} from "../pages";
import Appbar from "../components/Appbar";
import Toast from "../components/kecil/Toast";


const Navigation = () => {
  return (
    <>
        <Appbar/>
        <Toast/>
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Register/>} path="/register"/>
            <Route element={<Login/>} path="/login"/>
            <Route element={<Services/>} path="/services"/>
            <Route element={<PlantCare/>} path="/plant-care"/>
            <Route element={<Shop/>} path="/shop"/>
            <Route element={<DetailProduct/>} path="/detail-product/:id"/>
            <Route element={<DetailServices/>} path="/detail-services"/>
            <Route element={<ForgotPassword/>} path="/forgot-password"/>
            <Route element={<ResetPassword />} path="/reset-password" />
            <Route element={<Cart />} path="/cart" />
            <Route element={<WriteServices/>} path="/write-service" />
        </Routes>
    </>
  );
};

export default Navigation;