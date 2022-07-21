import styled from 'styled-components'
import { useEffect, useContext } from 'react'

// Contexts
import { DataContext } from '../../../contexts/DataContext'

// Constants
import { LOAD_STATES } from '../../../utils/constants'

// Components
import { DashboardTitle } from '../Layout/DashboardTitle'
import DashboardSingleWork from '../DashboardSingleWork'
import Loading from '../../../components/Layout/Loading'

export default function DashboardViewWorks() {
  const {
    data: { works, worksLoadState },
  } = useContext(DataContext)

  useEffect(() => {
    console.log(works, worksLoadState)
  }, [works, worksLoadState])

  return (
    <Container>
      <DashboardViewWorksTitle>Trabajos</DashboardViewWorksTitle>
      <WorksContainer>
        {worksLoadState === LOAD_STATES.IN_PROGRESS && <Loading color="#000" />}
        {works.length > 0 &&
          worksLoadState === LOAD_STATES.FINISHED &&
          works.map((work, i) => (
            <DashboardSingleWork key={work.id || i} {...work} />
          ))}
      </WorksContainer>
    </Container>
  )
}

const Container = styled.div``

const DashboardViewWorksTitle = styled(DashboardTitle)`
  margin-bottom: 1rem;
`

const WorksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`
