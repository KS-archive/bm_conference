import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container } from '../../utils/styledComponents';
import { Section, FontAwesome, Info } from './Program_styles';

export default () => (
  <Fragment>
    <Navbar activeIndex={3} />
    <Container>
      <Section>
        <FontAwesome>
          <i className="fa fa-calendar fa-2x" aria-hidden="true" />
        </FontAwesome>
        <Info>
          Program konferencji zostanie <br /> wkrótce opublikowany
        </Info>
      </Section>
    </Container>
  </Fragment>
);
