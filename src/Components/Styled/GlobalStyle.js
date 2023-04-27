import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    color: black;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    marfgin: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Pacifico;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    box-shadow: none;
    outline: none;
  }

  button:hover {
    opacity: 0.9;
    transition: all 0.3s ease-in-out;
  }
`;