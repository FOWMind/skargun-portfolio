import { createContext } from 'react'
import { useGet } from '../hooks/httpHooks'

export const DataContext = createContext({
  works: [],
})

export function DataProvider({ children }) {
  const { data: works, loadState: worksLoadState } = useGet(
    'http://localhost:3000/api/works'
  )
  return (
    <DataContext.Provider value={{ data: { works, worksLoadState } }}>
      {children}
    </DataContext.Provider>
  )
}
