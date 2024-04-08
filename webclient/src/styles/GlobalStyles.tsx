import { createGlobalStyle } from 'styled-components';

// 리셋 스타일
const ResetStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
     v2.0 | 20110126
     License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

// 폰트 설정
const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    src: url('../../public/fonts/NotoSansKR-Thin.woff') format("woff");
    font-weight: 100;
    font-display: swap;
  }

  @font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    src: url('../../public/fonts/NotoSansKR-ExtraLight.woff') format("woff");
    font-weight: 200;
    font-display: swap;
  }

  @font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    src: url('../../public/fonts/NotoSansKR-Light.woff') format("woff");
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    src: url('../../public/fonts/NotoSansKR-Regular.woff') format("woff");
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    src: url('../../public/fonts/NotoSansKR-Medium.woff') format("woff");
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    src: url('../../public/fonts/NotoSansKR-SemiBold.woff') format("woff");
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    src: url('../../public/fonts/NotoSansKR-Bold.woff') format("woff");
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    src: url('../../public/fonts/NotoSansKR-ExtraBold.woff') format("woff");
    font-weight: 800;
    font-display: swap;
  }

  @font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    src: url('../../public/fonts/NotoSansKR-Black.woff') format("woff");
    font-weight: 900;
    font-display: swap;
  }

  @font-face {
    font-family: 'InriaSans';
    font-style: normal;
    src: url('../../public/fonts/InriaSans-Light.woff') format("woff");
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: 'InriaSans';
    font-style: italic;
    src: url('../../public/fonts/InriaSans-LightItalic.woff') format("woff");
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: 'InriaSans';
    font-style: normal;
    src: url('../../public/fonts/InriaSans-Regular.woff') format("woff");
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'InriaSans';
    font-style: italic;
    src: url('../../public/fonts/InriaSans-RegularItalic.woff') format("woff");
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'InriaSans';
    font-style: normal;
    src: url('../../public/fonts/InriaSans-Bold.woff') format("woff");
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'InriaSans';
    font-style: italic;
    src: url('../../public/fonts/InriaSans-BoldItalic.woff') format("woff");
    font-weight: 700;
    font-display: swap;
  }


`;

// 전역 스타일
const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'NotoSansKR';
    font-weight: 400;
    min-height: 100vh;
  }
`;

export { ResetStyles, FontStyles, GlobalStyles };
