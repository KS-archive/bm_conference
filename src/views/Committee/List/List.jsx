import React, { Component, Fragment } from 'react';
import { Container } from '../../../utils/styledComponents';
import { Header, Title } from './List_styles';
import ListItem from './ListItem/ListItem';

class App extends Component {
  render() {
    return (
      <Fragment>
      <Title>{this.props.title}</Title>
      <div>
        {this.props.data.map((item) => {
          return <ListItem key={item.name} item={item} />
        })}
      </div>
      </Fragment>
    );
  }
}

export default App;
