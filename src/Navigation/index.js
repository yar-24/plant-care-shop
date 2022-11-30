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
  NotResponding,
} from "../pages";
import Appbar from "../components/Appbar";
import Toast from "../components/kecil/Toast";
import ScrollToTop from "../components/ScrollToTop";
import {useSelector } from "react-redux";
import Footer from "../components/Footer";


const Navigation = (props) => {
  const {
    quantity,
    handleAddProduct,
    cartItems,
    handleRemoveProduct,
    handleDeleteProduct,
  } = props;
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <ScrollToTop />
      <header>
        <Appbar quantity={quantity} />
      </header>
      <Toast />
      <main>
        <Routes>
          <Route element={<Home addItem={handleAddProduct} />} path="/" />
          <Route element={<Register />} path="/register" />
          <Route element={<Login />} path="/login" />
          <Route element={<Services />} path="/services" />
          <Route
            element={<PlantCare addItem={handleAddProduct} />}
            path="/plant-care"
          />
          <Route element={<Shop addItem={handleAddProduct} />} path="/shop" />
          <Route
            element={<DetailProduct addItem={handleAddProduct} />}
            path="/detail-product/:id"
          />
          <Route element={<DetailServices />} path="/detail-services/:id" />
          <Route element={<ForgotPassword />} path="/forgot-password" />
          <Route element={<ResetPassword />} path="/reset-password" />
          <Route
            element={
              <Cart
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                handleDeleteProduct={handleDeleteProduct}
              />
            }
            path="/cart"
          />
          <Route element={user ? <HomeWrite /> : <Home />} path="/home-write" />
          <Route element={user ? <WriteServices /> : <Home />} path="/write" />
          <Route
            element={user ? <WriteServices /> : <Home />}
            path="/edit/:id"
          />
          <Route element={<NotResponding />} path="/*" />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Navigation;
