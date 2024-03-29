import { Html, Head, Main, NextScript } from 'next/document'
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
      </body>
    </Html>
  )
}
