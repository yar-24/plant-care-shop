import { Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import LoadingBtn from "../components/kecil/LoadingBtn";
import LocaleContext from "../contexts/LocaleContext";
import { colors } from "../utils";

const ForgotPassword = ({ forgotPassword }) => {
  const { locale } = React.useContext(LocaleContext);
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;
  const { isLoading } = useSelector((state) => state.auth);

  const onEmailChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onForgotPasswordHandler = (event) => {
    event.preventDefault();
    forgotPassword({
      email: email,
    });
  };

  return (
    <form onSubmit={onForgotPasswordHandler}>
      <TextField
        fullWidth
        sx={{ my: 2 }}
        id="email"
        color="success"
        type="email"
        label={locale === "id" ? "Surel" : "Email"}
        name="email"
        value={email}
        onChange={onEmailChange}
      />
      <Stack direction="row" my={1} spacing={2}>
        <LoadingBtn
          size="large"
          sx={{
            color: colors.white,
            px: 3,
            py: 2,
            alignSelf: "center",
          }}
          loading={isLoading}>
          {locale === "id" ? "Kirim" : "Submit"}
        </LoadingBtn>
        <CustomButton
          component={Link}
          size="large"
          sx={{
            backgroundColor: colors.white,
            color: colors.secondary,
            alignSelf: "center",
            px: 3,
            py: 2,
          }}
          to="/login">
          {locale === "id" ? "Batal" : "Cancel"}
        </CustomButton>
      </Stack>
      {/* <Link className="button2" to="/login">
          {locale === 'id' ? 'Batal' : 'Cancel'}
        </Link> */}
    </form>
  );
};

export default ForgotPassword;