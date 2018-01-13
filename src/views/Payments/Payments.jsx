import React from 'react';
import { Container } from '../../utils/styledComponents';
import { Header, Section, Box, Price, Text, Summary} from './Payments_styles';

export default () => (

  <Section>
    <Container>
      <Header>WARIANTY UCZESTNICTWA W KONFERENCJI</Header>

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

        <Summary>Prosimy o dokonanie opłaty konferencyjnej do 30 grudnia 2017 roku na konto Uniwersytetu <br />
        Ekonomicznego we Wrocławiu: <br />
        Bank Pekao S.A. <br />
        87 1240 3464 1111 0010 4316 2601 <br />
        z dopiskiem: opłata za udział w konferencji Badania marketingowe 2018 i <br />
        wyszczególnieniem imienia i nazwiska uczestnika konferencji.</Summary>



    </Container>
  </Section>
  );
