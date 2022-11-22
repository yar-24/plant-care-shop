import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { login, reset } from "../redux/features/auth/authSlice";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";
import LoadingBtn from "../components/kecil/LoadingBtn";
import LocaleContext from "../contexts/LocaleContext";

const Log = styled.div`
  font-size: 13px;
  display: grid;
  margin: 75px 100px 40px 100px;
  grid-template-columns: 1fr;
  grid-column-gap: 25px;
  grid-row-gap: 20px;
  width: 80;

  @media (max-width: 725px) {
    margin: 30px auto;
    padding-right: 50px;
  }
`;

const Login = () => {
  const { locale } = React.useContext(LocaleContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      toast.warning("Input email or password");
    } else {
      dispatch(login(userData));
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error("Wrong email or password");
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <form className="input-login" onSubmit={onSubmit}>
      <h2>{locale === 'id' ? 'Halaman Masuk' : 'Login Page'}</h2>
      <Log>
        <TextField
          id="email"
          color="success"
          type="email"
          label={locale === 'id' ? 'Surel' : 'Email'}
          name="email"
          value={email}
          onChange={onChange}
        />
        <TextField
          id="password"
          color="success"
          type="password"
          label={locale === 'id' ? 'Kata Sandi' : 'Password'}
          name="password"
          value={password}
          onChange={onChange}
        />
      </Log>

      <LoadingBtn loading={isLoading}>{locale === 'id' ? 'Masuk' : 'Login'} </LoadingBtn>

      <p>
        {locale === 'id' ? 'Kostumer baru?' : 'New customer?'}{" "}
        <Link to="/register" className="link">
          <strong>{locale === 'id' ? 'Buat Akun' : 'Create account'}</strong>
        </Link>
      </p>
      <p>
        <Link to="/forgot-password" className="link">
          <strong>{locale === 'id' ? 'Lupa Kata Sandi' : 'Forgot your password'}</strong>
        </Link>
      </p>
    </form>
  );
};

export default Login;
