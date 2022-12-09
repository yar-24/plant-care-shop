import React from 'react';
import { Container, Stack } from '@mui/material';
import styled from 'styled-components';
import { BgBanner } from '../images/img';
import { mobile } from '../utils';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BgBanner});
  background-origin: border-box;
  background-size: cover;
  background-position: 10%;
  width: 100%;
  height: 300px;
  position: relative;
  ${mobile({ textAlign: 'center', backgroundPosition: '50%' })}
`;

const Banner = ({ children, ...rest }) => {
  return (
    <ImageContainer>
      <Container fixed>
        <Stack {...rest}>{children}</Stack>
      </Container>
    </ImageContainer>
  );
};

export default Banner;
