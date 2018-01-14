import React, { Component } from 'react';
import { Slider } from './Slider_styles';

class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: ['/img/hero.jpg', '/img/hero.jpg', '/img/hero.jpg'],
      operator: 'PLUS',
      pointer: 0,
    };
  }

  changePicture() {
    let pointer = this.state.pointer;
    let operator = this.state.operator;
    if (pointer == this.state.links.length - 1 ) {
      pointer = 0;
    } else if (pointer == 0 ){
      operator = 'PLUS'
    }
    operator === 'PLUS'? pointer++ : pointer--;
  return this.setState({pointer: pointer, operator: operator})
}

  automatic() {
    setInterval(this.changePicture, 3000);
  }

  render() {
    let pointed_image = this.state.links[this.state.pointer];
    let image_styles = { backgroundImages: 'url(' + pointed_image + ')' };
    return (
      <Slider style={image_styles}>
      </Slider>
    );
  }
}
export default SimpleSlider;
