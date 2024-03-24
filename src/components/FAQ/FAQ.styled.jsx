import styled from '@emotion/styled';

export const ListFAQ = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    gap: 36px;
  }
  @media (min-width: 1280px) {
    gap: 48px;
  }
`;

export const ItemFAQ = styled.li`
  display: flex;
  background: ${props =>
    props.isOpen ? props.theme.colors.secondBlack : props.theme.colors.black};
  padding: ${props => (props.isOpen ? '8px 8px 10px 8px' : '0 0 0 8px')};
  border-radius: 12px;
  counter-increment: my-counter;
  &:hover::before {
    color: ${props => props.theme.colors.white};
  }
  ::before {
    content: '[ ' counter(my-counter) ' ]';
    display: block;
    width: 27px;
    height: 20px;
    font-family: 'BiroScriptUSPlusBold';
    color: ${props => (props.isOpen ? props.theme.colors.white : props.theme.colors.accent)};
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
    transition-property: color;
    transition-duration: 0.25s;
    transition-timing-function: ${props => props.theme.animation.cubicBezier};
    @media (min-width: 768px) {
      width: 35px;
      height: 27px;
      font-size: 16px;
      line-height: 27px;
    }
    @media (min-width: 1280px) {
      width: 52px;
      height: 40px;
      font-size: 24px;
      line-height: 40px;
    }
  }
  & h3 {
    color: ${props => (props.isOpen ? props.theme.colors.accent : props.theme.colors.white)};
  }
  @media (min-width: 768px) {
    justify-content: flex-end;
    padding: ${props => (props.isOpen ? '18px 16px 23px 0' : '0 16px 0 0')};
  }
  @media (min-width: 1280px) {
    padding: ${props => (props.isOpen ? '24px 24px 24px 0' : '0 24px 0 0')};
    border-radius: 24px;
  }
`;

export const TitleFAQ = styled.h3`
  font-family: 'RightGroteskCompactBlack';
  font-weight: 900;
  font-size: 20px;
  line-height: 20px;
  text-transform: uppercase;
  cursor: pointer;
  transition-property: color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }
  @media (min-width: 1280px) {
    font-size: 64px;
    line-height: 64px;
  }
`;

export const TextFAQ = styled.p`
  margin-top: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    margin-top: 12px;
  }
  @media (min-width: 1280px) {
    margin-top: 36px;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const WrapText = styled.div`
  position: relative;
  width: 169px;
  margin-left: 8px;
  @media (min-width: 768px) {
    width: 339px;
    margin-left: 20px;
  }
  @media (min-width: 1280px) {
    width: 635px;
    margin-left: 24px;
  }
`;

export const Picture = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    width: 148px;
    height: 183px;
    transform: rotate(-16deg);
    top: -29px;
    left: -218px;
  }
  @media screen and (min-width: 1280px) {
    width: 248px;
    height: 282px;
    transform: rotate(-8deg);
    top: -38px;
    left: -342px;
  }
`;
