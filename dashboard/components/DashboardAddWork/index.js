import styled from 'styled-components'
import { useState, useRef } from 'react'
import { Formik } from 'formik'

// Components
import { DashboardTitle } from '../Layout/DashboardTitle'
import DashboardAddWorkForm from './DashboardAddWorkForm'

// Utils
import { getBase64FromFile, getBase64FromFiles } from '../../../utils'

// Formik values
import {
  DashboardAddWorkInitialValues,
  DashboardAddWorkValidationSchema,
} from '../../../utils/formikData'

export default function DashboardAddWork() {
  const [featuredImageState, setFeaturedImageState] = useState()
  const [imagesState, setImagesState] = useState([])
  const formikRef = useRef()

  const validateFeaturedImage = (featuredImage) => {
    let error

    if (!featuredImage) {
      error = 'Imagen requerida.'
    } else {
      if (featuredImage.type?.substr(0, 5) !== 'image') {
        error = 'El archivo debe ser una imagen.'
      } else if (featuredImage.size > 2000000) {
        error = 'La imagen no puede tener un peso mayor a 2MB.'
      }
    }

    if (!error) {
      getBase64FromFile(featuredImage, (base64) => {
        setFeaturedImageState({ file: featuredImage, src: base64 })
      })
    } else {
      setFeaturedImageState({})
    }

    return error
  }

  const validateImages = (images) => {
    let error

    if (!images || images.length <= 0) {
      error = 'Debe haber alguna imagen.'
    }
    return error
  }

  const handleSubmit = (values, actions) => {
    getBase64FromFile(values.featuredImage, (base64) => {
      const newValues = {
        ...values,
        featuredImageRaw: base64,
      }
      console.log('to backend: ', newValues)
      console.log('subiendo datos al servidor...')
      fetch('http://localhost:3000/api/works', {
        method: 'post',
        body: JSON.stringify(newValues),
      })
        .then((response) => {
          if (response.ok) {
            console.log('salió todo bien 👍')
            return response.json()
          } else {
            console.warn('no salió todo bien 👎')
            Promise.reject()
          }
          // setImagesState([])
          // formikRef.current.resetForm()
        })
        .then((data) => {
          console.log(data)
        })
        .finally(() => {
          console.log('se subieron los datos al servidor.')
        })
    })
    actions.setSubmitting(false)
  }

  return (
    <Container>
      <DashboardAddWorkTitle>Agregar trabajo</DashboardAddWorkTitle>
      <Formik
        innerRef={formikRef}
        initialValues={DashboardAddWorkInitialValues}
        onSubmit={handleSubmit}
        validationSchema={DashboardAddWorkValidationSchema}
      >
        {({ values, errors, setFieldValue, setFieldTouched }) => (
          <DashboardAddWorkForm
            values={values}
            errors={errors}
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            validateFeaturedImage={validateFeaturedImage}
            validateImages={validateImages}
            featuredImageState={featuredImageState}
            imagesState={imagesState}
            setImagesState={setImagesState}
          />
        )}
      </Formik>
    </Container>
  )
}

const DashboardAddWorkTitle = styled(DashboardTitle)`
  margin-bottom: 1rem;
`

const Container = styled.div`
  max-width: 700px;
`
