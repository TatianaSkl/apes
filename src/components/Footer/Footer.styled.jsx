import styled from '@emotion/styled';

export const FooterWrap = styled.footer`
  display: flex;
  justify-content: center;
  padding-bottom: 24px;
  @media (min-width: 768px) {
    padding-bottom: 40px;
  }
`;

export const FooterText = styled.p`
  width: 216px;
  color: ${props => props.theme.colors.white};
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 19px;
  }
`;
