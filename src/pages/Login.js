import { Container, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingBtn from '../components/kecil/LoadingBtn';
import LocaleContext from '../contexts/LocaleContext';
import { login, reset } from '../redux/features/auth/authSlice';
import { colors } from '../utils';

// const Log = styled.div`
//   font-size: 13px;
//   display: grid;
//   margin: 75px 100px 40px 100px;
//   grid-template-columns: 1fr;
//   grid-column-gap: 25px;
//   grid-row-gap: 20px;
//   width: 80;

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

const Login = () => {
  const { locale } = React.useContext(LocaleContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    if (!email || !password) {
      toast.warning('Input email or password');
    } else {
      dispatch(login(userData));
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error('Wrong email or password');
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <Container disableGutters fixed maxWidth="md" sx={{ my: 10 }}>
      <form className="input-login" onSubmit={onSubmit}>
        <h2>{locale === 'id' ? 'Halaman Masuk' : 'Login Page'}</h2>
        <Stack direction="column" gap={3} mt={6} mb={3}>
          <TextField
            id="email"
            color="primary"
            sx={{
              fieldset: { borderColor: colors.secondary, borderRadius: 0 },
            }}
            type="email"
            label={locale === 'id' ? 'Surel' : 'Email'}
            name="email"
            value={email}
            onChange={onChange}
          />
          <TextField
            id="password"
            color="primary"
            type="password"
            sx={{
              fieldset: { borderColor: colors.secondary, borderRadius: 0 },
            }}
            label={locale === 'id' ? 'Kata Sandi' : 'Password'}
            name="password"
            value={password}
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
          {locale === 'id' ? 'Masuk' : 'Login'}{' '}
        </LoadingBtn>
        <p>
          {locale === 'id' ? 'Kostumer baru?' : 'New customer?'}{' '}
          <Link to="/register" className="link">
            <strong>{locale === 'id' ? 'Buat Akun' : 'Create account'}</strong>
          </Link>
        </p>
        <p>
          <Link to="/forgot-password" className="link">
            <strong>
              {locale === 'id' ? 'Lupa Kata Sandi' : 'Forgot your password'}
            </strong>
          </Link>
        </p>
      </form>
    </Container>
  );
};

export default Login;
