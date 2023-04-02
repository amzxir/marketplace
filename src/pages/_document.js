import { Html, Head, Main, NextScript } from 'next/document'
import Footer from 'components/footer/footer'
import Header from 'components/header/header'
import HeadMeta from 'components/head-meta/head-meta'
import Menu from 'components/mobile-menu/menu'


export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <HeadMeta/>
      </Head>
      <body className='home'>
        <div className='page-wrapper'>
          <Header/>
          <Menu/>
            <Main/>
          <Footer/>
        </div>
        <NextScript />
        <script src='/js/main.js' async/>
        <script src="/assets/vendor/jquery/jquery.js" />
      </body>
    </Html>
  )
}
