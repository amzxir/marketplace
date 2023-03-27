import { Html, Head, Main, NextScript } from 'next/document'
import Footer from 'components/footer/footer'
import Header from 'components/header/header'
import HeadMeta from 'components/head-meta/head-meta'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <HeadMeta/>
      </Head>
      <body className='home'>
        <div className='page-wrapper'>
          <Header/>
            <Main/>
          <Footer/>
        </div>
        <NextScript />
        <script async src='/js/main.js'></script>
        <script  type="text/javascript" src="/assets/vendor/jquery/jquery.js"></script>
        <script  type="text/javascript" src="/assets/vendor/parallax/parallax.min.js"></script>
        <script  type="text/javascript" src="/assets/vendor/jquery.plugin/jquery.plugin.min.js"></script>
        <script  type="text/javascript" src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
        <script  type="text/javascript" src="/assets/vendor/isotope/isotope.pkgd.min.js"></script>
        <script  type="text/javascript" src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script  type="text/javascript" src="/assets/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
        <script  type="text/javascript" src="/assets/vendor/skrollr/skrollr.min.js"></script>
        <script  type="text/javascript" src="/assets/vendor/jquery.countdown/jquery.countdown.min.js"></script>
        <script  type="text/javascript" src="/assets/vendor/isotope/isotope.pkgd.min.js"></script>
        <script  type="text/javascript" src="/assets/vendor/zoom/jquery.zoom.js"></script>
        <script  type="text/javascript" src="/assets/vendor/floating-parallax/parallax.min.js"></script>
      </body>
    </Html>
  )
}
