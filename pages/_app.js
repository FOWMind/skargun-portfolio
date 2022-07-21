import styled from 'styled-components'
import '../styles/globals.css'
import { ThemeProvider } from '../contexts/ThemeContext'
import { DataProvider } from '../contexts/DataContext'

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <ThemeProvider>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </DataProvider>
  )
}

export default MyApp

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.mainBg};
  min-height: 100vh;
`
