import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    color: #333333;
    background: #FAFAFA;
  }
  a {
    text-decoration: none;
  }
  input {
    outline: none;
  }
`;

export default GlobalStyle;
