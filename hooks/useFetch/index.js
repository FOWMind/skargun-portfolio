import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
      .finally(() => setLoading(false))
  }, [url])
  return { data, isLoading }
}
