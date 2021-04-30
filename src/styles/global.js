import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

import '../typefaces/typeface.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    height: 100%;
    box-sizing: border-box;
    font-family: Quicksand;
    font-size: 16px;

  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  *::-moz-selection {
    background: var(--theme-ui-colors-green,#0e9594);
    color: white;
  }
  *::selection {
    background: var(--theme-ui-colors-green,#0e9594);
    color: white;
  }
  body {
    height: 100%;
  }
  #root {
    height: 100%;
    @media screen {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

export default GlobalStyle;
