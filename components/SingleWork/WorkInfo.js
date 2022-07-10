import styled from 'styled-components'

// Components
import { Button } from '../Layout/Button'
import { Title } from '../Layout/Title'

export default function WorkInfo({ workTitle, workRepository }) {
  return (
    <StyledWorkInfo>
      <Title featured>{workTitle}</Title>
      {workRepository?.url && (
        <StyledWorkInfoLink href={workRepository.url} target="_blank">
          <Button>Ver repositorio</Button>
        </StyledWorkInfoLink>
      )}

      {workRepository?.demoUrl && (
        <StyledWorkInfoLink href={workRepository.demoUrl} target="_blank">
          <Button>Probar DEMO</Button>
        </StyledWorkInfoLink>
      )}
    </StyledWorkInfo>
  )
}

const StyledWorkInfo = styled.div`
  margin: 1rem 0 2rem 0;
`

const StyledWorkInfoLink = styled.a.attrs((props) => ({
  ...props,
}))`
  display: inline-block;
  margin: 0 0.5rem 0.5rem 0;
`
