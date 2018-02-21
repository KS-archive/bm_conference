import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { colorPalette } from '../../utils/styles';

export const Container = styled.div`
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${colorPalette.yellow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

export const Logo = styled.img`
  height: 56px;
`;

export const Nav = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Item = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  padding: 0 24px;
  text-transform: uppercase;
  background-color: ${props => props.active && 'rgba(255, 255, 255, 0.25)'};

  &:hover {
    cursor: pointer;
    background-color: ${props => !props.active && 'rgba(255, 255, 255, 0.15)'};
  }
`;

export const Filler = styled.div`
  height: 80px;
  width: 100%;
`;

