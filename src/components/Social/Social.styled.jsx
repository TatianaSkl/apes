import styled from '@emotion/styled';

export const WrapperSoc = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 8px 0 0;
  @media (min-width: 768px) {
    padding: 8px 12px 0 0;
  }
  @media (min-width: 1280px) {
    gap: 16px;
    padding: 16px 24px 0 0;
  }
`;

export const WrapperLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  padding: 10px;
  border-radius: 8px;
  background: ${props => props.theme.colors.background};
  @media (min-width: 768px) {
    border-radius: 12px;
  }
  @media (min-width: 1280px) {
    height: 80px;
    width: 80px;
  }
`;

export const LinkSoc = styled.a`
  color: ${props => props.theme.colors.secondBlack};
  font-family: 'MessinaSansMonoSemiBold';
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  & svg {
    width: 16px;
    height: 16px;
    color: ${props => props.theme.colors.secondBlack};
    transition-property: fill;
    transition-duration: 0.25s;
    transition-timing-function: ${props => props.theme.animation.cubicBezier};
    &:hover {
      fill: ${props => props.theme.colors.white};
    }
    @media (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;
