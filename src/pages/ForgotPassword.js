import { Container, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
// import styled from "styled-components";
import ForgotPasswordInput from '../components/ForgotPasswordInput';
import LocaleContext from '../contexts/LocaleContext';
import { forgot } from '../redux/features/auth/authSlice';

const ForgotPassword = () => {
  const { locale } = React.useContext(LocaleContext);
  const dispatch = useDispatch();

  const onForgotPassword = ({ email }) => {
    const userData = {
      email,
    };
    if (!email) {
      toast.warning('Please input email!!');
    } else {
      dispatch(forgot(userData));
    }
  };

  return (
    <Container maxWidth="md" sx={{ my: { xs: 4, sm: 6, md: 8 } }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {locale === 'id' ? 'Halaman Lupa Kata Sandi' : 'Forgot Password Page'}
      </Typography>
      <Typography variant="h5" component="h3" gutterBottom>
        {locale === 'id' ? 'Reset password anda' : 'Reset your password'}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        {locale === 'id'
          ? 'Kami akan mengirimkan email untuk mengatur ulang kata sandi anda'
          : 'We will send you an email to reset your password'}
      </Typography>
      <ForgotPasswordInput forgotPassword={onForgotPassword} />
    </Container>
  );
};

export default ForgotPassword;
