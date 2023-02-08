// pages/_app.js
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/app';

// define your consts
const colors ={
  brand: {
    grey: '#212121',
    red: '#d12f38',
    black: '#000'
  }
}

// include in the array
const theme = extendTheme( { colors } )

// main function
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp