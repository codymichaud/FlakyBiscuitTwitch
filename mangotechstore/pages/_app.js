import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { createTheme } from "@nextui-org/react"
import { Analytics } from '@vercel/analytics/react';


config.autoAddCss = false

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      code: '#FF4ECD',
      link: '#0072F5F',
      selection: '#CEE4FE',
      blue200: '#CEE4FE',
      blue300: '#B7D5F8',
      blue400: '#96C1F2',
      blue500: '#5EA2EF',
      blue600: '#0072F5',
      blue700: '#005FCC',
      blue800: '#004799',
      purple600: '#7828C8',
      purple500: '#BC8EE9',
      purple400: '#D1B1F0',
      purple300: '#E0CBF5',
      green500: '#88F1B6',
      yellow700: '#B97509',
      red300: '#FCC5D8',
      red500: '#F881AB',
      cyan300: '#C3F4FD',
      cyan400: '#A5EEFD',
      cyan500: '#7EE7FC',
      cyan600: '#06B7DB',
      pink100: '#FFE5F8',
      pink200: '#FFD6F3',
      pink400: '#FFA3E5',
      pink600: '#FF4ECD',
      pink800: '#B80084',
      gray100: '#ECEEF0',
      gray300: '#DFE3E6',
      gray500: '#C1C8CD',
      gray600: '#889096',
      gray700: '#7E868C',
      background: '#FFFFFF',
      backgroundContrast: '#FFFFFF',
      foreground: '#FFFFFF',
      text: '#11181C',

    }, // optional
    shadows: {
      xs: '0 2px 8px 1px rgb(104 112 118 / 0.07), 0 1px 1px -1px rgb(104 112 118 / 0.04)',
      sm: '0 2px 8px 2px rgb(104 112 118 / 0.07), 0 2px 4px -1px rgb(104 112 118 / 0.04)',
      md: '0 12px 20px 6px rgb(104 112 118 / 0.08)',
      lg: '0 12px 34px 6px rgb(104 112 118 / 0.18)',
      xl: '0 25px 65px 0px rgb(104 112 118 / 0.35)'
    },
     // to use along with css dropShadow utility
    dropShadows: {
      xs: 'drop-shadow(0 2px 4px rgb(104 112 118 / 0.07)) drop-shadow(0 1px 1px rgb(104 112 118 / 0.04))',
      sm: 'drop-shadow(0 2px 8px rgb(104 112 118 / 0.07)) drop-shadow(0 2px 4px rgb(104 112 118 / 0.04))',
      md: 'drop-shadow(0 4px 12px rgb(104 112 118 / 0.08)) drop-shadow(0 20px 8px rgb(104 112 118 / 0.04))',
      lg: 'drop-shadow(0 12px 24px rgb(104 112 118 / 0.15)) drop-shadow(0 12px 14px rgb(104 112 118 / 0.1))',
      xl: 'drop-shadow(0 25px 34px rgb(104 112 118 / 0.35))'
    },
    fontSizes: {
      xs: '0.75rem', /* 12px */
      sm: '0.875rem', /* 14px */
      base: '1rem', /* 16px */
      md: '1rem', /* 16px */
      lg: '1.125rem', /* 18px */
      xl: '1.25rem', /* 20px */
      '2xl': '1.5rem', /* 24px */
      '3xl': '1.875rem', /* 30px */
      '4xl': '2.25rem', /* 36px */
      '5xl': '3rem', /* 48px */
      '6xl': '3.75rem', /* 60px */
      '7xl': '4.5rem', /* 72px */
      '8xl': '6rem', /* 96px */
      '9xl': '8rem', /* 128px */
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    borderWeights: {
      light: '1px',
      normal: '2px',
      bold: '3px',
      extrabold: '4px',
      black: '5px'
    },
    spacing: {
      0: '0rem',
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.375rem',
      xl: '2.25rem',
      '2xl': '3rem',
      '3xl': '5rem',
      '4xl': '10rem',
      '5xl': '14rem',
      '6xl': '18rem',
      '7xl': '24rem',
      '8xl': '32rem',
      '9xl': '40rem',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      screen: '100vw',
      full: '100%',
      px: '1px',
      1: '0.125rem',
      2: '0.25rem',
      3: '0.375rem',
      4: '0.5rem',
      5: '0.625rem',
      6: '0.75rem',
      7: '0.875rem',
      8: '1rem',
      9: '1.25rem',
      10: '1.5rem',
      11: '1.75rem',
      12: '2rem',
      13: '2.25rem',
      14: '2.5rem',
      15: '2.75rem',
      16: '3rem',
      17: '3.5rem',
      18: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem'
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      5: '500',
      10: '1000',
      max: '9999'
    },
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      black: '#000000',
      code: '#06B7DB',
      link: '#3694FF',
      selection: '#FF68D5',
      blue200: '#0F3158',
      blue300: '#0D3868',
      blue400: '#0A4281',
      blue500: '#0952A5',
      blue600: '#0072F5',
      blue700: '#3694FF',
      blue800: '#3694FF',
      purple600: '#7828C8',
      purple500: '#571D91',
      purple400: '#451773',
      purple300: '#3B1362',
      green500: '#0F9549',
      yellow700: '#F6AD37',
      red300: '#5C0523',
      red500: '#910838',
      cyan300: '#036072',
      cyan400: '#037086',
      cyan500: '#048EA9',
      cyan600: '#06B7DB',
      pink100: '#470033',
      pink200: '#5C0042',
      pink400: '#8A0063',
      pink600: '#FF4ECD',
      pink800: '#FF6BD5',
      gray100: '#26292B',
      gray300: '#313538',
      gray500: '#4C5155',
      gray600: '#697177',
      gray700: '#787F85',
      background: '$black',
      backgroundContrast: '#16181A',
      foreground: '#ffffff',
      text: '#ECEDEE',
      white: '#ffffff',
      secondary: '#9750DD',

    }, // optional
    shadows: {
      xs: '0 2px 8px 1px rgb(0 0 0 / 0.07), 0 1px 1px -1px rgb(0 0 0 / 0.04)',
      sm: '0 2px 8px 2px rgb(0 0 0 / 0.07), 0 2px 4px -1px rgb(0 0 0 / 0.04)',
      md: '0 12px 20px 6px rgb(0 0 0 / 0.08)',
      lg: '0 12px 34px 6px rgb(0 0 0 / 0.18)',
      xl: '0 25px 65px 0px rgb(0 0 0 / 0.35)'
    },
     // to use along with css dropShadow utility
    dropShadows: {
      xs: 'drop-shadow(0 2px 4px rgb(0 0 0 / 0.07)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.04))',
      sm: 'drop-shadow(0 2px 8px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 4px rgb(0 0 0 / 0.04))',
      md: 'drop-shadow(0 4px 12px rgb(0 0 0 / 0.08)) drop-shadow(0 20px 8px rgb(0 0 0 / 0.04))',
      lg: 'drop-shadow(0 12px 24px rgb(0 0 0 / 0.15)) drop-shadow(0 12px 14px rgb(0 0 0 / 0.1))',
      xl: 'drop-shadow(0 25px 34px rgb(0 0 0 / 0.35))'
    },
    fontSizes: {
      xs: '0.75rem', /* 12px */
      sm: '0.875rem', /* 14px */
      base: '1rem', /* 16px */
      md: '1rem', /* 16px */
      lg: '1.125rem', /* 18px */
      xl: '1.25rem', /* 20px */
      '2xl': '1.5rem', /* 24px */
      '3xl': '1.875rem', /* 30px */
      '4xl': '2.25rem', /* 36px */
      '5xl': '3rem', /* 48px */
      '6xl': '3.75rem', /* 60px */
      '7xl': '4.5rem', /* 72px */
      '8xl': '6rem', /* 96px */
      '9xl': '8rem', /* 128px */
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    borderWeights: {
      light: '1px',
      normal: '2px',
      bold: '3px',
      extrabold: '4px',
      black: '5px'
    },
    spacing: {
      0: '0rem',
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.375rem',
      xl: '2.25rem',
      '2xl': '3rem',
      '3xl': '5rem',
      '4xl': '10rem',
      '5xl': '14rem',
      '6xl': '18rem',
      '7xl': '24rem',
      '8xl': '32rem',
      '9xl': '40rem',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      screen: '100vw',
      full: '100%',
      px: '1px',
      1: '0.125rem',
      2: '0.25rem',
      3: '0.375rem',
      4: '0.5rem',
      5: '0.625rem',
      6: '0.75rem',
      7: '0.875rem',
      8: '1rem',
      9: '1.25rem',
      10: '1.5rem',
      11: '1.75rem',
      12: '2rem',
      13: '2.25rem',
      14: '2.5rem',
      15: '2.75rem',
      16: '3rem',
      17: '3.5rem',
      18: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem'
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      5: '500',
      10: '1000',
      max: '9999'
    },
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
      <Analytics />
    </NextUIProvider>
  </NextThemesProvider>
  )
}

export default MyApp
