import styled from 'styled-components'

export const Title = styled.h2`
  color: ${({ theme }) => theme.mainClr};
  font-family: inherit;
  font-size: ${({ featured }) => (featured ? '3rem' : '2rem')};
  font-weight: 400;
  padding: 1rem 0;
`
