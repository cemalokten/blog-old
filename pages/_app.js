import { createGlobalStyle } from 'styled-components'
import '../styles/globals.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-family: 'medium';
  }

  body {
    background-color: white;
 
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
