import styled from 'styled-components'

// Components
import { Title } from '../Layout/Title'

export default function Notes({ notes }) {
  return (
    <StyledNotes>
      <Title>Tareas realizadas</Title>
      <StyledNotesList>
        {notes.map((note, i) => (
          <StyledNotesListItem key={i}>{note}</StyledNotesListItem>
        ))}
      </StyledNotesList>
    </StyledNotes>
  )
}

const StyledNotes = styled.div``

const StyledNotesList = styled.div``

const StyledNotesListItem = styled.p`
  color: ${({ theme }) => theme.filledTertiary.clr};
  background-color: ${({ theme }) => theme.filledTertiary.bg};
  display: inline-block;
  font-size: 1.25rem;
  margin: 0 0.5rem 0.5rem 0;
  padding: 0.5rem;

  &:last-of-type {
    margin-right: 0;
    margin-bottom: 0;
  }
`
