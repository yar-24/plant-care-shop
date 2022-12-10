import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import Appbar from '../components/Appbar';
import Toast from '../components/kecil/Toast';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import('../pages/Login'));
const Shop = React.lazy(() => import('../pages/Shop'));
const PlantCare = React.lazy(() => import('../pages/PlantCare'));
const Services = React.lazy(() => import('../pages/Services'));
const Register = React.lazy(() => import('../pages/Register'));
const ForgotPassword = React.lazy(() => import('../pages/ForgotPassword'));
const DetailProduct = React.lazy(() => import('../pages/DetailProduct'));
const Cart = React.lazy(() => import('../pages/Cart'));
const ResetPassword = React.lazy(() => import('../pages/ResetPassword'));
const DetailServices = React.lazy(() => import('../pages/DetailServices'));
const WriteServices = React.lazy(() => import('../pages/WriteServices'));
const HomeWrite = React.lazy(() => import('../pages/HomeWrite'));
const NotResponding = React.lazy(() => import('../pages/NotResponding'));
const PageSearchBlog = React.lazy(() => import('../pages/PageSearchBlog'));

const Navigation = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <ScrollToTop />
      <header>
        <Appbar />
      </header>
      <Toast />
      <Box component="main" sx={{ pt: { xs: 7, md: 8 } }}>
        <Suspense fallback={<Box height="100vh" />}>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Register />} path="/register" />
            <Route element={<Login />} path="/login" />
            <Route element={<Services />} path="/services" />
            <Route element={<PlantCare />} path="/plant-care" />
            <Route element={<Shop />} path="/shop" />
            <Route element={<DetailProduct />} path="/product/detail/:id" />
            <Route element={<DetailServices />} path="/blog/detail/:id" />
            <Route element={<ForgotPassword />} path="/forgot-password" />
            <Route element={<ResetPassword />} path="/reset-password" />
            <Route element={<Cart />} path="/cart" />
            <Route
              element={user ? <HomeWrite /> : <Home />}
              path="/blog/dashboard"
            />
            <Route
              element={user ? <WriteServices /> : <Home />}
              path="/blog/write"
            />
            <Route
              element={user ? <WriteServices /> : <Home />}
              path="/blog/edit/:id"
            />
            <Route element={<PageSearchBlog />} path="/search" />
            <Route element={<NotResponding />} path="/*" />
          </Routes>
        </Suspense>
      </Box>
      <Footer />
    </>
  );
};

export default Navigation;
