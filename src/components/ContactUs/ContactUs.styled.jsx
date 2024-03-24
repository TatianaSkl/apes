import styled from '@emotion/styled';

export const WrapIcon = styled.div`
  display: flex;
  justify-content: center;
  & svg {
    width: 36px;
    height: 36px;
  }
`;

export const TextContactUs = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    margin: 24px auto 24px auto;
    width: 397px;
  }
  @media (min-width: 1280px) {
    margin: 40px auto 40px auto;
    width: 581px;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const Form = styled.form`
  width: 216px;
  margin: 0 auto 60px auto;
  @media (min-width: 768px) {
    width: 248px;
    margin: 0 auto 80px auto;
  }
  @media (min-width: 1280px) {
    width: 397px;
    margin: 0 auto 120px auto;
  }
`;

export const Label = styled.label`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.secondBlack};
  border-radius: 8px 0 0 8px;
  & svg {
    width: 24px;
    height: 24px;
  }
  @media (min-width: 1280px) {
    width: 64px;
    height: 64px;
    border-radius: 12px 0 0 12px;
  }
`;

export const InputDiscord = styled.input`
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  color: ${props => (props.error ? props.theme.colors.accent : props.theme.colors.white)};
  width: 168px;
  height: 48px;
  padding: 17px 24px;
  background: transparent;
  border-radius: 0 8px 8px 0;
  border: 1px solid
    ${props =>
      props.error
        ? props.theme.colors.accent
        : props.filled
        ? props.theme.colors.white
        : props.theme.colors.secondBlack};
  outline: none;
  &::placeholder {
    color: rgba(255, 255, 255, 0.24);
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
    text-transform: uppercase;
    @media screen and (min-width: 1280px) {
      font-size: 16px;
      line-height: 19px;
    }
  }
  @media (min-width: 768px) {
    width: 200px;
  }
  @media (min-width: 1280px) {
    padding-top: 22px;
    padding-bottom: 22px;
    width: 333px;
    height: 64px;
    font-size: 16px;
    line-height: 19px;
    border-radius: 0 12px 12px 0;
  }
`;

export const InputAddress = styled.input`
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  color: ${props => (props.error ? props.theme.colors.accent : props.theme.colors.white)};
  width: 168px;
  height: 48px;
  padding: 17px 24px;
  background: transparent;
  border-radius: 0 8px 8px 0;
  border: 1px solid
    ${props =>
      props.error
        ? props.theme.colors.accent
        : props.filled
        ? props.theme.colors.white
        : props.theme.colors.secondBlack};
  outline: none;
  &::placeholder {
    color: rgba(255, 255, 255, 0.24);
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
    text-transform: uppercase;
    @media screen and (min-width: 1280px) {
      font-size: 16px;
      line-height: 19px;
    }
  }
  @media (min-width: 768px) {
    width: 200px;
  }
  @media (min-width: 1280px) {
    padding-top: 22px;
    padding-bottom: 22px;
    width: 333px;
    height: 64px;
    font-size: 16px;
    line-height: 19px;
    border-radius: 0 12px 12px 0;
  }
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 16px;
  @media (min-width: 1280px) {
    margin-bottom: 24px;
  }
`;

export const ButonForm = styled.button`
  width: 216px;
  padding: 10px 0 12px 0;
  border-radius: 8px;
  background: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  font-family: 'RightGroteskCompactBlack';
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  transition-property: color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  &:hover {
    color: ${props => props.theme.colors.secondBlack};
  }
  @media (min-width: 768px) {
    width: 247px;
  }
  @media (min-width: 1280px) {
    width: 397px;
    padding: 16px 0 20px 0;
    font-size: 28px;
    line-height: 34px;
    border-radius: 12px;
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  bottom: -12px;
  right: 0;
  color: ${props => props.theme.colors.accent};
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
`;
