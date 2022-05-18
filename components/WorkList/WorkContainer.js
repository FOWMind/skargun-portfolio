import styled from 'styled-components'
import WorkItem from './WorkItem'

export default function WorkContainer({ filteredItems, amountDisplayed }) {
  return (
    <StyledWorkContainer>
      {filteredItems
        .slice(
          0,
          amountDisplayed <= filteredItems.length
            ? amountDisplayed
            : filteredItems.length
        )
        .map((work) => (
          <WorkItem key={work.id} work={work} />
        ))}
    </StyledWorkContainer>
  )
}

const StyledWorkContainer = styled.div`
  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`
