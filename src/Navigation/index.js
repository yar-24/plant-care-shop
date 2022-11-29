import React, { useState } from "react";
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
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

const Navigation = () => {
  const [cartItems, setCartItems] = useState([]);

  const { user } = useSelector((state) => state.auth);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleDeleteProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(cartItems.map((item) => item.id !== product.id));
    }
  };

  return (
    <>
      <ScrollToTop />
      <header>
        <Appbar quantity={cartItems.length} />
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
