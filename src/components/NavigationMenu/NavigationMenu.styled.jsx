import styled from '@emotion/styled';
import { Link } from 'react-scroll';

export const NavWrap = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  margin-bottom: 77px;
  @media (min-width: 768px) {
    flex-direction: row;
    padding-top: 0;
    margin-bottom: 0;
    position: relative;
    z-index: 2;
  }
`;

export const NaLink = styled(Link)`
  margin-bottom: 16px;
  height: 40px;
  color: ${props => props.theme.colors.white};
  font-family: 'MessinaSansMonoSemiBold';
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  transition-property: color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.accent};
    text-decoration: underline;
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    height: 48px;
    width: 48px;
    color: ${props => props.theme.colors.secondBlack};
    font-size: 12px;
    line-height: 14px;
    &:hover {
      color: ${props => props.theme.colors.white};
      text-decoration: underline;
    }
  }
  @media (min-width: 1280px) {
    height: 80px;
    width: 80px;
    font-size: 16px;
    line-height: 19px;
  }
`;
