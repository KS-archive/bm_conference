import React from 'react';
import { Container } from '../../utils/styledComponents';
import { Section, FontAwesome, Info} from './Program_styles';

export default () => (
  <Container>
    <Section>
      <FontAwesome>
        <i class="fa fa-calendar fa-2x" aria-hidden="true"></i>
      </FontAwesome>
      <Info>
        Program konferencji zostanie <br/> wkrótce opublikowany
      </Info>
    </Section>
  </Container>
);
