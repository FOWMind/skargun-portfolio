import styled from 'styled-components'
import Link from 'next/link'

// Components
import { StyledButton } from '../Layout/Button'

export default function Header({ home }) {
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
        <NavigationButton>Ver Curriculum</NavigationButton>
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
  color: #fff;
  text-transform: uppercase;
  font-weight: 400;
`

const LogoName = styled.h1`
  ${LogoSharedStyles}
  font-size: 5rem;
  display: block;
`

const LogoDesc = styled.p`
  ${LogoSharedStyles}
  font-size: 1.665rem;
  margin-top: -0.5rem;
`

// NAVIGATION
const Navigation = styled.nav``

const NavigationButton = styled(StyledButton)`
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }
`
