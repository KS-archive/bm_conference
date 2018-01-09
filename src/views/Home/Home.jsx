import React from 'react';
import { Container } from '../../utils/styledComponents';
import { Header, Hero, HeroText, HeroButton } from './Home_styles';

export default () => (
  <Container>
    {/* <Header>Simple React Starter</Header> */}
    <Hero>
      <HeroText>
        <h3>KONFERENCJA</h3>
        <h1>Badania Marketingowe</h1>
        <h2>metody, trendy, zastosowania</h2>
        <p>Wrocław, 20-22 maja 2018</p>
        <a href="#"><HeroButton>Tematyka</HeroButton></a>
        <a href="#"><HeroButton>Program</HeroButton></a>
        <a href="#"><HeroButton>Publikacja</HeroButton></a>
      </HeroText>
    </Hero>
  </Container>
);
