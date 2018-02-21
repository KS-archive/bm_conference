import React from 'react';
import { Hero, Middle, Buttons, Button, Name, Title, Subtitle, Place } from './Hero_styles';

export default () => (
  <Hero src="/img/landing-bg.jpg">
    <Middle>
      <Name>KONFERENCJA</Name>
      <Title>Badania Marketingowe</Title>
      <Subtitle>metody, trendy, zastosowania</Subtitle>
      <Place>Wrocław, 20-22 maja 2018</Place>
      <Buttons>
        <Button to="/organizatorzy">Organizatorzy</Button>
        <Button to="/program">Program</Button>
        <Button to="/publikacja">Publikacja</Button>
      </Buttons>
    </Middle>
  </Hero>
);
