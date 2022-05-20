import { isEqual } from 'lodash'
import { createContext, useState, useEffect } from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'

export const themes = {
  dark: {
    mainBg: '#0d2829',
    mainClr: '#fff',
    featuredClr: '#59eb9d',
    filledPrimary: {
      bg: '#59EB9D',
      clr: '#181818',
      overlayBg: 'rgba(0,0,0,.75)',
      overlayClr: '#59eb9d',
    },
    filledSecondary: {
      bg: '#1b5052',
      clr: '#fff',
      featuredClr: '#59EB9D',
      overlayBg: 'rgba(13, 40, 41, 0.25)',
    },
    filledTertiary: {
      bg: '#e8e8e8',
      clr: '#181818',
    },
  },
  light: {
    mainBg: '#e8e8e8',
    mainClr: '#282828',
    featuredClr: '#4fd18c',
    filledPrimary: {
      bg: '#4fd18c',
      clr: '#282828',
      overlayBg: 'rgba(50,50,50,.75)',
      overlayClr: '#4fd18c',
    },
    filledSecondary: {
      bg: '#1b5052',
      clr: '#fff',
      featuredClr: '#4fd18c',
      overlayBg: 'rgba(13, 40, 41, 0.25)',
    },
    filledTertiary: {
      bg: '#ccc',
      clr: '#181818',
    },
  },
}

export const ThemeContext = createContext({
  themes: themes.dark,
  toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.dark)
  const themeKey = 'skargun-portfolio-theme-cfg'
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localTheme = JSON.parse(localStorage.getItem(themeKey))
      if (localTheme) {
        setTheme(localTheme)
      }
    }
  }, [])

  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      const newTheme = isEqual(theme, themes.dark) ? themes.light : themes.dark
      setTheme(newTheme)
      localStorage.setItem(themeKey, JSON.stringify(newTheme))
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  )
}
