import styled from 'styled-components';

export const Container = styled.div`
  width: 1140px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 900px;
  }

  @media (max-width: 960px) {
    width: 680px;
  }

  @media (max-width: 740px) {
    width: 520px;
  }

  @media (max-width: 580px) {
    width: 96%;
  }
`;
