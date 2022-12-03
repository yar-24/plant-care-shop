import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
  PageSearchBlog,
} from '../pages';
import Appbar from '../components/Appbar';
import Toast from '../components/kecil/Toast';
import ScrollToTop from '../components/ScrollToTop';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

const Navigation = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <ScrollToTop />
      <header>
        <Appbar />
      </header>
      <Toast />
      <Box component="main" sx={{ pt: 8 }}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Register />} path="/register" />
          <Route element={<Login />} path="/login" />
          <Route element={<Services />} path="/services" />
          <Route element={<PlantCare />} path="/plant-care" />
          <Route element={<Shop />} path="/shop" />
          <Route element={<DetailProduct />} path="/detail-product/:id" />
          <Route element={<DetailServices />} path="/blog/detail/:id" />
          <Route element={<ForgotPassword />} path="/forgot-password" />
          <Route element={<ResetPassword />} path="/reset-password" />
          <Route element={<Cart />} path="/cart" />
          <Route element={user ? <HomeWrite /> : <Home />} path="/home-write" />
          <Route element={user ? <WriteServices /> : <Home />} path="/write" />
          <Route
            element={user ? <WriteServices /> : <Home />}
            path="/edit/:id"
          />
          <Route element={<PageSearchBlog />} path="/search" />
          <Route element={<NotResponding />} path="/*" />
        </Routes>
      </Box>
      <Footer />
    </>
  );
};

export default Navigation;
