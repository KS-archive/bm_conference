import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from './Hero/Hero';
import Areas from './Areas/Areas';

export default () => (
  <Fragment>
    <Navbar activeIndex={0} />
    <Hero />
    <Areas />
  </Fragment>
);
