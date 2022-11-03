import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors, fonts } from "../../utils";


const Btn = styled(Button)`
  background-color: ${colors.secondary};
  box-shadow: none;
  text-transform: none;
  padding: 10px 30px 10px 30px; 
  font-family: ${fonts.inter};
  &:hover {
    background-color: ${colors.secondary};
    background-image: linear-gradient(rgb(0 0 0/30%) 0 0);
    box-shadow: none;
  }
`;

const Tombol = ({ label, ...rest }) => {
  return (
    <Btn
      variant="contained" {...rest}
    >
      {label}
    </Btn>
  );
};

export default Tombol;
