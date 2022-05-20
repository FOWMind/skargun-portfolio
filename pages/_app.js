import styled from 'styled-components'
import '../styles/globals.css'
import { ThemeProvider } from '../contexts/ThemeContext'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ThemeProvider>
  )
}

export default MyApp

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.mainBg};
`
