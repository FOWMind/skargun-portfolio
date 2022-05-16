import styled from 'styled-components'

export default function Image(props) {
  return <StyledImage {...props} />
}

const StyledImage = styled.img.attrs((props) => ({
  ...props,
}))`
  background-color: #1b5052;
  border-right: 0;
  object-fit: cover;
  display: block;
  width: 100%;
`

export { StyledImage }
