import { useState } from 'react'
import { PDFObject } from 'react-pdfobject'

// Components
import { Button } from './Button'
import Modal from './Modal'

export default function CVButton({ style }) {
  const [showCV, setShowCV] = useState(false)
  return (
    <>
      {PDFObject.supportsPDFs ? (
        <Button style={style} onClick={() => setShowCV(true)}>
          Ver Curriculum
        </Button>
      ) : (
        <Button style={style}>
          <a href="/pdf/cv.pdf" target="_blank">
            Descargar Curriculum
          </a>
        </Button>
      )}
      {showCV && (
        <Modal show={showCV} setShow={setShowCV}>
          <PDFObject url="/pdf/cv.pdf" />
        </Modal>
      )}
    </>
  )
}
