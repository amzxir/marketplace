import '@/styles/globals.css'
import '@/styles/about.css'
 import {AppWrapper} from '../context/state'

export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}
