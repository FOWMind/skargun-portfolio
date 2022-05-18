import styled from 'styled-components'
import Image from 'next/image'

// Components
import Button from '../Layout/Button'

export default function Error404() {
  return (
    <Container>
      <Image
        src="/img/error/404.png"
        quality={0}
        loading="lazy"
        width="400"
        height="300"
        alt=""
      />
      <ErrorTitle>Lo sentimos</ErrorTitle>
      <ErrorText>
        Al parecer el sitio que buscas no existe o se movio de lugar
      </ErrorText>
      <ErrorLink href="/">
        <Button>Volver al inicio</Button>
      </ErrorLink>
    </Container>
  )
}

const Container = styled.div`
  max-width: 500px;
  margin: 2rem auto;
`

const ErrorTitle = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  color: #59eb9d;

  @media screen and (min-width: 500px) {
    font-size: 5rem;
  }
`

const ErrorText = styled.p`
  font-size: 1rem;
  color: #fff;

  @media screen and (min-width: 500px) {
    font-size: 2rem;
  }
`

const ErrorLink = styled.a`
  margin-top: 1rem;
  display: inline-block;
`
