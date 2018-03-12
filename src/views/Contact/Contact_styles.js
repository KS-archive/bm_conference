import styled from 'styled-components';
import { colorPalette } from '../../utils/styles';

export const Header = styled.div`
  font-weight: 500;
  font-size: 25px;
  text-align: center;
  line-height: 1.4;
  margin-top: 30px;
  color: ${colorPalette.darkGray};
`;

export const Bold = styled.div`
  margin-top: 20px;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  line-height: 1.4;
  color: ${colorPalette.gray};
`;

export const Line = styled.div`
  font-size: 15px;
  text-align: center;
  line-height: 1.4;
  color: ${colorPalette.lightGray};
`;
