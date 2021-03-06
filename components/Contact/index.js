import styled from 'styled-components'

// Components
import { Title } from '../Layout/Title'

export default function Contact() {
  return (
    <section>
      <Title featured>Contacto</Title>

      <ContactItems>
        <ContactItem>
          <ContactItemText>
            Correo:{' '}
            <FeaturedLink href="mailto:oskricatura@gmail.com">
              oskricatura@gmail.com
            </FeaturedLink>
          </ContactItemText>
        </ContactItem>
        <ContactItem>
          <ContactItemText>
            Instagram:{' '}
            <FeaturedLink
              href="https://www.instagram.com/osquipitos/"
              target="_blank"
            >
              @osquipitos
            </FeaturedLink>
          </ContactItemText>
        </ContactItem>
      </ContactItems>

      <ContactDescription>
        <ContactDescriptionImage src="/img/profile/main.png" />
        <ContactDescriptionText>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis Laoreet
          velit turpis, venenatis scelerisque nibh convallist a. Maecenas Eu
          Eleifend purus quisque egestas viverra rhoncus.
          <br />
          <br />
          Quisque pellentesque molestie lorem, quis tincidunt lacus tincidunt
          eu. Donec sodales mi eu pellentesque luctus. In sollicitudin metus ut
          enim vestibulum semper.
        </ContactDescriptionText>
      </ContactDescription>
    </section>
  )
}

const ContactItems = styled.ul`
  list-style: none;
  padding: 0;
`

const ContactItem = styled.li`
  display: block;
  margin-bottom: 0.5rem;
`

const ContactItemText = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.filledSecondary.clr};
  background-color: ${({ theme }) => theme.filledSecondary.bg};
  text-transform: uppercase;
  font-size: 1.15rem;
  font-weight: 400;
  padding: 0.5rem;
`

const FeaturedLink = styled.a`
  color: ${({ theme }) => theme.filledSecondary.featuredClr};
  font-weight: 400;
  text-decoration: none;
`

const ContactDescription = styled.div`
  margin: 2rem 0;

  @media screen and (min-width: 700px) {
    overflow: hidden; // This line solve the problem with float:; on Image
  }
`

const ContactDescriptionImage = styled.img.attrs((props) => ({
  ...props,
  alt: props.alt || '',
}))`
  width: 250px;
  height: 250px;
  background-color: #181818;
  margin-right: 1rem;
  object-fit: cover;

  @media screen and (min-width: 700px) {
    float: left;
  }
`

const ContactDescriptionText = styled.p`
  color: ${({ theme }) => theme.mainClr};
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 400;
  font-family: 'Montserrat', 'Koulen', sans-serif;
  max-width: 90ch;
`
