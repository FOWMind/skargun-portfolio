import styled from 'styled-components'

const DashboardTitle = styled.h2.attrs((props) => ({
  ...props,
}))`
  color: #181616;
  font-size: 3rem;
  font-weight: 700;

  /* position: relative;
  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: red;
    position: absolute;
    top: 0.7rem;
    left: -100%;
  } */
`

export { DashboardTitle }
