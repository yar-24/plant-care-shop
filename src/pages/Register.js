import React from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Regis = styled.div`
    font-size: 13px;
    display: grid;
    margin: 75px 100px 40px 100px;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 25px;
    grid-row-gap: 20px;
`;

const Register = () => {
    return (
        <div className='input-register'>
         <h2>Register Page</h2>
         <h3>Create Account</h3>
        <Regis>
         <TextField id="demo-helper-text-misaligned-no-helper" color="success" type="text" label="First Name" />
         <TextField id="demo-helper-text-misaligned-no-helper" color="success" type="text" label="Last Name" />
         <TextField id="demo-helper-text-misaligned-no-helper" color="success" type="email" label="Email" />
         <TextField id="demo-helper-text-misaligned-no-helper" color="success" type="password" label="Password" />
        </Regis>
        <button type="button">Create</button>
        <p>Returning customer? <Link to="/login" className="link"><strong>Sign in</strong></Link></p>
        </div>
    );
};

export default Register;