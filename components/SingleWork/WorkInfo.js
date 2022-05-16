import styled from 'styled-components'

// Components
import Button from '../Layout/Button'
import Title from '../Layout/Title'

export default function WorkInfo({ workTitle, workRepo }) {
  return (
    <StyledWorkInfo>
      <Title featured>{workTitle}</Title>
      {workRepo?.url && (
        <StyledWorkInfoLink href={workRepo.url} target="_blank">
          <Button>Ver repositorio</Button>
        </StyledWorkInfoLink>
      )}

      {workRepo?.demoUrl && (
        <StyledWorkInfoLink href={workRepo.demoUrl} target="_blank">
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
  margin-right: 0.5rem;
`
