import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Helvetica Neue', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    font-size: 1.6rem;
    transition: all ease-in-out 200ms;
  }

  button {
    cursor: pointer;
  }
`;
