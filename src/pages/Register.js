import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { register, reset } from "../redux/features/auth/authSlice";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import LoadingBtn from "../components/kecil/LoadingBtn";

const Regis = styled.div`
  font-size: 13px;
  display: grid;
  margin: 75px 100px 40px 100px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 75px;
  grid-row-gap: 20px;

  @media (max-width: 725px) {
    margin: 50px auto;
    padding-right: 50px;
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
  const navigate = useNavigate();

  const { firstname, lastname, email, password } = formData;
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

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

    if(!firstname || !lastname || !email|| !password){
      toast.warning("Please add all fields")
    } else {
      dispatch(register(userData))
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error("Email already exists");
    }

    if (isSuccess || user) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Berhasil!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <div className="input-register">
      <form onSubmit={onSubmit}>
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
        <LoadingBtn label="Create" loading={isLoading} />
      </form>
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
