import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from './Hero/Hero';
import Areas from './Areas/Areas';
import Calendars from './Calendars/Calendars';
import LastConferences from './LastConferences/LastConferences';
import Patronates from './Patronates/Patronates';

export default () => (
  <Fragment>
    <Navbar activeIndex={0} />
    <Hero />
    <Areas />
    <Calendars />
    <Patronates />
    <LastConferences />
  </Fragment>
);
