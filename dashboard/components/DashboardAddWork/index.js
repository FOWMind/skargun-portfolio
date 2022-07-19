import styled from 'styled-components'
import { useState } from 'react'
import { Formik } from 'formik'

// Components
import { DashboardTitle } from '../Layout/DashboardTitle'
import DashboardAddWorkForm from './DashboardAddWorkForm'

// Utils
import { getBase64FromFile } from '../../../utils'

// Formik values
import {
  DashboardAddWorkInitialValues,
  DashboardAddWorkValidationSchema,
} from '../../../utils/formikData'

export default function DashboardAddWork() {
  const [featuredImageState, setFeaturedImageState] = useState()

  const validate = (values) => {
    const { featuredImage } = values
    const errors = {}

    if (!featuredImage) {
      errors.featuredImage = 'Imagen requerida.'
    } else {
      if (featuredImage.type?.substr(0, 5) !== 'image') {
        errors.featuredImage = 'El archivo debe ser una imagen.'
      } else if (featuredImage.size > 2000000) {
        errors.featuredImage = 'La imagen no puede tener un peso mayor a 2MB.'
      }
    }

    if (!errors.featuredImage) {
      getBase64FromFile(featuredImage, (base64) => {
        setFeaturedImageState({ file: featuredImage, src: base64 })
      })
    }

    return errors
  }

  const handleSubmit = (values, actions) => {
    console.log('output: ', values)
    // fetch('http://localhost:3000/api/works', {
    //   method: 'post',
    //   body: JSON.stringify(values),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //   })
    actions.setSubmitting(false)
  }

  return (
    <>
      <DashboardAddWorkTitle>Agregar trabajo</DashboardAddWorkTitle>
      <Formik
        initialValues={DashboardAddWorkInitialValues}
        onSubmit={handleSubmit}
        validationSchema={DashboardAddWorkValidationSchema}
        validate={validate}
      >
        {({ values, errors, setFieldValue, setFieldTouched }) => (
          <DashboardAddWorkForm
            values={values}
            errors={errors}
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            featuredImageState={featuredImageState}
          />
        )}
      </Formik>
    </>
  )
}

const DashboardAddWorkTitle = styled(DashboardTitle)`
  margin-bottom: 1rem;
`
