import styled from 'styled-components'
import { useState, useRef } from 'react'
import { Form } from 'formik'

// Components
import FormField from '../Layout/FormField'
import FormSelect from '../Layout/FormSelect'
import Option from '../Layout/Option'
import FormFileField from '../Layout/FormFileField'
import FormEditableList from '../Layout/FormEditableList'
import { DashboardButton as StyledButton } from '../Layout/DashboardButton'

export default function DashboardAddWorkForm({
  values,
  errors,
  setFieldValue,
  setFieldTouched,
  featuredImageState,
}) {
  const featuredImageInput = useRef(null)

  return (
    <Form>
      {/* Title field */}
      <FormField
        label="Título"
        name="title"
        type="text"
        placeholder="Ejemplo: Sprites para juego Unity 2D"
      />

      {/* Category Select */}
      <FormSelect
        label="Categoría"
        tooltip="Categoría del trabajo"
        name="category"
      >
        <Option value="" defaultValue disabled hidden>
          Selecciona una categoría
        </Option>
        <Option value="2D">2D</Option>
        <Option value="3D">3D</Option>
        <Option value="Animacion">Animación</Option>
      </FormSelect>

      {/* Slug field */}
      <FormField
        label="Slug"
        tooltip="Nombre amigable para la URL del trabajo"
        name="slug"
        type="text"
        placeholder="Ejemplo: sprites-juego-unity-2d"
      />

      {/* Repository field */}
      <FormField
        label="Repositorio (opcional)"
        tooltip="Enlace al repositorio del trabajo (GitHub, GitLab, etc)"
        name="repository.url"
        type="text"
        placeholder="Ejemplo: https://github.com/FOWMind/mini-guia-web"
      />

      {/* Demo field */}
      <FormField
        label="Demo (opcional)"
        tooltip="Enlace a una demostración del proyecto"
        name="repository.demoUrl"
        type="text"
        placeholder="Ejemplo: https://fowmind.github.io/mini-guia-web/"
      />

      {/* Featured Image File Selection */}
      <FormFileField
        label="Imagen destacada"
        tooltip="Una imagen que se usará de portada para el trabajo"
        fileButtonText="Seleccionar imagen"
        name="featuredImage"
        id="featuredImage"
        accept="image/png, image/jpeg"
        onChange={(event) => {
          const imageFile = event.currentTarget.files[0]
          /* SEE: https://github.com/jaredpalmer/formik/discussions/3128#discussioncomment-958661 */
          setFieldValue('featuredImage', imageFile)
        }}
        onClick={(event) => {
          event.target.value = null
          setFieldTouched('featuredImage', true)
        }}
      />

      {/* Featured Image Preview */}
      {featuredImageState && featuredImageState.src && (
        <DashboardImage src={featuredImageState.src} />
      )}

      {/* Notes Editable List */}
      <FormEditableList
        label="Notas"
        tooltip="Las notas son una lista de cosas a destacar, o lo que hiciste en este trabajo"
        inputName="note"
        inputPlaceholder='Ejemplo: "Utilicé de referencia una imagen de Behance"'
        listName="notes"
        elements={values.notes}
        elementsError={errors.notes}
        currentElementValue={values.note}
        currentElementError={errors.note}
        listEmptyText={'No has agregado ninguna nota.'}
      />

      <DashboardButton type="submit">Agregar</DashboardButton>
    </Form>
  )
}

const DashboardButton = styled(StyledButton)`
  margin-top: 0.5rem;
`

const DashboardImage = styled.img`
  width: 100%;
  max-width: 400px;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`
