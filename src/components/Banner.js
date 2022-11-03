import React from "react";
import { Stack } from "@mui/material";
import styled from "styled-components";
import { BgBanner } from "../images/img";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BgBanner});
  background-origin: border-box;
  background-size: cover;
  background-position: 100%;
  width: 100%;
  height: 300px;
  position: relative;
`;



const Banner = ({children, ...rest}) => {
  return (
    <Container>
      <Stack {...rest}>
        {children}
      </Stack>
    </Container>
  );
};

export default Banner;
