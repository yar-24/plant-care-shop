import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import ForgotPasswordInput from '../components/ForgotPasswordInput';
import LocaleContext from '../contexts/LocaleContext';
import { forgot } from '../redux/features/auth/authSlice';

const Forpas = styled.div`
  font-size: 13px;
  display: grid;
  margin: 75px 100px 40px 100px;
  grid-template-columns: 1fr;
  grid-column-gap: 25px;
  grid-row-gap: 20px;

  @media (max-width: 725px) {
    margin: 50px auto;
    padding-right: 40px;
    padding-left: 30px;
  }
  @media (max-width: 600px) {
    margin: 50px auto;
    padding-right: 25px;
    padding-left: 25px;
  }
`;

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { locale } = React.useContext(LocaleContext);
  const dispatch = useDispatch();

  const onForgotPassword = ({ email }) => {
    const userData = {
      email,
    };
    if (!email) {
      toast.warning('Please input email!!');
    } else {
      dispatch(forgot(userData))
        .then((res) => {
          const pesan = res.payload.data.message;
          if (pesan === 'Email tidak ditemukan') {
            toast.error(pesan);
          } else {
            toast.success(pesan);
            setIsLoading(true);
          }
        })
        .catch((err) => {
          console.log('err');
        });
    }
  };

  return (
    // <Forpas className="reset-password">
    <Container maxWidth="md" fixed sx={{ pt: 10 }}>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{ fontFamily: 'Comfortaa', fontWeight: '800' }}>
        {locale === 'id' ? 'Halaman Lupa Kata Sandi' : 'Forgot Password Page'}
      </Typography>
      <Typography
        variant="h5"
        component="h3"
        gutterBottom
        style={{ fontFamily: 'Inter', fontWeight: '500' }}>
        {locale === 'id' ? 'Reset password anda' : 'Reset your password'}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        {locale === 'id'
          ? 'Kami akan mengirimkan email untuk mengatur ulang kata sandi anda'
          : 'We will send you an email to reset your password'}
      </Typography>
      <ForgotPasswordInput
        isLoading={isLoading}
        forgotPassword={onForgotPassword}
      />
    </Container>
    // </Forpas>
  );
};

export default ForgotPassword;
