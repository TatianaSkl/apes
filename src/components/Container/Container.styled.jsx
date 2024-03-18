import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 8px;

  @media (min-width: 360px) {
    width: 480px;
  }
  @media (min-width: 768px) {
    padding: 0 16px;
    width: 768px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
