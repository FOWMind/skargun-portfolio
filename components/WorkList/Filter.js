import styled from 'styled-components'
import { useState } from 'react'
import { StyledButton } from '../Layout/Button'
import { BsFilterLeft } from 'react-icons/bs'

export default function Filter({
  currentCategoryState: { currentCategory, setCurrentCategory },
  initialAmountDisplayedState: { initialAmountDisplayed, setAmountDisplayed },
  workItems,
  setFilteredItems,
}) {
  const [isFiltering, setFiltering] = useState(true)

  const filterWorkItems = (category) => {
    if (category === currentCategory) return
    setCurrentCategory(category)

    setAmountDisplayed(initialAmountDisplayed)
    if (category == 'todo') {
      setFilteredItems(workItems)
      return
    }
    const newWorkItems = workItems.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    )
    setFilteredItems(newWorkItems)
  }

  const differentValues = (arr) => arr.length > 0 && new Set(arr).size !== 1

  const getCategories = (arr) => {
    const reduced = arr.reduce((acc, el) => [...acc, el.category], [])
    return [...new Set(reduced)]
  }

  return (
    <FilterContainer>
      {workItems && differentValues(getCategories(workItems)) && (
        <>
          <FilterBtn onClick={() => setFiltering((prev) => !prev)}>
            Filtrar contenido <BsFilterLeft />
          </FilterBtn>
          {isFiltering && (
            <Filters>
              <FilterItem>
                <FilterItemBtn
                  active={currentCategory === 'todo' ? true : false}
                  onClick={() => filterWorkItems('todo')}
                >
                  Todo
                </FilterItemBtn>
              </FilterItem>
              {getCategories(workItems).map((category, i) => (
                <FilterItem key={i}>
                  <FilterItemBtn
                    active={category === currentCategory ? true : false}
                    onClick={() => filterWorkItems(category)}
                  >
                    {category}
                  </FilterItemBtn>
                </FilterItem>
              ))}
            </Filters>
          )}
        </>
      )}
    </FilterContainer>
  )
}

const FilterContainer = styled.div`
  margin-bottom: 2rem;
`

const FilterBtn = styled(StyledButton)`
  margin-bottom: 0.25rem;

  & > * {
    vertical-align: middle;
    font-size: 1.25rem;
  }
`

const Filters = styled.ul`
  list-style: none;
  max-height: 120px;
  overflow-y: auto;
`

const FilterItem = styled.li`
  color: #181818;
  display: inline-block;
  font-size: 1rem;
  margin: 0 0.25rem 0.25rem 0;
`

const FilterItemBtn = styled(StyledButton)`
  background-color: ${(props) => (props.active ? '#1b5052' : '#e8e8e8')};
  color: ${(props) => (props.active ? '#fff' : '#181818')};
`
