import React, { Fragment } from 'react';
import { Container, Logo, Nav, Item, Filler } from './Navbar_styles';

export default ({ activeIndex }) => (
  <Fragment>
    <Container>
      <Logo src="/img/logo.png" />
      <Nav>
        <Item to="/" active={activeIndex === 0}>Strona główna</Item>
        <Item to="/organizatorzy" active={activeIndex === 1}>Organizatorzy</Item>
        <Item to="/publikacja" active={activeIndex === 2}>Publikacja</Item>
        <Item to="/program" active={activeIndex === 3}>Program</Item>
        <Item to="/platnosci" active={activeIndex === 4}>Płatności</Item>
        <Item to="/kontakt" active={activeIndex === 5}>Kontakt</Item>
      </Nav>
    </Container>
    <Filler />
  </Fragment>
);
