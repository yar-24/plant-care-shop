import { Container, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
// import styled from "styled-components";
import ForgotPasswordInput from "../components/ForgotPasswordInput";
import LocaleContext from "../contexts/LocaleContext";
import { forgot } from "../redux/features/auth/authSlice";
import { axiosInstance } from "../utils";

// const Forpas = styled.div`
//   font-size: 13px;
//   display: grid;
//   margin: 75px 100px 40px 100px;

//   @media (max-width: 725px) {
//     margin: 30px auto;
//     padding-right: 50px;
//   }
// `;

const ForgotPassword = () => {
  const { locale } = React.useContext(LocaleContext);
  const dispatch = useDispatch();

  const onForgotPassword = ({email}) => {
    const userData = {
      email,
    };
    if (!email) {
      toast.warning("Please input email!!");
    } else {
      dispatch(forgot(userData))
      // axiosInstance
      //   .post("/users/forgot-password", userData)
      //   .then((res) => {
      //     const pesan = res.data.message;
      //     console.log(pesan)
      //     if (pesan === "Email tidak ditemukan") {
      //       toast.error(pesan);
      //     } else {
      //       toast.success(pesan);
      //     }
      //   })
      //   .catch((err) => {
      //     toast.error(err);
      //   });
    }
  };

  return (
    <Container fixed sx={{ my: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {locale === "id" ? "Halaman Lupa Kata Sandi" : "Forgot Password Page"}
      </Typography>
      <Typography variant="h5" component="h3" gutterBottom>
        {locale === "id" ? "Reset password anda" : "Reset your password"}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        {locale === "id"
          ? "Kami akan mengirimkan email untuk mengatur ulang kata sandi anda"
          : "We will send you an email to reset your password"}
      </Typography>
      <ForgotPasswordInput forgotPassword={onForgotPassword} />
    </Container>
    // <div className="forgot-password">
    // </div>
  );
};

export default ForgotPassword;
