import { Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import LoadingBtn from '../components/kecil/LoadingBtn';
import LocaleContext from '../contexts/LocaleContext';
import { register, reset } from '../redux/features/auth/authSlice';
import { colors } from '../utils';

const Register = () => {
  const { locale } = React.useContext(LocaleContext);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { firstname, lastname, email, password } = formData;
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      firstname,
      lastname,
      email,
      password,
    };

    if (!firstname || !lastname || !email || !password) {
      toast.warning('Please add all fields');
    } else {
      dispatch(register(userData));
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error('Email already exists');
    }

    if (isSuccess || user) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Berhasil!',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <Container fixed maxWidth="md" sx={{ my: 9 }}>
      <div className="input-register">
        <form onSubmit={onSubmit}>
          <h2>{locale === 'id' ? 'Halaman Daftar' : 'Register Page'}</h2>
          <Typography component="h3" fontSize={20} mb={3}>
            {locale === 'id' ? 'Buat Akun' : 'Create Account'}
          </Typography>
          <Grid
            my={4}
            container
            rowSpacing={{ xs: 2, sm: 3, md: 2, lg: 3 }}
            columnSpacing={{ xs: 0, sm: 1, md: 2 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="firstname"
                color="success"
                type="text"
                sx={{
                  fieldset: { borderColor: colors.secondary, borderRadius: 0 },
                }}
                label={locale === 'id' ? 'Nama Awal' : 'First Name'}
                name="firstname"
                value={firstname}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastname"
                color="success"
                type="text"
                sx={{
                  fieldset: { borderColor: colors.secondary, borderRadius: 0 },
                }}
                label={locale === 'id' ? 'Nama Terakhir' : 'Last Name'}
                name="lastname"
                value={lastname}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="email"
                color="success"
                type="email"
                sx={{
                  fieldset: { borderColor: colors.secondary, borderRadius: 0 },
                }}
                label={locale === 'id' ? 'Surel' : 'Email'}
                name="email"
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
            </Grid>
          </Grid>
          <LoadingBtn
            size="medium"
            sx={{
              fontSize: '16px',
              px: 3,
              py: 2,
              alignSelf: 'center',
            }}
            loading={isLoading}>
            {locale === 'id' ? 'Buat Akun' : 'Create'}
          </LoadingBtn>
        </form>
        <p>
          {locale === 'id' ? 'Pelanggan kembali?' : 'Returning customer?'}{' '}
          <Link to="/login" className="link">
            <strong>{locale === 'id' ? 'Masuk' : 'Sign in'}</strong>
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Register;
