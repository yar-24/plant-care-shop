import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Banner from '../components/Banner';
import CardList from '../components/CardList';
import Hero from '../components/Hero';
import Tombol from '../components/kecil/Tombol';
import LocaleContext from '../contexts/LocaleContext';
import { fonts } from '../utils';

const Title = styled.h1`
  font-family: ${fonts.inter};
  color: white;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
  }
`;

const Home = ({ addItem }) => {
  const { locale } = React.useContext(LocaleContext);

  return (
    <>
      <Hero />
      <Banner alignItems={{ lg: 'end', xs: 'center' }}>
        <Title>
          {locale === 'id'
            ? 'Kiat, trik, dan panduan untuk membuat perawatan tanaman benar-benar mudah'
            : 'Tips, tricks, and plant guides to make plant care downright easy'}
        </Title>
        <Tombol
          component={Link}
          to={'/search'}
          label={locale === 'id' ? 'Baca blog lainnya' : 'Read more blogs'}
        />
      </Banner>
      <CardList addItem={addItem}>
        {locale === 'id' ? 'Kategori Populer' : 'Popular Categories'}
      </CardList>
    </>
  );
};

export default Home;
