import React from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    return (
        <div className='input-login'>
         <h2>Login Page</h2>
        <Log>
         <TextField id="demo-helper-text-misaligned-no-helper" color="success" type="email" label="Email" />
         <TextField id="demo-helper-text-misaligned-no-helper" color="success" type="password" label="Password" />
        </Log>
        <button type="button">Login</button>
        <p>New customer? <Link to="/register" className="link"><strong>Create account</strong></Link></p>
        <p><Link to="/forgot-password" className="link"><strong>Forgot your password</strong></Link></p>
        </div>
    );
};

export default Login;