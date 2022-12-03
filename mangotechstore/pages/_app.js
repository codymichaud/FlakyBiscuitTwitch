import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';


config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  
  return (
  <NextUIProvider>
    <Component {...pageProps} />
  </NextUIProvider>
  )
}

export default MyApp
