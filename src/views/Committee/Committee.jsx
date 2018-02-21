import React, { Component, Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container } from './Committee_styles';
import List from './List/List';
import { council, committee } from './data';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar activeIndex={1} />
        <Container>
          <List data={council} title="Rada Programowa" />
          <List data={committee} title="Komitet Organizacyjny" />
        </Container>
      </Fragment>
    );
  }
}

export default App;
