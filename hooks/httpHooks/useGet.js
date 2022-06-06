import { useState, useEffect } from 'react'

function useGet(url) {
  const [data, setData] = useState([])
  const [loadState, setLoadState] = useState('idle')

  useEffect(() => {
    setLoadState('inProgress')
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(data)
      })
      .finally(() => setLoadState('finished'))
  }, [url])
  return { data, loadState }
}

export { useGet }
