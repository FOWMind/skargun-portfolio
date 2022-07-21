import * as Yup from 'yup'

// RegExp
import { websiteRegex } from './regex'

const DashboardAddWorkInitialValues = {
  title: '',
  category: '',
  slug: '',
  repository: {
    url: '',
    demoUrl: '',
  },
  featuredImage: {},
  image: '',
  images: [],
  note: '',
  notes: [],
}

const DashboardAddWorkValidationSchema = Yup.object({
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
    .trim()
    .typeError('Nota inválida.')
    .min(10, 'La nota debe contener al menos 10 caracteres.')
    .max(100, 'La nota debe tener como máximo 100 caracteres.')
    .notRequired(),
  notes: Yup.array().min(2, 'Se necesitan por lo menos 2 notas.').required(),
})

export { DashboardAddWorkInitialValues, DashboardAddWorkValidationSchema }
