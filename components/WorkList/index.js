import styled from 'styled-components'
import { useState, useEffect } from 'react'

// Constants
import { LOAD_STATES } from '../../utils/constants'

// Components
import Filter from './Filter'
import { Title } from '../Layout/Title'
import WorkContainer from './WorkContainer'
import ChangeContentAmount from './ChangeContentAmount'
import Loading from '../Layout/Loading'

const initialAmountDisplayed = 6

export default function WorkList({ works, loadState }) {
  const [amountDisplayed, setAmountDisplayed] = useState(initialAmountDisplayed)
  const [workItems, setWorkItems] = useState(null)
  const [currentCategory, setCurrentCategory] = useState('todo')
  const [filteredItems, setFilteredItems] = useState(null)

  useEffect(() => {
    if (works) {
      setWorkItems(works)
      setFilteredItems(works)
    }
  }, [works])

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

      {loadState === LOAD_STATES.IN_PROGRESS && <Loading />}

      {loadState === LOAD_STATES.FINISHED && filteredItems?.length > 0 && (
        <>
          <Title featured>Portafolio</Title>
          <WorkContainer
            filteredItems={filteredItems}
            amountDisplayed={amountDisplayed}
          />
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
