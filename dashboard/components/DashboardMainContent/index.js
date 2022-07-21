import styled from 'styled-components'

// Components
import DashboardViewWorks from '../DashboardViewWorks'
import DashboardAddWork from '../DashboardAddWork'

export default function DashboardMainContent({ activeSection }) {
  return (
    <Main>
      {activeSection === 'view-works' && <DashboardViewWorks />}
      {activeSection === 'add-work' && <DashboardAddWork />}
      {activeSection === 'edit-work' && <h1>Editando trabajo</h1>}
      {activeSection === 'delete-work' && <h1>Eliminando trabajo</h1>}
    </Main>
  )
}

const Main = styled.main`
  padding: 2rem;
  background-color: #fff;
  min-height: 100vh;

  @media screen and (min-width: 800px) {
    padding-left: 30ch;
    padding-right: 5ch;
  }
`
