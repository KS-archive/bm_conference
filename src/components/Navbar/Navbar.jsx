import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router';
import { Container, Logo, Filler, MobileNav, MobileItem, BurgerIcon } from './Navbar_styles';

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
          <Logo src={`${__ROOT_URL__}/img/logo.jpg`} onClick={() => this.props.history.push('/')} />
          <Logo src={`${__ROOT_URL__}/img/Logo KBM.jpg`} onClick={() => this.props.history.push('/')} />
          {/* <Nav>
            <Item to={`${__PATH__}/`} active={activeIndex === 0}>Strona główna</Item>
            <Item to={`${__PATH__}/organizatorzy`} active={activeIndex === 1}>Rada programowa i komitet organizacyjny</Item>
            <Item to={`${__PATH__}/publikacja`} active={activeIndex === 2}>Publikacja</Item>
            <Item to={`${__PATH__}/program`} active={activeIndex === 3}>Program</Item>
            <Item to={`${__PATH__}/platnosci`} active={activeIndex === 4}>Płatności</Item>
            <Item to={`${__PATH__}/kontakt`} active={activeIndex === 5}>Kontakt</Item>
          </Nav> */}
          <MobileNav isOpen={isOpen}>
            <MobileItem to={`${__PATH__}/`} active={activeIndex === 0}>Strona główna</MobileItem>
            <MobileItem to={`${__PATH__}/organizatorzy`} active={activeIndex === 1}>Rada programowa i komitet organizacyjny</MobileItem>
            <MobileItem to={`${__PATH__}/publikacja`} active={activeIndex === 2}>Publikacja</MobileItem>
            <MobileItem to={`${__PATH__}/program`} active={activeIndex === 3}>Program</MobileItem>
            <MobileItem to={`${__PATH__}/platnosci`} active={activeIndex === 4}>Płatności</MobileItem>
            <MobileItem to={`${__PATH__}/kontakt`} active={activeIndex === 5}>Kontakt</MobileItem>
          </MobileNav>
          <BurgerIcon onClick={() => this.setState({ isOpen: !isOpen })} className="fas fa-bars" />
        </Container>
        <Filler />
      </Fragment>
    );
  }
}
