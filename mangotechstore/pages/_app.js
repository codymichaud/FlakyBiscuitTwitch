import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { createTheme } from "@nextui-org/react"


config.autoAddCss = false

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {}, // optional
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {}, // optional
  }
})

function MyApp({ Component, pageProps }) {
  
  return (
    <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  </NextThemesProvider>
  )
}

export default MyApp
