import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { TextField } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { register } from "../redux/features/auth/authSlice";

const Regis = styled.div`
  font-size: 13px;
  display: grid;
  margin: 75px 100px 40px 100px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 25px;
  grid-row-gap: 20px;

  @media (max-width: 725px) {
    margin: 30px auto;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { firstname, lastname, email, password } = formData;

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

    dispatch(register(userData))
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    })
  };

  return (
    <div className="input-register">
      <h2>Register Page</h2>
      <h3>Create Account</h3>
      <Regis>
        <TextField
          id="firstname"
          color="success"
          type="text"
          label="First Name"
          name="firstname"
          value={firstname}
          onChange={onChange}
        />
        <TextField
          id="lastname"
          color="success"
          type="text"
          label="Last Name"
          name="lastname"
          value={lastname}
          onChange={onChange}
        />
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
      </Regis>
      <button type="button" onClick={onSubmit}>Create</button>
      <p>
        Returning customer?{" "}
        <Link to="/login" className="link">
          <strong>Sign in</strong>
        </Link>
      </p>
    </div>
  );
};

export default Register;
