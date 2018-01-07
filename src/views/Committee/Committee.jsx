import React, { Component, Fragment } from 'react';
import { Container } from '../../utils/styledComponents';
import { Header } from './Committee_styles';
import List from './List/List';
import { council, committee } from './data';

class App extends Component {
  render() {
    return (
      <Container>
        <List data={council} title="Rada Programowa"/>
        <List data={committee} title="Komitet Organizacyjny" />
      </Container>
    );
  }
}

export default App;
