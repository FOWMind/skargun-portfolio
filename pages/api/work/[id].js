import { works } from '../../../data'
import { restoreSlug, isNumber } from '../../../utils'

export default function handler(req, res) {
  const { id } = req.query
  const work = works.find((x) => {
    if (isNumber(id)) {
      return x?.id === Number(id)
    }
    const propertyToCompare = (x?.slug || x?.title)?.toLowerCase()
    return propertyToCompare === restoreSlug(id)
  })
  res.status(200).json(work || {})
}
