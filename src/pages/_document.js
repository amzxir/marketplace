import { Html, Head, Main, NextScript } from 'next/document'
import Footer from 'components/footer/footer'
import Header from 'components/header/header'
import HeadMeta from 'components/head-meta/head-meta'


export default function Document() {
  return (
    <Html lang="fa">
      <Head >
        <HeadMeta/>
      </Head>
      <body className='home about-us'>
        <div className='page-wrapper'>
            <Main/>
        </div>
        <NextScript />
        {/* <script src='/js/main.js' async/> */}
        {/* <script src="/assets/vendor/jquery/jquery.js" /> */}
      </body>
    </Html>
  )
}
