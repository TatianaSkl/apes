import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 54px;
  padding: 8px 8px 0 8px;
  background-color: ${props => props.theme.colors.accent};
  border-radius: 12px 12px 0 0;
  @media (min-width: 768px) {
    align-items: center;
    padding: 12px 12px 0 12px;
  }
  @media (min-width: 1280px) {
    margin-top: 16px;
    padding: 24px 24px 0 24px;
  }
`;

export const Logo = styled.a`
  & svg {
    width: 48px;
    height: 32px;
    fill: ${props => props.theme.colors.secondBlack};
    transition-property: fill;
    transition-duration: 0.25s;
    transition-timing-function: ${props => props.theme.animation.cubicBezier};
    &:hover {
      fill: ${props => props.theme.colors.white};
    }
    @media (min-width: 1280px) {
      width: 72px;
      height: 50px;
    }
  }
`;

export const ButonHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  padding: 10px;
  border-radius: 8px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.secondBlack};
  font-family: 'MessinaSansMonoSemiBold';
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  transition-property: color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  &:hover {
    color: ${props => props.theme.colors.white};
    text-decoration: underline;
  }
  @media (min-width: 768px) {
    border-radius: ${props => (props.isVisible ? '0 12px 12px 0' : '12px')};
  }
  @media (min-width: 1280px) {
    height: 80px;
    width: 80px;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const TextHeader = styled.p`
  color: ${props => props.theme.colors.secondBlack};
  font-family: 'BiroScriptUSPlusBold';
  font-size: 16px;
  line-height: 27px;
  font-weight: 400;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const WrappeMobil = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const WrappeTablet = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const MenuContainer = styled.div`
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.visible {
    opacity: 1;
    background: ${props => props.theme.colors.background};
    border-radius: 12px 0 0 12px;
  }
`;
