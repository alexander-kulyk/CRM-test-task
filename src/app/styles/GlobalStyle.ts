import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.appBackground};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-synthesis: none;
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.appBackground};
  }

  button,
  input,
  select {
    font: inherit;
  }

  button {
    border: 0;
  }

  a {
    color: inherit;
  }

  h1,
  h2,
  p {
    margin: 0;
  }

  h1,
  h2 {
    color: ${({ theme }) => theme.colors.textStrong};
    line-height: 1.15;
  }

  #root {
    min-height: 100vh;
  }
`
