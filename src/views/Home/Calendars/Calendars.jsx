import React, { Fragment } from 'react';
import { MainContainer, Header, Wrapper, Date, Title } from './Calendars_styles';

const Calendar = ({ date, title, active }) => (
  <Wrapper active={active}>
    <Date>{date}</Date>
    <Title>{title}</Title>
  </Wrapper>
);

export default () => (
  <Fragment>
    <Header>Kalendarium</Header>
    <MainContainer>
      <Calendar date="30 września 2017" title="Zgłoszenie udziału" />
      <Calendar date="30 grudnia 2017" title="Nadesłanie referatów" />
      <Calendar date="30 grudnia2017" title="Wniesienie opłaty" />
      <Calendar active date="20-22 maja 2018" title="Termin konferencji" />
    </MainContainer>
  </Fragment>
);
