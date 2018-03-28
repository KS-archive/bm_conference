import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colorPalette } from '../../utils/styles';

export const Container = styled.div`
  height: 100px;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid #ddd;

  @media (max-width: 460px) {
    padding: 0 12px;
  }
`;

export const Logo = styled.img`
  height: 72px;
  cursor: pointer;
  margin-right: 16px;

  @media (max-width: 460px) {
    height: 48px;
  }

  &:last-of-type {
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export const Nav = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Item = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.active ? '#fff' : colorPalette.yellow};
  padding: 0 24px;
  text-transform: uppercase;
  background-color: ${props => props.active && colorPalette.yellow};
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    color: ${props => !props.active && '#fff'};
    background-color: ${props => !props.active && colorPalette.yellow};
  }
`;

export const MobileNav = styled.div`
  height: 100%;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  opacity: ${props => props.isOpen ? 1 : 0};
  position: fixed;
  top: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${colorPalette.yellow};
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
`;

export const MobileItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: calc((100vh - 100px) / 6);
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  padding: 0 24px;
  text-transform: uppercase;
  background-color: ${props => props.active ? 'rgba(255, 255, 255, 0.30)' : 'rgba(255, 255, 255, 0.15)'};

  &:hover {
    cursor: pointer;
    background-color: ${props => props.active ? 'rgba(255, 255, 255, 0.30)' : 'rgba(255, 255, 255, 0.25)'};
  }
`;

export const BurgerIcon = styled.i`
  font-size: 32px;
  color: ${colorPalette.yellow};
  margin-left: auto;
  display: block;
  cursor: pointer;

  @media (max-width: 460px) {
    font-size: 24px;
  }
`;

export const Filler = styled.div`
  height: 80px;
  width: 100%;
`;

