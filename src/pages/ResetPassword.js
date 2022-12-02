import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { axiosInstance } from "../utils";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { TextField } from "@mui/material";
import LoadingBtn from "../components/kecil/LoadingBtn";
import LocaleContext from "../contexts/LocaleContext";

const Forpas = styled.div`
  font-size: 13px;
  display: grid;
  margin: 75px 100px 40px 100px;
  grid-template-columns: 1fr;
  grid-column-gap: 25px;
  grid-row-gap: 20px;

  @media (max-width: 725px) {
    margin: 30px auto;
    padding-right: 50px;
  }
`;

const ResetPassword = () => {
  const { locale } = React.useContext(LocaleContext);

  const [formData, setFormData] = useState({
    password: "",
    password2: "",
  });

  const { password, password2 } = formData;

  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");

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
      toast.error("Password no same");
    } else {
      const userData = {
        password,
      };
      axiosInstance
        .post("users/reset-password?token=" + token, userData)
        .then((res) => {
          console.log(res)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your password has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  };

  return (
    <div className="forgot-password">
      <form onSubmit={onSubmit} >
        <h2>{locale === 'id' ? 'Halaman Atur Ulang Kata Sandi' : 'Reset Password Page'}</h2>
        <h3>{locale === 'id' ? 'Masukkan kata sandi baru anda' : 'Enter your new password'}</h3>
        <Forpas>
          <TextField
            id="password"
            color="success"
            type="password"
            label={locale === 'id' ? 'Kata Sandi' : "Password"}
            name="password"
            value={password}
            onChange={onChange}
          />
         <TextField
            id="password2"
            color="success"
            type="password"
            label={locale === 'id' ? 'Kata Sandi 2' : "Password 2"}
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </Forpas>
        <LoadingBtn loading={isLoading}>{locale === 'id' ? 'Kirim' : "Submit"}</LoadingBtn>
      </form>
    </div>
  );
};

export default ResetPassword;
