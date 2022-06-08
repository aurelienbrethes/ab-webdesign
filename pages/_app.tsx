import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Body from '../src/components/Layout/Body'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Body>
      <Component {...pageProps} />
    </Body>
  )
}

export default MyApp
