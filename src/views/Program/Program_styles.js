import styled from 'styled-components';
import { colorPalette } from '../../utils/styles';

export const Section = styled.div`
  text-align: center;
  margin-top: 96px;
  font-family: "Roboto", sans-serif;
  color: #333;
`;

export const Info = styled.div`
  text-align: center;
  line-height: 1.5;
  margin-top: 20px;
  font-weight: 400;
  font-size: 24px;
`;

export const Download = styled.div`
  font-weight: 500;
`;

export const DownloadItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
`
