import React from 'react'
import { LoadingButton } from "@mui/lab";
import { colors, fonts } from '../../utils';
import { styled } from "@mui/material/styles";

const Custom = styled(LoadingButton)`
  background-color: ${colors.secondary};
  text-transform: none;
  font-weight: 600;
  font-family: ${fonts.inter};
  &:hover {
    background-color: ${colors.secondary};
    background-image: linear-gradient(rgb(0 0 0/30%) 0 0);
  }
`;

const LoadingBtn = ({children, ...rest}) => {
  return (
    <Custom
        variant="contained"
        type="submit"
        disableElevation
        {...rest}
      >
      {children}
      </Custom>
  )
}

export default LoadingBtn