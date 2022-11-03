import React from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";

const Forpas = styled.div`
    font-size: 13px;
    display: grid;
    margin: 75px 100px 40px 100px;
    
    @media (max-width: 725px) {
    margin: 30px auto;
  }
`;

const ForgotPassword = () => {
    return (
        <div className='forgot-password'>
         <h2>Forgot Password Page</h2>
         <h3>Reset your password</h3>
         <p>We will send you an email to reset your password</p>
        <Forpas>
         <TextField id="demo-helper-text-misaligned-no-helper" color="success" type="email" label="Email" />
        </Forpas>
        <button type="button">Submit</button>
        <button type="button" className="button2">Cancel</button>
        </div>
    );
};

export default ForgotPassword;