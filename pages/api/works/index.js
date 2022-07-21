import fetch from 'node-fetch'
const { API } = require('../../../utils/constants')

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '12mb',
    },
  },
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    const work = req.body
    // `${API.URL}/${API.ENDPOINTS.CREATE_SINGLE_WORK}`
    return fetch(`http://localhost:3001/api/works`, {
      method: 'POST',
      body: work,
      headers: {
        'x-api-key': API.KEY,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        return reject(response)
      })
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(405).json(error))
  } else if (req.method === 'GET') {
    // `${API.URL}/${API.ENDPOINTS.VIEW_WORKS}`
    return fetch(`http://localhost:3001/api/works`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        return reject(response)
      })
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(405).json(error))
  } else {
    // handle any other request method
    res.status(405).end()
  }
}
