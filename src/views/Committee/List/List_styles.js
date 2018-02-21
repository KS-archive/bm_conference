import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  text-transform: uppercase;
  margin: 88px 0 32px;
  text-align: center;
`;

export const Data = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
