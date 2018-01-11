import styled from 'styled-components';
import { colorPalette } from '../../utils/styles';

export const Header = styled.h1`
  /*margin-top: 30px;*/
  font-size: 24px;
  padding: 10px 0;
  color: ${colorPalette.darkGrey};
  text-transform: uppercase;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
    @media (max-width:600px) {
      font-size: 16px;
    }
`;

export const Section = styled.div`
  text-align: center;
  padding: 7%;
  font-family: "Roboto", sans-serif;
`;

export const Text = styled.div`
  text-align: center;
  font-size: 14px;
  width: 80%;
  margin: auto;
  margin-bottom: 115px;
  @media (max-width:600px) {
    width: 100%;
  }
`;

export const First = styled.div`
  color: ${colorPalette.gray};
  margin: 20px;
  font-weight: 300;
`;
export const Second = styled.div`
  color: ${colorPalette.grey};
  margin: 20px;
  font-weight: 500;
`;

export const Download = styled.div`
  width: 80%;
  margin: auto;
  font-weight: 500;
    @media (max-width:600px) {
      width: 100%;
    }
`;

export const DownloadItem = styled.div`
  background-color: ${colorPalette.blue};
  margin: 15px auto;
  color: white;
  padding: 10px;
  width: 500px;
  border-radius: 3px;
  border: 1px solid ${colorPalette.blue};
  text-decoration: none;
  -webkit-transition: background-color 1.5s; /* For Safari 3.1 to 6.0 */
   transition: background-color 1.5s;
  -webkit-transition: color 1.5s; /* For Safari 3.1 to 6.0 */
    transition: color 1.5s;
   font-size: 15px;
    &:hover {
      color: ${colorPalette.blue};
      background-color: white;
      border-color: white;
  }
    @media (max-width:600px) {
      width: auto;
      margin: 1%;
      font-size: 11px;
    }
`;
