import React from "react";
import styled from "styled-components";
import { BgBannerServices } from "../images/img";
import { fonts } from "../utils";
import LocaleContext from "../contexts/LocaleContext";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BgBannerServices});
  background-origin: border-box;
  background-size: cover;
  background-position: 100%;
  width: 100%;
  height: 50vh;
  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px ;
  text-align: center;
  background: rgba(0, 158, 114, 0.4);
`;
const Text = styled.h2`
  color: #ffffff ;
  font-family: ${fonts.comfortaa} ;
`;

const BannerServices = () => {
  const { locale } = React.useContext(LocaleContext);

  return (
    <Container>
      <Wrapper>
        <Text style={{ padding: '15px' }}>
        {locale === 'id' ? 'Tanaman dapat memiliki dampak besar pada bagaimana ruang terasa dan terlihat' : 'Plants can have a massive impact on how a space feels and looks'}
        </Text>
      </Wrapper>
    </Container>
  );
};

export default BannerServices;
