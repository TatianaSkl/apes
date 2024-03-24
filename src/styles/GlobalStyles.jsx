import { css } from '@emotion/react';
import { theme } from 'styles/theme';
import BiroScriptPlusBold from '../fonts/BiroScriptPlus-Bold.ttf';
import BiroScriptUSPlusBold from '../fonts/BiroScriptUSPlus-Bold.ttf';
import MessinaSansMonoRegular from '../fonts/MessinaSansMono-Regular.ttf';
import MessinaSansMonoSemiBold from '../fonts/MessinaSansMono-SemiBold.ttf';
import RightGroteskCompactBlack from '../fonts/RightGrotesk-CompactBlack.otf';

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  @font-face {
    font-family: 'BiroScriptPlusBold';
    src: local('BiroScriptPlusBold'), url(${BiroScriptPlusBold}) format('truetype');
  }

  @font-face {
    font-family: 'BiroScriptUSPlusBold';
    src: local('BiroScriptUSPlusBold'), url(${BiroScriptUSPlusBold}) format('truetype');
  }

  @font-face {
    font-family: 'MessinaSansMonoRegular';
    src: local('MessinaSansMonoRegular'), url(${MessinaSansMonoRegular}) format('truetype');
  }

  @font-face {
    font-family: 'MessinaSansMonoSemiBold';
    src: local('MessinaSansMonoSemiBold'), url(${MessinaSansMonoSemiBold}) format('truetype');
  }

  @font-face {
    font-family: 'RightGroteskCompactBlack';
    src: local('RightGroteskCompactBlack'), url(${RightGroteskCompactBlack}) format('opentype');
  }

  body {
    margin: 0;
    font-family: 'MessinaSansMonoRegular', monospaced;
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    min-height: 100vh;
    font-style: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
