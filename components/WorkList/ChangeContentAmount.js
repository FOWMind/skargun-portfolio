import styled from 'styled-components'

// Components
import { StyledButton } from '../Layout/Button'

export default function ChangeContentAmount({
  filteredItemsLength,
  initialAmountDisplayed,
  amountDisplayedState: { amountDisplayed, setAmountDisplayed },
}) {
  const jumpsAmount = 6
  const changeMaxAmount = (changeType) => {
    if (changeType === 'more')
      return setAmountDisplayed((prev) => prev + jumpsAmount)
    if (changeType === 'less')
      return setAmountDisplayed((prev) => prev - jumpsAmount)
  }

  return (
    <>
      <BtnContainer>
        {filteredItemsLength > amountDisplayed && (
          <Btn onClick={() => changeMaxAmount('more')}>Mostrar mas</Btn>
        )}
        {amountDisplayed > initialAmountDisplayed && (
          <Btn less onClick={() => changeMaxAmount('less')}>
            Mostrar menos
          </Btn>
        )}
      </BtnContainer>
    </>
  )
}

const BtnContainer = styled.div`
  text-align: center;
`

const Btn = styled(StyledButton)`
  background-color: ${(props) => (props.less ? '#e8e8e8' : '#59EB9D')};
  margin-right: 0.5rem;

  &:last-of-type {
    margin-right: 0;
  }
`

// const Btn = styled.button.attrs((props) => ({
//   ...props,
// }))`
//   outline: none;
//   border: none;
//   color: #282828;
//   font-family: inherit;
//   font-size: inherit;
//   background-color: ${(props) => (props.less ? '#e8e8e8' : '#59EB9D')};
//   box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.25);
//   padding: 0.5rem;
//   cursor: pointer;
// `
