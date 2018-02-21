import React, { Fragment } from 'react';
import { Container } from '../../utils/styledComponents';
import { Header } from './Home_styles';
import Navbar from '../../components/Navbar/Navbar';

export default () => (
  <Fragment>
    <Navbar activeIndex={0} />
    <Container>
      <Header>Simple React Starter</Header>
    </Container>
  </Fragment>
);
