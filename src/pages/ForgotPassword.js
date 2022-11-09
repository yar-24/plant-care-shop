import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { axiosInstance } from "../utils";

const Forpas = styled.div`
  font-size: 13px;
  display: grid;
  margin: 75px 100px 40px 100px;

  @media (max-width: 725px) {
    margin: 30px auto;
    padding-right: 50px;
  }
`;

const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        email: "",
      });

      const { email } = formData;

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
        };
    
        if (!email) {
            toast.warning("Please input email!!")
        } else {
          axiosInstance.post("/users/forgotPassword", userData)
            .then((res) => {
              const pesan = res.data.message;
              if (pesan === "Email tidak ditemukan") {
                toast.error(pesan);
              } else {
                toast.success(pesan);
              }
            })
            .catch((err) => {
              console.log("err");
            });
        }
      };

  return (
    <div className="forgot-password">
      <form onSubmit={onSubmit}>
        <h2>Forgot Password Page</h2>
        <h3>Reset your password</h3>
        <p>We will send you an email to reset your password</p>
        <Forpas>
          <TextField
            id="email"
            color="success"
            type="email"
            label="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </Forpas>
        <button type="submit">Submit</button>
        <Link to={"/"} className="button2">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
