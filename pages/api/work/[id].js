import { works } from '../../../data'
import { restoreSlug, isNumber } from '../../../utils'

export default function handler(req, res) {
  console.log('ingresó a /work/:id')
  const { id } = req.query
  console.log(id)
  // const work = works.find((x) => {
  //   if (isNumber(id)) {
  //     return x?.id === Number(id)
  //   }
  //   const propertyToCompare = (x?.slug || x?.title)?.toLowerCase()
  //   return propertyToCompare === restoreSlug(id)
  // })
  // res.status(200).json(work || {})
}
