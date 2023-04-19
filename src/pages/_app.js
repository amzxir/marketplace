import '@/styles/globals.css'
import '@/styles/about.css'
import '@/styles/contact.css'
import '@/styles/card.css'
import '@/styles/checkout.css'
import '@/styles/order.css'
import Layout from '../../components/layout'
import {AppWrapper} from '../context/state'

export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  )
}
