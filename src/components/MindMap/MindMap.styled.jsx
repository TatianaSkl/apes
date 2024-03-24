import styled from '@emotion/styled';

export const WrapMobil = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const WrapTablet = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 194px;
`;

export const List = styled.ul`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
`;

export const Item = styled.li`
  background: ${props => (props.link ? props.theme.colors.accent : props.theme.colors.secondBlack)};
  border-radius: 12px;
  padding: 24px 12px 24px 12px;
  height: 242px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover a {
    padding: 0;
    text-align: right;
  }
  @media (min-width: 768px) {
    padding: 24px;
  }
  @media (min-width: 1280px) {
    height: 480px;
  }
`;

export const LinkMind = styled.a`
  display: block;
  margin-left: auto;
  width: 48px;
  height: 48px;
  padding: 12px;
  text-align: center;
  @media (min-width: 1280px) {
    width: 64px;
    height: 64px;
  }
  & svg {
    width: 24px;
    height: 24px;
    @media (min-width: 1280px) {
      width: 40px;
      height: 40px;
    }
  }
`;

export const TextMind = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    display: block;
    margin-left: auto;
    width: 128px;
  }
  @media (min-width: 1280px) {
    width: 228px;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const TitleMind = styled.h3`
  display: block;
  margin-top: auto;
  font-family: 'RightGroteskCompactBlack';
  font-size: 32px;
  font-weight: 900;
  line-height: 32px;
  text-transform: uppercase;
  @media (min-width: 1280px) {
    font-size: 64px;
    line-height: 64px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: center;
  @media (min-width: 1280px) {
    margin-top: 48px;
  }
`;

export const ButtonPrev = styled.button`
  font-family: 'BiroScriptUSPlusBold';
  font-size: 24px;
  line-height: 24px;
  font-weight: 400;
  margin-right: 48px;
  @media (min-width: 768px) {
    line-height: 30px;
  }
`;

export const ButtonNext = styled.button`
  font-family: 'BiroScriptUSPlusBold';
  font-size: 24px;
  line-height: 24px;
  font-weight: 400;
  @media (min-width: 768px) {
    line-height: 30px;
  }
`;
