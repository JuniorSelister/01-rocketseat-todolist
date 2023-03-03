import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 epx ${(props) => props.theme['gray-100']};
  }

  body {
    background: ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme['gray-100']};
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialised;
    
  }

  border-style, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: bold;
  }

  input {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }
`
