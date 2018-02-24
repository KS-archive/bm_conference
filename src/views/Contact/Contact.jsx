import React from 'react';
import { Container } from '../../utils/styledComponents';
import { Header, Bold, Info, Line } from './Contact_styles';
import { colorPalette } from '../../utils/styles';

export default () => (
  <Container>
    <Header>KONTAKT</Header>
    <Bold>Katedra Badań Marketingowych</Bold>
    <Line>Uniwersytet Ekonomiczny we Wrocławiu</Line>
    <Line>ul. Komandorska 118/120, 53-345 Wrocław</Line>
    <Bold>dr hab. Magdalena Sobocińska</Bold>
    <Line>tel.: (71) 36 80 247,</Line>
    <Line>tel.: 501 396 764</Line>
    <Line>e-mail: badania.markt@ue.wroc.pl</Line>
  </Container>
);
