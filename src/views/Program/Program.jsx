import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container } from '../../utils/styledComponents';
import { Section, Info, Download, DownloadItem } from './Program_styles';

export default () => (
  <Fragment>
    <Navbar activeIndex={3} />
    <Container>
      <Section>
        <Info>
          Pełny program konferencji można pobrać klikając przycisk poniżej.
        </Info>
      </Section>
      <Download>
        <a href="https://drive.google.com/open?id=0B6OmG2FpHh5GYmdyTURyLUxfa3BXZUJiZnU3eWM4RElqWkE4">
          <DownloadItem key="Item1">
            <i className="fa fa-download" aria-hidden="true" />
            Program konferencji
          </DownloadItem>
        </a>
      </Download>
    </Container>
  </Fragment>
);
