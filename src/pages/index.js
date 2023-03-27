import Feature from 'components/feature/feature'
import Slider from 'components/slider/slider'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/images/icons/favicon.png" />
      </Head>
      <main className="main">
        <Slider/>
        <Feature/>
      </main>
    </>
  )
}