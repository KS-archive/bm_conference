import React, { Component } from 'react';
import { Container, DegreeParagraph, NameParagraph, InstitutionParagraph } from './ListItem_styles';

class App extends Component {
  render() {
    return (
      <Container>
        <DegreeParagraph>{this.props.item.title}</DegreeParagraph>
        <NameParagraph>{this.props.item.name}</NameParagraph>
        <InstitutionParagraph>{this.props.item.institution}</InstitutionParagraph>
      </Container>
    );
  }
}

export default App;
