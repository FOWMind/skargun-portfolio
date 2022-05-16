import styled from 'styled-components'

export default function AppLayout({ children }) {
  return <Layout>{children}</Layout>
}

const Layout = styled.div`
  padding: 2rem;
  max-width: 1280px;
  margin: 0 auto;
`

export { Layout }
