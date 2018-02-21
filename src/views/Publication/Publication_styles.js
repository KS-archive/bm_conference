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

export const Section = styled.div`
  text-align: center;
`;

export const Text = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 1.4;
`;

export const First = styled.div`
  color: ${colorPalette.grey};
  margin-bottom: 20px;
  font-weight: 300;
`;

export const Second = styled.div`
  color: ${colorPalette.grey};
  font-weight: 500;
`;

export const Download = styled.div`
  font-weight: 500;
`;

export const DownloadItem = styled.div`
  background-color: ${colorPalette.blue};
  margin: 15px auto;
  color: white;
  padding: 10px;
  max-width: 500px;
  border-radius: 3px;
  border: 1px solid ${colorPalette.blue};
  text-decoration: none;
  transition: all 0.3s;
  font-size: 15px;
  line-height: 1.4;

  i {
    margin-right: 4px;
  }

  &:hover {
    color: ${colorPalette.blue};
    background-color: #fff;
    border-color: ${colorPalette.blue};
  }
`;
