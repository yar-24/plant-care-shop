import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors, fonts } from "../utils";

const Custom = styled(Button)`
  background-color: ${colors.secondary};
  text-transform: none;
  font-weight: 600;
  font-family: ${fonts.inter};
  &:hover {
    background-color: ${colors.secondary};
    background-image: linear-gradient(rgb(0 0 0/30%) 0 0);
  }
`;

const CustomButton = ({ children, ...rest }) => {
  return (
    <Custom variant="contained" disableElevation {...rest}>
      {children}
    </Custom>
  );
};

export default CustomButton;
