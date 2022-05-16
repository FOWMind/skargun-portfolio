import styled from 'styled-components'
import { StyledButton } from '../Layout/Button'

export default function Filter({
  currentCategoryState: { currentCategory, setCurrentCategory },
  initialAmountDisplayedState: { initialAmountDisplayed, setAmountDisplayed },
  workItems,
  setFilteredItems,
}) {
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
          <FilterTitle>Filtrar contenido</FilterTitle>
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
        </>
      )}
    </FilterContainer>
  )
}

const FilterContainer = styled.div`
  margin-bottom: 2rem;
`

const FilterTitle = styled(StyledButton)`
  cursor: text;
  margin-bottom: 0.25rem;
`

const Filters = styled.ul`
  list-style: none;
`

const FilterItem = styled.li`
  color: #181818;
  display: inline-block;
  font-size: 1rem;
  margin-right: 0.25rem;
`

const FilterItemBtn = styled(StyledButton)`
  background-color: ${(props) => (props.active ? '#1b5052' : '#e8e8e8')};
  color: ${(props) => (props.active ? '#fff' : '#181818')};
`
