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
  WriteServices,
  HomeWrite,
} from "../pages";
import Appbar from "../components/Appbar";
import Toast from "../components/kecil/Toast";
import ScrollToTop from "../components/ScrollToTop";
import { useSelector } from "react-redux";
import {useCart } from "react-use-cart";


const Navigation = () => {

  const { addItem,totalUniqueItems } = useCart();

  const { user} = useSelector((state) => state.auth);
  return (
    <>
        <ScrollToTop/>
        <Appbar totalUniqueItems={totalUniqueItems}/>
        <Toast/>
        <Routes>
            <Route element={<Home addItem={addItem} />} path="/"/>
            <Route element={<Register/>} path="/register"/>
            <Route element={<Login/>} path="/login"/>
            <Route element={<Services/>} path="/services"/>
            <Route element={<PlantCare/>} path="/plant-care"/>
            <Route element={<Shop addItem={addItem}/>} path="/shop"/>
            <Route element={<DetailProduct/>} path="/detail-product/:id"/>
            <Route element={<DetailServices/>} path="/detail-services/:id"/>
            <Route element={<ForgotPassword/>} path="/forgot-password"/>
            <Route element={<ResetPassword />} path="/reset-password" />
            <Route element={<Cart />} path="/cart" />
            <Route element={user? <HomeWrite/> : <Home/>} path="/home-write" />
            <Route element={user? <WriteServices/> : <Home/>} path="/write" />
            <Route element={user? <WriteServices/> : <Home/>} path="/edit/:id" />
        </Routes>
    </>
  );
};

export default Navigation;