import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colorPalette } from '../../../utils/styles';

export const Hero = styled.section`
  z-index: 0;
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #111;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('${props => props.src}') no-repeat center/cover;
    opacity: 0.3;
  }
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.3;
  color: #fff;
  text-align: center;
  padding: 0 24px;
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 16px;
  text-transform: uppercase;

  @media (max-width: 700px) {
    font-size: 20px;
  }

  @media (max-width: 580px) {
    font-size: 18px;
  }
`;

export const Title = styled.div`
  font-size: 60px;
  font-weight: 500;

  @media (max-width: 700px) {
    font-size: 42px;
  }

  @media (max-width: 580px) {
    font-size: 26px;
  }
`;

export const Subtitle = styled.div`
  font-size: 42px;
  font-weight: 300;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    font-size: 32px;
  }

  @media (max-width: 580px) {
    font-size: 21px;
  }
`;

export const Place = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 32px;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export const Buttons = styled.div`
  margin-top: 33px;
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    height: 200px;
    margin-top: 0;
  }
`;


export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colorPalette.blue};
  color: #fff;
  height: 46px;
  width: 140px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background-color: #1872a3;
  }

  @media (max-width: 700px) {
    width: 80%;
  }
`;
