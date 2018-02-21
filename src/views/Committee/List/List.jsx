import React, { Component, Fragment } from 'react';
import { Title, Data } from './List_styles';
import ListItem from './ListItem/ListItem';

class App extends Component {
  render() {
    return (
      <Fragment>
      <Title>{this.props.title}</Title>
      <Data>
        {this.props.data.map((item) => {
          return <ListItem key={item.name} item={item} />
        })}
      </Data>
      </Fragment>
    );
  }
}

export default App;
