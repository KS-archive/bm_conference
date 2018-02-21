import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container } from '../../utils/styledComponents';
import { Header, Boxes, Box, Price, Text, Summary } from './Payments_styles';

export default () => (
  <Fragment>
    <Navbar activeIndex={4} />
    <Container>
      <Header>WARIANTY UCZESTNICTWA W KONFERENCJI</Header>
      <Boxes>
        <Box>
          <Price> 1650 zł</Price>
          <Text>Uczestnictwo wraz z publikacją; noclegi w jednoosobowym pokoju</Text>
        </Box>
        <Box>
          <Price> 1450 zł</Price>
          <Text>Uczestnictwo wraz z publikacją; noclegi w dwuosobowym pokoju</Text>
        </Box>
        <Box>
          <Price> 1000 zł</Price>
          <Text>Uczestnictwo wraz z publikacją bez noclegów</Text>
        </Box>
        <Box>
          <Price> 750 zł</Price>
          <Text>Publikacja artykułu bez uczestnictwa w konferencji</Text>
        </Box>
      </Boxes>
      <Summary>
        Prosimy o dokonanie opłaty konferencyjnej do 30 grudnia 2017 roku na konto Uniwersytetu Ekonomicznego we Wrocławiu: <br /> Bank Pekao S.A. <br /> 87 1240 3464 1111 0010 4316 2601 <br /> z dopiskiem: opłata za udział w konferencji Badania marketingowe 2018 i wyszczególnieniem imienia i nazwiska uczestnika konferencji.
      </Summary>
    </Container>
  </Fragment>
);
