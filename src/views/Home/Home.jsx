import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from './Hero/Hero';
import Areas from './Areas/Areas';
import Calendars from './Calendars/Calendars';

export default () => (
  <Fragment>
    <Navbar activeIndex={0} />
    <Hero />
    <Areas />
    <Calendars />
  </Fragment>
);
