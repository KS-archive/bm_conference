import styled from 'styled-components';
import { Container } from '../../../utils/styledComponents';
import { colorPalette } from '../../../utils/styles';

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

export const Header = styled.h1`
  margin: 120px 0 48px;
  font-size: 27px;
  font-weight: 500;
  text-align: center;
  line-height: 1.4;
  color: ${colorPalette.darkGray};
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  border: 5px solid ${props => props.active ? colorPalette.yellow : colorPalette.darkGrey};
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
  max-width: 200px;
  line-height: 1.4;

  > div:first-child {
    background-color: ${props => props.active ? colorPalette.yellow : colorPalette.darkGrey};
  }
`;

export const Date = styled.div`
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  text-align: center;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

export const Title = styled.div`
  height: 108px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 300;
  color: ${colorPalette.darkGrey};
  padding: 16px;
  text-align: center;

  @media (max-width: 960px) {
    font-size: 20px;
  }
`;
