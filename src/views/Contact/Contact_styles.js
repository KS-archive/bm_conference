import styled from 'styled-components';
import { colorPalette } from '../../utils/styles';

export const Header = styled.h1`
  font-size: 30px;
  font-weight: 500;
  text-transform: uppercase;
  margin: 88px 0 32px;
  text-align: center;
  padding: 0 24px;
`;

export const Bold = styled.div`
  margin-top: 20px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  line-height: 1.4;
  color: ${colorPalette.gray};
`;

export const Line = styled.div`
  text-align: center;
  line-height: 1.5;
  color: ${colorPalette.lightGray};
`;
