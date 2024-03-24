import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { IoCloseSharp } from 'react-icons/io5';

export const WrapMobil = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const WrapTable = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 10px;
  }
  @media (min-width: 1280px) {
    gap: 2px;
  }
`;

export const AboutTitle = styled.h2`
  font-family: 'RightGroteskCompactBlack';
  font-size: 40px;
  font-weight: 900;
  line-height: 40px;
  text-transform: uppercase;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    margin-bottom: 68px;
    width: 269px;
    font-size: 60px;
    line-height: 60px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 56px;
    width: 538px;
    font-size: 120px;
    line-height: 120px;
  }
`;

export const AboutSpan = styled.span`
  color: ${props => props.theme.colors.accent};
`;

export const Span = styled.span`
  display: block;
  @media (min-width: 768px) {
    display: inline;
  }
`;

export const AboutText = styled.p`
  margin-bottom: 36px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  text-align: right;
  text-indent: 110px;
  @media (min-width: 768px) {
    text-indent: 0;
    margin-bottom: 0;
    width: 275px;
    margin-left: 36px;
  }
  @media (min-width: 1280px) {
    margin-left: 66px;
    padding-top: 24px;
    width: 409px;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 34px;
  }
`;

export const SpanAboutText = styled.span`
  @media (min-width: 768px) {
    display: block;
  }
`;

export const WrapIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
  @media (min-width: 1280px) {
    width: 417px;
    margin-bottom: 36px;
  }
`;

export const IconSharp = styled(IoCloseSharp)`
  width: 24px;
  height: 24px;
  @media (min-width: 1280px) {
    width: 36px;
    height: 36px;
  }
`;

export const Text = styled.p`
  margin-bottom: 40px;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  text-align: center;
  @media (min-width: 768px) {
    margin-bottom: 0;
    font-size: 16px;
    line-height: 19px;
    width: 269px;
  }
  @media (min-width: 1280px) {
    width: 417px;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const Picture = styled.picture`
  display: flex;
  justify-content: center;
`;

export const WrapBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.accent};
  overflow: hidden;
`;

export const IconSharpBanner = styled(IoCloseSharp)`
  margin-left: 24px;
  margin-right: 24px;
  width: 36px;
  height: 36px;
  @media (min-width: 1280px) {
    margin-left: 36px;
    margin-right: 36px;
  }
`;

const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const TextBanner = styled.div`
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 0 10px 0;
  font-family: 'RightGroteskCompactBlack';
  font-size: 36px;
  font-weight: 900;
  line-height: 36px;
  text-transform: uppercase;
  animation: ${marquee} 7s ease-in-out infinite;
  @media (min-width: 1280px) {
    font-size: 64px;
    line-height: 64px;
    padding-bottom: 16px;
  }
`;
