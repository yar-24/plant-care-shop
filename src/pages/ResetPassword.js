import { Container, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import LoadingBtn from '../components/kecil/LoadingBtn';
import LocaleContext from '../contexts/LocaleContext';
import { axiosInstance, colors, fonts } from '../utils';

// const Forpas = styled.div`
//   font-size: 13px;
//   display: grid;
//   margin: 75px 100px 40px 100px;
//   grid-template-columns: 1fr;
//   grid-column-gap: 25px;
//   grid-row-gap: 20px;

//   @media (max-width: 725px) {
//     margin: 30px auto;
//     padding-right: 40px;
//     padding-left: 30px;
//   }
//   @media (max-width: 600px) {
//     margin: 30px auto;
//     padding-right: 5px;
//     padding-left: 0px;

//   }
// `;

const ResetPassword = () => {
  const { locale } = React.useContext(LocaleContext);

  const [formData, setFormData] = useState({
    password: '',
    password2: '',
  });

  const { password, password2 } = formData;

  const search = useLocation().search;
  const token = new URLSearchParams(search).get('token');

  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2 || password2 !== password) {
      toast.error('Password no same');
    } else {
      const userData = {
        password,
      };
      axiosInstance
        .post('users/reset-password?token=' + token, userData)
        .then((res) => {
          console.log(res);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your password has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/');
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  };

  return (
    <Container fixed maxWidth="md" disableGutters sx={{ my: 10 }}>
      <div className="forgot-password">
        <form onSubmit={onSubmit}>
          <Typography
            component="h2"
            fontFamily={fonts.comfortaa}
            fontSize={32}
            fontWeight="800">
            {locale === 'id'
              ? 'Halaman Atur Ulang Kata Sandi'
              : 'Reset Password Page'}
          </Typography>
          <h3>
            {locale === 'id'
              ? 'Masukkan kata sandi baru anda'
              : 'Enter your new password'}
          </h3>
          <Stack direction="column" gap={3} mt={6} mb={3}>
            <TextField
              fullWidth
              id="password"
              color="success"
              type="password"
              sx={{
                fieldset: { borderColor: colors.secondary, borderRadius: 0 },
              }}
              label={locale === 'id' ? 'Kata Sandi' : 'Password'}
              name="password"
              value={password}
              onChange={onChange}
            />
            <TextField
              fullWidth
              id="password2"
              color="success"
              type="password"
              sx={{
                fieldset: { borderColor: colors.secondary, borderRadius: 0 },
              }}
              label={locale === 'id' ? 'Kata Sandi 2' : 'Password 2'}
              name="password2"
              value={password2}
              onChange={onChange}
            />
          </Stack>
          <LoadingBtn
            size="medium"
            sx={{
              fontSize: '16px',
              px: 3,
              py: 2,
              alignSelf: 'center',
            }}
            loading={isLoading}>
            {locale === 'id' ? 'Kirim' : 'Submit'}{' '}
          </LoadingBtn>
        </form>
      </div>
    </Container>
  );
};

export default ResetPassword;
