import React, { Component } from 'react';
import { Container } from './ListItem_styles';

class App extends Component {
  render() {
    return (
      <Container>
        <p>{this.props.item.title}</p>
        <p>{this.props.item.name}</p>
        <p>{this.props.item.institution}</p>
      </Container>
    );
  }
}

export default App;
