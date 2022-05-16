import styled from 'styled-components'

export default function Button({ children, bgColor }) {
  return <StyledButton bgColor={bgColor}>{children}</StyledButton>
}

const StyledButton = styled.button.attrs((props) => ({
  ...props,
}))(
  (props) => `
  outline: none;
  border: none;
  color: #181818;
  text-transform: uppercase;
  font-size: 1.15rem;
  font-weight: 500;
  font-family: inherit;
  padding: 0 0.5rem;
  background-color: ${props.bgColor || '#59EB9D'};
  border-radius: 5px;
  cursor: pointer;
`
)

export { StyledButton }
