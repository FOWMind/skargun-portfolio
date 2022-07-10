import styled from 'styled-components'

export default function DashboardLayout({ children }) {
  return <Layout>{children}</Layout>
}

const Layout = styled.div`
  position: relative;
  font-family: 'Montserrat', -apple-system, sans-serif;
`
