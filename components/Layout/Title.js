import styled from 'styled-components'

export default function Title({ featured, children }) {
  return <StyledTitle featured={featured}>{children}</StyledTitle>
}

const StyledTitle = styled.h2(
  (props) => `
  color: #fff;
  font-family: inherit;
  font-size: ${props.featured ? '3rem' : '2rem'};
  font-weight: 400;
`
)
