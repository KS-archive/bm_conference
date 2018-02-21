import styled from 'styled-components';
import { colorPalette } from '../../../utils/styles';

export const Header = styled.h1`
  margin-top: 120px;
  font-size: 27px;
  font-weight: 500;
  text-align: center;
  line-height: 1.4;
  color: ${colorPalette.darkGray};
`;

export const Description = styled.div`
  margin-top: 40px;
  font-size: 18px;
  text-align: center;
  line-height: 1.4;
  color: ${colorPalette.gray};
`;

export const Bold = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  line-height: 1.4;
  color: ${colorPalette.darkGray};
`;

export const Table = styled.div`
  width: 700px;
  margin: 0 auto 30px;
  line-height: 1.4;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  width: 100%;
  padding: 15px 30px;
  box-sizing: border-box;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
  border-radius: 5px 5px 0 0;
  background-color: ${props => props.bgcolor};
`;

export const Row = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  color: ${colorPalette.gray};
  font-weight: 300;
  font-size: 18px;
  background-color: white;
  border-right: 1px solid ${colorPalette.lightGray};
  border-left: 1px solid ${colorPalette.lightGray};
  border-bottom: 1px solid ${colorPalette.lightGray};

  &:last-child {
    border-radius: 0 0 5px 5px;
  }
`;
