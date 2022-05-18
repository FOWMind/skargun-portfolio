import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState([])
  const [loadState, setLoadState] = useState('idle')

  useEffect(() => {
    setLoadState('inProgress')
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
      .finally(() => setLoadState('finished'))
  }, [url])
  return { data, loadState }
}
