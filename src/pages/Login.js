import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { TextField } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { login } from "../redux/features/auth/authSlice";

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
  }
`;

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

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

    dispatch(login(userData))
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    })
  };


  return (
    <div className="input-login">
      <h2>Login Page</h2>
      <Log>
        <TextField
          id="email"
          color="success"
          type="email"
          label="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <TextField
          id="password"
          color="success"
          type="password"
          label="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </Log>
      <button type="button" onClick={onSubmit}>
        Login
      </button>
      <p>
        New customer?{" "}
        <Link to="/register" className="link">
          <strong>Create account</strong>
        </Link>
      </p>
      <p>
        <Link to="/forgot-password" className="link">
          <strong>Forgot your password</strong>
        </Link>
      </p>
    </div>
  );
};

export default Login;
