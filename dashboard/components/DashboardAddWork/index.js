import styled from 'styled-components'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

// Components
import { DashboardTitle } from '../Layout/DashboardTitle'
import Label from '../Layout/Label'
import Tooltip from '../Layout/Tooltip'
import Input from '../Layout/Input'
import Select from '../Layout/Select'
import Option from '../Layout/Option'
import EditableList from '../Layout/EditableList'
import DashboardButton from '../Layout/DashboardButton'

const websiteRegex =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/

export default function DashboardAddWork() {
  const initialValues = {
    title: '',
    category: '',
    slug: '',
    repository: {
      url: '',
      demoUrl: '',
    },
    note: '',
    notes: [],
  }

  const validate = Yup.object({
    title: Yup.string()
      .min(5, 'El título debe tener al menos 5 caracteres.')
      .max(100, 'El título debe tener como máximo 100 caracteres.')
      .required('El título es requerido.'),
    category: Yup.string().required('Debes elegir una categoría'),
    slug: Yup.string().required('El slug es requerido.'),
    repository: Yup.object()
      .shape({
        url: Yup.string()
          .matches(websiteRegex, 'El repositorio debe ser un enlace.')
          .notRequired(),
        demoUrl: Yup.string()
          .matches(websiteRegex, 'La demo debe ser un enlace.')
          .notRequired(),
      })
      .notRequired(),
    note: Yup.string()
      .typeError('Nota inválida.')
      .min(10, 'La nota debe contener al menos 10 caracteres.')
      .max(100, 'La nota debe tener como máximo 100 caracteres.')
      .notRequired(),
    notes: Yup.array().min(2, 'Se necesitan por lo menos 2 notas.').required(),
  })

  const handleSubmit = (values, actions) => {
    console.log(values)
    fetch('http://localhost:3000/api/works', {
      method: 'post',
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
    actions.setSubmitting(false)
  }

  return (
    <>
      <DashboardAddWorkTitle>Agregar trabajo</DashboardAddWorkTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validate}
      >
        {({ values, errors }) => (
          <Form>
            <Label>Título</Label>
            <Input
              name="title"
              type="text"
              placeholder="Ejemplo: Sprites para juego Unity 2D"
            />

            <Label>
              Categoría
              <Tooltip tooltip="Categoría del trabajo" />
            </Label>
            <Select name="category">
              <Option selected disabled>
                Selecciona una categoría
              </Option>
              <Option value="2D">2D</Option>
              <Option value="3D">3D</Option>
              <Option value="Animacion">Animación</Option>
            </Select>

            <Label>
              Slug
              <Tooltip tooltip="Nombre amigable para la URL del trabajo" />
            </Label>
            <Input
              name="slug"
              type="text"
              placeholder="Ejemplo: sprites-juego-unity-2d"
            />

            <Label>
              Repositorio (opcional)
              <Tooltip tooltip="Enlace al repositorio del trabajo (GitHub, GitLab, etc)" />
            </Label>
            <Input
              name="repository.url"
              type="text"
              placeholder={'Ejemplo: https://github.com/FOWMind/mini-guia-web'}
            />

            <Label>
              Demo (opcional)
              <Tooltip tooltip="Enlace a una demostración del proyecto" />
            </Label>
            <Input
              name="repository.demoUrl"
              type="text"
              placeholder="Ejemplo: https://fowmind.github.io/mini-guia-web/"
            />

            <Label>
              Notas
              <Tooltip tooltip="Las notas son una lista de cosas a destacar, o lo que hiciste en este trabajo" />
            </Label>
            <EditableList
              inputName="note"
              inputPlaceholder='Ejemplo: "Utilicé de referencia una imagen de Behance"'
              listName="notes"
              elements={values.notes}
              elementsError={errors.notes}
              currentElementValue={values.note}
              listEmptyText={'No has agregado ninguna nota.'}
            />

            <DashboardButton type="submit">Agregar</DashboardButton>
          </Form>
        )}
      </Formik>
    </>
  )
}

const DashboardAddWorkTitle = styled(DashboardTitle)`
  margin-bottom: 1rem;
`
