import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.backgroundimg};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
