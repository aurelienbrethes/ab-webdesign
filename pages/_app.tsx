import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Body from '../src/components/Layout/Body'
import { AppContextProvider } from '../src/context/Context';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Body>
        <Component {...pageProps} />
      </Body>
    </AppContextProvider>
  )
}

export default MyApp
