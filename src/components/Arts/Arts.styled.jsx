import styled from '@emotion/styled';

export const WrapImage = styled.div`
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  @media (min-width: 768px) {
    width: 284px;
    height: 336px;
  }
  @media (min-width: 1280px) {
    width: 240px;
    height: 280px;
  }
`;
