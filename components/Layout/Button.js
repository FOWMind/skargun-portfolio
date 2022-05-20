import styled from 'styled-components'

export const Button = styled.button.attrs((props) => ({
  ...props,
}))`
  outline: none;
  border: none;
  padding: 0 0.5rem;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.filledPrimary.bg};
  color: ${({ theme }) => theme.filledPrimary.clr};
  font-size: 1.15rem;
  font-weight: 500;
  font-family: inherit;
  border-radius: 5px;
  cursor: pointer;
`
