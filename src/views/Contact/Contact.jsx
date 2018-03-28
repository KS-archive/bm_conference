import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container } from '../../utils/styledComponents';
import { Header, Bold, Line } from './Contact_styles';

export default () => (
  <Fragment>
    <Navbar activeIndex={5} />
    <Container>
      <Header>KONTAKT</Header>
      <Bold>Katedra Badań Marketingowych</Bold>
      <Line>Uniwersytet Ekonomiczny we Wrocławiu</Line>
      <Line>ul. Komandorska 118/120, 53-345 Wrocław</Line>
      <br />
      <Line>tel.: (71) 36 80 247,</Line>
      <Line>tel.: 501 396 764 (Prof. UE, dr hab. Magdalena Sobocińska)</Line>
      <Line>e-mail: badania.markt@ue.wroc.pl</Line>
    </Container>
  </Fragment>
);
