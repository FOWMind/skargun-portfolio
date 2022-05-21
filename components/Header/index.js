import styled from 'styled-components'
import Link from 'next/link'
import { isEqual } from 'lodash'
import { useContext } from 'react'
import { ThemeContext, themes } from '../../contexts/ThemeContext'

// Components
import { Button } from '../Layout/Button'
import Toggle from '../Layout/Toggle'
import CVButton from '../Layout/CVButton'

export default function Header({ home }) {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const HandleToggleClick = (setState) => {
    toggleTheme()
    setState((prev) => !prev)
  }

  const HandleToggleInit = (setState) => {
    const currentThemeValue = isEqual(theme, themes.dark)
    setState(currentThemeValue)
  }

  return (
    <Container>
      <Link href="/">
        <a>
          <LogoContainer>
            <LogoName>Skargun</LogoName>
            <LogoDesc>Digital Artist & Animator</LogoDesc>
          </LogoContainer>
        </a>
      </Link>
      <Navigation>
        {!home && (
          <NavigationButton>
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </NavigationButton>
        )}
        <CVButton style={StyledCVButton} />
        <Toggle onInit={HandleToggleInit} onClick={HandleToggleClick} />
      </Navigation>
    </Container>
  )
}

const Container = styled.header`
  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

// LOGO
const LogoContainer = styled.div`
  margin-bottom: 1rem;
  @media screen and (min-width: 700px) {
    margin-bottom: 0;
  }
`

const LogoSharedStyles = `
  text-transform: uppercase;
  font-weight: 400;
`

const LogoName = styled.h1`
  ${LogoSharedStyles}
  color: ${({ theme }) => theme.mainClr};
  font-size: 5rem;
  display: block;
`

const LogoDesc = styled.p`
  ${LogoSharedStyles}
  color: ${({ theme }) => theme.mainClr};
  font-size: 1.665rem;
  margin-top: -0.5rem;
`

// NAVIGATION
const Navigation = styled.nav``

const NavigationButton = styled(Button)`
  margin: 0 1rem 1rem 0;

  &:last-of-type {
    margin-right: 0;
  }
`

const StyledCVButton = {
  margin: '0 1rem 1rem 0',
}
