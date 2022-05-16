import styled from 'styled-components'
import { useState, useEffect } from 'react'

// Hooks
import { useFetch } from '../../hooks/'

// Components
import WorkItem from './WorkItem'
import Filter from './Filter'
import Title from '../Layout/Title'
import ChangeContentAmount from './ChangeContentAmount'

const initialAmountDisplayed = 6

export default function WorkList() {
  const [amountDisplayed, setAmountDisplayed] = useState(initialAmountDisplayed)
  const [workItems, setWorkItems] = useState(null)
  const [currentCategory, setCurrentCategory] = useState('todo')
  const [filteredItems, setFilteredItems] = useState(null)
  const { data } = useFetch('/api/work')

  useEffect(() => {
    if (data) {
      setWorkItems(data)
      setFilteredItems(data)
    }
  }, [data])

  return (
    <Wrapper>
      {workItems && (
        <Filter
          currentCategoryState={{ currentCategory, setCurrentCategory }}
          initialAmountDisplayedState={{
            initialAmountDisplayed,
            setAmountDisplayed,
          }}
          workItems={workItems}
          setFilteredItems={setFilteredItems}
        />
      )}

      {filteredItems && (
        <>
          <Title featured>Portafolio</Title>
          <WorkContainer>
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
          </WorkContainer>
          <ChangeContentAmount
            filteredItemsLength={filteredItems.length}
            initialAmountDisplayed={initialAmountDisplayed}
            amountDisplayedState={{ amountDisplayed, setAmountDisplayed }}
          />
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 2rem 0;
`

const WorkContainer = styled.div`
  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`
