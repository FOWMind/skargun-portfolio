import styled from 'styled-components'

export default function DashboardButton(props) {
  return <StyledButton {...props} />
}

const StyledButton = styled.button`
  outline: none;
  border: 2px solid transparent;
  border-radius: 10px;
  height: 35px;
  padding: 0 1rem;
  font: inherit;
  font-size: 0.9rem;
  font-weight: 500;

  display: inline-block;
  cursor: pointer;
  margin-top: 1rem;
  background-color: #000;
  color: #fff;

  &:hover,
  &:active,
  &:focus,
  &:focus-visible {
    background-color: #333;
  }
`

export { StyledButton }
