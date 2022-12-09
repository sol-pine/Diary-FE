import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: 400;
    color: ${theme.main};
    box-sizing: border-box;
  }

  *::before, *::after {
    margin: 0;
    padding: 0;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  img {
    border: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  input {
    :focus {
      outline: .5px solid ${theme.main};
    }
  }
`;

export default GlobalStyle;