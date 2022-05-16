import styled from 'styled-components'
import { Layout } from '../AppLayout'
import Button from '../Layout/Button'

export default function Footer() {
  return (
    <StyledFooter>
      <FooterLayout>
        <FooterTitle>Skargun</FooterTitle>
        <Button>Ver Curriculum</Button>
      </FooterLayout>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: #1b5052;
`

const FooterLayout = styled(Layout)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const FooterTitle = styled.h3`
  color: #fff;
  font-family: inherit;
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
`
