import styled from 'styled-components'
import { useState } from 'react'
import { AiFillCloseSquare } from 'react-icons/ai'

export default function Modal({ show, setShow, children }) {
  const [showModal, setShowModal] = useState(show)
  return (
    <>
      {showModal && (
        <>
          <ModalOverlay onClick={() => setShow(false)} />
          <ModalContainer onClick={() => setShow(false)}>
            <CloseModalBtn title="Cerrar">
              <AiFillCloseSquare />
            </CloseModalBtn>
            {children}
          </ModalContainer>
        </>
      )}
    </>
  )
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.filledPrimary.overlayBg};
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 2.5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 600;
  width: 90%;
  height: 80%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.mainClr};

  a {
    color: ${({ theme }) => theme.filledPrimary.overlayClr};
    font-size: 120%;
  }

  & > div {
    height: 100%;
    background-color: ${({ theme }) => theme.mainBg};
  }
`

const CloseModalBtn = styled.button`
  outline: none;
  border: none;
  font-size: 3rem;
  color: ${({ theme }) => theme.filledPrimary.bg};
  cursor: pointer;
  background: none;
  display: block;
  margin-left: auto;
`
