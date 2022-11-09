import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    return (
        <div className='forgot-password'>
            <form>
                <h2>Forgot Password Page</h2>
                <h3>Reset your password</h3>
                <p>We will send you an email to reset your password</p>
                <Forpas>
                    <input id="demo-helper-text-misaligned-no-helper" color="success" type="newPassword" label="New-Password" placeholder="New Password" style={{ marginBottom: '20px' }}/>
                    <input id="demo-helper-text-misaligned-no-helper" color="success" type="confirmPassword" label="Confirm-Password" placeholder="Confirm Password" />
                </Forpas>
                <button type="button">Submit</button>
                <button type="button" className="button2">
                <Link to="/forgot-password" style={{ color: '#009e72' }}>
                    Cancel
                </Link>
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;