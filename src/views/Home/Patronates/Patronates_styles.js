import styled from 'styled-components';
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

export const Text = styled.h2`
  font-size: 24px;
  color: ${colorPalette.yellow};
  text-align: center;
  line-height: 1.4;
  padding: 0 32px;
`;

export const Logo = styled.img`
  width: 400px;
  margin: 0 calc(50vw - 200px);

  @media (max-width: 600px) {
    width: 280px;
    margin: 0 calc(50vw - 140px);
  }
`;
