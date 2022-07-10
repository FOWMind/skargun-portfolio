import styled from 'styled-components'
import { useState } from 'react'

// Data
import { works as data } from '../../../data'

// Components
import { DashboardTitle } from '../Layout/DashboardTitle'
import DashboardSingleWork from '../DashboardSingleWork'

export default function DashboardViewWorks() {
  const [works, setWorks] = useState(data)

  return (
    <Container>
      <DashboardViewWorksTitle>Trabajos</DashboardViewWorksTitle>
      <WorksContainer>
        {works &&
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
