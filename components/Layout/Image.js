import styled from 'styled-components'

export const Image = styled.img.attrs((props) => ({
  ...props,
}))`
  background-color: ${({ theme }) => theme.filledSecondary.bg};
  border-right: 0;
  object-fit: cover;
  display: block;
  width: 100%;
`
