import styled from 'styled-components';
import { colorPalette } from '../../utils/styles';

export const Header = styled.div`
  font-size: 30px;
  font-weight: 500;
  text-transform: uppercase;
  margin: 88px 0 32px;
  text-align: center;
  line-height: 1.4;
  color: ${colorPalette.darkGrey};
`;

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Box = styled.div`
  border: 1px solid ${colorPalette.blue};
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
  line-height: 1.4;
`;

export const Price = styled.div`
  background-color: ${colorPalette.blue};
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  text-align: center;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;

export const Text = styled.div`
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 300;
  color: ${colorPalette.darkGrey};
  padding: 16px;
  text-align: center;
`;

export const Summary = styled.div`
  margin: 56px 0 120px;
  color: ${colorPalette.grey};
  line-height: 1.4;
  text-align: center;
  font-weight: 500;
`;
