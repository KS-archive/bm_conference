import styled from 'styled-components';
import { Container } from '../../../utils/styledComponents';
import { colorPalette } from '../../../utils/styles';

export const Header = styled.h1`
  margin: 120px 0 48px;
  font-size: 27px;
  font-weight: 500;
  text-align: center;
  line-height: 1.4;
  color: ${colorPalette.darkGrey};
  text-transform: uppercase;
`;

export const MainContainer = Container.extend`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
  padding-bottom: 120px;
  justify-items: center;

  @media (max-width: 740px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: auto;
`;
