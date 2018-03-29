import React from 'react';
import { Hero, Middle, Buttons, Button, Name, Title, Subtitle, Place } from './Hero_styles';

export default () => (
  <Hero src={`${__ROOT_URL__}img/landing-bg.jpg`}>
    <Middle>
      <Name>KONFERENCJA</Name>
      <Title>Badania Marketingowe</Title>
      <Subtitle>metody, trendy, zastosowania</Subtitle>
      <Place>Wrocław, 20-22 maja 2018</Place>
      <Buttons>
        <Button to={`${__PATH__}/organizatorzy`}>Rada programowa i komitet organizacyjny</Button>
        <Button to={`${__PATH__}/program`}>Program</Button>
        <Button to={`${__PATH__}/publikacja`}>Publikacja</Button>
      </Buttons>
    </Middle>
  </Hero>
);
