import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors, fonts } from "../utils";

const Custom = styled(Button)`
  background-color: ${colors.secondary};
  box-shadow: none;
  text-transform: none;
  margin: 16px 0;
  padding: 16px 32px;
  font-weight: 600;
  font-family: ${fonts.inter};
  &:hover {
    background-color: ${colors.secondary};
    background-image: linear-gradient(rgb(0 0 0/30%) 0 0);
    box-shadow: none;
  }
`;

const CustomButton = ({ children, ...rest }) => {
  return (
    <Custom variant="contained" {...rest}>
      {children}
    </Custom>
  );
};

export default CustomButton;
