import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'

export default function Toggle({ onInit, onClick }) {
  const [isTriggered, setTriggered] = useState(true)

  useEffect(() => {
    onInit(setTriggered)
  }, [onInit])

  return (
    <ToggleSwitch
      triggered={isTriggered}
      onClick={() => onClick(setTriggered)}
      title="Cambiar tema"
    >
      <ToggleSwitchItem triggered={isTriggered}>
        <BsSunFill />
      </ToggleSwitchItem>
      <ToggleSwitchItem triggered={isTriggered}>
        <BsMoonFill />
      </ToggleSwitchItem>
    </ToggleSwitch>
  )
}

const ToggleSwitch = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  width: auto;
  display: inline-block;
  font-size: 1.15rem;
  font-weight: 400;
  font-family: inherit;
  background-color: ${({ theme }) => theme.filledPrimary.bg};
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: ${({ triggered }) => (triggered ? '50%' : '0')};
    width: 50%;
    height: 100%;
    border-radius: 5px;
    transition: left 0.3s ease-in-out;
  }
`

const ToggleSwitchItem = styled.div`
  display: inline-block;
  padding: 0 0.5rem;
  border-radius: 5px;
  height: 100%;
  color: ${({ triggered, theme }) =>
    triggered ? theme.filledPrimary.clr : theme.filledSecondary.clr};
  position: relative;
  z-index: 5;

  &:first-of-type {
    background-color: ${({ triggered, theme }) =>
      triggered ? 'transparent' : theme.filledSecondary.bg};
  }

  &:last-of-type {
    color: ${({ triggered, theme }) =>
      triggered ? theme.filledSecondary.clr : theme.filledPrimary.clr};
    background-color: ${({ triggered, theme }) =>
      triggered ? theme.filledSecondary.bg : 'transparent'};
  }

  & > * {
    vertical-align: middle;
  }
`
