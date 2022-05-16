// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { works } from './data'

export default function handler(req, res) {
  const { id } = req.query
  const work = works.find((x) => x.id === Number(id))
  res.status(200).json(work || {})
}
