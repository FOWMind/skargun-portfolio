import styled from 'styled-components'

// Components
import Title from '../Layout/Title'

export default function Contact() {
  return (
    <section>
      <Title featured>Contacto</Title>

      <ContactItems>
        <ContactItem>
          <ContactItemText>
            Correo:{' '}
            <FeaturedLink href="mailto:skargun@gmail.com">
              Skargun@gmail.com
            </FeaturedLink>
          </ContactItemText>
        </ContactItem>
        <ContactItem>
          <ContactItemText>
            Instagram:{' '}
            <FeaturedLink href="https://instagram.com/skargun/" target="_blank">
              @Skargun
            </FeaturedLink>
          </ContactItemText>
        </ContactItem>
      </ContactItems>

      <ContactDescription>
        <ContactDescriptionImage src={``} />
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
  color: #fff;
  background-color: #1b5052;
  font-size: 1.15rem;
  font-weight: 400;
  text-transform: uppercase;
  padding: 0 0.5rem;
`

const FeaturedLink = styled.a`
  color: #59eb9d;
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
  color: #fff;
  text-transform: uppercase;
  font-size: 1.15rem;
  font-weight: 400;
  line-height: 1.25;
  max-width: 90ch;
`
