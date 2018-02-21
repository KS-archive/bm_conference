import styled from 'styled-components';
import { colorPalette } from '../../../../utils/styles';

export const Container = styled.div`
  padding: 20px;
  border: 1px solid ${colorPalette.grey};
  line-height: 1.4;
  border-radius: 4px;
  background-color: #fff;
`;

export const DegreeParagraph = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${colorPalette.darkGrey};
  text-transform: uppercase;
`;

export const NameParagraph = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const InstitutionParagraph = styled.p`
  font-size: 14px;
  font-weight: 300;
`;
