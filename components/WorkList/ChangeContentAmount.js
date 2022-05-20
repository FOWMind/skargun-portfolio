import styled from 'styled-components'
import { BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs'

// Components
import { Button } from '../Layout/Button'

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
          <Btn onClick={() => changeMaxAmount('more')} title="Mostrar más">
            Mostrar mas
            <BsFillCaretDownFill />
          </Btn>
        )}
        {amountDisplayed > initialAmountDisplayed && (
          <Btn
            less
            onClick={() => changeMaxAmount('less')}
            title="Mostrar menos"
          >
            Mostrar menos
            <BsFillCaretUpFill />
          </Btn>
        )}
      </BtnContainer>
    </>
  )
}

const BtnContainer = styled.div`
  text-align: center;
`

const Btn = styled(Button)`
  background-color: ${({ less, theme }) =>
    less ? theme.filledTertiary.bg : theme.filledPrimary.bg};
  color: ${({ less, theme }) =>
    less ? theme.filledTertiary.clr : theme.filledPrimary.clr};
  margin-right: 0.5rem;

  &:last-of-type {
    margin-right: 0;
  }

  & > * {
    vertical-align: middle;
    color: ${({ less, theme }) =>
      less ? theme.filledTertiary.clr : theme.filledPrimary.clr};
    margin-left: 0.25rem;
    font-size: 1.25rem;
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
