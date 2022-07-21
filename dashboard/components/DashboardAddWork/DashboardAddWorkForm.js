import styled from 'styled-components'
import { useEffect, useRef } from 'react'
import { FieldArray, Form } from 'formik'

// Components
import FormField from '../Layout/FormField'
import FormSelect from '../Layout/FormSelect'
import Option from '../Layout/Option'
import FormFileField from '../Layout/FormFileField'
import FormEditableList from '../Layout/FormEditableList'
import { DashboardButton as StyledButton } from '../Layout/DashboardButton'
import { getBase64FromFile, getBase64FromFiles } from '../../../utils'

export default function DashboardAddWorkForm({
  values,
  errors,
  setFieldValue,
  setFieldTouched,
  validateFeaturedImage,
  validateImages,
  featuredImageState,
  imagesState,
  setImagesState,
}) {
  // const imagesPreviewRef = useRef()

  // useEffect(() => {
  //   if (imagesState.length > 0) {
  //     imagesPreviewRef.current.innerHTML = ''
  //     imagesState.map((imageFile) => {
  //       getBase64FromFile(imageFile, (base64) => {
  //         imagesPreviewRef.current.innerHTML += `<img src="${base64}" alt="" width="100" />`
  //       })
  //     })
  //   }
  // }, [imagesState])

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
        accept="image/png, image/jpeg"
        validate={validateFeaturedImage}
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

      {/* Secondary Images Files Selection */}
      <FormFileField
        label="Imágenes secundarias"
        tooltip="Imágenes que se podrán ver al ingresar a un trabajo."
        fileButtonText="Seleccionar imágenes"
        name="images"
        id="images"
        accept="image/png, image/jpeg"
        multiple
        validate={validateImages}
        onChange={(event) => {
          const selectedImages = [...event.currentTarget.files]
          console.log(selectedImages)
          let validImages = selectedImages.filter((selectedImage) => {
            if (selectedImage.type?.substr(0, 5) !== 'image') return
            else if (selectedImage.size > 2000000) return
            return selectedImage
          })
          validImages = validImages.slice(0, 5)

          const base64Images = []
          getBase64FromFiles(validImages, (base64) => {
            base64Images.push(base64)
            console.log(base64Images)
            setFieldValue('images', base64Images)
            setImagesState(base64Images)
          })

          // if (values.images.length < 5) {
          //   selectedImages.forEach((selectedImage) => {
          //     if (values.images.length < 5) {
          //       const fileObject = {
          //         lastModified: selectedImage.lastModified,
          //         lastModifiedDate: selectedImage.lastModifiedDate,
          //         name: selectedImage.name,
          //         size: selectedImage.size,
          //         type: selectedImage.type,
          //       }
          //       console.log('fileObject: ', fileObject)
          //       arrayHelpers.push(fileObject)
          //     }
          //   })
          // }
        }}
        onClick={(event) => {
          event.target.value = null
          setFieldTouched('images', true)
        }}
      />

      {imagesState.length > 0 && (
        <ImagesPreview>
          {imagesState.map((image, index) => (
            <ImagesPreviewLink
              href={image}
              target="_blank"
              key={index}
              rel="noreferrer"
            >
              <ImagesPreviewItem src={image} alt="" />
            </ImagesPreviewLink>
          ))}
        </ImagesPreview>
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

const ImagesPreview = styled.div`
  margin: 0.5rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background-color: #eee;
  border-radius: 10px;
`

const ImagesPreviewLink = styled.a`
  width: 33%;

  @media screen and (min-width: 800px) {
    width: 20%;
  }
`

const ImagesPreviewItem = styled.img`
  max-width: 100%;
  padding: 0.25rem;
  object-fit: contain;
  margin: 0 auto;
  display: block;
`
