import { useState, useEffect } from 'react'
const API_KEY = process.env.API_KEY

function useCreateEdit(RequestUrl, RequestMethod, RequestBody) {
  const [data, setData] = useState([])
  const [loadState, setLoadState] = useState('idle')

  useEffect(() => {
    setLoadState('inProgress')
    fetch(RequestUrl, {
      method: RequestMethod,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...RequestBody,
        apiKey: API_KEY,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(data)
      })
      .finally(() => setLoadState('finished'))
  }, [RequestUrl, RequestMethod, RequestBody])
  return { data, loadState }
}

export { useCreateEdit }
