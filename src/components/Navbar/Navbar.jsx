import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router';
import { Container, Logo, Nav, Item, Filler, MobileNav, MobileItem, BurgerIcon } from './Navbar_styles';

@withRouter
export default class Navbar extends PureComponent {
  state = {
    isOpen: false,
  }

  render() {
    const { props: { activeIndex }, state: { isOpen } } = this;
    return (
      <Fragment>
        <Container>
          <Logo src="/img/logo.png" onClick={() => this.props.history.push('/')} />
          <Nav>
            <Item to="/" active={activeIndex === 0}>Strona główna</Item>
            <Item to="/organizatorzy" active={activeIndex === 1}>Organizatorzy</Item>
            <Item to="/publikacja" active={activeIndex === 2}>Publikacja</Item>
            <Item to="/program" active={activeIndex === 3}>Program</Item>
            <Item to="/platnosci" active={activeIndex === 4}>Płatności</Item>
            <Item to="/kontakt" active={activeIndex === 5}>Kontakt</Item>
          </Nav>
          <MobileNav isOpen={isOpen}>
            <MobileItem to="/" active={activeIndex === 0}>Strona główna</MobileItem>
            <MobileItem to="/organizatorzy" active={activeIndex === 1}>Organizatorzy</MobileItem>
            <MobileItem to="/publikacja" active={activeIndex === 2}>Publikacja</MobileItem>
            <MobileItem to="/program" active={activeIndex === 3}>Program</MobileItem>
            <MobileItem to="/platnosci" active={activeIndex === 4}>Płatności</MobileItem>
            <MobileItem to="/kontakt" active={activeIndex === 5}>Kontakt</MobileItem>
          </MobileNav>
          <BurgerIcon onClick={() => this.setState({ isOpen: !isOpen })} className="fas fa-bars" />
        </Container>
        <Filler />
      </Fragment>
    );
  }
}
