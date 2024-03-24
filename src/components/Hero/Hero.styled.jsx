import styled from '@emotion/styled';

export const HeroSection = styled.section`
  position: relative;
  background-color: ${props => props.theme.colors.accent};
  padding: 8px 8px 19px 8px;
  border-radius: 0 0 12px 12px;
  @media (min-width: 768px) {
    padding: 0 0 35px 0;
  }
  @media (min-width: 1280px) {
    padding: 0 0 81px 0;
  }
`;

export const WrapMobil = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const WrapTablet = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 73px 0 73px;
    position: relative;
  }
  @media (min-width: 1280px) {
    padding: 0 115px 0 115px;
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.secondBlack};
  font-family: 'RightGroteskCompactBlack';
  font-size: 44px;
  font-weight: 900;
  line-height: 44px;
  letter-spacing: 0.44px;
  text-align: center;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 92px;
    line-height: 92px;
    letter-spacing: 0.92px;
    text-align: left;
  }
  @media (min-width: 1280px) {
    margin-bottom: 30px;
    font-size: 164px;
    line-height: 164px;
  }
`;

export const TitleSecond = styled.h1`
  @media (min-width: 768px) {
    padding-top: 97px;
    color: ${props => props.theme.colors.secondBlack};
    font-family: 'RightGroteskCompactBlack';
    margin-bottom: 24px;
    font-size: 92px;
    font-weight: 900;
    line-height: 92px;
    letter-spacing: 0.92px;
    text-align: right;
  }
  @media (min-width: 1280px) {
    padding-top: 133px;
    margin-bottom: 40px;
    font-size: 164px;
    line-height: 164px;
  }
`;

export const TextHero = styled.p`
  margin-bottom: 6px;
  color: ${props => props.theme.colors.secondBlack};
  font-family: 'BiroScriptUSPlusBold';
  font-size: 16px;
  line-height: 27px;
  font-weight: 400;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 33px;
    text-align: left;
  }
  @media (min-width: 1280px) {
    font-size: 24px;
    line-height: 40px;
    text-align: center;
  }
`;

export const Text = styled.p`
  width: 217px;
  color: ${props => props.theme.colors.secondBlack};
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  text-align: center;
  @media (min-width: 768px) {
    text-indent: 80px;
    text-transform: uppercase;
    text-align: justify;
    width: 190px;
    margin-bottom: 16px;
  }
  @media (min-width: 1280px) {
    width: 337px;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 28px;
  }
`;

export const Picture = styled.picture`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: -26px;
    left: 206px;
  }
  @media screen and (min-width: 1280px) {
    top: -40px;
    left: 365px;
  }
`;

export const ButonHero = styled.button`
  margin-bottom: 12px;
  margin-top: -2px;
  width: 216px;
  padding: 10px 70px 12px 70px;
  border-radius: 8px;
  background: rgba(30, 30, 30, 0.1);
  backdrop-filter: blur(6px);
  color: ${props => props.theme.colors.secondBlack};
  font-family: 'RightGroteskCompactBlack';
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  transition-property: color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  &:hover {
    color: ${props => props.theme.colors.white};
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
    padding: 10px 61px 12px 61px;
    border-radius: 12px;
    width: 190px;
  }
  @media (min-width: 1280px) {
    width: 337px;
    padding: 16px 0 20px 0;
    font-size: 28px;
    line-height: 34px;
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextBiro = styled.p`
  @media (min-width: 768px) {
    padding-top: 64px;
    color: ${props => props.theme.colors.secondBlack};
    font-family: 'BiroScriptUSPlusBold';
    font-size: 20px;
    line-height: 33px;
    font-weight: 400;
  }
  @media (min-width: 1280px) {
    padding-top: 93px;
    font-size: 24px;
    line-height: 40px;
  }
`;
