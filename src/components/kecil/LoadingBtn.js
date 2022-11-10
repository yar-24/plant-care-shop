import React from 'react'
import { LoadingButton } from "@mui/lab";
import { colors, fonts } from '../../utils';
import { styled } from "@mui/material/styles";

const Custom = styled(LoadingButton)`
  background-color: ${colors.secondary};
  box-shadow: none;
  text-transform: none;
  margin: 16px 0;
  padding: 5px 5px;
  font-weight: 600;
  font-family: ${fonts.inter};
  &:hover {
    background-color: ${colors.secondary};
    background-image: linear-gradient(rgb(0 0 0/30%) 0 0);
    box-shadow: none;
  }
`;

const LoadingBtn = ({label, ...rest}) => {
  return (
    <Custom
        size="small"
        variant="outlined"
        type="submit"
        {...rest}
      >
      {label}
      </Custom>
  )
}

export default LoadingBtn