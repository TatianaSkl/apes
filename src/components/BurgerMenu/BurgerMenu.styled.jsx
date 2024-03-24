import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  padding: 62px 16px 0 16px;
  background-color: ${props => props.theme.colors.black};
  @media (min-width: 768px) {
    display: none;
  }
`;

export const WrapperFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  & svg {
    width: 48px;
    height: 32px;
    fill: ${props => props.theme.colors.white};
    transition-property: fill;
    transition-duration: 0.25s;
    transition-timing-function: ${props => props.theme.animation.cubicBezier};
    &:hover {
      fill: ${props => props.theme.colors.accent};
    }
  }
`;

export const ButtonClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  padding: 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.white};
  font-family: 'MessinaSansMonoSemiBold';
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  transition-property: color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  &:hover {
    color: ${props => props.theme.colors.accent};
    text-decoration: underline;
  }
`;

export const WrapperSoc = styled.div`
  position: absolute;
  top: 118px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 16px;
`;

export const WrapperLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  width: 48px;
  padding: 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
`;

export const LinkSoc = styled.a`
  font-family: 'MessinaSansMonoSemiBold';
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  & svg {
    width: 16px;
    height: 16px;
    fill: ${props => props.theme.colors.white};
    transition-property: fill;
    transition-duration: 0.25s;
    transition-timing-function: ${props => props.theme.animation.cubicBezier};
    &:hover {
      fill: ${props => props.theme.colors.accent};
    }
  }
`;
