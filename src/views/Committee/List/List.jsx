import React, { Component, Fragment } from 'react';
import { Container } from '../../../utils/styledComponents';
import { Header } from './List_styles';
import ListItem from './ListItem/ListItem';

class App extends Component {
  render() {
    return (
      <Fragment>
      <h1>{this.props.title}</h1>
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
